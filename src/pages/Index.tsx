import { useState, useEffect } from "react";
import { ChessBoard, PieceSection } from "@/components/chess/ChessBoard";
import { ContentSheet } from "@/components/panels/ContentSheet";
import { portfolioData } from "@/data/portfolioData";

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<PieceSection>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePieceSelect = (section: PieceSection) => {
    setSelectedSection(section);
  };

  const handleClosePanel = () => {
    setSelectedSection(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 0 0-8 0-8s8 0 8 0 0 8 0 8-8 0-8 0Z'/%3E%3C/g%3E%3C/svg%3E")` 
      }} />
      
      {/* Floating chess pieces */}
      <div className="absolute top-20 left-10 text-4xl text-primary/20 animate-float" style={{ animationDelay: '0s', animationDuration: '6s' }}>♔</div>
      <div className="absolute top-40 right-20 text-3xl text-primary/15 animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}>♕</div>
      <div className="absolute bottom-40 left-20 text-3xl text-primary/15 animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>♗</div>
      <div className="absolute top-60 right-40 text-2xl text-primary/10 animate-float" style={{ animationDelay: '3s', animationDuration: '6.5s' }}>♘</div>
      <div className="absolute bottom-60 right-10 text-3xl text-primary/15 animate-float" style={{ animationDelay: '1.5s', animationDuration: '7.5s' }}>♖</div>
      <div className="absolute top-96 left-1/4 text-2xl text-primary/10 animate-float" style={{ animationDelay: '2.5s', animationDuration: '6s' }}>♙</div>
      
      {/* Particle dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full blur-sm animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/25 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary/20 rounded-full blur-sm animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full blur-sm animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-8 lg:mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif gold-text mb-4">
              {portfolioData.about.name}
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium mb-2">
              {portfolioData.about.title}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Welcome to my portfolio. Click on any chess piece to explore my journey.
            </p>
          </div>

          {/* Chess Board */}
          <div className={`flex justify-center mb-8 transition-all duration-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
              <ChessBoard
                onPieceSelect={handlePieceSelect}
                selectedSection={selectedSection}
              />
            </div>
          </div>

          {/* Instructions */}
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
            <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
              <span className="text-xl">♔</span>
              <span className="text-xs text-muted-foreground">About</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xl">♕</span>
              <span className="text-xs text-muted-foreground">Projects</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xl">♗</span>
              <span className="text-xs text-muted-foreground">Skills/Education</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xl">♘</span>
              <span className="text-xs text-muted-foreground">Experience/Leadership</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xl">♖</span>
              <span className="text-xs text-muted-foreground">Achievements</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xl">♙</span>
              <span className="text-xs text-muted-foreground">Contact</span>
            </div>
          </div>

        </div>
      </div>

      {/* Content Sheet */}
      <ContentSheet 
        section={selectedSection} 
        onClose={handleClosePanel} 
      />
    </div>
  );
};

export default Index;