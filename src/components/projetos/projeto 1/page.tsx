import ProjetoTemplate from "../ProjetoTemplate";

export default function Projeto1() {
  return (
    <ProjetoTemplate
      titulo="Projeto 1"
      descricao="Um projeto incrível sobre UI/UX que envolveu pesquisa, prototipagem e testes com usuários."
      imagem="/img/projeto1.png"
      conteudo={
        <>
          <p>
            Esse projeto teve como foco melhorar a jornada do usuário em um
            aplicativo de serviços. Fiz entrevistas, criei protótipos e validei
            com testes A/B.
          </p>
          <ul>
            <li>📌 Ferramentas: Figma, Maze, Notion</li>
            <li>📌 Duração: 3 meses</li>
            <li>📌 Time: 4 designers, 2 devs</li>
          </ul>
        </>
      }
    />
  );
}
