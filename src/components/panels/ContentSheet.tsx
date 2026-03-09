import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { PieceSection } from "../chess/ChessBoard";
import { AboutPanel } from "./AboutPanel";
import { ProjectsPanel } from "./ProjectsPanel";
import { SkillsPanel } from "./SkillsPanel";
import { ExperiencePanel } from "./ExperiencePanel";
import { EducationPanel } from "./EducationPanel";
import { LeadershipPanel } from "./LeadershipPanel";
import { AchievementsPanel } from "./AchievementsPanel";
import { ContactPanel } from "./ContactPanel";
import { X } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface ContentSheetProps {
  section: PieceSection;
  onClose: () => void;
}

const sectionComponents: Record<string, React.ComponentType> = {
  about: AboutPanel,
  projects: ProjectsPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  education: EducationPanel,
  leadership: LeadershipPanel,
  achievements: AchievementsPanel,
  contact: ContactPanel,
};

export const ContentSheet = ({ section, onClose }: ContentSheetProps) => {
  const prevSection = useRef<PieceSection>(null);
  
  useEffect(() => {
    if (section && !prevSection.current) {
      sounds.panelOpen();
    } else if (!section && prevSection.current) {
      sounds.panelClose();
    }
    prevSection.current = section;
  }, [section]);
  
  if (!section) return null;
  
  const PanelComponent = sectionComponents[section];
  
  return (
    <Sheet open={!!section} onOpenChange={(open) => !open && onClose()}>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[480px] md:w-[540px] border-primary/10 overflow-y-auto"
        style={{
          background: "linear-gradient(180deg, hsl(220 18% 9%) 0%, hsl(220 18% 7%) 100%)",
          backdropFilter: "blur(24px)",
          boxShadow: "-20px 0 60px -15px rgba(0,0,0,0.5)",
        }}
      >
        <SheetHeader className="sr-only">
          <span>Portfolio Section</span>
        </SheetHeader>
        
        {/* Decorative top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)"
        }} />
        
        <motion.button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-50"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-4 h-4" />
        </motion.button>
        
        <div className="pt-8 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {PanelComponent && <PanelComponent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </SheetContent>
    </Sheet>
  );
};