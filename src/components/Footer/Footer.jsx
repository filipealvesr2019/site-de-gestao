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
    </>
  );
}
