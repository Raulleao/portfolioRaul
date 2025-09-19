import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
  Briefcase
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

export function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const [activeSection, setActiveSection] = useState("overview");

  // Navigation sections
  const sections = [
    { id: "overview", label: "Visão Geral", icon: Target },
    { id: "context", label: "Contexto", icon: MapPin },
    { id: "problem", label: "Problema", icon: AlertTriangle },
    { id: "personas", label: "Personas", icon: User },
    { id: "solution", label: "Solução", icon: Lightbulb },
    { id: "prototypes", label: "Protótipos", icon: ImageIcon },
    { id: "process", label: "Processo", icon: CheckCircle }
  ];

  // Mock project data - in a real app, this would come from a data source
  const projectData: Record<string, any> = {
    "fintech-app": {
      title: "App de Gestão Financeira",
      subtitle: "Interface completa para aplicativo financeiro pessoal",
      category: "Mobile App",
      year: "2024",
      duration: "4 meses",
      team: "5 pessoas",
      role: "Lead UX/UI Designer",
      client: "FinTech Innovations",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTY2MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      
      // Overview
      overview: "Desenvolvimento de uma interface completa para aplicativo de gestão financeira pessoal, focando em simplicidade, acessibilidade e experiência intuitiva para usuários de diferentes perfis financeiros.",
      
      // Context
      context: {
        background: "Com o crescimento do mercado de fintechs no Brasil, a empresa identificou uma oportunidade de criar um aplicativo que simplificasse a gestão financeira pessoal. O mercado mostrava que usuários enfrentavam dificuldades para organizar suas finanças devido à complexidade das ferramentas existentes.",
        market: "Pesquisas indicaram que 67% dos brasileiros não controlam adequadamente suas finanças pessoais, principalmente devido à falta de ferramentas intuitivas e acessíveis.",
        businessGoals: [
          "Capturar 15% do mercado de apps financeiros em 12 meses",
          "Atingir 100k usuários ativos no primeiro ano",
          "Reduzir custos de suporte através de interface intuitiva",
          "Estabelecer base para produtos financeiros complementares"
        ]
      },

      // Problem
      problem: {
        userPain: "Usuários enfrentavam dificuldades significativas para gerenciar suas finanças pessoais devido à complexidade das ferramentas disponíveis no mercado.",
        painPoints: [
          {
            title: "Interface Complexa",
            description: "Apps existentes tinham interfaces confusas com muitas funcionalidades expostas simultaneamente",
            impact: "85% dos usuários abandonavam o app nas primeiras 3 sessões"
          },
          {
            title: "Falta de Insights Claros",
            description: "Dados financeiros apresentados sem contexto ou recomendações acionáveis",
            impact: "Usuários não conseguiam tomar decisões informadas sobre suas finanças"
          },
          {
            title: "Processo de Setup Longo",
            description: "Onboarding complexo que exigia muito tempo e informações do usuário",
            impact: "60% dos downloads não completavam o cadastro inicial"
          },
          {
            title: "Baixa Confiança",
            description: "Usuários hesitavam em conectar suas contas bancárias devido a preocupações de segurança",
            impact: "Apenas 20% dos usuários utilizavam funcionalidades de sincronização"
          }
        ]
      },

      // Personas
      personas: [
        {
          name: "Maria Silva",
          age: 32,
          profession: "Professora",
          image: "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyMjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          bio: "Mãe de dois filhos que quer organizar as finanças familiares mas tem pouco tempo para aprender ferramentas complexas.",
          goals: [
            "Controlar gastos mensais da família",
            "Criar reserva de emergência",
            "Planejar férias e educação dos filhos"
          ],
          frustrations: [
            "Apps muito complicados",
            "Falta de tempo para configurações",
            "Medo de compartilhar dados bancários"
          ],
          techLevel: "Intermediário",
          quote: "Preciso de algo simples que me ajude a ver onde está indo meu dinheiro"
        },
        {
          name: "João Santos",
          age: 28,
          profession: "Desenvolvedor",
          image: "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyMjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          bio: "Profissional de tech que ganha bem mas tem dificuldade para organizar investimentos e gastos variáveis.",
          goals: [
            "Otimizar investimentos",
            "Controlar gastos com tecnologia",
            "Construir patrimônio a longo prazo"
          ],
          frustrations: [
            "Dados espalhados em várias contas",
            "Falta de insights automáticos",
            "Interface pouco visual"
          ],
          techLevel: "Avançado",
          quote: "Quero dados detalhados e automação para não perder tempo com tarefas manuais"
        }
      ],

      // Solution
      solution: {
        approach: "Desenvolvemos uma solução centrada no usuário que prioriza simplicidade sem sacrificar funcionalidade. A estratégia focou em reduzir a carga cognitiva através de design progressivo e automação inteligente.",
        keyPrinciples: [
          {
            title: "Simplicidade Progressiva",
            description: "Interface limpa que revela funcionalidades conforme o usuário avança na jornada"
          },
          {
            title: "Automação Inteligente",
            description: "Categorização automática e insights proativos para reduzir trabalho manual"
          },
          {
            title: "Transparência de Segurança",
            description: "Comunicação clara sobre segurança para construir confiança do usuário"
          },
          {
            title: "Feedback Imediato",
            description: "Respostas visuais instantâneas para todas as ações do usuário"
          }
        ],
        designDecisions: [
          "Dashboard minimalista com apenas informações essenciais na tela inicial",
          "Onboarding em 3 etapas com explicações claras sobre segurança",
          "Sistema de cores para categorização automática de gastos",
          "Micro-interações para guiar o usuário através dos fluxos principais"
        ]
      },

      // Prototypes
      prototypes: {
        wireframes: {
          title: "Wireframes Iniciais",
          description: "Estruturação da arquitetura de informação e fluxos principais",
          image: "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ258ZW58MXx8fHwxNzU4MTk3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        lowFidelity: {
          title: "Protótipo de Baixa Fidelidade",
          description: "Validação de fluxos e interações principais com usuários",
          image: "https://images.unsplash.com/photo-1612556810513-617a5a892418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzU4MTgyOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        highFidelity: {
          title: "Protótipo de Alta Fidelidade",
          description: "Design final com sistema visual completo e micro-interações",
          image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTY2MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        userJourney: {
          title: "Mapa da Jornada do Usuário",
          description: "Visualização completa da experiência do usuário e pontos de contato",
          image: "https://images.unsplash.com/photo-1586863065451-6a82fa7e81b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwam91cm5leSUyMG1hcHxlbnwxfHx8fDE3NTgyMjMxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      },

      // Impact
      impact: [
        "40% de aumento na retenção de usuários em 30 dias",
        "65% de redução no tempo de onboarding",
        "95% de satisfação do usuário nas pesquisas pós-uso",
        "3x aumento no engajamento diário",
        "50% menos tickets de suporte relacionados à usabilidade"
      ],

      technologies: ["React Native", "TypeScript", "Figma", "Framer", "Firebase", "Open Banking APIs"],

      // Process
      process: [
        {
          phase: "1. Research & Discovery",
          duration: "3 semanas",
          description: "Pesquisa com usuários, análise competitiva e definição do problema",
          activities: [
            "15 entrevistas em profundidade com usuários",
            "Análise de 8 concorrentes diretos e indiretos",
            "Workshops de definição de problema com stakeholders",
            "Criação de personas baseadas em dados reais"
          ],
          deliverables: ["User Personas", "Journey Maps", "Competitive Analysis", "Problem Statement"],
          insights: "Descobrimos que 73% dos usuários abandonavam apps financeiros por complexidade excessiva"
        },
        {
          phase: "2. Ideação & Concept",
          duration: "2 semanas", 
          description: "Geração de ideias e definição da estratégia de produto",
          activities: [
            "Sessions de brainstorming com equipe multidisciplinar",
            "Priorização de funcionalidades usando MoSCoW",
            "Criação de user stories e acceptance criteria",
            "Definição da arquitetura de informação"
          ],
          deliverables: ["Feature Prioritization", "User Stories", "Information Architecture", "User Flows"],
          insights: "Identificamos que foco em 3 funcionalidades core seria mais efetivo que múltiplas features"
        },
        {
          phase: "3. Design & Prototyping",
          duration: "4 semanas",
          description: "Criação de wireframes, design system e protótipos",
          activities: [
            "Wireframes de baixa fidelidade para todos os fluxos",
            "Desenvolvimento de design system completo",
            "Criação de protótipos interativos em alta fidelidade",
            "Definição de micro-interações e animações"
          ],
          deliverables: ["Wireframes", "Design System", "Interactive Prototypes", "Motion Guidelines"],
          insights: "Testes com protótipo de baixa fidelidade economizaram 40% do tempo de design"
        },
        {
          phase: "4. Testing & Validation",
          duration: "2 semanas",
          description: "Testes de usabilidade e validação com usuários reais",
          activities: [
            "12 sessões de teste de usabilidade",
            "A/B testing de elementos críticos da interface",
            "Testes de acessibilidade e performance",
            "Validação com personas definidas"
          ],
          deliverables: ["Usability Test Report", "A/B Test Results", "Accessibility Audit", "Final Designs"],
          insights: "97% dos usuários completaram o onboarding no primeiro teste sem assistência"
        },
        {
          phase: "5. Implementation & Launch",
          duration: "6 semanas",
          description: "Colaboração com desenvolvimento e preparação para lançamento",
          activities: [
            "Handoff detalhado com especificações de design",
            "Colaboração próxima durante desenvolvimento",
            "QA de interface e experiência do usuário",
            "Preparação de materiais para lançamento"
          ],
          deliverables: ["Design Handoff", "Component Library", "QA Reports", "Launch Materials"],
          insights: "Colaboração próxima com dev reduziu em 60% os retrabalhos de interface"
        }
      ]
    },
    "dashboard-analytics": {
      title: "Dashboard de Analytics",
      subtitle: "Plataforma web para visualização de dados empresariais",
      category: "Web App",
      year: "2024",
      duration: "6 meses", 
      team: "8 pessoas",
      role: "Senior UX Designer",
      client: "Data Corp Solutions",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjA1Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      
      overview: "Redesign completo de plataforma enterprise para análise de dados, focando em usabilidade para analistas de negócios e tomadores de decisão.",
      
      context: {
        background: "A empresa possuía uma ferramenta legacy de analytics que estava causando frustração nos usuários e limitando a produtividade das equipes de análise.",
        market: "Concorrentes como Tableau e PowerBI dominavam o mercado com interfaces mais intuitivas",
        businessGoals: [
          "Reduzir churn de usuários existentes",
          "Aumentar time-to-insight em 50%",
          "Facilitar adoção por usuários não-técnicos",
          "Melhorar NPS de 4.2 para 8.0+"
        ]
      },

      problem: {
        userPain: "Analistas gastavam mais tempo lutando com a interface do que analisando dados",
        painPoints: [
          {
            title: "Interface Sobrecarregada",
            description: "Muitas opções expostas simultaneamente causavam paralisia de decisão",
            impact: "Usuários levavam 3x mais tempo para criar relatórios básicos"
          },
          {
            title: "Visualizações Limitadas",
            description: "Gráficos estáticos e opções de customização insuficientes",
            impact: "68% dos insights eram perdidos por falta de representação visual adequada"
          }
        ]
      },

      personas: [
        {
          name: "Ana Costa",
          age: 35,
          profession: "Business Analyst",
          image: "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyMjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          bio: "Analista experiente que precisa criar relatórios executivos rapidamente",
          goals: ["Gerar insights acionáveis", "Automatizar relatórios recorrentes"],
          frustrations: ["Interface lenta", "Dificuldade para compartilhar insights"],
          techLevel: "Intermediário",
          quote: "Preciso focar nos dados, não em como usar a ferramenta"
        }
      ],

      solution: {
        approach: "Criamos uma interface baseada em contexto que adapta funcionalidades conforme o tipo de análise",
        keyPrinciples: [
          {
            title: "Progressive Disclosure",
            description: "Revelar funcionalidades conforme necessidade do usuário"
          }
        ]
      },

      prototypes: {
        wireframes: {
          title: "Wireframes da Nova Arquitetura",
          description: "Reestruturação completa da organização de informações",
          image: "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ258ZW58MXx8fHwxNzU4MTk3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        },
        highFidelity: {
          title: "Interface Final",
          description: "Dashboard redesenhado com foco em clarity e performance",
          image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjA1Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        }
      },

      impact: [
        "60% de redução no tempo de análise",
        "80% de aumento na adoção da plataforma", 
        "NPS aumentou de 4.2 para 8.3",
        "50% menos tickets de suporte"
      ],

      technologies: ["React", "D3.js", "Material UI", "TypeScript", "PostgreSQL"],

      process: [
        {
          phase: "1. Research & Analysis",
          duration: "4 semanas",
          description: "Análise profunda dos workflows atuais e pain points",
          activities: ["Entrevistas com 20 usuários", "Análise de analytics de uso", "Audit da interface atual"],
          deliverables: ["User Journey Maps", "Pain Points Analysis", "Opportunity Matrix"],
          insights: "85% dos usuários utilizavam apenas 20% das funcionalidades disponíveis"
        }
      ]
    }
  };

  const project = projectData[projectId];

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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                Código
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
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
                  Navegação
                </h3>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <section.icon className="w-4 h-4" />
                    {section.label}
                  </button>
                ))}
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
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.overview}
                    </p>
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
                        <p className="text-muted-foreground leading-relaxed">
                          {project.context.background}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Contexto de Mercado</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.context.market}
                        </p>
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
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem.userPain}
                        </p>
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
                              <ImageWithFallback
                                src={persona.image}
                                alt={persona.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:col-span-3 p-8">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-bold">{persona.name}</h3>
                                  <p className="text-muted-foreground">{persona.age} anos • {persona.profession}</p>
                                  <Badge variant="outline" className="mt-2">{persona.techLevel}</Badge>
                                </div>
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {persona.bio}
                              </p>

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
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution.approach}
                        </p>
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
                            <ImageWithFallback
                              src={prototype.image}
                              alt={prototype.title}
                              className="w-full h-full object-cover"
                            />
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
                      {index !== project.process.length - 1 && (
                        <div className="absolute left-12 top-20 w-0.5 h-full bg-border z-0"></div>
                      )}
                      <CardContent className="p-8 relative z-10">
                        <div className="flex gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                              {index + 1}
                            </div>
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
                            
                            <p className="text-muted-foreground leading-relaxed">
                              {phase.description}
                            </p>

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
                                  <Badge key={delIndex} variant="secondary" className="text-xs">
                                    {deliverable}
                                  </Badge>
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
                    {project.impact.map((item: string, index: number) => (
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
                    {project.technologies.map((tech: string) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Project CTA */}
              <div className="text-center py-12">
                <Separator className="mb-8" />
                <h3 className="text-2xl font-bold mb-4">Gostou deste case?</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Vamos discutir como posso ajudar com seu próximo projeto de UX/UI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={onBack} variant="outline" size="lg">
                    Ver Outros Projetos
                  </Button>
                  <Button size="lg">
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}