import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChessBoard, PieceSection } from "@/components/chess/ChessBoard";
import { ContentSheet } from "@/components/panels/ContentSheet";
import { portfolioData } from "@/data/portfolioData";

const floatingPieces = [
  // Large accent pieces
  { symbol: "♔", x: "4%", y: "10%", size: "text-5xl", delay: 0, duration: 14, range: 20 },
  { symbol: "♕", x: "90%", y: "6%", size: "text-4xl", delay: 1.5, duration: 16, range: 18 },
  { symbol: "♖", x: "93%", y: "80%", size: "text-4xl", delay: 2.5, duration: 13, range: 16 },
  { symbol: "♚", x: "3%", y: "82%", size: "text-4xl", delay: 3.2, duration: 15, range: 14 },
  // Medium drifting pieces
  { symbol: "♗", x: "18%", y: "30%", size: "text-3xl", delay: 0.8, duration: 12, range: 22 },
  { symbol: "♘", x: "78%", y: "42%", size: "text-3xl", delay: 2, duration: 11, range: 20 },
  { symbol: "♛", x: "55%", y: "85%", size: "text-3xl", delay: 1, duration: 13, range: 18 },
  { symbol: "♜", x: "35%", y: "8%", size: "text-3xl", delay: 3.8, duration: 14, range: 16 },
  { symbol: "♝", x: "68%", y: "18%", size: "text-2xl", delay: 0.5, duration: 10, range: 24 },
  { symbol: "♞", x: "25%", y: "60%", size: "text-2xl", delay: 2.8, duration: 12, range: 20 },
  // Small subtle pieces
  { symbol: "♙", x: "12%", y: "50%", size: "text-xl", delay: 1.8, duration: 9, range: 15 },
  { symbol: "♙", x: "45%", y: "92%", size: "text-xl", delay: 4, duration: 10, range: 12 },
  { symbol: "♟", x: "60%", y: "55%", size: "text-xl", delay: 0.3, duration: 11, range: 18 },
  { symbol: "♟", x: "85%", y: "30%", size: "text-lg", delay: 3, duration: 12, range: 14 },
  { symbol: "♙", x: "40%", y: "38%", size: "text-lg", delay: 2.2, duration: 10, range: 10 },
  { symbol: "♟", x: "72%", y: "72%", size: "text-lg", delay: 1.4, duration: 13, range: 16 },
  // Extra pieces to make the background presence stronger
  { symbol: "♕", x: "14%", y: "84%", size: "text-2xl", delay: 2.6, duration: 15, range: 18 },
  { symbol: "♘", x: "50%", y: "14%", size: "text-2xl", delay: 3.4, duration: 12, range: 15 },
  { symbol: "♝", x: "88%", y: "58%", size: "text-xl", delay: 1.1, duration: 11, range: 14 },
  { symbol: "♟", x: "30%", y: "86%", size: "text-xl", delay: 4.4, duration: 14, range: 13 },
  { symbol: "♔", x: "62%", y: "32%", size: "text-3xl", delay: 0.9, duration: 16, range: 20 },
];

const heroBackgroundPieces = [
  { symbol: "♔", x: "-2%", y: "4%", delay: 0, duration: 28 },
  { symbol: "♛", x: "72%", y: "-4%", delay: 1.6, duration: 30 },
  { symbol: "♞", x: "78%", y: "62%", delay: 2.4, duration: 26 },
  { symbol: "♝", x: "10%", y: "66%", delay: 1, duration: 32 },
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
      background: "radial-gradient(ellipse at 50% 0%, hsl(220 18% 14%) 0%, hsl(220 18% 7%) 46%, hsl(220 20% 4%) 100%)"
    }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 45%, transparent 38%, hsla(220, 20%, 4%, 0.42) 100%)",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsla(42, 85%, 58%, 0.07) 0.8px, transparent 0.8px)",
          backgroundSize: "32px 32px",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.22, 0.38, 0.24] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {heroBackgroundPieces.map((p, i) => (
        <motion.div
          key={`${p.symbol}-hero-${i}`}
          className="absolute pointer-events-none select-none text-primary/[0.2] text-[clamp(8rem,18vw,16rem)] font-serif leading-none blur-[0.3px]"
          style={{
            left: p.x,
            top: p.y,
            textShadow: "0 0 36px hsla(42,85%,58%,0.35)",
          }}
          animate={{
            y: [0, -22, 8, -16, 0],
            x: [0, i % 2 === 0 ? 22 : -18, i % 2 === 0 ? -10 : 12, 0],
            rotate: [0, i % 2 === 0 ? 4 : -4, i % 2 === 0 ? -3 : 3, 0],
            opacity: [0.14, 0.3, 0.18, 0.26, 0.14],
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

      {/* Animated ambient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, hsla(42, 85%, 53%, 0.22), transparent 70%)", top: "10%", left: "20%" }}
        animate={{ x: [0, 80, -40, 60, 0], y: [0, -60, 30, -80, 0], scale: [1, 1.2, 0.9, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{ background: "radial-gradient(circle, hsla(220, 60%, 40%, 0.2), transparent 70%)", bottom: "5%", right: "10%" }}
        animate={{ x: [0, -60, 40, -30, 0], y: [0, 40, -50, 20, 0], scale: [1, 0.85, 1.15, 0.95, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, hsla(42, 70%, 58%, 0.16), transparent 70%)", top: "50%", right: "30%" }}
        animate={{ x: [0, 50, -70, 30, 0], y: [0, -40, 60, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(125deg, hsla(42, 85%, 58%, 0.12) 0%, transparent 28%, transparent 72%, hsla(42, 85%, 58%, 0.1) 100%)",
          mixBlendMode: "screen",
        }}
        animate={{ opacity: [0.45, 0.75, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30 pointer-events-none"
          style={{ left: `${5 + (i * 9.3) % 90}%`, top: `${8 + (i * 9.7) % 84}%` }}
          animate={{
            y: [0, -32, 10, -18, 0],
            opacity: [0.16, 0.45, 0.2, 0.34, 0.16],
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
          className={`absolute ${p.size} text-primary/[0.3] pointer-events-none select-none`}
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -p.range, p.range * 0.4, -p.range * 0.6, 0],
            x: [0, p.range * 0.5 * (i % 2 === 0 ? 1 : -1), -p.range * 0.3 * (i % 2 === 0 ? 1 : -1), 0],
            rotate: [0, 8, -5, 3, 0],
            opacity: [0.28, 0.55, 0.32, 0.48, 0.28],
            scale: [1, 1.08, 0.98, 1.04, 1],
            filter: [
              "drop-shadow(0 0 0px hsla(42,85%,58%,0))",
              "drop-shadow(0 0 14px hsla(42,85%,58%,0.4))",
              "drop-shadow(0 0 6px hsla(42,85%,58%,0.22))",
              "drop-shadow(0 0 12px hsla(42,85%,58%,0.34))",
              "drop-shadow(0 0 0px hsla(42,85%,58%,0))"
            ],
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
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.45) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.45) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
        animate={{ opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-20">
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
              Every great move starts with strategy — select a piece to explore my world
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