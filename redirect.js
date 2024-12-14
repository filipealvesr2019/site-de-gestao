import { NextResponse } from 'next/server';

export function middleware(req) {
  // Domínio acessado pelo usuário
  const currentDomain = req.headers.get('host');

  // Domínio principal para onde quer redirecionar
  const mainDomain = 'https://www.gestaofinanceirapro.com.br';

  // Redirecionar para o domínio principal se o domínio não for o principal
  if (currentDomain !== mainDomain) {
    return NextResponse.redirect(`https://${mainDomain}${req.nextUrl.pathname}`, 301);
  }

  // Continuar normalmente para o site principal
  return NextResponse.next();
}

// Configurar os caminhos onde o middleware será aplicado (opcional)
export const config = {
  matcher: '/:path*', // Aplica em todas as rotas
};
