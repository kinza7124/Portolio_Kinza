import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Database, Brain, Wrench, Users, GraduationCap } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages": <Code2 className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "Frontend": <Layout className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "Backend": <Server className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "Databases": <Database className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "AI/ML": <Brain className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "Tools": <Wrench className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "Soft Skills": <Users className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
  "Relevant Coursework": <GraduationCap className="w-4 h-4 transition-transform duration-200 group-hover:scale-125 group-hover:text-primary" />,
};

export const SkillsPanel = () => {
  const { skills } = portfolioData;
  
  return (
    <div className="space-y-6 animate-panel-content">
      <div className="flex items-center gap-2 animate-stagger-1">
        <span className="text-4xl">♗</span>
        <h2 className="text-3xl font-serif gold-text">Skills</h2>
      </div>
      
      <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 animate-stagger-2">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="space-y-2">
            <h3 className="group text-sm font-medium text-primary uppercase tracking-wider flex items-center gap-2 cursor-default">
              {categoryIcons[category]}
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
