import styles from "./page.module.css";
import Login from "./Login";
import Script from "next/script";
import UserAuth from "../components/UserAuth/UserAuth";
export const metadata = {
  title: "Gestão Financeira Pro", // Define o título da página
  description:
    "Sistema online de controle financeiro simples e eficiente para gerenciar receitas e despesas. Ele permite que você controle tudo o que entra e sai do caixa, desde vendas e pagamentos até contas e dívidas.", // Descrição da página
  icons: {
    icon: "/favicon.ico", // Define o favicon
  },
  keywords: ["Gestão Financeira", "gestão financeira", "gestão pessoal", "Software de controle financeiro gratuito", "site gratuito de controle financeiro"],
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gestão Financeira Pro",
    url: "https://www.gestaofinanceirapro.com.br",
    description:
      "Software de controle financeiro gratuito simples e eficiente para gerenciar receitas e despesas. Ele permite que você controle tudo o que entra e sai do caixa, desde vendas e pagamentos até contas e dívidas.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.gestaofinanceirapro.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className={styles.container}>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?idG-1F3VKC0M2V`} // Substitua pelo seu Measurement ID
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'G-1F3VKC0M2V', { page_path: window.location.pathname });`}
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
