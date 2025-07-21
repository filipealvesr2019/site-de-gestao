"use client";

import React, { useState, useEffect } from "react";
import styles from "./LandinPage.module.css";
import { useRouter } from "next/navigation";

const GestaoFinanceiraPro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [logoClicked, setLogoClicked] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    transactions: 0,
    satisfaction: 0,
  });
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);

    // Animar estatísticas para 100+
    const animateStats = () => {
      let usersCount = 0;
      let transactionsCount = 0;
      let satisfactionCount = 0;
      const target = 100;
      const interval = setInterval(() => {
        if (usersCount < target) usersCount += 10;
        if (transactionsCount < target) transactionsCount += 10;
        if (satisfactionCount < target) satisfactionCount += 10;
        if (usersCount > target) usersCount = target;
        if (transactionsCount > target) transactionsCount = target;
        if (satisfactionCount > target) satisfactionCount = target;
        setAnimatedStats({
          users: usersCount,
          transactions: transactionsCount,
          satisfaction: satisfactionCount,
        });
        if (
          usersCount >= target &&
          transactionsCount >= target &&
          satisfactionCount >= target
        ) {
          clearInterval(interval);
        }
      }, 50);
    };
    setTimeout(animateStats, 1000);
  }, []);

  const handleLogoClick = () => {
    setLogoClicked(true);
    setTimeout(() => {
      setLogoClicked(false);
    }, 600);
  };

  // Função para redirecionar para login
  const handleAcessarSistema = () => {
    router.push("/login");
  };

  // Funções para controlar o modal de imagem
  const openModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = 'unset'; // Restaura scroll do body
  };

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const services = [
    {
      title: "Controle de Receitas e Despesas",
      description:
        "Registre todas as suas vendas, pagamentos e gastos de forma simples e organizada. Tenha controle total sobre tudo que entra e sai do seu caixa, com categorização automática e relatórios detalhados para uma visão clara das suas finanças.",
      icon: "fas fa-dollar-sign",
      colorClass: "receitasDespesas",
    },
    {
      title: "Gerenciamento de Contas e Dívidas",
      description:
        "Nunca mais perca prazos ou se desorganize com pagamentos. Gerencie todas as suas contas a pagar e receber, com lembretes automáticos e controle de vencimentos para manter suas finanças sempre em dia.",
      icon: "fas fa-clipboard-list",
      colorClass: "contasDividas",
    },
    {
      title: "Fluxo de Caixa Inteligente",
      description:
        "Visualize seu fluxo de caixa de forma clara e intuitiva. Acompanhe a evolução das suas finanças com relatórios que ajudam você a tomar decisões mais assertivas para o seu negócio.",
      icon: "fas fa-chart-line",
      colorClass: "fluxoCaixa",
    },
    {
      title: "Cadastro de Produtos e Serviços",
      description:
        "Organize seu produtos e serviços. Controle preços, custos para otimizar seus resultados ",
      icon: "fas fa-tags",
    },
    {
      title: "Recibos e Comprovantes",
      description:
        "Gere recibos profissionais e comprovantes de pagamento com facilidade. Imprima ou baixe documentos organizados para manter sua documentação fiscal sempre em ordem.",
      icon: "fas fa-receipt",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Loja da Maria - Confecções",
      text: "Desde que comecei a usar o sistema, consegui organizar completamente minhas vendas e gastos. Agora sei exatamente quanto lucro tenho por mês e posso planejar melhor meus investimentos. É realmente gratuito e muito fácil de usar!",
    },
    {
      name: "João Santos",
      company: "Santos Serviços Gerais",
      text: "Como prestador de serviços, sempre tive dificuldade para controlar meus recebimentos. Com o sistema, consigo acompanhar tudo online e nunca mais perdi um prazo de pagamento. Minha vida financeira mudou completamente!",
    },
    {
      name: "Ana Costa",
      company: "Doceria da Ana",
      text: "O sistema me ajudou a sair do vermelho! Consegui identificar onde estava gastando demais e organizar melhor meus custos. Hoje meu negócio está no azul e crescendo. Recomendo para todos os empreendedores!",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img 
              src="/images/gfplogo.png" 
              alt="Gestão Financeira Pro"
              className={styles.logoImage}
            />
          </div>
          <ul className={styles.navMenu}>
            <li>
              <a href="#home">
                <i className="fas fa-home"></i> Início
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="fas fa-cogs"></i> Funcionalidades
              </a>
            </li>
            <li>
              <a href="#mission">
                <i className="fas fa-heart"></i> Nossa Missão
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fas fa-info-circle"></i> Como Funciona
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fas fa-rocket"></i> Começar Agora
              </a>
            </li>
          </ul>
          <button className={styles.ctaButton} onClick={handleAcessarSistema}>
            <i className="fas fa-sign-in-alt"></i> Acessar Sistema
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className={`${styles.hero} ${isVisible ? styles.fadeIn : ""}`}
        id="home"
      >
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              De graça, comece hoje o caminho para ficar no{" "}
              <span className={styles.highlight}>azul</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Controle suas receitas, despesas e fluxo de caixa de forma simples
              e eficiente. sem custos - direto do seu
              navegador. Sua travessia rumo ao azul da estabilidade financeira começa aqui!
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton} onClick={handleAcessarSistema}>
                Começar Gratuitamente
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.logoContainer}>
              <img
                src="/images/simbolo.png"
                alt="Símbolo da Gestão Financeira Pro"
                className={`${styles.animatedLogo} ${
                  logoClicked ? styles.clicked : ""
                }`}
                onClick={handleLogoClick}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} id="services">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Funcionalidades Completas e Gratuitas
          </h2>
          <p className={styles.sectionSubtitle}>
            Tudo que você precisa para organizar suas finanças e fazer seu
            negócio crescer
          </p>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.serviceCard} ${
                  activeService === index ? styles.active : ""
                } ${service.colorClass ? styles[service.colorClass] : ""}`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={styles.serviceIcon}>
                  <i className={service.icon}></i>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <button className={styles.serviceButton} onClick={handleAcessarSistema}>
                  Experimentar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Screenshots Section */}
      <section className={styles.systemScreenshots} id="screenshots">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Veja o Sistema em Ação
          </h2>
          <p className={styles.sectionSubtitle}>
            Conheça a interface simples e intuitiva que vai transformar o controle das suas finanças
          </p>
          <div className={styles.screenshotsGrid}>
            <div className={styles.screenshotCard}>
              <div className={styles.screenshotImageContainer}>
                <img 
                  src="https://imgur.com/uPXUJzw.jpg" 
                  alt="Interface do sistema de gestão financeira mostrando dashboard principal"
                  className={styles.screenshotImage}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal("https://imgur.com/uPXUJzw.jpg", "Interface do sistema de gestão financeira mostrando dashboard principal");
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <div className={styles.screenshotOverlay}>
                  <div className={styles.overlayContent}>
                    <h4>Dashboard Principal</h4>
                    <p>Visualize todas as suas movimentações financeiras em uma interface clara e organizada</p>
                  </div>
                </div>
              </div>
              <div className={styles.screenshotInfo}>
                <h3>Controle Total das Suas Finanças</h3>
                <p>
                  Acompanhe receitas, despesas e o status de pagamento de cada movimentação. 
                  Filtre por período, cliente ou tipo de transação para ter a informação exata que precisa.
                </p>
                <div className={styles.screenshotFeatures}>
                  <div className={styles.featureTag}>
                    <i className="fas fa-check"></i>
                    Relatórios em tempo real
                  </div>
                  <div className={styles.featureTag}>
                    <i className="fas fa-check"></i>
                    Filtros personalizados
                  </div>
                  <div className={styles.featureTag}>
                    <i className="fas fa-check"></i>
                    Status de pagamento
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.screenshotCard}>
              <div className={styles.screenshotImageContainer}>
                <img 
                  src="https://imgur.com/H0NbbHg.jpg" 
                  alt="Exemplo de recibo gerado pelo sistema"
                  className={styles.screenshotImage}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal("https://imgur.com/H0NbbHg.jpg", "Exemplo de recibo gerado pelo sistema");
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <div className={styles.screenshotOverlay}>
                  <div className={styles.overlayContent}>
                    <h4>Recibos Profissionais</h4>
                    <p>Gere comprovantes organizados e profissionais para seus clientes</p>
                  </div>
                </div>
              </div>
              <div className={styles.screenshotInfo}>
                <h3>Imprima ou baixe Recibos de Receitas ou Despesas</h3>
                <p>
                  Gere recibos e comprovantes.
                  necessárias: descrição, valores, datas de vencimento e totais calculados automaticamente.
                </p>
                <div className={styles.screenshotFeatures}>
                  <div className={styles.featureTag}>
                    <i className="fas fa-check"></i>
                    Recebo basico
                  </div>
                  <div className={styles.featureTag}>
                    <i className="fas fa-check"></i>
                    Cálculos automáticos
                  </div>
                  <div className={styles.featureTag}>
                    <i className="fas fa-check"></i>
                    Fácil impressão
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.systemBenefits}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-eye"></i>
              </div>
              <div className={styles.benefitText}>
                <h4>Interface Intuitiva</h4>
                <p>Design pensado para ser fácil de usar, mesmo para quem não tem experiência com sistemas</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className={styles.benefitText}>
                <h4>Responsivo</h4>
                <p>Funciona perfeitamente em computadores, tablets e smartphones</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <div className={styles.benefitText}>
                <h4>Acesso 24/7</h4>
                <p>Consulte suas informações financeiras a qualquer hora, de qualquer lugar</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaScreenshots}>
            <button className={styles.primaryButton} onClick={handleAcessarSistema}>
              Experimentar o Sistema Agora
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section - Nova Seção */}
      <section className={styles.mission} id="mission">
        <div className={styles.sectionContainer}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.sectionTitle}>
                Nossa Missão: Sua Tranquilidade Financeira
              </h2>
              <p className={styles.missionDescription}>
                Acreditamos que toda pessoa merece viver com tranquilidade financeira. 
                O <span className={styles.blueHighlight}>azul</span> não é apenas uma cor - 
                é o símbolo da serenidade que você sente quando suas finanças estão organizadas 
                e sob controle.
              </p>
              <p className={styles.missionDescription}>
                Nosso objetivo é simples: oferecer a ferramenta necessária para que você 
                possa tomar decisões financeiras mais conscientes e caminhar em direção à 
                estabilidade que tanto busca. Não prometemos milagres ou fórmulas mágicas, 
                mas sim um caminho claro e organizado para você construir sua própria jornada 
                financeira.
              </p>
              <div className={styles.missionValues}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <span className={styles.blueCircle}>🎯</span>
                  </div>
                  <div className={styles.valueText}>
                    <h4>Clareza</h4>
                    <p>Informações simples e diretas para você entender exatamente onde está financeiramente</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <span className={styles.blueCircle}>🤝</span>
                  </div>
                  <div className={styles.valueText}>
                    <h4>Acessibilidade</h4>
                    <p>Ferramentas gratuitas e fáceis de usar, porque organização financeira não deve ser privilégio</p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <span className={styles.blueCircle}>🌱</span>
                  </div>
                  <div className={styles.valueText}>
                    <h4>Crescimento</h4>
                    <p>Acompanhamos você em cada passo da sua evolução financeira, no seu próprio ritmo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.missionVisual}>
              <div className={styles.blueGradientCard}>
                <h3>O que significa estar no azul?</h3>
                <div className={styles.blueFeatures}>
                  <div className={styles.blueFeature}>
                    <span>💙</span>
                    <p>Dormir tranquilo sabendo que suas contas estão em dia</p>
                  </div>
                  <div className={styles.blueFeature}>
                    <span>💙</span>
                    <p>Ter clareza sobre seus gastos e receitas</p>
                  </div>
                  <div className={styles.blueFeature}>
                    <span>💙</span>
                    <p>Planejar o futuro com mais confiança</p>
                  </div>
                  <div className={styles.blueFeature}>
                    <span>💙</span>
                    <p>Reduzir o estresse relacionado ao dinheiro</p>
                  </div>
                </div>
                <div className={styles.blueQuote}>
                  "A tranquilidade financeira não é sobre ter muito dinheiro, 
                  mas sobre ter controle e clareza sobre o que você tem."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about} id="about">
        <div className={styles.sectionContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>
                Como Funciona?
              </h2>
              <p className={styles.aboutDescription}>
                Nosso sistema foi desenvolvido para ser simples e intuitivo. Em
                poucos minutos você estará controlando suas finanças de forma
                profissional, sem precisar de conhecimento técnico ou
                experiência prévia. Tudo funciona direto no seu navegador, sem
                instalações ou configurações complicadas.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className="fas fa-desktop"></i>
                  </span>
                  <span>
                    <strong>Acesse o Sistema:</strong> Sem cadastro complicado,
                    direto pelo navegador
                  </span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className="fas fa-edit"></i>
                  </span>
                  <span>
                    <strong>Registre Suas Receitas e Despesas:</strong> Informe
                    suas vendas, pagamentos, contas e dívidas
                  </span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className="fas fa-chart-area"></i>
                  </span>
                  <span>
                    <strong>Visualize Seu Fluxo de Caixa:</strong> Controle tudo
                    de forma simples e organizada
                  </span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span>
                    <strong>100% Online e Gratuito:</strong> Sem downloads, sem
                    mensalidades, sem pegadinhas
                  </span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className="fas fa-smile"></i>
                  </span>
                  <span>
                    <strong>Interface Intuitiva:</strong> Fácil de usar, mesmo
                    para quem não tem experiência
                  </span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <span>
                    <strong>Seguro e Confiável:</strong> Seus dados protegidos
                    com tecnologia de ponta
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  100+
                </span>
                <span className={styles.statLabel}>Usuários Ativos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  100+
                </span>
                <span className={styles.statLabel}>Transações Registradas</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  100%
                </span>
                <span className={styles.statLabel}>No seu navegador</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact} id="contact">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            Comece Hoje Mesmo - É Gratuito!
          </h2>
          <p className={styles.sectionSubtitle}>
            Pare de perder o controle das suas finanças. Comece agora mesmo a
            organizar seu dinheiro e veja a diferença que um controle financeiro
            adequado pode fazer na sua vida.
          </p>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.benefitsList}>
                <h3>
                  Por que usar nosso sistema gratuito?
                </h3>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <i className="fas fa-bullseye"></i>
                  </span>
                  <span>
                    <strong>Simplicidade Total:</strong> Interface intuitiva,
                    fácil de usar
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <i className="fas fa-money-bill-wave"></i>
                  </span>
                  <span>
                    <strong>Controle Completo:</strong> Acompanhe receitas,
                    despesas e lucros
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <i className="fas fa-calendar-check"></i>
                  </span>
                  <span>
                    <strong>Nunca Perca Prazos:</strong> Gerencie contas e
                    dívidas com eficiência
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <i className="fas fa-globe"></i>
                  </span>
                  <span>
                    <strong>100% Online:</strong> Acesse de qualquer lugar, sem
                    instalações
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <i className="fas fa-gift"></i>
                  </span>
                  <span>
                    <strong>Totalmente Gratuito:</strong> Sem mensalidades ou
                    taxas ocultas
                  </span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>
                    <i className="fas fa-bolt"></i>
                  </span>
                  <span>
                    <strong>Resultados Rápidos:</strong> Veja melhorias nas suas
                    finanças em dias
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.ctaSection}>
              <div className={styles.ctaCard}>
                <h3>
                  Pronto para ficar no azul?
                </h3>
                <p>
                  Junte-se a milhares de pessoas que já organizaram suas
                  finanças conosco.
                </p>
                <button className={styles.mainCtaButton} onClick={handleAcessarSistema}>
                  Acessar Sistema Gratuitamente
                </button>
                <p className={styles.ctaNote}>
                  <i className="fas fa-check"></i> Sem cadastro complicado
                  <br />
                  <i className="fas fa-check"></i> Sem cartão de crédito
                  <br />
                  <i className="fas fa-check"></i> Comece em menos de 2 minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.sectionContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <img 
                src="/images/gfplogo.png" 
                alt="Gestão Financeira Pro"
                className={styles.footerLogoImage}
              />
            </div>
            <p className={styles.footerText}>
              Controle financeiro online, simples e 100% gratuito para você organizar sua vida financeira
            </p>
            <div className={styles.socialLinks}>
              <a href="#instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/gfproweb" aria-label="Twitter" >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>
              © 2024 Gestão Financeira Pro. Todos os direitos reservados.
            </p>
            <div className={styles.footerLinks}>
              <a href="/politica-de-privacidade">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso">
                Termos de Uso
              </a>
              <a href="/sobre">
                Sobre Nós
              </a>
              <a href="/blog">
                Blog
              </a>
              <a href="#contact">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Imagem */}
      {isModalOpen && modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={modalImage.src} 
              alt={modalImage.alt} 
              className={styles.modalImage}
            />
            <div className={styles.modalCaption}>
              {modalImage.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestaoFinanceiraPro;

