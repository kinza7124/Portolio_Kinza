import { portfolioData } from "@/data/portfolioData";
import { Trophy, Award, Medal } from "lucide-react";

export const AchievementsPanel = () => {
  const { achievements } = portfolioData;
  
  const getIcon = (index: number) => {
    const icons = [Trophy, Award, Medal];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5 text-primary" />;
  };
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2 animate-stagger-1">
        <span className="text-4xl">♖</span>
        <h2 className="text-3xl font-serif gold-text">Achievements</h2>
      </div>
      
      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 animate-stagger-2">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="p-4 bg-secondary/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getIcon(index)}
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="font-medium text-foreground">{achievement.title}</h3>
                <p className="text-sm text-primary">{achievement.organization}</p>
                {achievement.period && (
                  <p className="text-xs text-muted-foreground">{achievement.period}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
