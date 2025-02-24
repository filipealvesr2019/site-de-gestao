import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function RelatoriosFinanceiros() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Relatórios Financeiros - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Entenda como gerar e interpretar relatórios financeiros para tomar melhores decisões." 
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
              <span className={styles.level}>Avançado</span>
              <span className={styles.duration}>30 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Relatórios Financeiros</h1>
          <p className={styles.description}>
            Entenda como gerar e interpretar relatórios financeiros para tomar melhores decisões.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Importância dos Relatórios</h2>
              <p>
                Relatórios financeiros são ferramentas essenciais para a tomada de decisão.
                Aprenda a gerar e interpretar diferentes tipos de relatórios para uma gestão mais eficiente.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Tipos de Relatórios</h2>
              <ul>
                <li>Demonstrativo de Resultados (DRE)</li>
                <li>Balanço Patrimonial</li>
                <li>Fluxo de Caixa</li>
                <li>Indicadores Financeiros</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Análise de Relatórios</h2>
              <ol className={styles.steps}>
                <li>Identifique os principais indicadores</li>
                <li>Compare períodos diferentes</li>
                <li>Analise tendências</li>
                <li>Tome decisões baseadas em dados</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Indicadores Importantes</h2>
              <div className={styles.practices}>
                <div className={styles.practice}>
                  <h3>Lucratividade</h3>
                  <p>Margem bruta, operacional e líquida.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Rentabilidade</h3>
                  <p>ROI, ROA e ROE para análise de retorno.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Liquidez</h3>
                  <p>Capacidade de pagamento a curto e longo prazo.</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Próximos Passos</h2>
              <p>
                Para aprimorar ainda mais sua gestão, recomendamos o tutorial de
                <Link href="/tutoriais/pages/planejamento-financeiro" className={styles.inlineLink}>
                  Planejamento Financeiro
                </Link>
                para projetar o futuro do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 