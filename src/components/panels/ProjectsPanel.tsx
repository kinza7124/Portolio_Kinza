import { portfolioData } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProjectsPanel = () => {
  const { projects } = portfolioData;
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2 animate-stagger-1">
        <span className="text-4xl">♕</span>
        <h2 className="text-3xl font-serif gold-text">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin animate-stagger-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-border/50 overflow-hidden bg-secondary/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <ExternalLink className="absolute top-2 right-2 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
              
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="text-[10px] px-1.5 py-0 bg-card/50 text-muted-foreground border-border/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};