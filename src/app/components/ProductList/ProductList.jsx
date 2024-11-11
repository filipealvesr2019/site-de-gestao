"use cliente"

import { useState, useEffect, useRef } from 'react';
import styles from './ProductList.module.css'
function ProductList() {
    const modalRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        (openModal )
      ) {
        setOpenModal(false);
      
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, ]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
        <button onClick={handleClickOpenModal}>criar Receita</button>
        {openModal && (
              <div className={styles.Modal}>
                <div ref={modalRef} className={styles.ModalContent}>
                  <span  className={styles.cartClose}
                    onClick={handleClickCloseModal}>X</span>
              
                  <span>option 1</span>
                  <span>option 2</span>
                  <span>option 2</span>

                </div>
              </div>
            )}
      <h2>Lista de Produtos</h2>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h3>{product.nome}</h3>
              <p>Preço: R${product.preco.toFixed(2)}</p>
              <p>Data de Vencimento: {new Date(product.dataDeVencimento).toLocaleDateString()}</p>
              <p>Status de Pagamento: {product.statusDePagamento}</p>
              <p>Data de Criação: {new Date(product.dataCriacao).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
