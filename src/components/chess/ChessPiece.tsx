import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { sounds } from "@/lib/sounds";

interface ChessPieceProps {
  type: "king" | "queen" | "bishop" | "knight" | "rook" | "pawn";
  color: "white" | "black";
  label: string;
  description: string;
  onClick: () => void;
  isSelected?: boolean;
}

const pieceSymbols = {
  king: { white: "♔", black: "♚" },
  queen: { white: "♕", black: "♛" },
  bishop: { white: "♗", black: "♝" },
  knight: { white: "♘", black: "♞" },
  rook: { white: "♖", black: "♜" },
  pawn: { white: "♙", black: "♟" },
};

export const ChessPiece = ({
  type,
  color,
  label,
  description,
  onClick,
  isSelected,
}: ChessPieceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const symbol = pieceSymbols[type][color];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => {
            sounds.pieceClick();
            onClick();
          }}
          onMouseEnter={() => {
            setIsHovered(true);
            sounds.pieceHover();
          }}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            chess-piece relative flex items-center justify-center
            text-5xl sm:text-6xl md:text-7xl
            w-full h-full
            transition-all duration-300 ease-out
            ${color === "white" ? "text-chess-silver" : "text-foreground/90"}
            ${isHovered ? "scale-110 -translate-y-2" : ""}
            ${isSelected ? "animate-piece-select text-primary glow-gold" : ""}
            hover:text-primary
            focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-transparent
          `}
          style={{
            textShadow: isHovered || isSelected
              ? "0 0 20px hsla(45, 80%, 55%, 0.5), 0 4px 12px rgba(0,0,0,0.4)"
              : "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          <span className="select-none">{symbol}</span>
          
          {/* Glow effect on hover */}
          {(isHovered || isSelected) && (
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="bg-card border-border/50 px-4 py-2 backdrop-blur-sm"
      >
        <p className="font-serif text-sm font-medium text-primary">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};
