import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';
import buttonStyles from '@/components/Button.module.css';

export default function ImprimirBaixarNotas() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Imprimir ou Baixar Recibos - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda a gerar relatórios impressos e documentos fiscais diretamente do sistema." 
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
              <span className={styles.duration}>8 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Como Imprimir ou Baixar Recibos</h1>
          <p className={styles.description}>
            Guia completo para geração de relatórios impressos e documentos fiscais.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Opções Disponíveis</h2>
              <div className={styles.featureGrid}>
                <div className={styles.featureCard}>
                  <h3>📄 Imprimir Recibo</h3>
                  <p>Gera um relatório formatado para impressão física</p>
                  <div className={styles.buttonDemo}>
                    <button className={buttonStyles.printButton}>
                      <svg viewBox="0 0 24 24">
                        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                      </svg>
                      Imprimir Recibo
                    </button>
                  </div>
                </div>

                <div className={styles.featureCard}>
                  <h3>💾 Baixar Recibo</h3>
                  <p>Exporta documento fiscal em formato PDF</p>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/notasimgembaixar.png"
                      alt="Opção de download de Recibo"
                      width={600}
                      height={400}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Passo a Passo</h2>
              <ol className={styles.steps}>
                <li>Selecione as movimentações desejadas</li>
                <li>Clique no menu "Exportar/Imprimir"</li>
                <li>Escolha entre:
                  <ul className={styles.optionsList}>
                    <li>🖨️ Imprimir Recibo</li>
                    <li>📥 Baixar PDF</li>
                  </ul>
                </li>
                <li>Configure as opções de formatação</li>
                <li>Confirme para gerar o documento</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Formatos Suportados</h2>
              <div className={styles.formats}>
                <div className={styles.format}>
                  <h3>PDF</h3>
                  <p>Para documentos oficiais e arquivamento</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 