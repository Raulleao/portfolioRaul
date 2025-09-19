// src/pages/PortfolioPage.tsx
import React, { useState } from "react";
import { ProjectsSection } from "../components/ProjectsSection";
import { ProjectDetail } from "../components/ProjectDetail";

export default function PortfolioPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  return (
    <div>
      {/* Lista de projetos — quando o usuário clicar, selectedProjectId será setado */}
      <ProjectsSection onProjectSelect={(id) => setSelectedProjectId(id)} />

      {/* Renderiza o detalhe do projeto quando um projeto está selecionado.
          Isso não altera o visual do detail — ele continua idêntico, apenas
          recebe um projectId diferente sempre que o usuário clicar noutra carta. */}
      {selectedProjectId && (
        <ProjectDetail
          projectId={selectedProjectId}
          onBack={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  );
}
