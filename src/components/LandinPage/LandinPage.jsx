import { SignedOut, SignInButton } from "@clerk/nextjs";
import styles from "./LandinPage.module.css";
export default function LandinPage() {
  return (
    <>
      <main
        className={styles.main}
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <div className={styles.containerA} >
          <img
            src="https://i.imgur.com/VNPEJWh.png"
            alt=""
            className={styles.containerA__img}
          />
          <div className={styles.containerA__texts}>
            <h1>Gerencie Suas Finanças com Facilidade e Eficiência</h1>

            <p>
              Surgindo da necessidade de uma solução prática e eficiente para
              gerenciar suas finanças com facilidade.
            </p>
          </div>
        </div>

        <div className={styles.containerB}>
          <h1 style={styles.heading}>
            Cadastre Serviços, Produtos e Controle Tudo o que Entra e Sai
          </h1>

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
          </div>
          <img
            src="https://i.imgur.com/bKJJOIv.png"
            alt=""
            className={styles.container__product__img}
          />
        </div>

        <div className={styles.containerD}>
          <div  className={styles.containerD__texts}>
            <h1 style={styles.heading}>
              E o melhor: tudo isso de forma totalmente gratuita!
            </h1>
            <p style={styles.paragraph}>
              Cadastre-se agora e aproveite todas as funcionalidades sem nenhum
              custo.
            </p>
          </div>
          <div>
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
