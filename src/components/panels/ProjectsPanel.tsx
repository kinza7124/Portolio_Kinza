import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const ProjectsPanel = () => {
  const { projects } = portfolioData;
  
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♕</span>
          <h2 className="text-3xl font-serif gold-text">Projects</h2>
        </div>
        <div className="divider-gold mt-3" />
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[65vh] overflow-y-auto pr-1">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-border/30 overflow-hidden bg-secondary/30 hover:border-primary/40 transition-all duration-500 card-hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.06 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            <div className="relative h-28 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(180deg, transparent 30%, hsl(220 18% 6% / 0.95) 100%)"
              }} />
              <ExternalLink className="absolute top-2 right-2 w-3.5 h-3.5 text-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
            </div>
            
            <div className="p-3">
              <h3 className="font-serif font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
              
              <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="text-[9px] px-1.5 py-0 bg-primary/5 text-primary/70 border-primary/15 font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};