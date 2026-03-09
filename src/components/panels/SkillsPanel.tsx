import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

export const SkillsPanel = () => {
  const { skills } = portfolioData;
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2">
        <span className="text-4xl">♗</span>
        <h2 className="text-3xl font-serif gold-text">Skills</h2>
      </div>
      
      <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="space-y-2">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
