import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactPanel = () => {
  const { contact, about } = portfolioData;
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2 animate-stagger-1">
        <span className="text-4xl">♙</span>
        <h2 className="text-3xl font-serif gold-text">Contact</h2>
      </div>
      
      <p className="text-muted-foreground animate-stagger-2">
        Let's connect! Feel free to reach out through any of the channels below.
      </p>
      
      <div className="space-y-3 animate-stagger-3">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
        >
          <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          <div className="flex-1">
            <p className="font-medium text-foreground group-hover:text-primary transition-colors">GitHub</p>
            <p className="text-sm text-muted-foreground">@kinza7124</p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
        >
          <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          <div className="flex-1">
            <p className="font-medium text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
            <p className="text-sm text-muted-foreground">Kinza Afzal</p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
        >
          <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          <div className="flex-1">
            <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
            <p className="text-sm text-muted-foreground">{contact.email}</p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </div>
      
      <div className="pt-4">
        <Button 
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <a href={`mailto:${contact.email}`}>
            <Mail className="w-4 h-4 mr-2" />
            Send me an email
          </a>
        </Button>
      </div>
    </div>
  );
};
