// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.url;
  const hostname = new URL(url).hostname;

  // Verifica se o domínio é o 'gestaofinanceirapro.online' e redireciona para o principal
  if (hostname === 'www.gestaofinanceirapro.online') {
    const newUrl = url.replace('www.gestaofinanceirapro.online', 'www.gestaofinanceirapro.com.br');
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/*'],
};
