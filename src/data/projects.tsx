// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  category?: string;
  year?: string;
  duration?: string;
  team?: string;
  role?: string;
  client?: string;
  overview?: string;
  context?: any;
  problem?: any;
  personas?: any[];
  solution?: any;
  prototypes?: any;
  impact?: string[];
  technologies?: string[];
  process?: any[];
}

export const projects: Project[] = [
  {
    id: "fintech-app",
    title: "Aplicativo Meu DETRAN",
    subtitle: "Interface completa para aplicativo financeiro pessoal",
    description:
      "Aplicativo móvel moderno para os serviços digitais do Detran-MS, atendendo toda a população de Mato Grosso do Sul, com mais de 300 mil acessos.",
    image: "/src/components/img/amd.png",
    category: "Mobile App",
    year: "2025",
    duration: "1 ano",
    team: "15 pessoas",
    role: "Product Designer",
    client: "FinTech Innovations",
    overview:
      "Aplicativo móvel moderno para o Detran-MS, desenvolvido para oferecer serviços digitais a toda a população de Mato Grosso do Sul. O app inclui funcionalidades como consultas veiculares, serviços relacionados à CNH (Carteira Nacional de Habilitação) e emissão de documentos digitais.",
    context: {
      background:
        "Com a modernização das aplicações digitais, tornou-se necessária a construção do APP 2.0 do Detran-MS. O aplicativo anterior, além de instável, apresentava fluxos longos e complexos, o que levava muitos usuários a desistirem no meio do processo. Esse cenário também gerava uma alta demanda por suporte, já que os cidadãos não conseguiam utilizar plenamente os serviços disponíveis.",
      // market:
      //   "Pesquisas indicaram que 67% dos brasileiros não controlam adequadamente suas finanças pessoais, principalmente devido à falta de ferramentas intuitivas e acessíveis.",
      businessGoals: [
        "Atingir 100k usuários ativos no primeiro ano",
        "Reduzir custos de suporte através de interface intuitiva",
        "Implementar pelo menos 50% dos serviços nos 2 primeiros anos",
      ],
    },
    problem: {
      userPain:
        "Os usuários enfrentavam grandes dificuldades para utilizar o aplicativo, o que resultava em um alto volume de chamados de suporte e em um número expressivo de atendimentos presenciais nas agências, sobrecarregando o sistema. Em resumo, o aplicativo não atendia às expectativas dos usuários.",
      painPoints: [
        {
          title: "Interface Complexa",
          description:
            "Os aplicativos existentes apresentavam interfaces confusas, com excesso de funcionalidades expostas ao mesmo tempo. Essa complexidade fazia com que os usuários abandonassem o aplicativo",
          // impact: "85% dos usuários abandonavam o app nas primeiras 3 sessões",
        },
        {
          title: "Falta de Clareza nos Serviços",
          description:
            "A falta de hierarquia e orientação nos serviços dificultava a navegação, levando muitos cidadãos a recorrer ao suporte ou ao atendimento presencial.",
          // impact:
          //   "Usuários não conseguiam tomar decisões informadas sobre suas finanças",
        },
        {
          title: "Processo de Setup Longo",
          description:
            "Onboarding complexo que exigia muito tempo e informações do usuário",
          // impact: "60% dos downloads não completavam o cadastro inicial",
        },
      ],
    },
    personas: [
      {
        name: "João de Souza",
        age: 34,
        profession: "Motorista de aplicativo",
        image:
          "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyMjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        bio: "Pai de dois filhos que trabalhar como motorista de aplicativo para sustentar a família",
        goals: [
          "Renovar a CNH sem precisar ir à agência",
          "Consultar pontos na carteira de forma rápida",
          "Manter-se regularizado para trabalhar diariamente",
        ],
        frustrations: [
          "Fluxo de renovação complexo, com muitas etapas",
          "O app trava ou desconecta durante o processo",
          "Precisa recorrer ao atendimento presencial, perdendo tempo de trabalho",
        ],
        techLevel: "Intermediário",
        // quote:
        //   "Preciso de algo simples que me ajude a ver onde está indo meu dinheiro",
      },
      {
        name: "João Santos",
        age: 28,
        profession: "Desenvolvedor",
        image:
          "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyMjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        bio: "Profissional de tech que ganha bem mas tem dificuldade para organizar investimentos e gastos variáveis.",
        goals: [
          "Otimizar investimentos",
          "Controlar gastos com tecnologia",
          "Construir patrimônio a longo prazo",
        ],
        frustrations: [
          "Dados espalhados em várias contas",
          "Falta de insights automáticos",
          "Interface pouco visual",
        ],
        techLevel: "Avançado",
        quote:
          "Quero dados detalhados e automação para não perder tempo com tarefas manuais",
      },
    ],
    solution: {
      approach:
        "Desenvolvemos uma solução centrada no usuário que prioriza simplicidade sem sacrificar funcionalidade. A estratégia focou em reduzir a carga cognitiva através de design progressivo e automação inteligente.",
      keyPrinciples: [
        {
          title: "Simplicidade Progressiva",
          description:
            "Interface limpa que revela funcionalidades conforme o usuário avança na jornada",
        },
        {
          title: "Automação Inteligente",
          description:
            "Categorização automática e insights proativos para reduzir trabalho manual",
        },
        {
          title: "Transparência de Segurança",
          description:
            "Comunicação clara sobre segurança para construir confiança do usuário",
        },
        {
          title: "Feedback Imediato",
          description:
            "Respostas visuais instantâneas para todas as ações do usuário",
        },
      ],
      designDecisions: [
        "Dashboard minimalista com apenas informações essenciais na tela inicial",
        "Onboarding em 3 etapas com explicações claras sobre segurança",
        "Sistema de cores para categorização automática de gastos",
        "Micro-interações para guiar o usuário através dos fluxos principais",
      ],
    },
    prototypes: {
      wireframes: {
        title: "Wireframes Iniciais",
        description:
          "Estruturação da arquitetura de informação e fluxos principais",
        image:
          "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ258ZW58MXx8fHwxNzU4MTk3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      lowFidelity: {
        title: "Protótipo de Baixa Fidelidade",
        description: "Validação de fluxos e interações principais com usuários",
        image:
          "https://images.unsplash.com/photo-1612556810513-617a5a892418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzU4MTgyOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      highFidelity: {
        title: "Protótipo de Alta Fidelidade",
        description:
          "Design final com sistema visual completo e micro-interações",
        image:
          "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTY2MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      userJourney: {
        title: "Mapa da Jornada do Usuário",
        description:
          "Visualização completa da experiência do usuário e pontos de contato",
        image:
          "https://images.unsplash.com/photo-1586863065451-6a82fa7e81b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwam91cm5leSUyMG1hcHxlbnwxfHx8fDE3NTgyMjMxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
    },
    impact: ["+20 mil downloads"],
    technologies: ["Design System", "Research", "Figma", "Prototipação"],
    process: [
      {
        phase: "1. Research & Discovery",
        duration: "3 semanas",
        description:
          "Pesquisa com usuários, análise competitiva e definição do problema",
        activities: [
          "15 entrevistas em profundidade com usuários",
          "Análise de 8 concorrentes diretos e indiretos",
          "Workshops de definição de problema com stakeholders",
          "Criação de personas baseadas em dados reais",
        ],
        deliverables: [
          "User Personas",
          "Journey Maps",
          "Competitive Analysis",
          "Problem Statement",
        ],
        insights:
          "Descobrimos que 73% dos usuários abandonavam apps financeiros por complexidade excessiva",
      },
      {
        phase: "2. Ideação & Concept",
        duration: "2 semanas",
        description: "Geração de ideias e definição da estratégia de produto",
        activities: [
          "Sessions de brainstorming com equipe multidisciplinar",
          "Priorização de funcionalidades usando MoSCoW",
          "Criação de user stories e acceptance criteria",
          "Definição da arquitetura de informação",
        ],
        deliverables: [
          "Feature Prioritization",
          "User Stories",
          "Information Architecture",
          "User Flows",
        ],
        insights:
          "Identificamos que foco em 3 funcionalidades core seria mais efetivo que múltiplas features",
      },
      {
        phase: "3. Design & Prototyping",
        duration: "4 semanas",
        description: "Criação de wireframes, design system e protótipos",
        activities: [
          "Wireframes de baixa fidelidade para todos os fluxos",
          "Desenvolvimento de design system completo",
          "Criação de protótipos interativos em alta fidelidade",
          "Definição de micro-interações e animações",
        ],
        deliverables: [
          "Wireframes",
          "Design System",
          "Interactive Prototypes",
          "Motion Guidelines",
        ],
        insights:
          "Testes com protótipo de baixa fidelidade economizaram 40% do tempo de design",
      },
      {
        phase: "4. Testing & Validation",
        duration: "2 semanas",
        description: "Testes de usabilidade e validação com usuários reais",
        activities: [
          "12 sessões de teste de usabilidade",
          "A/B testing de elementos críticos da interface",
          "Testes de acessibilidade e performance",
          "Validação com personas definidas",
        ],
        deliverables: [
          "Usability Test Report",
          "A/B Test Results",
          "Accessibility Audit",
          "Final Designs",
        ],
        insights:
          "97% dos usuários completaram o onboarding no primeiro teste sem assistência",
      },
      {
        phase: "5. Implementation & Launch",
        duration: "6 semanas",
        description:
          "Colaboração com desenvolvimento e preparação para lançamento",
        activities: [
          "Handoff detalhado com especificações de design",
          "Colaboração próxima durante desenvolvimento",
          "QA de interface e experiência do usuário",
          "Preparação de materiais para lançamento",
        ],
        deliverables: [
          "Design Handoff",
          "Component Library",
          "QA Reports",
          "Launch Materials",
        ],
        insights:
          "Colaboração próxima com dev reduziu em 60% os retrabalhos de interface",
      },
    ],
  },

  {
    id: "dashboard-analytics",
    title: "Dashboard de Analytics",
    subtitle: "Plataforma web para visualização de dados empresariais",
    description:
      "Plataforma web para visualização de dados e métricas empresariais com interface intuitiva e responsiva.",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjA1Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      market:
        "Concorrentes como Tableau e PowerBI dominavam o mercado com interfaces mais intuitivas",
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
          "https://images.unsplash.com/photo-1565194637906-8f45f3351a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcGVyc29uYSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyMjMxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        bio: "Analista experiente que precisa criar relatórios executivos rapidamente",
        goals: [
          "Gerar insights acionáveis",
          "Automatizar relatórios recorrentes",
        ],
        frustrations: [
          "Interface lenta",
          "Dificuldade para compartilhar insights",
        ],
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
          description:
            "Revelar funcionalidades conforme necessidade do usuário",
        },
      ],
    },
    prototypes: {
      wireframes: {
        title: "Wireframes da Nova Arquitetura",
        description: "Reestruturação completa da organização de informações",
        image:
          "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2glMjBkZXNpZ258ZW58MXx8fHwxNzU4MTk3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
      highFidelity: {
        title: "Interface Final",
        description: "Dashboard redesenhado com foco em clarity e performance",
        image:
          "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjA1Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      },
    },
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
        deliverables: [
          "User Journey Maps",
          "Pain Points Analysis",
          "Opportunity Matrix",
        ],
        insights:
          "85% dos usuários utilizavam apenas 20% das funcionalidades disponíveis",
      },
    ],
  },
];

// opcional: mapa por id para lookup rápido
export const projectsMap: Record<string, Project> = projects.reduce(
  (acc, p) => {
    acc[p.id] = p;
    return acc;
  },
  {} as Record<string, Project>
);
