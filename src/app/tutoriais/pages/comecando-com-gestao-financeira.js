import Head from 'next/head';
import { Header, Footer } from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Tutorial.module.css';

export default function ComecandoGestaoFinanceira() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Começando com Gestão Financeira - Gestão Financeira Pro</title>
        <meta 
          name="description" 
          content="Aprenda os fundamentos da gestão financeira e como começar a organizar suas finanças de forma eficiente." 
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
              <span className={styles.duration}>10 min</span>
            </div>
          </div>

          <h1 className={styles.title}>Começando com Gestão Financeira</h1>
          <p className={styles.description}>
            Aprenda os fundamentos da gestão financeira e como começar a organizar suas finanças de forma eficiente.
          </p>

          <div className={styles.content}>
            <div className={styles.section}>
              <h2>Introdução à Gestão Financeira</h2>
              <p>
                A gestão financeira é fundamental para o sucesso de qualquer negócio. 
                Neste tutorial, você aprenderá os conceitos básicos e como implementá-los 
                na prática usando o Gestão Financeira Pro.
              </p>
            </div>

            <div className={styles.section}>
              <h2>Conceitos Fundamentais</h2>
              <ul>
                <li>Entendendo receitas e despesas</li>
                <li>Como Navegar pelo Sistema</li>
                <div className={styles.subSection}>
                  <h3>Tela Inicial</h3>
                  <p>Na parte superior da tela você encontrará:</p>
                  <ul className={styles.featureList}>
                    <li>✅ <strong>Total de Receitas do Mês</strong> (em verde)</li>
                    <li>❌ <strong>Total de Despesas do Mês</strong> (em vermelho)</li>
                    <li>📉 <strong>Saldo do Mês</strong> (em azul)</li>
                  </ul>
                  
                  <div className={styles.imageContainer}>
                    <Image
                      src="/image/despesas.png"
                      alt="Dashboard inicial do sistema"
                      width={800}
                      height={450}
                      className={styles.image}
                    />
                  </div>

                  <h3>Tabela de Movimentações</h3>
                  <p>A tabela exibe todas as transações organizadas por:</p>
                  <ul className={styles.featureList}>
                    <li><strong>Tipo:</strong> Receita ou Despesa</li>
                    <li><strong>Descrição:</strong> Nome da transação (ex: Salário, Aluguel)</li>
                    <li><strong>Cliente:</strong> Vinculado quando aplicável</li>
                    <li><strong>Valor:</strong> Valor monetário da transação</li>
                    <li><strong>Vencimento:</strong> Data limite para pagamento</li>
                    <li>
                      <strong>Status:</strong>
                      <ul className={styles.statusList}>
                        <li>🟢 Pago - Transação quitada</li>
                        <li>🔴 Vencido - Pagamento atrasado</li>
                        <li>🟡 Pendente - Dentro do prazo</li>
                      </ul>
                    </li>
                    <li><strong>Criação:</strong> Data de registro no sistema</li>
                    <li>🗑️ Ícone para exclusão de registros</li>
                  </ul>
                </div>
                <li>Controle de contas a pagar e receber</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Como Adicionar uma Nova Movimentação</h2>
              <ol className={styles.steps}>
                <li>Clique no botão "Nova Movimentação" (azul) no canto superior direito</li>
                
                <li>Preencha os detalhes:
                  <ul className={styles.detailsList}>
                    <li>📌 Selecione o tipo (Receita/Despesa)</li>
                    <li>📝 Insira descrição detalhada</li>
                    <li>💰 Informe o valor correto</li>
                    <li>👤 Selecione cliente (se aplicável)</li>
                    <li>📅 Defina data de vencimento</li>
                  </ul>
                </li>

                <div className={styles.imageContainer}>
                  <Image
                    src="/image/nova-movimentacao.png"
                    alt="Formulário para nova movimentação"
                    width={800}
                    height={500}
                    className={styles.image}
                    quality={80}
                  />
                </div>

                <li>Revise os dados e clique em "Salvar"</li>
                <li>Confira o registro na tabela principal</li>
              </ol>
            </div>

            <div className={styles.section}>
              <h2>Primeiros Passos</h2>
              <ol className={styles.steps}>
                <li>Configure suas categorias de receitas e despesas</li>
                <div className={styles.imageContainer}>
                  <Image
                    src="/image/despesas.png"
                    alt="Interface da gestão financeira com gráficos e dados"
                    width={800}
                    height={450}
                    className={styles.image}
                    quality={80}
                    priority
                  />
                </div>
                <li>Explore o dashboard principal</li>
              </ol>
            </div>

            

            <div className={styles.section}>
              <h2>Próximos Passos</h2>
              <p>
                Após dominar estes conceitos básicos, recomendamos seguir para o tutorial de 
                <Link href="/tutoriais/pages/controle-de-despesas" className={styles.inlineLink}>
                  Controle de Despesas
                </Link>
                para aprofundar seus conhecimentos.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 