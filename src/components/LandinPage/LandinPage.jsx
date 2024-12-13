import { SignedOut, SignInButton } from "@clerk/nextjs";
import styles from "./LandinPage.module.css";
import Footer from "../Footer/Footer";
import Link from "next/link";
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
            <h1 >Controle Financeiro Online, Simples e 100% Gratuito</h1>

            <p className={styles.p}>
            Gerencie suas receitas, despesas e fluxo de caixa de forma fácil e eficiente. Sem complicação, sem custos – direto do seu navegador.            </p>
          </div>
        </div>

        <div className={styles.containerB}>
          <h1 className={styles.heading}>
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
            <h1>
            Gerencie Suas Finanças Gratuitamente
            </h1>
            <p className={styles.paragraph}>
            Controle suas finanças, organize seu fluxo de caixa e tenha mais tempo para focar no que realmente importa. Simples, online e 100% gratuito.            </p>
          </div>
          <Link href={"/login"}>
          <div>
        
                <button className={styles.button}>Cadastre-se</button>
          
          </div>

          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
