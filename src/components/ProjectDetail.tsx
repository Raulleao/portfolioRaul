// src/components/ProjectDetail.tsx
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Zap,
  User,
  AlertTriangle,
  Lightbulb,
  Image as ImageIcon,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Project } from "../data/projects";
import { projectsMap } from "../data/projects";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Visão Geral", icon: Target },
    { id: "context", label: "Contexto", icon: MapPin },
    { id: "problem", label: "Problema", icon: AlertTriangle },
    { id: "personas", label: "Personas", icon: User },
    { id: "solution", label: "Solução", icon: Lightbulb },
    { id: "prototypes", label: "Protótipos", icon: ImageIcon },
    { id: "process", label: "Processo", icon: CheckCircle },
  ];

  const project: Project | undefined = projectsMap[projectId];

  // rola ao topo do detalhe quando trocar de projeto para melhorar UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
          <Button onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Projetos
          </Button>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Ajuste simples: usa scroll-margin-top via CSS idealmente, mas fallback com offset aqui
      const y = element.getBoundingClientRect().top + window.scrollY - 72; // ajuste se necessário
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Projetos
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Código
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">Navegação</h3>
                <nav aria-label="Navegação do case">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      aria-current={activeSection === section.id ? "true" : undefined}
                      className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Hero Section */}
              <div id="overview" className="space-y-8">
                <div>
                  <Badge className="mb-4">{project.category}</Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
                  <p className="text-xl text-muted-foreground">{project.subtitle}</p>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden">
                  <ImageWithFallback src={project.image || ""} alt={project.title || ""} className="w-full h-full object-cover" />
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{project.year}</div>
                    <div className="text-sm text-muted-foreground">Ano</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{project.duration}</div>
                    <div className="text-sm text-muted-foreground">Duração</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{project.team}</div>
                    <div className="text-sm text-muted-foreground">Equipe</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{project.role}</div>
                    <div className="text-sm text-muted-foreground">Função</div>
                  </div>
                </div>

                {/* Overview */}
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Visão Geral do Projeto</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{project.overview}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Context Section */}
              {project.context && (
                <div id="context" className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-primary" />
                    Contexto do Projeto
                  </h2>

                  <Card>
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Background</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.context.background}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3">Contexto de Mercado</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.context.market}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4">Objetivos de Negócio</h3>
                        <div className="grid gap-3">
                          {project.context.businessGoals.map((goal: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                              <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{goal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Problem Section */}
              {project.problem && (
                <div id="problem" className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                    Definição do Problema
                  </h2>

                  <Card>
                    <CardContent className="p-8 space-y-6">
                      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-3 text-destructive">Pain Point Principal</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.problem.userPain}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4">Problemas Identificados</h3>
                        <div className="space-y-4">
                          {project.problem.painPoints.map((point: any, index: number) => (
                            <Card key={index} className="border-l-4 border-l-destructive">
                              <CardContent className="p-6">
                                <h4 className="font-semibold mb-2">{point.title}</h4>
                                <p className="text-muted-foreground mb-4">{point.description}</p>
                                <div className="bg-secondary/20 p-3 rounded-lg">
                                  <div className="font-medium text-sm text-destructive">Impacto:</div>
                                  <div className="text-sm text-muted-foreground">{point.impact}</div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Personas Section */}
              {project.personas && (
                <div id="personas" className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <User className="w-8 h-8 text-primary" />
                    Personas do Usuário
                  </h2>

                  <div className="grid gap-6">
                    {project.personas.map((persona: any, index: number) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-4 gap-0">
                            <div className="md:col-span-1 aspect-square md:aspect-auto">
                              <ImageWithFallback src={persona.image} alt={persona.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="md:col-span-3 p-8">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-bold">{persona.name}</h3>
                                  <p className="text-muted-foreground">{persona.age} anos • {persona.profession}</p>
                                  <Badge variant="outline" className="mt-2">{persona.techLevel}</Badge>
                                </div>
                              </div>

                              <p className="text-muted-foreground leading-relaxed mb-6">{persona.bio}</p>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-semibold mb-3 text-green-600">Objetivos</h4>
                                  <ul className="space-y-2">
                                    {persona.goals.map((goal: string, goalIndex: number) => (
                                      <li key={goalIndex} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{goal}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-semibold mb-3 text-red-600">Frustrações</h4>
                                  <ul className="space-y-2">
                                    {persona.frustrations.map((frustration: string, frIndex: number) => (
                                      <li key={frIndex} className="flex items-start gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-muted-foreground">{frustration}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-l-primary">
                                <div className="font-medium text-sm text-primary mb-1">Quote:</div>
                                <p className="text-muted-foreground italic">"{persona.quote}"</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Solution Section */}
              {project.solution && (
                <div id="solution" className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <Lightbulb className="w-8 h-8 text-primary" />
                    Solução Proposta
                  </h2>

                  <Card>
                    <CardContent className="p-8 space-y-6">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                        <h3 className="font-semibold text-lg mb-3 text-primary">Abordagem Estratégica</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.solution.approach}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-4">Princípios de Design</h3>
                        <div className="grid gap-4">
                          {project.solution.keyPrinciples.map((principle: any, index: number) => (
                            <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                              <h4 className="font-medium mb-2">{principle.title}</h4>
                              <p className="text-sm text-muted-foreground">{principle.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {project.solution.designDecisions && (
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Decisões de Design</h3>
                          <div className="space-y-3">
                            {project.solution.designDecisions.map((decision: string, index: number) => (
                              <div key={index} className="flex items-start gap-3">
                                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{decision}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Prototypes Section */}
              {project.prototypes && (
                <div id="prototypes" className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <ImageIcon className="w-8 h-8 text-primary" />
                    Protótipos e Wireframes
                  </h2>

                  <div className="grid gap-8">
                    {Object.entries(project.prototypes).map(([key, prototype]: [string, any]) => (
                      <Card key={key}>
                        <CardContent className="p-8">
                          <h3 className="text-xl font-bold mb-3">{prototype.title}</h3>
                          <p className="text-muted-foreground mb-6">{prototype.description}</p>

                          <div className="aspect-video rounded-lg overflow-hidden">
                            <ImageWithFallback src={prototype.image} alt={prototype.title} className="w-full h-full object-cover" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Process Section */}
              <div id="process" className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  Processo de Desenvolvimento
                </h2>

                <div className="space-y-8">
                  {project.process.map((phase: any, index: number) => (
                    <Card key={index} className="relative">
                      {index !== project.process.length - 1 && <div className="absolute left-12 top-20 w-0.5 h-full bg-border z-0"></div>}
                      <CardContent className="p-8 relative z-10">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">{index + 1}</div>
                          </div>

                          <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-bold">{phase.phase}</h3>
                                {phase.duration && (
                                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{phase.duration}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">{phase.description}</p>

                            {phase.activities && (
                              <div>
                                <h4 className="font-semibold mb-3">Atividades Realizadas</h4>
                                <div className="grid gap-2">
                                  {phase.activities.map((activity: string, actIndex: number) => (
                                    <div key={actIndex} className="flex items-start gap-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                      <span className="text-sm text-muted-foreground">{activity}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div>
                              <h4 className="font-semibold mb-3">Entregáveis</h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.deliverables.map((deliverable: string, delIndex: number) => (
                                  <Badge key={delIndex} variant="secondary" className="text-xs">{deliverable}</Badge>
                                ))}
                              </div>
                            </div>

                            {phase.insights && (
                              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="font-medium text-sm text-blue-800 mb-1">Insight Chave:</div>
                                <p className="text-sm text-blue-700">{phase.insights}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Impact & Results */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Impacto & Resultados</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {(project.impact || []).map((item: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="font-medium text-green-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h2>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies || []).map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Project CTA */}
              <div className="text-center py-12">
                <Separator className="mb-8" />
                <h3 className="text-2xl font-bold mb-4">Gostou deste case?</h3>
                <p className="text-muted-foreground mb-8 text-lg">Vamos discutir como posso ajudar com seu próximo projeto de UX/UI.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={onBack} variant="outline" size="lg">Ver Outros Projetos</Button>
                  <Button size="lg">Entrar em Contato</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
