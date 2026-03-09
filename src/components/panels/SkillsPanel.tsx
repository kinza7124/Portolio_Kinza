import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { Code2, Layout, Server, Database, Brain, Wrench, Users, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages": <Code2 className="w-4 h-4" />,
  "Frontend": <Layout className="w-4 h-4" />,
  "Backend": <Server className="w-4 h-4" />,
  "Databases": <Database className="w-4 h-4" />,
  "AI/ML": <Brain className="w-4 h-4" />,
  "Tools": <Wrench className="w-4 h-4" />,
  "Soft Skills": <Users className="w-4 h-4" />,
  "Relevant Coursework": <GraduationCap className="w-4 h-4" />,
};

export const SkillsPanel = () => {
  const { skills } = portfolioData;
  
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♗</span>
          <h2 className="text-3xl font-serif gold-text">Skills</h2>
        </div>
        <div className="divider-gold mt-3" />
      </motion.div>
      
      <div className="space-y-5 max-h-[65vh] overflow-y-auto pr-1">
        {Object.entries(skills).map(([category, skillList], catIndex) => (
          <motion.div
            key={category}
            className="space-y-2.5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + catIndex * 0.07 }}
          >
            <h3 className="group text-xs font-semibold text-primary/80 uppercase tracking-[0.15em] flex items-center gap-2 cursor-default">
              <span className="transition-transform duration-200 group-hover:scale-125 group-hover:text-primary">
                {categoryIcons[category]}
              </span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + catIndex * 0.05 + index * 0.02 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-secondary/60 hover:bg-primary/15 hover:text-primary hover:border-primary/20 border border-transparent transition-all duration-300 cursor-default text-xs"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};