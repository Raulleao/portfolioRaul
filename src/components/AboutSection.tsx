import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Search,
  SearchCheck,
} from "lucide-react";

export function AboutSection() {
  const journey = [
    {
      year: "2024",
      role: "Product Designer",
      company: "Inovvati Tecnologia",
      location: "Campo Grande, MS",
      description:
        "Atuei na reformulação dos serviços digitais do Detran-MS, um sistema essencial para a população de todo o Mato Grosso do Sul, com mais de 300 mil acessos — focando em tornar a navegação mais intuitiva, acessível e centrada no cidadão.",
      skills: [
        "Teste de usabilidade",
        "Design Systems",
        "User Research",
        "Protótipo",
      ],
    },
    {
      year: "2023",
      role: "UX Designer",
      company: "LEDES",
      location: "Híbrido",
      description:
        "Liderei o time de UX e desenvolvi dois apps em Flutter (Mercado Solidário e Coleta Solidária), apresentados na Tecnofam e Pantanal Tech para apoiar a economia solidária em MS.",
      skills: ["Figma", "Protótipo", "Teste de usabilidade", "User Research"],
    },
    {
      year: "2023",
      role: "Pesquisador",
      company: "LEDES",
      location: "Híbrido",
      description:
        "Participei de um estudo exploratório aplicando engenharia de prompts para aprimorar a criação de proto-personas durante a Lean Inception, reduzindo o tempo e melhorando a qualidade dos resultados.",
      skills: ["Métricas", "Entrevista", "Prompt Engineering"],
    },
  ];

  const achievements = [
    { icon: Award, label: "Projetos Entregues", value: "8+" },
    {
      icon: SearchCheck,
      label: "Pesquisas com usuários realizadas",
      value: "8+",
    },
    { icon: Calendar, label: "Anos de Experiência", value: "3+" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Minha Jornada Profissional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma trajetória dedicada a criar soluções digitais que fazem a
              diferença na vida das pessoas e no sucesso dos negócios.
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Experiência Profissional
            </h3>

            {journey.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index !== journey.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-full bg-border"></div>
                )}

                <Card className="p-6 ml-12 hover:shadow-lg transition-shadow">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-6 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-md"></div>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-lg">{item.role}</h4>
                        <p className="text-primary font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* About Me */}
          <Card className="p-8 mt-16 bg-gradient-to-r from-primary/5 to-secondary/10">
            <h3 className="text-2xl font-bold mb-4">Sobre Mim</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou Product Designer com experiência em projetos para o setor
                público, startups e ecoturismo digital. Trabalho em todas as
                etapas do design centrado no usuário, desde pesquisas até
                prototipação e validação. Gosto de simplificar processos
                complexos, aumentar o engajamento e criar Design Systems que
                realmente funcionam.
              </p>
              <p>
                Também facilito workshops e design sprints para ajudar equipes a
                alinhar ideias e encontrar soluções mais rápido.
              </p>
              <p>
                Sou apaixonado por tecnologia e inovação, e meu foco é criar
                experiências que realmente façam a diferença na vida das
                pessoas.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
