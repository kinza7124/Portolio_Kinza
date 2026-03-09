import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProjectsPanel = () => {
  const { projects } = portfolioData;
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <span className="text-4xl">♕</span>
        <h2 className="text-3xl font-serif gold-text">Projects</h2>
      </div>
      
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
            
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tech.map((tech, techIndex) => (
                <Badge 
                  key={techIndex} 
                  variant="outline" 
                  className="text-xs bg-card/50 text-muted-foreground border-border/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
