interface ProjetoTemplateProps {
  titulo: string;
  descricao: string;
  imagem: string;
  conteudo: React.ReactNode; // permite customizar detalhes extras
}

export default function ProjetoTemplate({ titulo, descricao, imagem, conteudo }: ProjetoTemplateProps) {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{titulo}</h1>
        <p className="text-lg text-gray-700 mb-6">{descricao}</p>
        <img
          src={imagem}
          alt={titulo}
          className="w-full rounded-xl shadow-lg mb-8"
        />
        <div className="prose max-w-none">{conteudo}</div>
      </div>
    </main>
  );
}
