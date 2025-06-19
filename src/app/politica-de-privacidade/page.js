import React from 'react';
import styles from './PoliticaDePrivacidade.module.css';
import Link from 'next/link';

const PoliticaDePrivacidade = () => {
  return (
    <>
      <Link href={"https://www.gestaofinanceirapro.com.br"} className={styles.Link}>
        <img
          src="https://imgur.com/hQ8nDYj.jpeg"
          alt="icone do gestão financeira pro"
          className={styles.img}
        />
      </Link>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Política de Privacidade do Gestão Financeira Pro</h1>
          <p className={styles.text}>
            Sua privacidade é de extrema importância para nós no Gestão Financeira Pro. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso software e serviços. Ao acessar ou utilizar o Gestão Financeira Pro, você concorda com as práticas descritas nesta política.
          </p>

          <h2 className={styles.subtitle}>1. Informações que Coletamos</h2>
          <p className={styles.text}>
            Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços a você:
          </p>
          <ul>
            <li><strong>Informações Fornecidas por Você:</strong> Incluem dados que você nos fornece diretamente ao se registrar para uma conta, como nome, endereço de e-mail, informações de contato e credenciais de login. Também coletamos informações que você insere ao utilizar o software, como dados financeiros (receitas, despesas, categorias, etc.), notas e quaisquer outras informações que você opte por armazenar em sua conta.</li>
            <li><strong>Informações Coletadas Automaticamente:</strong> Ao acessar e usar o Gestão Financeira Pro, podemos coletar automaticamente certas informações sobre seu dispositivo e seu uso do serviço. Isso pode incluir seu endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo gasto em páginas, links clicados e outras estatísticas de uso. Essas informações nos ajudam a entender como nossos usuários interagem com o serviço e aprimorar a experiência do usuário.</li>
            <li><strong>Informações de Cookies e Tecnologias Semelhantes:</strong> Utilizamos cookies e tecnologias de rastreamento semelhantes para monitorar a atividade em nosso serviço e armazenar certas informações. Cookies são arquivos com uma pequena quantidade de dados que podem incluir um identificador exclusivo anônimo. Eles são enviados para o seu navegador a partir de um site e armazenados no seu dispositivo. As tecnologias de rastreamento também usadas são beacons, tags e scripts para coletar e rastrear informações e para melhorar e analisar nosso serviço. Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, talvez não consiga usar algumas partes do nosso serviço.</li>
          </ul>

          <h2 className={styles.subtitle}>2. Como Usamos Suas Informações</h2>
          <p className={styles.text}>
            Utilizamos as informações coletadas para diversas finalidades, incluindo:
          </p>
          <ul>
            <li>Para fornecer e manter nosso serviço, garantindo que o software funcione corretamente e esteja disponível para você.</li>
            <li>Para gerenciar sua conta e fornecer suporte ao cliente, respondendo às suas perguntas e resolvendo problemas técnicos.</li>
            <li>Para personalizar sua experiência, adaptando o conteúdo e as funcionalidades do software às suas preferências e necessidades.</li>
            <li>Para melhorar, otimizar e desenvolver novos recursos e serviços, analisando tendências de uso e feedback dos usuários.</li>
            <li>Para monitorar o uso do serviço e detectar, prevenir e resolver problemas técnicos ou de segurança.</li>
            <li>Para fins de marketing e comunicação, enviando-lhe atualizações, newsletters e informações sobre nossos serviços, desde que você tenha consentido em recebê-las.</li>
            <li>Para cumprir obrigações legais e regulatórias, incluindo a proteção contra fraudes e a aplicação de nossos Termos de Uso.</li>
          </ul>

          <h2 className={styles.subtitle}>3. Compartilhamento de Suas Informações</h2>
          <p className={styles.text}>
            Não vendemos, alugamos ou trocamos suas informações pessoais com terceiros. No entanto, podemos compartilhar suas informações nas seguintes situações:
          </p>
          <ul>
            <li><strong>Com Provedores de Serviços:</strong> Podemos empregar empresas e indivíduos terceirizados para facilitar nosso serviço, fornecer o serviço em nosso nome, executar serviços relacionados ao serviço ou nos ajudar a analisar como nosso serviço é usado. Esses terceiros têm acesso às suas informações pessoais apenas para realizar essas tarefas em nosso nome e são obrigados a não divulgá-las ou usá-las para qualquer outra finalidade.</li>
            <li><strong>Para Conformidade Legal:</strong> Podemos divulgar suas informações pessoais quando exigido por lei ou em resposta a solicitações válidas de autoridades públicas (por exemplo, um tribunal ou agência governamental).</li>
            <li><strong>Para Proteger Direitos e Propriedade:</strong> Podemos divulgar suas informações para proteger os direitos, propriedade ou segurança do Gestão Financeira Pro, de nossos usuários ou do público, conforme exigido ou permitido por lei.</li>
            <li><strong>Com o Seu Consentimento:</strong> Podemos compartilhar suas informações para qualquer outra finalidade com o seu consentimento explícito.</li>
          </ul>

          <h2 className={styles.subtitle}>4. Publicidade e Google AdSense</h2>
          <p className={styles.text}>
            O Gestão Financeira Pro utiliza o Google AdSense para exibir anúncios em nosso site. O Google, como fornecedor terceirizado, utiliza cookies para veicular anúncios em nosso serviço. O uso de cookies DART pelo Google permite que ele veicule anúncios para nossos usuários com base em sua visita ao nosso serviço e a outros sites na Internet. Você pode desativar o uso do cookie DART visitando a política de privacidade da rede de anúncios e conteúdo do Google. [Link para a política de privacidade da rede de anúncios e conteúdo do Google: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>].
          </p>
          <p className={styles.text}>
            Informamos que fornecedores e redes de anúncios de terceiros podem veicular anúncios em nosso site. Você pode visitar os sites desses fornecedores e redes de anúncios para desativar o uso de cookies para publicidade personalizada, se eles oferecerem essa opção. Alternativamente, você pode visitar <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info/choices/</a> para desativar o uso de cookies por alguns fornecedores terceirizados para publicidade personalizada.
          </p>

          <h2 className={styles.subtitle}>5. Segurança dos Dados</h2>
          <p className={styles.text}>
            A segurança de suas informações é nossa prioridade. Implementamos medidas de segurança técnicas e organizacionais razoáveis para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro e, portanto, não podemos garantir sua segurança absoluta. Fazemos o nosso melhor para proteger suas informações, mas você também é responsável por manter a segurança de suas credenciais de login.
          </p>

          <h2 className={styles.subtitle}>6. Retenção de Dados</h2>
          <p className={styles.text}>
            Reteremos suas informações pessoais apenas pelo tempo necessário para as finalidades estabelecidas nesta Política de Privacidade. Reteremos e usaremos suas informações na medida necessária para cumprir nossas obrigações legais (por exemplo, se formos obrigados a reter seus dados para cumprir as leis aplicáveis), resolver disputas e fazer cumprir nossos acordos legais e políticas.
          </p>

          <h2 className={styles.subtitle}>7. Seus Direitos de Proteção de Dados (LGPD)</h2>
          <p className={styles.text}>
            De acordo com a Lei Geral de Proteção de Dados (LGPD) do Brasil, você tem certos direitos em relação às suas informações pessoais. Estes incluem o direito de:
          </p>
          <ul>
            <li>Acessar suas informações pessoais e obter uma cópia delas.</li>
            <li>Solicitar a correção de informações imprecisas ou incompletas.</li>
            <li>Solicitar a exclusão de suas informações pessoais.</li>
            <li>Opor-se ao processamento de suas informações pessoais.</li>
            <li>Solicitar a portabilidade de suas informações pessoais para outro provedor de serviços.</li>
            <li>Retirar seu consentimento a qualquer momento, quando o processamento for baseado no consentimento.</li>
          </ul>
          <p className={styles.text}>
            Para exercer qualquer um desses direitos, entre em contato conosco através dos detalhes fornecidos na seção "Contato" abaixo.
          </p>

          <h2 className={styles.subtitle}>8. Links para Outros Sites</h2>
          <p className={styles.text}>
            Nosso serviço pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, será direcionado para o site desse terceiro. Aconselhamos vivamente que você revise a Política de Privacidade de todos os sites que visitar. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
          </p>

          <h2 className={styles.subtitle}>9. Privacidade de Crianças</h2>
          <p className={styles.text}>
            Nosso serviço não se destina a menores de 18 anos ("Crianças"). Não coletamos intencionalmente informações de identificação pessoal de menores de 18 anos. Se você é pai/mãe ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco. Se tomarmos conhecimento de que coletamos informações pessoais de crianças sem verificação do consentimento dos pais, tomaremos medidas para remover essas informações de nossos servidores.
          </p>

          <h2 className={styles.subtitle}>10. Alterações a Esta Política de Privacidade</h2>
          <p className={styles.text}>
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página. Aconselhamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade são eficazes quando são publicadas nesta página.
          </p>

          <h2 className={styles.subtitle}>11. Contato</h2>
          <p className={styles.text}>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:
          </p>

          <p className={styles.text}>
            <strong>Última atualização: 19 de Junho de 2025</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default PoliticaDePrivacidade;


