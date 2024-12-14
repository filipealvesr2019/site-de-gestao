/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:path*', // Caminho relativo, capturando todas as rotas
            destination: (req) => {
              // Verifique se o domínio não é o de destino
              if (req.headers.host === 'www.gestaofinanceirapro.online') {
                return 'https://www.gestaofinanceirapro.com.br/:path*';
              }
              return req.url; // Se já estiver no destino, não faz o redirecionamento
            },
            permanent: true, // Redirecionamento permanente (status 301)
          },
        ]
      },
};

export default nextConfig;
