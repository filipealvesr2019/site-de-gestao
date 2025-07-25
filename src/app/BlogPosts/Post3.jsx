import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PostMulheresVendedoras() {

    
            const router = useRouter();
            
              // Função para redirecionar para login
          const handleAcessarSistema = () => {
            router.push("/login")
          }
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".story-section, .highlight-box");
            elements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }
            });
        };

        const initializeElements = () => {
            const elements = document.querySelectorAll(".story-section, .highlight-box");
            elements.forEach((element) => {
                element.style.opacity = "0";
                element.style.transform = "translateY(30px)";
                element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            });
        };

        initializeElements();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>A Virada Financeira: Como o Gestão Financeira Pro Salvou Minhas Vendas</title>
            </Head>

            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                }

                .container {
                    width: 100%;
                    margin: 0 auto;
                    padding: 20px;
                }

                .post-card {
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    margin: 20px 0;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .post-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
                }

                .header {
                    background: linear-gradient(135deg, #383838 0%, #141414 100%);
                    color: white;
                    padding: 40px 30px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }

                .header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
                    animation: float 20s infinite linear;
                }

                @keyframes float {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }

                .header h1 {
                    font-size: 2.5em;
                    margin-bottom: 10px;
                    position: relative;
                    z-index: 1;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }

                .header .subtitle {
                    font-size: 1.2em;
                    opacity: 0.9;
                    position: relative;
                    z-index: 1;
                }

                .content {
                    padding: 40px 30px;
                }

                .intro {
                    font-size: 1.1em;
                    color: #666;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-left: 4px solid #242424;
                    border-radius: 0 10px 10px 0;
                }

                .story-section {
                    margin: 30px 0;
                }

                .story-section h2 {
                    color: #030303;
                    font-size: 1.8em;
                    margin-bottom: 20px;
                    position: relative;
                    padding-bottom: 10px;
                }

                .story-section h2::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background: linear-gradient(90deg, #181818, #181818);
                    border-radius: 2px;
                }

                .story-text {
                    font-size: 1.1em;
                    line-height: 1.8;
                    margin-bottom: 20px;
                    text-align: justify;
                }

                .image-container {
                    margin: 30px 0;
                    text-align: center;
                    position: relative;
                }

                .image-container img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease;
                }

                .image-container img:hover {
                    transform: scale(1.02);
                }

                .image-caption {
                    font-style: italic;
                    color: #666;
                    margin-top: 10px;
                    font-size: 0.9em;
                }

                .highlight-box {
                    background: linear-gradient(135deg, #c7cafa 0%, #f0f1f8 100%);
                    border-radius: 15px;
                    padding: 25px;
                    margin: 30px 0;
                    position: relative;
                }

                .highlight-box::before {
                    content: '💡';
                    position: absolute;
                    top: -15px;
                    left: 20px;
                    bottom: -15px;
                    padding: 5px 10px;
                    border-radius: 50%;
                    font-size: 1.5em;
                }

                .cta-section {
                    background: linear-gradient(135deg, #5552fa 0%, #4035da 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 15px;
                    text-align: center;
                    margin: 30px 0;
                }

                .cta-button {
                    display: inline-block;
                    background: white;
                    color: #1b1b1b;
                    padding: 15px 30px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: bold;
                    font-size: 1.1em;
                    margin-top: 15px;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                }

                .cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                    background: #f8f9fa;
                }

                .footer {
                    text-align: center;
                    padding: 20px;
                    color: #666;
                    border-top: 1px solid #eee;
                    margin-top: 30px;
                }

                @media (max-width: 768px) {
                    .container {
                        padding: 10px;
                    }
                    
                    .header h1 {
                        font-size: 2em;
                    }
                    
                    .content {
                        padding: 20px;
                    }
                    
                    .story-section h2 {
                        font-size: 1.5em;
                    }
                }

                .pulse {
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            `}</style>

            <div className="container">
                <Link href="/blog" className="back-link">
                    ← Voltar para o Blog
                </Link>
                <article className="post-card">
                    <header className="header">
                        <h1>Da Bagunça ao Controle: Como o GFP pode transformar a Vida de Mulheres Vendedoras</h1>
                        <p className="subtitle">Como o Gestão Financeira Pro salvou minhas vendas — leia abaixo</p>
                    </header>

                    <div className="content">
                        <div className="intro">
                            <strong>Uma história de mudança de perspectiva:</strong> Descubra como uma vendedora autônoma conseguiu organizar completamente suas finanças e nunca mais perdeu uma nota de venda.
                        </div>

                        <div className="story-section">
                            <h2>O Problema que Assombra Milhares</h2>
                            <p className="story-text">
                                Era uma tarde como tantas outras, e a conversa com uma amiga vendedora de bijuterias e maquiagens me revelou um problema que assombra muitos empreendedores autônomos: <strong>a perda de notas de venda</strong>. Ela me falou algo que tinha perdido a nota de venda de uma cliente - isso é um problemão!
                            </p>
                            <p className="story-text">
                                Uma vendedora comum, como milhares de outras que vendem seus produtos para amigas e vizinhas no bairro, se viu em apuros. Imagine o volume de papel, de pequenas anotações, que ela acumulava. O controle do fluxo de caixa? Ah, esse era na base da sorte, um verdadeiro tiro no escuro. Se a pessoa não for organizada, a situação vira um caos.
                            </p>
                        </div>

                        <div className="image-container">
                            <img src="https://imgur.com/SLVlQlp.jpg" alt="Vendedora organizando suas finanças" />
                            <p className="image-caption">O desafio da organização financeira para vendedores autônomos</p>
                        </div>

                        <div className="story-section">
                            <h2>A Garra de Quem Quer Vencer</h2>
                            <p className="story-text">
                                Continuamos a conversar e, apesar do desabafo, percebi nela um toque de vontade de vencer, uma garra que é tão comum em muitas brasileiras. Ela é extremamente focada na economia e só fazia as notas de venda em papel porque, até então, não havia encontrado um sistema fácil e acessível que pudesse auxiliá-la na gestão de suas vendas.
                            </p>
                            <p className="story-text">
                                A tecnologia parecia um bicho de sete cabeças, ou algo distante da sua realidade. Mas eu sabia que existia uma solução perfeita para o caso dela.
                            </p>
                        </div>

                        <div className="highlight-box">
                            <h3 style={{ color: '#0c0c0c', marginBottom: '15px' }}>A Descoberta que Mudou Tudo</h3>
                            <p>Foi então que, como um bom amigo, apresentei a ela o <strong>Gestão Financeira Pro (GFP)</strong>. Expliquei que era uma ferramenta pensada para simplificar a vida de quem precisa de organização financeira, mas não tem tempo ou conhecimento para lidar com sistemas complexos.</p>
                        </div>

                        <div className="image-container">
                            <img src="https://cdn.pixabay.com/photo/2016/11/19/12/47/hand-1839105_1280.jpg" alt="Mulher usando celular para negócios" />
                            <p className="image-caption">A praticidade de ter tudo na palma da mão</p>
                        </div>

                        <div className="story-section">
                            <h2>A Transformação Aconteceu</h2>
                            <p className="story-text">
                                Mostrei o site <strong>www.gestaofinanceirapro.com.br</strong> e, para a surpresa dela, o site funcionava perfeitamente no Android do celular e também no computador. A facilidade de uso foi o que mais a encantou.
                            </p>
                            <p className="story-text">
                                Ela decidiu dar uma chance. Começou a usar o GFP no dia a dia, registrando cada venda, cada despesa. No início, foi um processo de adaptação, mas a interface intuitiva e a praticidade do sistema rapidamente a conquistaram.
                            </p>
                            <p className="story-text">
                                Depois de um tempo, o resultado era visível: ela conseguiu organizar ainda mais a vida financeira, ter um controle preciso de suas vendas, saber exatamente o que entrava e saía, e o melhor de tudo, <strong>nunca mais perdeu uma nota de venda</strong>.
                            </p>
                        </div>

                        <div className="highlight-box pulse">
                            <h3 style={{ color: '#1d1d1d', marginBottom: '15px' }}>O Resultado Final</h3>
                            <p>O estresse diminuiu, a confiança aumentou, e o que antes era um problema, se tornou uma história de sucesso. O GFP não só organizou as finanças dela, mas também deu um novo fôlego para o seu negócio, provando que a tecnologia pode ser uma grande aliada para todos, independentemente do tamanho do empreendimento.</p>
                        </div>

                        <div className="cta-section">
                            <h3>Você também pode ter essa transformação!</h3>
                            <p>Não deixe que a desorganização financeira prejudique o seu negócio. Conheça o Gestão Financeira Pro e descubra como é fácil ter controle total das suas vendas.</p>
                            <a  className="cta-button" target="_blank" rel="noopener noreferrer" onClick={handleAcessarSistema}>
                                Conhecer o GFP Agora
                            </a>
                        </div>
                    </div>

                    <footer className="footer">
                        <p>© 2024 - Uma história real de transformação com o Gestão Financeira Pro</p>
                    </footer>
                </article>
            </div>
        </>
    );
}

