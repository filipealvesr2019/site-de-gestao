import React from 'react';
import styles from './PoliticaDePrivacidade.module.css'
const PoliticaDePrivacidade = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }} className={styles.container}>
      <h1>Política de Privacidade</h1>
      <p className={styles.p}>
        Bem-vindo à nossa Política de Privacidade. Sua privacidade é importante para nós. Este documento explica como coletamos, usamos e protegemos suas informações pessoais.
      </p>

      <h2 className={styles.heading}>Coleta de Informações</h2>
      <p className={styles.p}>
        Coletamos informações fornecidas por você, como nome, e-mail e outras informações necessárias para fornecer nossos serviços.
      </p>

      <h2 className={styles.heading}>Uso das Informações</h2>
      <p className={styles.p}>
        Usamos suas informações para melhorar nossos serviços, enviar atualizações ou responder às suas dúvidas. Não compartilhamos suas informações com terceiros sem o seu consentimento.
      </p>

      <h2 className={styles.heading}>Cookies</h2>
      <p className={styles.p}>
        Utilizamos cookies para melhorar a experiência do usuário e coletar informações estatísticas sobre o uso do site.
      </p>

      <h2 className={styles.heading}>Segurança</h2>
      <p className={styles.p}>
        Adotamos medidas para proteger suas informações pessoais contra acesso não autorizado, alterações ou divulgações.
      </p>

      <h2 className={styles.heading}>Alterações na Política</h2>
      <p className={styles.p}>
        Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página.
      </p>

      <p className={styles.p}>
        Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: gestaofinanceiraprocontato@gmail.com
      </p>
    </div>
  );
};

export default PoliticaDePrivacidade;
