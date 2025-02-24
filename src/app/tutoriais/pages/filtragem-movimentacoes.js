import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function FiltragemMovimentacoes() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Filtragem de Movimentações - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda a utilizar os filtros avançados para visualizar movimentações específicas no sistema." 
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
              <span className={styles.duration}>6 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Como Filtrar as Movimentações</h1>
          <p className={styles.description}>
            Guia completo para utilizar filtros personalizados e visualizar transações específicas.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Passo a Passo</h2>
              <ol className={styles.steps}>
                <li>
                  1️⃣ Clique no botão "Filtragem Personalizada"
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/filtro-button.png"
                      alt="Botão de filtragem destacado"
                      width={800}
                      height={450}
                      className={styles.image}
                      quality={80}
                    />
                  </div>
                </li>

                <li>
                  2️⃣ Selecione os critérios desejados:
                  <ul className={styles.detailsList}>
                    <li>✅ Tipo (Receitas/Despesas/Ambos)</li>
                    <li>📅 Período de datas</li>
                    <li>💰 Faixa de valores</li>
                    <li>📌 Status (Pago/Pendente/Vencido)</li>
                    <li>🏷️ Categorias específicas</li>
                  </ul>
                  
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/filtro.png"
                      alt="Interface de filtragem"
                      width={800}
                      height={500}
                      className={styles.image}
                      quality={80}
                    />
                  </div>
                </li>

                <li>
                  3️⃣ Aplique os filtros e visualize os resultados
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/filtroseopção.png"
                      alt="Resultado da filtragem"
                      width={800}
                      height={450}
                      className={styles.image}
                      quality={80}
                    />
                  </div>
                </li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Dicas de Uso</h2>
              <div className={styles.tips}>
                <div className={styles.tip}>
                  <h3>💡 Combinação de Filtros</h3>
                  <p>Combine múltiplos critérios para refinamentos precisos</p>
                </div>
                <div className={styles.tip}>
                  <h3>⏱️ Filtros Rápidos</h3>
                  <p>Use os filtros pré-definidos para acesso rápido</p>
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