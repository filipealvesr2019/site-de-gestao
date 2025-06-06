import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
   
  
      <footer className={styles.footer}>
        <div className={styles.div}>
        <p>pra ajudar o projeto:</p>
          <img
            src="https://i.imgur.com/NhUTIMl.jpg"
            alt="QR Code para ajudar o projeto"
          />
  
        </div>
        <section className={styles.section}>
          <h2>Sobre</h2>
          <p>Software de controle financeiro gratuito simples e eficiente para gerenciar receitas e despesas. Ele permite que você controle tudo o que entra e sai do caixa, desde vendas e pagamentos até contas e dívidas.
          </p>
        </section>
     
      </footer>
      <section className={styles.linksUteis}>

<p>
© 2024 Gestão Financeira Pro. Todos os direitos reservados. 
<a href="/politica-de-privacidade" style={{ marginLeft: '10px', color: '#0070f3', textDecoration: 'none' }}>
Política de Privacidade -
</a>
<a
            href="/termos-de-uso"
            style={{
              marginLeft: "10px",
              color: "#0070f3",
              textDecoration: "none",
            }}
          >
            Termos de Uso -
          </a>
          <a
            href="/sobre"
            style={{
              marginLeft: "10px",
              color: "#0070f3",
              textDecoration: "none",
            }}
          >
            Sobre Nos -
          </a>
          
          <a
            href="/contato"
            style={{
              marginLeft: "10px",
              color: "#0070f3",
              textDecoration: "none",
            }}
          >
          Contato -
          </a>
          <a
            href="/blog"
            style={{
              marginLeft: "10px",
              color: "#0070f3",
              textDecoration: "none",
            }}
          >
          Blog
          </a>
</p>
</section>
    </>
  );
}
