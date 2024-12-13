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
        <div className={styles.containerA}>
          <img
            src="https://i.imgur.com/VNPEJWh.png"
            alt=""
            className={styles.containerA__img}
          />
          <div className={styles.containerA__texts}>
            <h1>Gerencie Suas Finanças com Facilidade e Eficiência</h1>

            <p className={styles.p}>
              Surgindo da necessidade de uma solução prática e eficiente
              paragerenciar suas finanças com facilidade.
            </p>
          </div>
        </div>
        <div className={styles.containerF}>
          <img
            src="https://i.imgur.com/4dTM0Kj.png"
            alt=""
            className={styles.containerA__img}
          />
          <div className={styles.containerA__texts}>
            <h1>Como Funciona?</h1>

            <p className={styles.p}>
              Acesse o Sistema: Sem cadastro complicado, direto pelo navegador.
              Registre Suas Receitas e Despesas: Informe suas vendas,
              pagamentos, contas e dívidas. Visualize Seu Fluxo de Caixa:
              Controle tudo de forma simples e organizada.
            </p>
          </div>
        </div>

        <div className={styles.containerE}>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>1.</div>
            <div className={styles.containerE__texts}>
              <h1 className={styles.containerE__H1}>Simplicidade Total</h1>
              <p className={styles.containerE__P}>
                Interface intuitiva, fácil de usar – mesmo para quem não tem
                experiência.
              </p>
            </div>
          </div>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>2.</div>
            <div className={styles.containerE__texts}>
              <h1 className={styles.containerE__H1}>
                Controle de Receitas e Despesas
              </h1>
              <p className={styles.containerE__P}>
                Acompanhe tudo o que entra e sai do seu caixa.
              </p>
            </div>
          </div>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>3.</div>
            <div className={styles.containerE__texts}>
              <h1 className={styles.containerE__H1}>
                Gerenciamento de Contas e Dívidas
              </h1>
              <p className={styles.containerE__P}>
                Nunca mais perca prazos ou se desorganize com pagamentos.
              </p>
            </div>
          </div>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>4.</div>
            <div className={styles.containerE__texts}>
              <h1 className={styles.containerE__H1}>Online e Gratuito</h1>
              <p className={styles.containerE__P}>
                Acesse direto do site, sem downloads ou assinaturas.
              </p>
            </div>
          </div>
          <div className={styles.pointsContainer}>
            <div className={styles.points}>5.</div>
            <div className={styles.containerE__texts}>
              <h1 className={styles.containerE__H1}>Eficiência Garantida</h1>
              <p className={styles.containerE__P}>
                Veja suas finanças de forma clara e tome decisões melhores.
              </p>
            </div>
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
          <div className={styles.containerD__texts}>
            <h1>E o melhor: tudo isso de forma totalmente gratuita!</h1>
            <p className={styles.paragraph}>
              Cadastre-se agora e aproveite todas as funcionalidades sem nenhum
              custo.
            </p>
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
