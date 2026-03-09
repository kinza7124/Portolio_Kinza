import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChessBoard, PieceSection } from "@/components/chess/ChessBoard";
import { ContentSheet } from "@/components/panels/ContentSheet";
import { portfolioData } from "@/data/portfolioData";

const floatingPieces = [
  { symbol: "♔", x: "5%", y: "12%", size: "text-3xl", delay: 0, duration: 7 },
  { symbol: "♕", x: "88%", y: "8%", size: "text-2xl", delay: 1.2, duration: 8 },
  { symbol: "♗", x: "15%", y: "75%", size: "text-2xl", delay: 2.4, duration: 6.5 },
  { symbol: "♘", x: "82%", y: "65%", size: "text-xl", delay: 0.8, duration: 7.5 },
  { symbol: "♖", x: "92%", y: "85%", size: "text-2xl", delay: 3, duration: 6 },
  { symbol: "♙", x: "8%", y: "45%", size: "text-xl", delay: 1.8, duration: 8.5 },
  { symbol: "♚", x: "75%", y: "35%", size: "text-lg", delay: 2, duration: 9 },
  { symbol: "♛", x: "30%", y: "88%", size: "text-lg", delay: 3.5, duration: 7 },
];

const legendItems = [
  { icon: "♔", label: "About" },
  { icon: "♕", label: "Projects" },
  { icon: "♗", label: "Skills / Education" },
  { icon: "♘", label: "Experience / Leadership" },
  { icon: "♖", label: "Achievements" },
  { icon: "♙", label: "Contact" },
];

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<PieceSection>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at 50% 0%, hsl(220 18% 12%) 0%, hsl(220 18% 6%) 50%, hsl(220 20% 4%) 100%)"
    }}>
      {/* Animated ambient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, hsla(42, 85%, 53%, 0.15), transparent 70%)", top: "10%", left: "20%" }}
        animate={{ x: [0, 80, -40, 60, 0], y: [0, -60, 30, -80, 0], scale: [1, 1.2, 0.9, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, hsla(220, 60%, 40%, 0.12), transparent 70%)", bottom: "5%", right: "10%" }}
        animate={{ x: [0, -60, 40, -30, 0], y: [0, 40, -50, 20, 0], scale: [1, 0.85, 1.15, 0.95, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, hsla(42, 70%, 58%, 0.1), transparent 70%)", top: "50%", right: "30%" }}
        animate={{ x: [0, 50, -70, 30, 0], y: [0, -40, 60, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles — reduced for performance */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/15 pointer-events-none"
          style={{ left: `${5 + (i * 9.3) % 90}%`, top: `${8 + (i * 9.7) % 84}%` }}
          animate={{
            y: [0, -25, 8, -15, 0],
            opacity: [0.08, 0.3, 0.1, 0.25, 0.08],
          }}
          transition={{
            duration: 10 + (i % 4) * 3,
            delay: i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating chess pieces */}
      {floatingPieces.map((p, i) => (
        <motion.div
          key={i}
          className={`absolute ${p.size} text-primary/10 pointer-events-none select-none`}
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -12, 4, -8, 0],
            rotate: [0, 3, -2, 1, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.symbol}
        </motion.div>
      ))}

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            className="text-center mb-10 lg:mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-medium">
                ♔ Strategic Portfolio ♔
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif gold-text mb-3 tracking-tight">
              {portfolioData.about.name}
            </h1>
            
            <motion.div
              className="divider-gold max-w-[200px] mx-auto mb-4"
              initial={{ scaleX: 0 }}
              animate={isLoaded ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <p className="text-lg md:text-xl text-primary/80 font-serif tracking-wide mb-3">
              {portfolioData.about.title}
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Click on any chess piece to explore different facets of my journey
            </p>
          </motion.div>

          {/* Chess Board */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl animate-glow-pulse rounded-lg">
              <ChessBoard
                onPieceSelect={setSelectedSection}
                selectedSection={selectedSection}
              />
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div className="inline-flex flex-wrap justify-center items-center gap-x-4 gap-y-2 px-6 py-3 bg-card/40 backdrop-blur-md rounded-2xl border border-border/20">
              {legendItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.08 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-[11px] text-muted-foreground/80">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Content Sheet */}
      <ContentSheet 
        section={selectedSection} 
        onClose={() => setSelectedSection(null)} 
      />
    </div>
  );
};

export default Index;