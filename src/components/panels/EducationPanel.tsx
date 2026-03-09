import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const EducationPanel = () => {
  const { education } = portfolioData;
  
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♗</span>
          <h2 className="text-3xl font-serif gold-text">Education</h2>
        </div>
        <div className="divider-gold mt-3" />
      </motion.div>
      
      <div className="space-y-3">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            className="p-4 rounded-xl bg-secondary/20 border border-border/15 hover:border-primary/20 transition-all duration-300 card-hover"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/15 shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1.5">
                <h3 className="font-serif font-semibold text-foreground text-sm">{edu.degree}</h3>
                <p className="text-xs text-primary/80 font-medium">{edu.institution}</p>
                {edu.period && (
                  <p className="text-[11px] text-muted-foreground/70">{edu.period}</p>
                )}
                <div className="inline-block px-2.5 py-1 bg-primary/10 rounded-md text-xs font-semibold text-primary border border-primary/15">
                  {edu.gpa}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};