import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const contactLinks = [
  { icon: Github, label: "GitHub", handle: "@kinza7124", key: "github" as const },
  { icon: Linkedin, label: "LinkedIn", handle: "Kinza Afzal", key: "linkedin" as const },
  { icon: Mail, label: "Email", handle: "", key: "email" as const },
];

export const ContactPanel = () => {
  const { contact } = portfolioData;
  
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">♙</span>
          <h2 className="text-3xl font-serif gold-text">Contact</h2>
        </div>
        <div className="divider-gold mt-3" />
      </motion.div>
      
      <motion.p 
        className="text-sm text-muted-foreground border-l-2 border-primary/20 pl-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      >
        Let's connect! Feel free to reach out through any of the channels below.
      </motion.p>
      
      <div className="space-y-2.5">
        {contactLinks.map((item, i) => {
          const href = item.key === "email" ? `mailto:${contact.email}` : contact[item.key];
          const handle = item.key === "email" ? contact.email : item.handle;
          
          return (
            <motion.a
              key={item.key}
              href={href}
              target={item.key !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/15 hover:border-primary/25 transition-all duration-300 group card-hover"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
              whileHover={{ x: 4 }}
            >
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/15 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-serif font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                <p className="text-xs text-muted-foreground">{handle}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary/60 transition-colors" />
            </motion.a>
          );
        })}
        
        {/* Phone */}
        <motion.div
          className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 border border-border/15"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/15">
            <Phone className="w-5 h-5 text-primary/70" />
          </div>
          <div className="flex-1">
            <p className="font-serif font-semibold text-sm text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground">{contact.phone}</p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="pt-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
      >
        <Button 
          asChild
          className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-serif font-semibold tracking-wide rounded-xl h-11"
        >
          <a href={`mailto:${contact.email}`}>
            <Mail className="w-4 h-4 mr-2" />
            Send me an email
          </a>
        </Button>
      </motion.div>
    </div>
  );
};