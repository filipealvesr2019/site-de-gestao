import { useState, useEffect, useRef } from 'react';
import styles from './ProductList.module.css';

function ProductList() {
  const modalRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    dataDeVencimento: '',
    statusDePagamento: 'pendente',
  });

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDataDeVencimento = formData.dataDeVencimento; // A data já está no formato correto
    
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        dataDeVencimento: formattedDataDeVencimento,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Erro ao criar o produto');
    }
  
    const data = await response.json();
    setProducts((prevProducts) => [...prevProducts, data.product]);
    setOpenModal(false);
    setFormData({
      nome: '',
      preco: '',
      dataDeVencimento: '',
      statusDePagamento: 'pendente',
    });
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        openModal
      ) {
        setOpenModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openModal]);

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
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getUTCDate()).padStart(2, '0'); // Usa getUTCDate() para garantir a data correta
    const month = String(d.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth() retorna 0-11, então adicionamos 1
    const year = d.getUTCFullYear(); // Usa getUTCFullYear() para o ano correto
  
    return `${day}/${month}/${year}`; // Retorna a data no formato dd/mm/yyyy
  };
  

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;
  const handleStatusCss = (status) => {
    switch(status) {
        case 'pendente':
            return styles.pendente; // Retorna a classe 'pendente'
        case 'pago':
            return styles.pago; // Pode adicionar um estilo para o status 'pago', se necessário
        case 'vencido':
                return styles.vencido; // Pode adicionar um estilo para o status 'pago', se necessário
        default:
            return ''; // Se não for 'pendente' nem 'pago', retorna uma string vazia
    }
};

  return (
    <div style={{
        marginTop:"150rem"
    }}>
      <button onClick={handleClickOpenModal}>Criar Produto</button>
      {openModal && (
        <div className={styles.Modal}>
          <div ref={modalRef} className={styles.ModalContent}>
            <span
              className={styles.cartClose}
              onClick={handleClickCloseModal}
            >
              X
            </span>

            <h3>Cadastrar Novo Produto</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Preço:</label>
                <input
                  type="number"
                  name="preco"
                  value={formData.preco}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div>
                <label>Data de Vencimento:</label>
                <input
                  type="date"
                  name="dataDeVencimento"
                  value={formData.dataDeVencimento}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Status de Pagamento:</label>
                <select
                  name="statusDePagamento"
                  value={formData.statusDePagamento}
                  onChange={handleChange}
                >
                  <option value="pendente">Pendente</option>
                  <option value="pago">Pago</option>
                </select>
              </div>
              <button type="submit">Cadastrar</button>
            </form>
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
              <p>
        
                Data de Vencimento: {formatDate(product.dataDeVencimento)}
              </p>
              <p className={handleStatusCss(product.statusDePagamento) || ''}>Status de Pagamento: {product.statusDePagamento}</p>
              <p>Data de Criação: {formatDate(product.dataCriacao)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
