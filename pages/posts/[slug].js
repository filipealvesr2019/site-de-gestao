import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './BlogPost.module.css';
import Link from 'next/link';
import Head from 'next/head';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [postContent, setPostContent] = useState('');
  const [postMetadata, setPostMetadata] = useState({
    h1Title: 'Carregando...',
    pageTitle: 'Carregando...',
    author: 'Gestão Financeira Pro',
    date: '',
    readTime: '3 min de leitura'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalizeSlug = (slug) => {
    return slug?.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const normalizedSlug = normalizeSlug(decodeURIComponent(slug));
        const response = await fetch(`/blog-posts/${normalizedSlug}.html`);

        if (!response.ok) {
          throw new Error('Post não encontrado');
        }

        const htmlContent = await response.text();

        if (typeof window !== 'undefined') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = htmlContent;

          // Extrair título visível do h1
          const titleElement = tempDiv.querySelector('h1');
          const h1Title = titleElement?.textContent || '';
          if (titleElement) titleElement.remove();

          // Extrair título para <title> do meta[name="page-title"]
          const metaTitleElement = tempDiv.querySelector('meta[name="page-title"]');
          const pageTitle = metaTitleElement?.getAttribute('content') || h1Title;

          setPostMetadata(prev => ({
            ...prev,
            h1Title,
            pageTitle
          }));

          setPostContent(tempDiv.innerHTML);
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
        <Head>
          <title>Erro no Post | Blog eFrases</title>
        </Head>
        <h1>Ops! Algo deu errado</h1>
        <p>{error}</p>
        <Link href="/blog" className={styles.backToBlog}>
          ← Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{postMetadata.pageTitle}</title>
        <meta name="description" content={`Leia: ${postMetadata.h1Title}`} />
      </Head>

      <Link href="/blog" className={styles.backToBlog}>
        ← Voltar para o Blog
      </Link>

      <div className={styles.blogPostContainer}>
        <div className={styles.postHeader}>
          <h1>{postMetadata.h1Title}</h1>
          <div className={styles.postMeta}>
            <span>Por {postMetadata.author}</span>
            <span>{postMetadata.date || new Date().toLocaleDateString()}</span>
            <span>{postMetadata.readTime}</span>
          </div>
        </div>

        <article
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: postContent }}
        />

        <Link href="/blog" className={styles.backToBlog}>
          ← Voltar para o Blog
        </Link>
      </div>
    </>
  );
};

export default BlogPost;
