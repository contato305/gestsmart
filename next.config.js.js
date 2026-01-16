/** @type {import('next').NextConfig} */
const nextConfig = {
  // permite next export
  output: 'export',
  // evita otimizações de imagem que dependem do servidor
  images: { unoptimized: true },
  // gera /index.html, /about/index.html etc.
  trailingSlash: true,
};

module.exports = nextConfig;