import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function PrimeirosPassos() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Primeiros Passos no Sistema - Gestão Financeira Pro</title>
        <meta name="description" content="Guia visual para explorar a interface e funcionalidades básicas do sistema" />
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
              <span className={styles.duration}>12 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Primeiros Passos no Sistema</h1>
          <p className={styles.description}>
            Explore a interface e descubra como navegar pelas principais funcionalidades do Gestão Financeira Pro
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Conhecendo a Interface</h2>
        
              <ol className={styles.steps}>
                <li>Menu principal e navegação</li>
                <li>Área de dashboard resumido</li>
                <div className={styles.imageContainer}>
                <Image
                  src="/image/dentrosistema.png"
                  alt="Visão geral da interface do sistema"
                  width={1200}
                  height={675}
                  className={styles.image}
                  quality={80}
                  priority
                />
              </div>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Funcionalidades Básicas</h2>
              <ul>
                <li>Como adicionar novas transações</li>
                <li>Configuração de categorias</li>
                <li>Geração de relatórios simples</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 