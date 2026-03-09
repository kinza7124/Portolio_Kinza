import { portfolioData } from "@/data/portfolioData";
import { Trophy, Award, Medal, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const AchievementsPanel = () => {
  const { achievements } = portfolioData;
  
  const getIcon = (index: number) => {
    const icons = [Trophy, Award, Medal];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5 text-primary" />;
  };
  
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♖</span>
          <h2 className="text-3xl font-serif gold-text">Achievements</h2>
        </div>
        <div className="divider-gold mt-3" />
      </motion.div>
      
      <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            className="p-4 rounded-xl bg-secondary/20 border border-border/15 hover:border-primary/20 transition-all duration-300 card-hover"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.08 }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/15 shrink-0">
                {getIcon(index)}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif font-semibold text-foreground text-sm">{achievement.title}</h3>
                  {(achievement as any).link && (
                    <a href={(achievement as any).link} target="_blank" rel="noopener noreferrer"
                      className="p-1 rounded-md bg-primary/10 hover:bg-primary/20 text-primary/60 hover:text-primary transition-colors shrink-0">
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-primary/80 font-medium">{achievement.organization}</p>
                {achievement.period && (
                  <p className="text-[11px] text-muted-foreground/70">{achievement.period}</p>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};