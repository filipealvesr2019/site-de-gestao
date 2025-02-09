import React from 'react';
import styles from './Contact.module.css';
import Login from '../Login';

const Contato = () => {
  return (
    <>
          <Login />
    <div className={styles.contactContainer}>
  
      <h1 className={styles.title}>Entre em Contato</h1>
      
      <p className={styles.paragraph}>
        Se você tiver dúvidas ou precisar de mais informações, sinta-se à vontade para entrar em contato conosco pelo e-mail abaixo:
      </p>

      <p className={styles.paragraph}>
        <span className={styles.boldText}>Email:</span> gestaofinanceiraprocontato@gmail.com
      </p>

      <h2 className={styles.subtitle}>Como Podemos Ajudar?</h2>
      <p className={styles.paragraph}>
        Estamos sempre em busca de melhorias para o nosso serviço e a sua opinião é muito importante para nós. Se você tiver alguma sugestão, dúvida ou feedback sobre o nosso site de gestão de receitas e despesas, por favor, nos envie uma mensagem. 
      </p>
      <p className={styles.paragraph}>
        Se você precisa de suporte ou tem alguma pergunta sobre como utilizar as funcionalidades do nosso site, estamos à disposição para ajudar a tornar sua experiência ainda melhor.
      </p>
      <p className={styles.paragraph}>
        Não hesite em entrar em contato. Vamos fazer o possível para responder o mais rápido possível e garantir que suas necessidades sejam atendidas.
      </p>
    </div>
    
    </>
  );
};

export default Contato;
