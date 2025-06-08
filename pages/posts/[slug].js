import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './BlogPost.module.css';
import Link from 'next/link';
import Script from 'next/script';

<Link href="/blog" className={styles.backToBlog}>
          ← Voltar para o Blog
        </Link>

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [postContent, setPostContent] = useState('');
  const [postMetadata, setPostMetadata] = useState({
    title: 'Carregando...',
    author: 'eFrases',
    date: new Date().toLocaleDateString(),
    readTime: '3 min de leitura'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

// Função para normalizar o slug
  const normalizeSlug = (slug) => {
    if (!slug) return slug;
    
    // Remove caracteres especiais e substitui espaços por hífens
    return slug
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais exceto espaços e hífens
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim();
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
          // Normaliza o slug para buscar o arquivo correto
        const normalizedSlug = normalizeSlug(slug);
        // Fetch the HTML content
        const response = await fetch(`/blog-posts/${normalizedSlug}.html`);
        
        if (!response.ok) {
          throw new Error('Post não encontrado');
        }

        const htmlContent = await response.text();
        setPostContent(htmlContent);

        // Try to extract metadata from the HTML (basic approach)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const titleElement = tempDiv.querySelector('h1');
        
        if (titleElement) {
          setPostMetadata(prev => ({
            ...prev,
            title: titleElement.textContent || prev.title
          }));
        }

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (

        <div className={styles.loadingContainer}>
          <p>Carregando post...</p>
        </div>
   
    );
  }

  if (error) {
    return (
    
        <div className={styles.errorContainer}>
          <h1>Ops! Algo deu errado</h1>
          <p>{error}</p>
          <button onClick={() => router.push('/blog')}>
            Voltar para o Blog
          </button>
        </div>
   
    );
  }

  return (
    <div title={postMetadata.title}>
       <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?idG-WFDBEQEJZP`} // Substitua pelo seu Measurement ID
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'G-WFDBEQEJZP', { page_path: window.location.pathname });`}
      </Script>
      {/* Link para voltar ao blog no topo da página */}
      <Link href="/blog" className={styles.backToBlog}>
        ← Voltar para o Blog
      </Link>
      
      <div className={styles.blogPostContainer}>
        <div className={styles.postHeader}>
          <h1>{postMetadata.title}</h1>
          <div className={styles.postMeta}>
            <span>Por {postMetadata.author}</span>
            <span>{postMetadata.date}</span>
            <span>{postMetadata.readTime}</span>
          </div>
        </div>

        <article 
          className={styles.postContent} 
          dangerouslySetInnerHTML={{__html: postContent}}
        />
        
        {/* Link para voltar ao blog no final da página */}
        <Link href="/blog" className={styles.backToBlog}>
          ← Voltar para o Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
