import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import styles from '../Tutorial.module.css';
import Image from 'next/image';

export default function CadastroIniciante() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Cadastro Iniciante - Gestão Financeira Pro</title>
        <meta name="description" content="Aprenda o processo de cadastro inicial para novos usuários" />
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
              <span className={styles.duration}>10 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Cadastro Básico para Iniciantes</h1>
          <p className={styles.description}>
            Guia completo para seu primeiro acesso e configuração inicial no sistema
            Dê o primeiro passo para transformar sua vida de gestão financeira.
          </p>
         
          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Passo a Passo do Cadastro</h2>
              <ol className={styles.steps}>
                <li>Acesse o site oficial</li>
                <li>Clique em 'Começar Grátis'</li>
           
                <li>Preencha seus dados básicos</li>
                <div className={styles.imageContainer}>
                  <Image
                    src="/image/registrar.png"
                    alt="Tela de registro do sistema"
                    width={800}
                    height={450}
                    className={styles.image}
                    quality={80}
                    priority
                  />
                </div>
                <li>Confirme seu e-mail</li>
                <li>Complete seu perfil</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Configuração Inicial</h2>
              <ul>
                <li>Adicione suas primeiras contas</li>
                <li>Configure categorias básicas</li>
                <li>Importe dados iniciais</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 