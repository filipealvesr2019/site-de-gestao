"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from './Blog.module.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Blog Gestão
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link href="/blog">Blog</Link>
          <Link href="/tutoriais">Tutoriais</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Blog Gestão</h3>
            <p>Seu guia completo para gestão empresarial</p>
          </div>
          <div className={styles.section}>
            <h3>Links Rápidos</h3>
            <nav>
              <Link href="/blog">Blog</Link>
              <Link href="/tutoriais">Tutoriais</Link>
              <Link href="/recursos">Recursos</Link>
              <Link href="/about">Sobre</Link>
            </nav>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Blog Gestão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 
export default function Blog(){

    return (
        <div style={{
            backgroundColor:"white"
        }}>
      <Header />
      <main style={{
        width:"50vw",
        height:"100vh"
      }}>

      </main>
      <Footer />
        </div>
    )
}