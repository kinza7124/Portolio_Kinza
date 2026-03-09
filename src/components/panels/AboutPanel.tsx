import { portfolioData } from "@/data/portfolioData";
import { MapPin, Phone, Mail } from "lucide-react";

export const AboutPanel = () => {
  const { about } = portfolioData;
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-4xl">♔</span>
          <h2 className="text-3xl font-serif gold-text">About Me</h2>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-serif text-foreground">{about.name}</h3>
          <p className="text-primary font-medium">{about.title}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed">
        {about.bio}
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span>{about.location}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 text-primary" />
          <span>{about.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Mail className="w-4 h-4 text-primary" />
          <span>{about.email}</span>
        </div>
      </div>
    </div>
  );
};