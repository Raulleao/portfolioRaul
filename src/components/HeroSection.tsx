import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg mx-auto">
                <ImageWithFallback
                  src="src/components/img/eu.png"
                  alt="Foto de perfil profissional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div> */}
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Olá, eu sou{" "}
                <span style={{ color: "var(--color-green-500)" }}>
                  Raul Leão
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                Product Designer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transformo dores dos usuários em soluções intuitivas, guiado por
              pesquisas, design centrado no humano e focado em resultados
              mensuráveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                onClick={() => onNavigate("projects")}
                className="px-8"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate("contact")}
                className="px-8"
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {[
              "UX Research",
              "UI Design",
              "Prototyping",
              "Design System",
              "Figma",
            ].map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => onNavigate("about")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
