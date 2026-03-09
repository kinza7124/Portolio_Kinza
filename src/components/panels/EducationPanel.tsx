import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export const EducationPanel = () => {
  const { education } = portfolioData;
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2">
        <span className="text-4xl">♗</span>
        <h2 className="text-3xl font-serif gold-text">Education</h2>
      </div>
      
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="p-4 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{edu.degree}</h3>
                <p className="text-sm text-primary">{edu.institution}</p>
                {edu.period && (
                  <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                )}
                <div className="mt-2 inline-block px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
                  {edu.gpa}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
