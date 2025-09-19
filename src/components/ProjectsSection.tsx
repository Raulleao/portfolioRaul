// src/components/ProjectsSection.tsx
import React, { useMemo, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Eye, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";
import { projects as projectsData } from "../data/projects";

interface ProjectsSectionProps {
  onProjectSelect: (projectId: string) => void;
}

export function ProjectsSection({ onProjectSelect }: ProjectsSectionProps) {
  // Mantendo comportamento visual — adicionei estado de filtro opcional (não altera layout)
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const projects: Project[] = projectsData;

  const categories = useMemo(() => {
    const cats = new Set<string>(["Todos"]);
    projects.forEach((p) => p.category && cats.add(p.category));
    return Array.from(cats);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos projetos mais impactantes que desenvolvi, combinando design estratégico com implementação técnica de qualidade.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                size="sm"
                className="transition-all"
                onClick={() => setActiveCategory(category)}
                aria-pressed={category === activeCategory}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => onProjectSelect(project.id)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onProjectSelect(project.id); }}>
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image || ""}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button onClick={(e) => { e.stopPropagation(); onProjectSelect(project.id); }} className="transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>

                <div className="p-6">
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
                        {(project.technologies || []).slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {(project.technologies || []).length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{(project.technologies || []).length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm">
                        <div className="font-medium text-primary">{project.impact?.[0]}</div>
                        <div className="text-muted-foreground">Duração: {project.duration}</div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" onClick={(e) => { e.stopPropagation(); onProjectSelect(project.id); }} className="flex-1">
                        Ver Projeto
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="#" onClick={(e) => e.stopPropagation()} aria-label={`Abrir ${project.title} external`}>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Interessado em ver mais projetos ou discutir uma colaboração?</p>
            <Button size="lg" variant="outline">Ver Todos os Projetos</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
