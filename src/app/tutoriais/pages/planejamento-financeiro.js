import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function PlanejamentoFinanceiro() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Planejamento Financeiro - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Desenvolva um planejamento financeiro eficaz para alcançar seus objetivos de negócio." 
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
              <span className={styles.level}>Intermediário</span>
              <span className={styles.duration}>20 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Planejamento Financeiro</h1>
          <p className={styles.description}>
            Desenvolva um planejamento financeiro eficaz para alcançar seus objetivos de negócio.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Fundamentos do Planejamento</h2>
              <p>
                Um planejamento financeiro bem estruturado é a base para o sucesso a longo prazo.
                Aprenda a criar um plano que se adeque às necessidades do seu negócio.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Elementos do Planejamento</h2>
              <ul>
                <li>Definição de objetivos financeiros</li>
                <li>Orçamento empresarial</li>
                <li>Projeções financeiras</li>
                <li>Análise de cenários</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Processo de Planejamento</h2>
              <ol className={styles.steps}>
                <li>Avalie a situação atual</li>
                <li>Defina metas claras</li>
                <li>Desenvolva estratégias</li>
                <li>Monitore e ajuste o plano</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Estratégias Essenciais</h2>
              <div className={styles.practices}>
                <div className={styles.practice}>
                  <h3>Gestão de Capital</h3>
                  <p>Otimize o uso dos recursos financeiros disponíveis.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Controle de Riscos</h3>
                  <p>Identifique e mitigue riscos financeiros.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Investimentos</h3>
                  <p>Planeje investimentos alinhados aos objetivos.</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Próximos Passos</h2>
              <p>
                Para completar seu conhecimento, recomendamos o tutorial de
                <Link href="/tutoriais/pages/gestao-de-dividas" className={styles.inlineLink}>
                  Gestão de Dívidas
                </Link>
                para manter suas finanças sempre saudáveis.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 