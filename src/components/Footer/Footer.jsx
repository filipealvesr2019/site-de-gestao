import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
        
          <img
            src="https://i.imgur.com/VEVrhxh.jpg"
            alt="QR Code para ajudar o projeto"
          />
            <p>pra ajudar o projeto:</p>
        </div>
        <section>
          <h2>Sobre</h2>
          <p>Este é um sistema de controle financeiro simples e eficiente para gerenciar receitas e despesas. Ele permite que você controle tudo o que entra e sai do caixa, desde vendas e pagamentos até contas e dívidas.
          </p>
        </section>

      </footer>
    </>
  );
}
