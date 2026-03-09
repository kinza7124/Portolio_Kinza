import { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.button
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
            ${color === "white" ? "text-chess-silver" : "text-foreground/80"}
            ${isSelected ? "text-primary" : ""}
            hover:text-primary
            focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-0
          `}
          animate={{
            y: isHovered ? -6 : isSelected ? -4 : 0,
            scale: isHovered ? 1.12 : isSelected ? 1.08 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            textShadow: isHovered || isSelected
              ? "0 0 24px hsla(42, 85%, 53%, 0.5), 0 6px 16px rgba(0,0,0,0.5)"
              : "0 4px 10px rgba(0,0,0,0.4)",
          }}
        >
          <span className="select-none">{symbol}</span>
          
          {(isHovered || isSelected) && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        className="bg-card/95 border-primary/20 px-4 py-2.5 backdrop-blur-xl shadow-xl"
      >
        <p className="font-serif text-sm font-semibold text-primary">{label}</p>
        <p className="text-[11px] text-muted-foreground">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};