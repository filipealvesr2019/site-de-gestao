import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
    '/api/products(.*)',
    '/api/receitas(.*)',
    '/api/despesas(.*)',
    '/api/diferenca(.*)',
    '/api/filtrar(.*)',
    '/api/reports(.*)',
    '/dashboard(.*)',
    
]);

export default clerkMiddleware(async (auth, req) => {
    // Verifica se o hostname é o que você deseja redirecionar
    const { hostname } = req.nextUrl;

    if (hostname === 'www.gestaofinanceirapro.online') {
        const url = req.nextUrl.clone();
        url.hostname = 'www.gestaofinanceirapro.com.br';
        return NextResponse.redirect(url, 301); // Redirecionamento permanente
    }

    // Protege as rotas se necessário
    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    // Permite continuar com a requisição
    return NextResponse.next();
});

export const config = {
    matcher: [
        // Ignora arquivos internos do Next.js e todos os arquivos estáticos
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Sempre executa para rotas da API
        '/(api|trpc)(.*)',
    ],
};
