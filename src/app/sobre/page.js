import Login from "../Login";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <>
              <Login />
    
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre</h1>
        <p className={styles.text}>
          Nosso software de controle financeiro é gratuito online, simples e eficiente
          para gerenciar receitas e despesas. Ele permite que você controle tudo
          o que entra e sai do caixa, desde vendas e pagamentos até contas e
          dívidas.
        </p>
        <h2 className={styles.subtitle}>Por que usar nosso sistema?</h2>
        <ul className={styles.list}>
          <li className={styles.text}>Gerenciamento fácil e intuitivo de receitas e despesas.</li>
          <li className={styles.text}>Controle detalhado de vendas, pagamentos e contas.</li>
          <li className={styles.text}>Acesso rápido às suas finanças de qualquer lugar.</li>
          <li className={styles.text}>Interface simples e sem complicações.</li>
          <li className={styles.text}>Totalmente Online sem precisa instalar nada</li>
        </ul>
        <h2 className={styles.subtitle}>Nossa missão</h2>
        <p className={styles.text}>
          Nosso objetivo é oferecer uma solução acessível online e prática para que
          qualquer pessoa ou empresa possa ter um controle financeiro eficiente
          sem precisar gastar com softwares caros.
        </p>
      </div>
    </div>
    </>
  );
}
