// src/data/projects/dashboard-analytics.ts
import type { Project } from "./types";

export const dashboardAnalytics: Project = {
  id: "dashboard-analytics",
  title: "Dashboard de Analytics",
  subtitle: "Plataforma web para visualização de dados empresariais",
  description:
    "Plataforma web para visualização de dados e métricas empresariais com interface intuitiva e responsiva.",
  image:
    "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  category: "Web App",
  year: "2024",
  duration: "6 meses",
  team: "8 pessoas",
  role: "Senior UX Designer",
  client: "Data Corp Solutions",
  overview:
    "Redesign completo de plataforma enterprise para análise de dados, focando em usabilidade para analistas de negócios e tomadores de decisão.",
  context: {
    background:
      "A empresa possuía uma ferramenta legacy de analytics que estava causando frustração nos usuários e limitando a produtividade das equipes de análise.",
    market: "Concorrentes como Tableau e PowerBI dominavam o mercado com interfaces mais intuitivas",
    businessGoals: [
      "Reduzir churn de usuários existentes",
      "Aumentar time-to-insight em 50%",
      "Facilitar adoção por usuários não-técnicos",
      "Melhorar NPS de 4.2 para 8.0+",
    ],
  },
  problem: {
    userPain:
      "Analistas gastavam mais tempo lutando com a interface do que analisando dados",
    painPoints: [
      {
        title: "Interface Sobrecarregada",
        description:
          "Muitas opções expostas simultaneamente causavam paralisia de decisão",
        impact:
          "Usuários levavam 3x mais tempo para criar relatórios básicos",
      },
      {
        title: "Visualizações Limitadas",
        description:
          "Gráficos estáticos e opções de customização insuficientes",
        impact:
          "68% dos insights eram perdidos por falta de representação visual adequada",
      },
    ],
  },
  personas: [
    {
      name: "Ana Costa",
      age: 35,
      profession: "Business Analyst",
      image:
        "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      bio: "Analista experiente que precisa criar relatórios executivos rapidamente",
      goals: ["Gerar insights acionáveis", "Automatizar relatórios recorrentes"],
      frustrations: ["Interface lenta", "Dificuldade para compartilhar insights"],
      techLevel: "Intermediário",
      quote: "Preciso focar nos dados, não em como usar a ferramenta",
    },
  ],
  solution: {
    approach:
      "Criamos uma interface baseada em contexto que adapta funcionalidades conforme o tipo de análise",
    keyPrinciples: [
      {
        title: "Progressive Disclosure",
        description: "Revelar funcionalidades conforme necessidade do usuário",
      },
    ],
    designDecisions: [
      "Reorganização da arquitetura de informação",
      "Melhoria da performance das visualizações",
    ],
  },
  prototypes: [
    {
      id: "wireframes",
      title: "Wireframes da Nova Arquitetura",
      description: "Reestruturação completa da organização de informações",
      image:
        "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "high-fidelity",
      title: "Interface Final",
      description: "Dashboard redesenhado com foco em clarity e performance",
      image:
        "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ],
  impact: [
    "60% de redução no tempo de análise",
    "80% de aumento na adoção da plataforma",
    "NPS aumentou de 4.2 para 8.3",
    "50% menos tickets de suporte",
  ],
  technologies: ["React", "D3.js", "Material UI", "TypeScript", "PostgreSQL"],
  process: [
    {
      phase: "1. Research & Analysis",
      duration: "4 semanas",
      description: "Análise profunda dos workflows atuais e pain points",
      activities: [
        "Entrevistas com 20 usuários",
        "Análise de analytics de uso",
        "Audit da interface atual",
      ],
      deliverables: ["User Journey Maps", "Pain Points Analysis", "Opportunity Matrix"],
      insights: "85% dos usuários utilizavam apenas 20% das funcionalidades disponíveis",
    },
  ],
};
