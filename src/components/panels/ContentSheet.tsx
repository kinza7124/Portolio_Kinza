import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { PieceSection } from "../chess/ChessBoard";
import { AboutPanel } from "./AboutPanel";
import { ProjectsPanel } from "./ProjectsPanel";
import { SkillsPanel } from "./SkillsPanel";
import { ExperiencePanel } from "./ExperiencePanel";
import { AchievementsPanel } from "./AchievementsPanel";
import { ContactPanel } from "./ContactPanel";
import { X } from "lucide-react";

interface ContentSheetProps {
  section: PieceSection;
  onClose: () => void;
}

const sectionComponents: Record<string, React.ComponentType> = {
  about: AboutPanel,
  projects: ProjectsPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  achievements: AchievementsPanel,
  contact: ContactPanel,
};

export const ContentSheet = ({ section, onClose }: ContentSheetProps) => {
  if (!section) return null;
  
  const PanelComponent = sectionComponents[section];
  
  return (
    <Sheet open={!!section} onOpenChange={(open) => !open && onClose()}>
      <SheetContent 
        side="right" 
        className="w-full sm:w-[450px] md:w-[500px] bg-card/95 backdrop-blur-xl border-border/50 overflow-y-auto"
      >
        <SheetHeader className="sr-only">
          <span>Portfolio Section</span>
        </SheetHeader>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors z-50"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="pt-8 pb-6">
          {PanelComponent && <PanelComponent />}
        </div>
      </SheetContent>
    </Sheet>
  );
};
