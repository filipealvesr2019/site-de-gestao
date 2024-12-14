/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/:path*', // Caminho relativo, capturando todas as rotas
            destination: 'https://www.gestaofinanceirapro.com.br/:path*', // URL de destino com domínio completo
            permanent: true, // Redirecionamento permanente (status 301)
          },
        ]
      },
};

export default nextConfig;
