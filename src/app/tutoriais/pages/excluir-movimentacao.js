import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function ExcluirMovimentacao() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Excluir Movimentações - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda a gerenciar e excluir movimentações financeiras de forma segura no sistema." 
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
              <span className={styles.duration}>5 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Como Excluir uma Movimentação</h1>
          <p className={styles.description}>
            Guia completo para remoção segura de registros financeiros e navegação entre páginas.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Exclusão de Registros</h2>
              <ol className={styles.steps}>
                <li>
                  1️⃣ Localize a movimentação na tabela
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/tabela-movimentacoes.png"
                      alt="Tabela de movimentações"
                      width={800}
                      height={450}
                      className={styles.image}
                    />
                  </div>
                </li>

                <li>
                  2️⃣ Clique no ícone da lixeira
                  <div className={styles.warningBox}>
                    <span className={styles.warningIcon}>⚠️</span>
                    <p>A exclusão é permanente e irreversível</p>
                  </div>
                  
                </li>

                <li>
                  3️⃣ Confirme a exclusão no pop-up
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/deletar.png"
                      alt="exclusão"
                      width={300}
                      height={300}
                      className={styles.image}
                    />
                  </div>
                  
                </li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Paginação e Navegação</h2>
              <div className={styles.grid}>
                <div className={styles.card}>
                  <h3>📑 Navegação entre Páginas</h3>
                  <p>Use os controles na parte inferior da tabela:</p>
                  <div className={styles.paginationDemo}>
                    <button className={styles.pageButton}>&laquo;</button>
                    <button className={styles.pageButton}>1</button>
                    <button className={styles.pageButtonActive}>2</button>
                    <button className={styles.pageButton}>3</button>
                    <span>...</span>
                    <button className={styles.pageButton}>10</button>
                    <button className={styles.pageButton}>&raquo;</button>
                  </div>
                </div>

                <div className={styles.card}>
                  <h3>🔍 Busca Rápida</h3>
                  <p>Utilize a barra de pesquisa para localizar registros específicos</p>
                  <div className={styles.searchDemo}>
                    <input 
                      type="text" 
                      placeholder="Pesquisar..." 
                      className={styles.searchInput}
                    />
                  </div>
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