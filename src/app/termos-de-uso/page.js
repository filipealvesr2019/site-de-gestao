import Login from "../Login";
import styles from "./TermosDeUso.module.css";

export default function TermosDeUso() {
  return (
    <>
              <Login />
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Termos de Uso</h1>
        <p className={styles.text}>
          Bem-vindo ao nosso software de controle financeiro. Ao utilizar nossos serviços,
          você concorda com os seguintes termos e condições.
        </p>
        
        <h2 className={styles.subtitle}>1. Uso do Serviço</h2>
        <p className={styles.text}>
          Nosso software é disponibilizado gratuitamente para gerenciar suas receitas e despesas.
          O usuário é responsável por todas as atividades realizadas em sua conta.
        </p>
        
        <h2 className={styles.subtitle}>2. Privacidade</h2>
        <p className={styles.text}>
          Respeitamos sua privacidade e não compartilhamos seus dados com terceiros sem seu consentimento.
          Para mais informações, consulte nossa Política de Privacidade.
        </p>
        
        <h2 className={styles.subtitle}>3. Responsabilidades</h2>
        <p className={styles.text}>
          Não nos responsabilizamos por perdas ou danos decorrentes do uso do nosso software.
          O usuário deve garantir a precisão das informações inseridas.
        </p>
        
        <h2 className={styles.subtitle}>4. Alterações nos Termos</h2>
        <p className={styles.text}>
          Podemos atualizar estes Termos de Uso periodicamente. Recomendamos que os usuários revisem
          esta página regularmente para se manterem informados.
        </p>
      </div>
    </div>
    
    </>
  );
}
