"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Adicionado
import { blogPosts } from './blogPosts';
import styles from './BlogComponent.module.css';

const CATEGORIES = [
  'Todos',
  'Criatividade', 
  'Escrita', 
  'Frases', 
  'Comunicação', 
  'Poesia', 
  'Digital'
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
      <br /> <br />
      <div className={styles.blogHeader}>
        <Image 
          src="/images/logoblog.png" 
          alt="Logo do Gestão financeira pro" 
          width={300} 
          height={70} 
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
            href={`/posts/${post.id}`} 
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
