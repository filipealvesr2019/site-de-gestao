import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function GestaoDividas() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Gestão de Dívidas - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda estratégias para gerenciar e quitar dívidas de forma inteligente e sustentável." 
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Link href="/tutoriais" className={styles.backButton}>
              ← Voltar para Tutoriais
            </Link>
            <div className={styles.meta}>
              <span className={styles.level}>Iniciante</span>
              <span className={styles.duration}>15 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Gestão de Dívidas</h1>
          <p className={styles.description}>
            Aprenda estratégias para gerenciar e quitar dívidas de forma inteligente e sustentável.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Controle de Dívidas</h2>
              <p>
                Uma gestão eficiente de dívidas é crucial para a saúde financeira da empresa.
                Aprenda a identificar, organizar e quitar dívidas de forma estratégica.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Tipos de Dívidas</h2>
              <ul>
                <li>Empréstimos bancários</li>
                <li>Financiamentos</li>
                <li>Dívidas com fornecedores</li>
                <li>Obrigações fiscais</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Estratégias de Gestão</h2>
              <ol className={styles.steps}>
                <li>Mapeie todas as dívidas</li>
                <li>Priorize pagamentos</li>
                <li>Negocie condições</li>
                <li>Estabeleça um plano de quitação</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Melhores Práticas</h2>
              <div className={styles.practices}>
                <div className={styles.practice}>
                  <h3>Controle de Juros</h3>
                  <p>Monitore e reduza o impacto dos juros nas dívidas.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Negociação</h3>
                  <p>Desenvolva habilidades de negociação com credores.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Prevenção</h3>
                  <p>Evite novas dívidas desnecessárias.</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Ciclo Completo</h2>
              <p>
                Parabéns por completar todos os tutoriais! Recomendamos revisar o
                <Link href="/tutoriais/pages/comecando-com-gestao-financeira" className={styles.inlineLink}>
                  tutorial inicial
                </Link>
                para consolidar seus conhecimentos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 