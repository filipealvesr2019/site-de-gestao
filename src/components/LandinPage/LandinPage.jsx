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
            alt="icone de sifrão de dinheiro"
            className={styles.containerA__img}
          />
          <div className={styles.containerA__texts}>
            <h1>Controle Financeiro Online, Simples e 100% Gratuito</h1>

            <p className={styles.p}>
            Gerencie suas receitas, despesas e fluxo de caixa de forma fácil e eficiente. Sem complicação, sem custos – direto do seu navegador.            </p>
          </div>
        </div>
        <div className={styles.containerF}>
          <img
            src="https://i.imgur.com/4dTM0Kj.png"
            alt="icone de interrogação"
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
        <div className={styles.containerG}>
          <img
            src="https://i.imgur.com/7285Mjf.png"
            alt="icone de pare"
            className={styles.containerG__img}
          />
          <div className={styles.containerA__texts}>
            <h1>Pare de Perder o Controle das Suas Finanças</h1>

            <p className={styles.p}>
            Sabemos como é difícil organizar todas as vendas, pagamentos e contas do dia a dia. Por isso, criamos uma ferramenta de controle financeiro simples e gratuita para que você acompanhe tudo o que entra e sai do seu caixa, de forma organizada e sem esforço.
            </p>
          </div>
        </div>
        
        <h1 className={styles.questionlabel}>Por Que Usar Nosso Sistema Gratuito?</h1>

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
            alt="foto do sistema de receitas e despesas"
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
            alt="foto de nota fiscal de referencia"
            className={styles.container__product__img}
          />
        </div>

        <div className={styles.containerD}>
          <div className={styles.containerD__texts}>
            <h1>Gerencie Suas Finanças Gratuitamente</h1>
            <p className={styles.paragraph}>
            Controle suas finanças, organize seu fluxo de caixa e tenha mais tempo para focar no que realmente importa.
            </p>
          </div>
          <Link href={"/login"}>
            <div>
              <button className={styles.button}>Acessar  Agora</button>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
