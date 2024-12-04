import styles from "./page.module.css";
import Login from "./Login";
import Script from "next/script";
import UserAuth from "../components/UserAuth/UserAuth";
export const metadata = {
  title: "nome da loja", // Define o título da página
  description:
    "Sistema online de controle financeiro simples e eficiente para gerenciar receitas e despesas. Ele permite que você controle tudo o que entra e sai do caixa, desde vendas e pagamentos até contas e dívidas.", // Descrição da página
  icons: {
    icon: "/favicon.svg", // Define o favicon
  },
  keywords: ["nome da loja", "gestão financeira", "gestão pessoal"],
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nome do site",
    url: "https://meusite.com.br/",
    description:
      "Sistema online de controle financeiro simples e eficiente para gerenciar receitas e despesas. Ele permite que você controle tudo o que entra e sai do caixa, desde vendas e pagamentos até contas e dívidas.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://meusite.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className={styles.container}>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?idG-sdsdsdsd`} // Substitua pelo seu Measurement ID
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'G-dsdsdsds', { page_path: window.location.pathname });`}
      </Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Login />
      <UserAuth />
      

       
    </div>
  );
}
