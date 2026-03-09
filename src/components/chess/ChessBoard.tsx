import { useState } from "react";
import { motion } from "framer-motion";
import { ChessPiece } from "./ChessPiece";

export type PieceSection = "about" | "projects" | "skills" | "experience" | "education" | "leadership" | "achievements" | "contact" | null;

interface ChessBoardProps {
  onPieceSelect: (section: PieceSection) => void;
  selectedSection: PieceSection;
}

const boardSetup: Array<{
  row: number;
  col: number;
  piece: "king" | "queen" | "bishop" | "knight" | "rook" | "pawn";
  color: "white" | "black";
  section: PieceSection;
  label: string;
  description: string;
}> = [
  { row: 7, col: 4, piece: "king", color: "white", section: "about", label: "About Me", description: "Learn about who I am" },
  { row: 7, col: 3, piece: "queen", color: "white", section: "projects", label: "Projects", description: "View my work" },
  { row: 7, col: 2, piece: "bishop", color: "white", section: "skills", label: "Skills", description: "Technical expertise" },
  { row: 7, col: 5, piece: "bishop", color: "white", section: "education", label: "Education", description: "Academic journey" },
  { row: 7, col: 1, piece: "knight", color: "white", section: "experience", label: "Experience", description: "Professional work" },
  { row: 7, col: 6, piece: "knight", color: "white", section: "leadership", label: "Leadership", description: "Volunteering & roles" },
  { row: 7, col: 0, piece: "rook", color: "white", section: "achievements", label: "Achievements", description: "Honors & awards" },
  { row: 6, col: 4, piece: "pawn", color: "white", section: "contact", label: "Contact", description: "Get in touch" },
  { row: 0, col: 4, piece: "king", color: "black", section: "about", label: "About Me", description: "Learn about who I am" },
  { row: 0, col: 3, piece: "queen", color: "black", section: "projects", label: "Projects", description: "View my work" },
  { row: 0, col: 2, piece: "bishop", color: "black", section: "skills", label: "Skills", description: "Technical expertise" },
  { row: 0, col: 5, piece: "bishop", color: "black", section: "education", label: "Education", description: "Academic journey" },
  { row: 0, col: 1, piece: "knight", color: "black", section: "experience", label: "Experience", description: "Professional work" },
  { row: 0, col: 6, piece: "knight", color: "black", section: "leadership", label: "Leadership", description: "Volunteering & roles" },
  { row: 0, col: 7, piece: "rook", color: "black", section: "achievements", label: "Achievements", description: "Honors & awards" },
  { row: 1, col: 3, piece: "pawn", color: "black", section: "contact", label: "Contact", description: "Get in touch" },
];

export const ChessBoard = ({ onPieceSelect, selectedSection }: ChessBoardProps) => {
  const [hoveredSquare, setHoveredSquare] = useState<string | null>(null);

  const isLightSquare = (row: number, col: number) => (row + col) % 2 === 0;
  const getPieceAt = (row: number, col: number) => boardSetup.find((p) => p.row === row && p.col === col);

  return (
    <div className="relative">
      <div className="relative p-2 sm:p-3 md:p-4 rounded-xl shadow-2xl" style={{
        background: "linear-gradient(145deg, hsl(28 20% 16%), hsl(28 18% 10%))",
        boxShadow: "0 20px 60px -15px rgba(0,0,0,0.5), inset 0 1px 0 hsl(28 20% 22%)",
      }}>
        <div className="grid grid-cols-8 gap-0 rounded-lg overflow-hidden" style={{
          boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3)",
        }}>
          {Array.from({ length: 64 }).map((_, index) => {
            const row = Math.floor(index / 8);
            const col = index % 8;
            const isLight = isLightSquare(row, col);
            const piece = getPieceAt(row, col);
            const squareKey = `${row}-${col}`;
            const isHovered = hoveredSquare === squareKey;

            return (
              <div
                key={index}
                className="aspect-square relative transition-colors duration-200"
                style={{
                  background: isLight
                    ? "linear-gradient(135deg, hsl(32 28% 74%), hsl(32 26% 68%))"
                    : "linear-gradient(135deg, hsl(25 22% 24%), hsl(25 20% 19%))",
                }}
                onMouseEnter={() => setHoveredSquare(squareKey)}
                onMouseLeave={() => setHoveredSquare(null)}
              >
                {piece && isHovered && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)" }}
                  />
                )}
                
                {piece && (
                  <ChessPiece
                    type={piece.piece}
                    color={piece.color}
                    label={piece.label}
                    description={piece.description}
                    onClick={() => onPieceSelect(piece.section)}
                    isSelected={selectedSection === piece.section}
                  />
                )}
              </div>
            );
          })}
        </div>
        
        {/* File labels */}
        <div className="absolute bottom-0.5 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex justify-around text-[8px] sm:text-[10px] text-primary/30 font-mono">
          {["a", "b", "c", "d", "e", "f", "g", "h"].map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
        
        {/* Rank labels */}
        <div className="absolute top-2 sm:top-3 md:top-4 bottom-2 sm:bottom-3 md:bottom-4 left-0.5 flex flex-col justify-around text-[8px] sm:text-[10px] text-primary/30 font-mono">
          {["8", "7", "6", "5", "4", "3", "2", "1"].map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </div>
      
      {/* Ambient glow under board */}
      <div className="absolute -inset-8 rounded-full -z-10 opacity-40 blur-3xl" 
        style={{ background: "var(--gradient-radial-gold)" }}
      />
    </div>
  );
};