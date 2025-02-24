import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function GestaoVendas() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Gestão de Vendas - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda a registrar e acompanhar suas vendas, gerando relatórios e análises importantes." 
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
              <span className={styles.duration}>25 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Gestão de Vendas</h1>
          <p className={styles.description}>
            Aprenda a registrar e acompanhar suas vendas, gerando relatórios e análises importantes.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Gestão Eficiente de Vendas</h2>
              <p>
                Uma gestão de vendas eficiente é essencial para o crescimento do seu negócio.
                Aprenda a utilizar as ferramentas certas para maximizar seus resultados.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Registro de Vendas</h2>
              <ul>
                <li>Cadastro de produtos e serviços</li>
                <li>Precificação estratégica</li>
                <li>Controle de estoque</li>
                <li>Gestão de pedidos</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Processo de Vendas</h2>
              <ol className={styles.steps}>
                <li>Cadastre seus produtos/serviços</li>
                <li>Configure preços e descontos</li>
                <li>Registre as vendas realizadas</li>
                <li>Acompanhe o faturamento</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Análise de Vendas</h2>
              <div className={styles.practices}>
                <div className={styles.practice}>
                  <h3>Relatórios de Vendas</h3>
                  <p>Acompanhe o desempenho diário, semanal e mensal.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Métricas Importantes</h3>
                  <p>Monitore ticket médio, taxa de conversão e margem de lucro.</p>
                </div>
                <div className={styles.practice}>
                  <h3>Previsão de Vendas</h3>
                  <p>Utilize dados históricos para projeções futuras.</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Próximos Passos</h2>
              <p>
                Para complementar seu conhecimento, recomendamos o tutorial de
                <Link href="/tutoriais/pages/relatorios-financeiros" className={styles.inlineLink}>
                  Relatórios Financeiros
                </Link>
                para uma análise mais profunda dos seus resultados.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 