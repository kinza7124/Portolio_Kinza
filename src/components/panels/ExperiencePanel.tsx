import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const ExperiencePanel = () => {
  const { experience } = portfolioData;
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2 animate-stagger-1">
        <span className="text-4xl">♘</span>
        <h2 className="text-3xl font-serif gold-text">Experience</h2>
      </div>
      
      <div className="relative space-y-0 max-h-[60vh] overflow-y-auto pr-2 animate-stagger-2">
        {/* Timeline line */}
        <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
        
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-6 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>
                {exp.link && (
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="outline" 
                    className="text-xs bg-card/50 text-muted-foreground border-border/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
