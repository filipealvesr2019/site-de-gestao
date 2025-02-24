export default function TutorialPage({ params }) {
  const { slug } = params;

  return (
    <main>
      <h1>Tutorial: {slug}</h1>
      {/* Adicione o conteúdo específico do tutorial aqui */}
    </main>
  );
} 