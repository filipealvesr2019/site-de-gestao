import styles from "./LandinPage.module.css";
export default function LandinPage() {
  return (
    <>
      <main style={styles.main}>
        <p>
          Surgindo da necessidade de uma solução prática e eficiente para
          gerenciar suas finanças com facilidade.
        </p>

        <h1 style={styles.heading}>
          Imprima ou baixe Notas Fiscais de Receitas ou Despesas
        </h1>
        <p style={styles.paragraph}>
          Gerencie suas finanças de forma simples e eficaz. Organize suas
          receitas, controle suas despesas e mantenha suas obrigações fiscais em
          dia com facilidade.
        </p>

        <h1 style={styles.heading}>
          Cadastre Serviços, Produtos e Controle Tudo o que Entra e Sai
        </h1>
        <p style={styles.paragraph}>
          Simplifique a gestão das suas finanças. Registre receitas e despesas,
          organize seus serviços e produtos, e mantenha todas as suas operações
          financeiras em conformidade com rapidez e eficiência.
        </p>

        <h1 style={styles.heading}>
          E o melhor: tudo isso de forma totalmente gratuita!
        </h1>
        <p style={styles.paragraph}>
          Cadastre-se agora e aproveite todas as funcionalidades sem nenhum
          custo.
        </p>
      </main>
    </>
  );
}
