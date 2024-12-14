/** @type {import('next').NextConfig} */
const nextConfig = {
    middleware: [
        './redirect.js', // Caminho relativo para o arquivo de middleware
      ],
};

export default nextConfig;
