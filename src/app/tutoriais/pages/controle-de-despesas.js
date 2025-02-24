import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function ControleDespesas() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Controle de Despesas - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Domine as técnicas para um controle efetivo de despesas e aprenda a identificar gastos desnecessários." 
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

          <h1 className={styles.title}>Controle de Despesas</h1>
          <p className={styles.description}>
            Domine as técnicas para um controle efetivo de despesas e aprenda a identificar gastos desnecessários.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Importância do Controle de Despesas</h2>
              <p>
                O controle efetivo de despesas é crucial para a saúde financeira de qualquer empresa.
                Neste tutorial, você aprenderá como identificar, categorizar e reduzir gastos de forma inteligente.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Categorização de Despesas</h2>
              <ul>
                <li>Despesas fixas vs. variáveis</li>
                <li>Despesas operacionais</li>
                <li>Despesas administrativas</li>
                <li>Custos indiretos</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Estratégias de Controle</h2>
              <ol className={styles.steps}>
                <li>Estabeleça um orçamento mensal</li>
                <li>Monitore gastos em tempo real</li>
                <li>Identifique padrões de despesas</li>
                <li>Implemente medidas de redução de custos</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Ferramentas de Gestão</h2>
              <div className={styles.practices}>
                <div className={styles.practice}>
                  <h3>Planilhas de Controle</h3>
                  <p>Utilize planilhas para acompanhamento detalhado dos gastos.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Relatórios Automáticos</h3>
                  <p>Configure alertas e relatórios periódicos de despesas.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Análise Comparativa</h3>
                  <p>Compare gastos entre períodos para identificar tendências.</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Próximos Passos</h2>
              <p>
                Após dominar o controle de despesas, recomendamos o tutorial de
                <Link href="/tutoriais/pages/gestao-de-vendas" className={styles.inlineLink}>
                  Gestão de Vendas
                </Link>
                para uma visão completa do ciclo financeiro.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 