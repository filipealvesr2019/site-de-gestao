import Link from "next/link";
import Login from "../Login";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <div className={styles.imgContainer}>
        <Link href="https://www.gestaofinanceirapro.com.br" className={styles.Link}>
          <img
            src="https://imgur.com/hQ8nDYj.jpeg"
            alt="Logo do Gestão Financeira Pro - Sistema de controle financeiro online"
            className={styles.img}
          />
        </Link>
      </div>


      <div className={styles.container}>
        <div className={styles.content}>
          <header>
            <h1 className={styles.title}>Sobre o Gestão Financeira Pro</h1>
            <p className={styles.subtitle}>Sua solução completa para controle financeiro online</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Quem Somos</h2>
            <p className={styles.text}>
              O Gestão Financeira Pro não nasceu apenas como um sistema; surgiu como uma resposta às necessidades reais de pessoas que lutam diariamente para construir uma vida melhor. Foi na jornada de alguém que "mata um leão por dia" em busca de seus objetivos que encontramos a inspiração genuína para desenvolver o GFP.
            </p>
            <p className={styles.text}>
              Gostaríamos de apresentar a vocês o Zé do Queijo. Um homem simples, trabalhador, que percorre as ruas de porta em porta, oferecendo seus queijos frescos e saborosos. Assim como muitos vendedores autônomos, Zé enfrenta a indiferença e, por vezes, o descaso de uma sociedade que nem sempre reconhece o valor e o esforço por trás de cada venda, de cada porta batida.
            </p>
            <p className={styles.text}>
              A vida de Zé do Queijo, com seus altos e baixos, suas incertezas e sua resiliência inabalável, nos tocou profundamente. Vimos nele a representação de tantos brasileiros que trabalham arduamente, mas que muitas vezes não possuem as ferramentas adequadas para gerenciar seu suado dinheiro.
            </p>
            <p className={styles.text}>
              Foi pensando em Zé e em milhões de trabalhadores como ele que trilhamos o caminho para criar o GFP. Nossa missão se tornou clara: desenvolver uma ferramenta acessível e intuitiva que permitisse a qualquer pessoa, independentemente de sua área de atuação ou nível de conhecimento financeiro, assumir o controle de suas finanças.
            </p>
            <p className={styles.text}>
              Queríamos que o Zé do Queijo, e todos que acessam o nosso sistema, pudessem organizar sua vida financeira com mais gestão, transformando o esforço diário em segurança e prosperidade. A história de Zé do Queijo é a força motriz por trás do GFP. É um lembrete constante de que nossa ferramenta tem um propósito maior: empoderar pessoas reais a alcançarem a estabilidade financeira que merecem.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Nossa Plataforma</h2>
            <p className={styles.text}>
              Nosso software de controle financeiro é uma solução 100% online, desenvolvida com
              tecnologia de ponta para oferecer máxima segurança, simplicidade e eficiência no
              gerenciamento de receitas e despesas. A plataforma permite que você tenha controle
              total sobre tudo o que entra e sai do seu caixa, desde vendas e recebimentos até
              contas a pagar.
            </p>
            <p className={styles.text}>
              Diferentemente de outros sistemas complexos e caros disponíveis no mercado, nossa
              plataforma foi projetada com foco na usabilidade e acessibilidade. Não é necessário
              conhecimento técnico avançado ou treinamento extensivo para começar a usar. Em
              poucos minutos, qualquer pessoa pode estar controlando suas finanças de forma
              profissional e organizada.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Principais Funcionalidades</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Controle de Receitas e Despesas</h3>
                <p className={styles.text}>
                  Registre e categorize todas as suas entradas e saídas financeiras com facilidade.
                  Nossa interface intuitiva permite adicionar transações rapidamente, com campos
                  personalizáveis para descrição, categoria, data e valor.
                </p>
              </div>

              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Categorização Inteligente</h3>
                <p className={styles.text}>
                  Organize suas transações em categorias personalizáveis como alimentação,
                  transporte, moradia, lazer, e muito mais. Isso facilita a identificação
                  de padrões de gastos e oportunidades de economia.
                </p>
              </div>

              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Acesso Multiplataforma</h3>
                <p className={styles.text}>
                  Acesse suas informações financeiras de qualquer lugar, a qualquer hora,
                  através de computador, tablet ou smartphone. Seus dados ficam sincronizados
                  automaticamente em todos os dispositivos.
                </p>
              </div>

              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Segurança de Dados</h3>
                <p className={styles.text}>
                  Utilizamos criptografia de ponta e protocolos de segurança bancária para
                  garantir que suas informações financeiras estejam sempre protegidas.
                  Seus dados são seus e permanecerão sempre privados.
                </p>
              </div>

              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>Interface Simples</h3>
                <p className={styles.text}>
                  Design limpo e intuitivo que não requer curva de aprendizado. Desenvolvido
                  pensando na experiência do usuário, com navegação clara e funcionalidades
                  acessíveis para pessoas de todas as idades.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Por Que Escolher o Gestão Financeira Pro?</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefit}>
                <h4 className={styles.benefitTitle}>Totalmente Gratuito</h4>
                <p className={styles.text}>
                  Acreditamos que ferramentas de qualidade para controle financeiro devem ser
                  acessíveis a todos. Por isso, nossa plataforma é 100% gratuita, sem taxas
                  ocultas, sem limite de transações e sem prazo de validade.
                </p>
              </div>

              <div className={styles.benefit}>
                <h4 className={styles.benefitTitle}>Sem Instalação</h4>
                <p className={styles.text}>
                  Como é uma solução totalmente online, você não precisa instalar nenhum
                  software em seu computador. Basta acessar nosso site através de qualquer
                  navegador e começar a usar imediatamente.
                </p>
              </div>

              <div className={styles.benefit}>
                <h4 className={styles.benefitTitle}>Atualizações Constantes</h4>
                <p className={styles.text}>
                  Estamos sempre trabalhando para melhorar nossa plataforma. Novas
                  funcionalidades e melhorias são adicionadas regularmente, sempre baseadas
                  no feedback de nossos usuários.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Nossa Missão e Valores</h2>
            <p className={styles.text}>
              Nossa missão é criar ferramentas de verdade para pessoas reais — simples, acessíveis e eficientes. Queremos que qualquer pessoa, mesmo sem conhecimentos técnicos, consiga ter controle total sobre suas finanças, sem depender de soluções caras ou complicadas.
            </p>

            <p className={styles.text}>
              Nossos valores fundamentais incluem transparência total em nossas operações,
              compromisso com a privacidade e segurança dos dados de nossos usuários,
              inovação constante em nossas soluções tecnológicas, e dedicação ao
              atendimento excepcional ao cliente.
            </p>
            <p className={styles.text}>
              Acreditamos que a educação financeira é fundamental para o desenvolvimento
              pessoal e econômico da sociedade. Por isso, além de nossa plataforma,
              também oferecemos conteúdo educativo gratuito sobre gestão financeira,
              planejamento e investimentos através de nosso blog e redes sociais.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Compromisso com a Qualidade</h2>
            <p className={styles.text}>
              Estamos comprometidos em oferecer um serviço de excelência que supere as
              expectativas de nossos usuários. Nossa plataforma passa por testes rigorosos
              de qualidade e segurança, e mantemos os mais altos padrões de desenvolvimento
              de software para garantir estabilidade, performance e confiabilidade.
            </p>
            <p className={styles.text}>
              Trabalhamos continuamente para melhorar a experiência do usuário, coletando
              feedback, analisando métricas de uso e implementando melhorias baseadas nas
              necessidades reais de nossos usuários. Nosso objetivo é ser a plataforma
              de controle financeiro mais confiável e eficiente do mercado brasileiro.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Política de Privacidade e Termos de Uso</h2>
            <p className={styles.text}>
              Respeitamos integralmente a Lei Geral de Proteção de Dados (LGPD) e todas
              as regulamentações aplicáveis sobre privacidade e proteção de dados pessoais.
              Nossos termos de uso e política de privacidade estão sempre disponíveis em
              nosso site, detalhando como coletamos, utilizamos e protegemos suas informações.
            </p>
            <p className={styles.text}>
              Nunca compartilhamos dados pessoais ou financeiros de nossos usuários com
              terceiros sem consentimento explícito. Todos os dados são armazenados em
              servidores seguros com criptografia de nível bancário, e você mantém total
              controle sobre suas informações, podendo exportar ou excluir seus dados
              a qualquer momento.
            </p>
          </section>


          <footer className={styles.footer}>
            <p className={styles.text}>
              <strong>Gestão Financeira Pro</strong> - Transformando a forma como você
              controla suas finanças. Junte-se a muitos de usuários que já descobriram
              uma maneira mais simples e eficiente de gerenciar seu dinheiro.
            </p>
            <p className={styles.text}>
              <em>Última atualização: Junho de 2025</em>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

