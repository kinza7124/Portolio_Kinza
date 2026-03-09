import { useState } from "react";
import { ChessPiece } from "./ChessPiece";

export type PieceSection = "about" | "projects" | "skills" | "experience" | "education" | "leadership" | "achievements" | "contact" | null;

interface ChessBoardProps {
  onPieceSelect: (section: PieceSection) => void;
  selectedSection: PieceSection;
}

// Simplified board with key pieces strategically placed
const boardSetup: Array<{
  row: number;
  col: number;
  piece: "king" | "queen" | "bishop" | "knight" | "rook" | "pawn";
  color: "white" | "black";
  section: PieceSection;
  label: string;
  description: string;
}> = [
  // White pieces (bottom)
  { row: 7, col: 4, piece: "king", color: "white", section: "about", label: "About Me", description: "Learn about who I am" },
  { row: 7, col: 3, piece: "queen", color: "white", section: "projects", label: "Projects", description: "View my work" },
  { row: 7, col: 2, piece: "bishop", color: "white", section: "skills", label: "Skills", description: "Technical expertise" },
  { row: 7, col: 5, piece: "bishop", color: "white", section: "education", label: "Education", description: "Academic journey" },
  { row: 7, col: 1, piece: "knight", color: "white", section: "experience", label: "Experience", description: "Professional work" },
  { row: 7, col: 6, piece: "knight", color: "white", section: "leadership", label: "Leadership", description: "Volunteering & roles" },
  { row: 7, col: 0, piece: "rook", color: "white", section: "achievements", label: "Achievements", description: "Honors & awards" },
  { row: 6, col: 4, piece: "pawn", color: "white", section: "contact", label: "Contact", description: "Get in touch" },
  
  // Black pieces (top) - decorative, also clickable
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

  const getPieceAt = (row: number, col: number) => {
    return boardSetup.find((p) => p.row === row && p.col === col);
  };

  return (
    <div className="relative">
      {/* Board container with elegant frame */}
      <div className="relative p-2 sm:p-3 md:p-4 bg-chess-board-border rounded-lg shadow-2xl">
        {/* Inner board */}
        <div className="grid grid-cols-8 gap-0 rounded overflow-hidden shadow-inner">
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
                className={`
                  aspect-square relative
                  transition-all duration-200
                  ${isLight ? "bg-chess-light" : "bg-chess-dark"}
                  ${isHovered && piece ? "brightness-110" : ""}
                `}
                onMouseEnter={() => setHoveredSquare(squareKey)}
                onMouseLeave={() => setHoveredSquare(null)}
              >
                {/* Square highlight effect */}
                {piece && isHovered && (
                  <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
                )}
                
                {/* Chess piece */}
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
        
        {/* Board labels - files (a-h) */}
        <div className="absolute bottom-0 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex justify-around text-[8px] sm:text-[10px] text-muted-foreground/60 font-mono pb-0.5">
          {["a", "b", "c", "d", "e", "f", "g", "h"].map((file) => (
            <span key={file}>{file}</span>
          ))}
        </div>
        
        {/* Board labels - ranks (1-8) */}
        <div className="absolute top-2 sm:top-3 md:top-4 bottom-2 sm:bottom-3 md:bottom-4 left-0 flex flex-col justify-around text-[8px] sm:text-[10px] text-muted-foreground/60 font-mono pl-0.5">
          {["8", "7", "6", "5", "4", "3", "2", "1"].map((rank) => (
            <span key={rank}>{rank}</span>
          ))}
        </div>
      </div>
      
      {/* Ambient glow */}
      <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10 opacity-50" />
    </div>
  );
};
