import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Eye, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  technologies: string[];
  impact: string;
  duration: string;
}

interface ProjectsSectionProps {
  onProjectSelect: (projectId: string) => void;
}

export function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  const projects: Project[] = [
    {
      id: "fintech-app",
      title: "App de Gestão Financeira",
      description: "Interface completa para aplicativo de gestão financeira pessoal com foco em simplicidade e usabilidade.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTY2MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Mobile App",
      year: "2024",
      technologies: ["React Native", "TypeScript", "Figma"],
      impact: "Aumento de 40% na retenção de usuários",
      duration: "4 meses"
    },
    {
      id: "dashboard-analytics",
      title: "Dashboard de Analytics",
      description: "Plataforma web para visualização de dados e métricas empresariais com interface intuitiva e responsiva.",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjA1Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Web App",
      year: "2024",
      technologies: ["React", "D3.js", "Material UI"],
      impact: "Redução de 60% no tempo de análise",
      duration: "6 meses"
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce B2B",
      description: "Redesign completo de plataforma e-commerce B2B focando em experiência do usuário e otimização de conversão.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODEyMTYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "E-commerce",
      year: "2023",
      technologies: ["Vue.js", "Nuxt", "Tailwind CSS"],
      impact: "Aumento de 35% nas vendas online",
      duration: "8 meses"
    },
    {
      id: "design-system",
      title: "Design System Corporativo",
      description: "Desenvolvimento de sistema de design completo para empresa multinacional, unificando a experiência em todos os produtos.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTY2MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Design System",
      year: "2023",
      technologies: ["Figma", "Storybook", "React"],
      impact: "Redução de 50% no tempo de desenvolvimento",
      duration: "12 meses"
    }
  ];

  const categories = ["Todos", "Mobile App", "Web App", "E-commerce", "Design System"];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos projetos mais impactantes que desenvolvi, 
              combinando design estratégico com implementação técnica de qualidade.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => onProjectSelect(project.id)}
                      className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                  <Badge 
                    className="absolute top-4 left-4 bg-background/90 text-foreground"
                  >
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm">
                        <div className="font-medium text-primary">{project.impact}</div>
                        <div className="text-muted-foreground">Duração: {project.duration}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        onClick={() => onProjectSelect(project.id)}
                        className="flex-1"
                      >
                        Ver Projeto
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interessado em ver mais projetos ou discutir uma colaboração?
            </p>
            <Button size="lg" variant="outline">
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}