"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Adicionado
import { blogPosts } from './blogPosts';
import styles from './BlogComponent.module.css';
import Script from 'next/script';

const CATEGORIES = [
  'Todos',
  'Dinheiro', 
  'Educação Financeira', 
  'Guardar Dinheiro', 
  'Crenças Financeiras', 
  'Ferramentas GFP', 
  'Tutoriais'
];

const BlogPost = ({ title, description, date, imageUrl, category }) => (
  <div className={styles.blogPostCard}>
    <div className={styles.blogPostImageContainer}>
      <img 
        src={imageUrl} 
        alt={title} 
        className={styles.blogPostImage}
      />
    </div>
    <div className={styles.blogPostContent}>
      <span className={styles.blogPostCategory}>{category}</span>
      <h3 className={styles.blogPostTitle}>{title}</h3>
      <p className={styles.blogPostDescription}>{description}</p>
      <span className={styles.blogPostDate}>{date}</span>
    </div>
  </div>
  
);
<br />

export function BlogComponent() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className={styles.unboxdBlogContainer}>
      
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
      <br /> <br />
      <div className={styles.blogHeader}>
        <Image 
          src="/images/blog.gfp.png" 
          alt="Logo do Gestão financeira pro" 
          width={300} 
          height={200} 
        />
       <br />
       <br />
        <div className={styles.monthSelector}>
          {CATEGORIES.map(category => (
            <button 
              key={category}
              className={`${styles.monthButton} ${selectedCategory === category ? styles.activeMonth : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
      </div>
       
      <div className={styles.blogPostGrid}>
        {filteredPosts.map(post => (
          <Link 
            href={`/posts/${post.linkUrl}`} 
            key={post.id}
            className={styles.blogPostLink}
          >
            <BlogPost 
              title={post.title}
              description={post.description}
              date={post.date}
              imageUrl={post.imageUrl}
              category={post.category}
            />
            
          </Link>
          
        ))}
      </div>
     
    </div>
  );
}
