import { Button } from "./ui/button";
import { Download, Github, Linkedin } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const navigation = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  const handleDownloadCV = () => {
    // Mock download - replace with actual CV file
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Replace with actual CV path
    link.download = "CV_SeuNome.pdf";
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate("home")}
              className="font-medium hover:text-primary transition-colors"
            >
              Raul Leão.
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              // variant="ghost"
              size="sm"
              onClick={handleDownloadCV}
              
              className="hidden sm:inline-flex text-white cursor-pointer"
              
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/raul-leao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/Raulleao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
