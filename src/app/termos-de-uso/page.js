import Link from "next/link";
import Login from "../Login";
import styles from "./TermosDeUso.module.css";

export default function TermosDeUso() {
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
          <h1 className={styles.title}>Termos de Uso do Gestão Financeira Pro</h1>
          <p className={styles.text}>
            Bem-vindo ao Gestão Financeira Pro! Ao acessar ou utilizar nosso software e serviços,
            você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Por favor,
            leia-os atentamente. Se você não concordar com qualquer parte destes termos,
            não utilize nossos serviços.
          </p>

          <h2 className={styles.subtitle}>1. Aceitação dos Termos</h2>
          <p className={styles.text}>
            Estes Termos de Uso constituem um acordo legal vinculativo entre você, o usuário,
            e o Gestão Financeira Pro. Ao se registrar, acessar ou utilizar qualquer parte de
            nossos serviços, você reconhece que leu, entendeu e concordou em estar vinculado
            a estes Termos, bem como à nossa Política de Privacidade. Reservamo-nos o direito
            de modificar estes Termos a qualquer momento, e tais modificações entrarão em vigor
            imediatamente após a publicação. É sua responsabilidade revisar estes Termos
            periodicamente para estar ciente de quaisquer alterações.
          </p>

          <h2 className={styles.subtitle}>2. Descrição do Serviço</h2>
          <p className={styles.text}>
            O Gestão Financeira Pro é um software online gratuito projetado para auxiliar
            indivíduos e pequenas empresas no gerenciamento de suas finanças pessoais e
            profissionais. Nossos serviços incluem, mas não se limitam a, registro de receitas
            e despesas, categorização de transações, geração de relatórios financeiros e
            acesso a dados financeiros de forma organizada e intuitiva. Nosso objetivo é
            fornecer uma ferramenta simples e eficiente para o controle financeiro.
          </p>

          <h2 className={styles.subtitle}>3. Cadastro e Conta do Usuário</h2>
          <p className={styles.text}>
            Para acessar certas funcionalidades do Gestão Financeira Pro, pode ser necessário
            criar uma conta. Você concorda em fornecer informações precisas, completas e
            atualizadas durante o processo de registro e em manter essas informações
            sempre atualizadas. Você é o único responsável por manter a confidencialidade
            de sua senha e por todas as atividades que ocorrem em sua conta. Você concorda
            em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta
            ou qualquer outra violação de segurança. O Gestão Financeira Pro não será
            responsável por quaisquer perdas ou danos resultantes do seu não cumprimento
            desta obrigação.
          </p>

          <h2 className={styles.subtitle}>4. Uso Adequado do Serviço</h2>
          <p className={styles.text}>
            Você concorda em usar o Gestão Financeira Pro apenas para fins lícitos e de
            maneira que não infrinja os direitos de, ou restrinja ou iniba o uso e
            aproveitamento do serviço por terceiros. Comportamentos proibidos incluem
            assédio ou causar angústia ou inconveniência a qualquer outra pessoa, transmitir
            conteúdo obsceno ou ofensivo ou interromper o fluxo normal de diálogo dentro
            do Gestão Financeira Pro. Você não deve usar nosso serviço para:
          </p>
          <ul>
            <li>Publicar ou transmitir qualquer material que seja ilegal, ameaçador, abusivo,
                difamatório, vulgar, obsceno, pornográfico, profano ou indecente.</li>
            <li>Realizar qualquer atividade que constitua ou encoraje conduta que possa ser
                considerada uma ofensa criminal, dar origem a responsabilidade civil ou
                violar qualquer lei.</li>
            <li>Interferir ou interromper redes ou sites conectados ao serviço.</li>
            <li>Fazer, transmitir ou armazenar cópias eletrônicas de materiais protegidos por
                direitos autorais sem a permissão do proprietário.</li>
          </ul>

          <h2 className={styles.subtitle}>5. Propriedade Intelectual</h2>
          <p className={styles.text}>
            Todo o conteúdo presente no Gestão Financeira Pro, incluindo, mas não se limitando
            a, textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais,
            compilações de dados e software, é propriedade do Gestão Financeira Pro ou de seus
            fornecedores de conteúdo e é protegido pelas leis de direitos autorais e outras
            leis de propriedade intelectual. A compilação de todo o conteúdo neste site é
            propriedade exclusiva do Gestão Financeira Pro e protegida pelas leis de direitos
            autorais. Você não pode reproduzir, duplicar, copiar, vender, revender, visitar ou
            explorar de outra forma para qualquer finalidade comercial sem o consentimento
            expresso por escrito do Gestão Financeira Pro.
          </p>

          <h2 className={styles.subtitle}>6. Política de Privacidade</h2>
          <p className={styles.text}>
            Sua privacidade é de extrema importância para nós. Nossa Política de Privacidade,
            disponível em politica deprivacidade,
            descreve como coletamos, usamos e protegemos suas informações pessoais. Ao
            utilizar o Gestão Financeira Pro, você concorda com a coleta e uso de suas
            informações conforme descrito em nossa Política de Privacidade.
          </p>

          <h2 className={styles.subtitle}>7. Isenção de Garantias</h2>
          <p className={styles.text}>
            O Gestão Financeira Pro é fornecido 


"como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas,
            incluindo, mas não se limitando a, garantias implícitas de comercialização, adequação
            a uma finalidade específica e não violação. Não garantimos que o serviço será
            ininterrupto, oportuno, seguro ou livre de erros, ou que os resultados que possam
            ser obtidos com o uso do serviço serão precisos ou confiáveis.
          </p>

          <h2 className={styles.subtitle}>8. Limitação de Responsabilidade</h2>
          <p className={styles.text}>
            Em nenhuma circunstância o Gestão Financeira Pro, seus diretores, funcionários,
            parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer
            danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo,
            sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis,
            resultantes (i) do seu acesso ou uso ou incapacidade de acessar ou usar o serviço;
            (ii) de qualquer conduta ou conteúdo de terceiros no serviço; (iii) de qualquer
            conteúdo obtido do serviço; e (iv) de acesso não autorizado, uso ou alteração de
            suas transmissões ou conteúdo, seja com base em garantia, contrato, delito (incluindo
            negligência) ou qualquer outra teoria legal, quer tenhamos sido informados ou não
            da possibilidade de tais danos, e mesmo que um remédio aqui estabelecido seja
            considerado ter falhado em seu propósito essencial.
          </p>

          <h2 className={styles.subtitle}>9. Links para Outros Sites</h2>
          <p className={styles.text}>
            Nosso serviço pode conter links para sites ou serviços de terceiros que não são
            propriedade ou controlados pelo Gestão Financeira Pro. O Gestão Financeira Pro
            não tem controle e não assume responsabilidade pelo conteúdo, políticas de
            privacidade ou práticas de quaisquer sites ou serviços de terceiros. Você
            reconhece e concorda que o Gestão Financeira Pro não será responsável, direta
            ou indiretamente, por qualquer dano ou perda causada ou alegadamente causada
            por ou em conexão com o uso ou dependência de qualquer conteúdo, bens ou
            serviços disponíveis em ou através de tais sites ou serviços.
          </p>

          <h2 className={styles.subtitle}>10. Rescisão</h2>
          <p className={styles.text}>
            Podemos rescindir ou suspender seu acesso ao nosso serviço imediatamente, sem
            aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação,
            se você violar os Termos. Após a rescisão, seu direito de usar o serviço cessará
            imediatamente. Se você deseja rescindir sua conta, pode simplesmente parar de
            usar o serviço.
          </p>


          <h2 className={styles.subtitle}>11. Disposições Gerais</h2>
          <p className={styles.text}>
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil,
            sem considerar suas disposições sobre conflitos de leis. Nossa falha em
            aplicar qualquer direito ou disposição destes Termos não será considerada
            uma renúncia a esses direitos. Se qualquer disposição destes Termos for
            considerada inválida ou inexequível por um tribunal, as demais disposições
            destes Termos permanecerão em vigor. Estes Termos constituem o acordo
            integral entre nós em relação ao nosso serviço e substituem quaisquer
            acordos anteriores que possamos ter entre nós em relação ao serviço.
          </p>

          <h2 className={styles.subtitle}>12. Alterações nos Termos</h2>
          <p className={styles.text}>
            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir
            estes Termos a qualquer momento. Se uma revisão for material, tentaremos
            fornecer um aviso de pelo menos 30 dias antes que quaisquer novos termos
            entrem em vigor. O que constitui uma alteração material será determinado
            a nosso exclusivo critério. Ao continuar a acessar ou usar nosso serviço
            após essas revisões entrarem em vigor, você concorda em ficar vinculado
            aos termos revisados. Se você não concordar com os novos termos, por favor,
            pare de usar o serviço.
          </p>

          <p className={styles.text}>
            <strong>Última atualização: 19 de Junho de 2025</strong>
          </p>
        </div>
      </div>
    </>
  );
}


