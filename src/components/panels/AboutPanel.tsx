import { portfolioData } from "@/data/portfolioData";
import { MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const AboutPanel = () => {
  const { about } = portfolioData;
  
  return (
    <div className="space-y-6">
      <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♔</span>
          <h2 className="text-3xl font-serif gold-text">About Me</h2>
        </div>
        <div className="divider-gold" />
      </motion.div>
      
      <motion.div className="space-y-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h3 className="text-2xl font-serif text-foreground tracking-wide">{about.name}</h3>
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <p className="text-primary font-medium text-sm">{about.title}</p>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-muted-foreground leading-relaxed text-sm border-l-2 border-primary/20 pl-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
      >
        {about.bio}
      </motion.p>
      
      <motion.div 
        className="space-y-2.5 p-4 rounded-xl bg-secondary/30 border border-border/20"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
      >
        {[
          { icon: MapPin, text: about.location },
          { icon: Phone, text: about.phone },
          { icon: Mail, text: about.email },
        ].map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground group">
            <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-3.5 h-3.5 text-primary" />
            </div>
            <span>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};