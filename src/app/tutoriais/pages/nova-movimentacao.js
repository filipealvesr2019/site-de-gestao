import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';
import buttonStyles from '@/components/Button.module.css';

export default function NovaMovimentacao() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Adicionar Movimentação - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda passo a passo como registrar novas receitas e despesas no sistema de gestão financeira." 
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
              <span className={styles.duration}>8 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Como Adicionar uma Nova Movimentação</h1>
          <p className={styles.description}>
            Guia completo para registrar receitas e despesas no sistema de forma eficiente.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Passo a Passo</h2>
              <ol className={styles.steps}>
                <li>Acesse o menu principal</li>
                <li>
                  Localize o botão "Nova Movimentação"
                  <div className={styles.buttonDemo}>
                    <button className={buttonStyles.novaMovButton}>
                      Nova Movimentação
                    </button>
                  </div>
                </li>
                <li>Preencha os campos obrigatórios:
                  <ul className={styles.detailsList}>
                    <li>📌 Tipo (Receita/Despesa)</li>
                    <li>📝 Descrição detalhada</li>
                    <li>💰 Valor monetário</li>
                    <li>📅 Data de vencimento</li>
                  </ul>
                </li>

                <div className={styles.imageContainer}>
                  <Image
                    src="/image/movimentacao.png"
                    alt="Formulário de nova movimentação"
                    width={800}
                    height={500}
                    className={styles.image}
                    quality={80}
                  />
                </div>

                <li>Revise e confirme os dados</li>
                <li>Salve a movimentação</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Dicas Importantes</h2>
              <div className={styles.tips}>
                <div className={styles.tip}>
                  <h3>💡 Categorização Automática</h3>
                  <p>Use descrições padronizadas para categorização automática das transações</p>
                </div>
                <div className={styles.tip}>
                  <h3>⏱️ Salvar Rápido</h3>
                  <p>Use o atalho Ctrl+S para salvar rapidamente o formulário</p>
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