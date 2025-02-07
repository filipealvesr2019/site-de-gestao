import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={styles.BottomBannerMobile} >
        <iframe
          src="//a.magsrv.com/iframe.php?idzone=5534646&size=300x250"
          width="300"
          height="250"
          scrolling="no"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
        ></iframe>
      </div>

   
        <div className={styles.BottomBannerDesktop}>
          <img src="https://i.imgur.com/PXtJII6.png" alt="" />
        </div>

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
      <section className={styles.Privacidade}>

<p>
© 2024 Gestão Financeira Pro. Todos os direitos reservados. 
<a href="/politica-de-privacidade" style={{ marginLeft: '10px', color: '#0070f3', textDecoration: 'none' }}>
Política de Privacidade
</a>
</p>
</section>
    </>
  );
}
