import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const ExperiencePanel = () => {
  const { experience } = portfolioData;
  
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♘</span>
          <h2 className="text-3xl font-serif gold-text">Experience</h2>
        </div>
        <div className="divider-gold mt-3" />
      </motion.div>
      
      <div className="relative space-y-0 max-h-[65vh] overflow-y-auto pr-1">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
        
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8 pb-6 last:pb-0"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + index * 0.08 }}
          >
            <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
            
            <div className="space-y-2 p-3 rounded-lg bg-secondary/20 border border-border/15 hover:border-primary/20 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-sm">{exp.role}</h3>
                  <p className="text-xs text-primary/80 font-medium">{exp.company}</p>
                  <p className="text-[11px] text-muted-foreground/70">{exp.period}</p>
                </div>
                {exp.link && (
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary/60 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              
              <p className="text-xs text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="outline" 
                    className="text-[10px] bg-primary/5 text-primary/60 border-primary/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};