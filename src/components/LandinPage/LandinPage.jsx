import { SignedOut, SignInButton } from "@clerk/nextjs";
import styles from "./LandinPage.module.css";
export default function LandinPage() {
  return (
    <>
      <main style={styles.main}>
        <div className={styles.containerA}>
          <p>
            Surgindo da necessidade de uma solução prática e eficiente para
            gerenciar suas finanças com facilidade.
          </p>

          <img
            src="https://i.imgur.com/VNPEJWh.png"
            alt=""
            className={styles.container__img}
          />
        </div>

        <div className={styles.containerB}>
          <div className={styles.containerB__texts}>
            <h1 style={styles.heading}>
              Cadastre Serviços, Produtos e Controle Tudo o que Entra e Sai
            </h1>
            <p style={styles.paragraph}>
              Simplifique a gestão das suas finanças. Registre receitas e
              despesas, organize seus serviços e produtos, e mantenha todas as
              suas operações financeiras em conformidade com rapidez e
              eficiência.
            </p>
          </div>

          <img
            src="https://i.imgur.com/RGAGwo2.png"
            alt=""
            className={styles.container__product__img}
          />
        </div>

        <div className={styles.containerC}>
          <div className={styles.containerC__texts}>
            <h1 className={styles.heading}>
              Imprima ou baixe Notas Fiscais de Receitas ou Despesas
            </h1>

            <p className={styles.paragraph}>
              Gerencie suas finanças de forma simples e eficaz. Organize suas
              receitas, controle suas despesas e mantenha suas obrigações
              fiscais em dia com facilidade.
            </p>
          </div>
          <img
            src="https://i.imgur.com/jZANGz0.png"
            alt=""
            className={styles.container__product__img}
          />
        </div>

        <div className={styles.containerD}>
          <div className={styles.containerD__texts}>
          <h1 style={styles.heading}>
            E o melhor: tudo isso de forma totalmente gratuita!
          </h1>
          <p style={styles.paragraph}>
            Cadastre-se agora e aproveite todas as funcionalidades sem nenhum
            custo.
          </p>

          </div>
<div className={styles.containerButton}>
          <SignedOut>
            <SignInButton>
              <button className={styles.button}>Cadastre-se</button>
            </SignInButton>
          </SignedOut>

</div>
        </div>
      </main>
    </>
  );
}
