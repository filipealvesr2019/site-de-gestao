"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ProductList.module.css";
function ProductList() {
  const [totalReceitasPagas, setTotalReceitasPagas] = useState(0); // Novo estado para o total de receitas do mês

  const modalRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false); // Modal de atualização

  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    dataDeVencimento: "",
    statusDePagamento: "pendente",
    tipo: "receita",
  });
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleClickCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickOpenUpdateModal = (productId, currentStatus) => {
    setSelectedProductId(productId); // Armazena o id do produto
    setOpenUpdateModal(true);
  };

  const handleClickCloseUpdateModal = () => {
    setOpenUpdateModal(false);
  };

  const handleClickOpenDeleteModal = (productId) => {
    setSelectedProductId(productId);
    setOpenDeleteModal(true);
  };

  const handleClickCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleChange = (e) => {
    console.log("Mudança no campo", e.target.name, "valor:", e.target.value); // Verifique o log
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDataDeVencimento = formData.dataDeVencimento; // A data já está no formato correto
    console.log("Dados enviados:", formData); // Verifique se o tipo está presente aqui

    // Verifique se 'tipo' não está vazio antes de enviar
    if (!formData.tipo) {
      // Alterado de 'tipo' para 'formData.tipo'
      alert("O tipo é obrigatório.");
      return;
    }

    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        dataDeVencimento: formattedDataDeVencimento,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar o produto");
    }

    const data = await response.json();
    setProducts((prevProducts) => [...prevProducts, data.product]);
    setOpenModal(false);
    setFormData({
      nome: "",
      preco: "",
      dataDeVencimento: "",
      statusDePagamento: "pendente",
      tipo: "", // Resetar o campo tipo após o envio
    });
    console.log("tipo", formData.tipo); // Agora deve exibir corretamente o valor de "tipo"
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        (openModal || openDeleteModal || openUpdateModal)
      ) {
        setOpenModal(false);
        setOpenDeleteModal(false);
        setOpenUpdateModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, openDeleteModal, openUpdateModal]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        const data = await response.json();
        setProducts(data.products);
        setTotalReceitasPagas(data.totalReceitasPagas); // Atualiza o estado com a receita do mês

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const response = await fetch(
      `http://localhost:3000/api/products?id=${productId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
      setOpenDeleteModal(false); // Fechar o modal após a exclusão
    } else {
      alert("Erro ao excluir o produto.");
    }
  };

  const handleUpdateStatus = async () => {
    const product = products.find((p) => p._id === selectedProductId);
    const newStatus =
      product.statusDePagamento === "pendente" ? "pago" : "pendente";

    const response = await fetch(`/api/products?id=${selectedProductId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusDePagamento: newStatus }),
    });

    if (response.ok) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === selectedProductId
            ? { ...product, statusDePagamento: newStatus }
            : product
        )
      );
      setOpenUpdateModal(false); // Fechar o modal após a atualização
    } else {
      alert("Erro ao atualizar status de pagamento.");
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getUTCDate()).padStart(2, "0"); // Usa getUTCDate() para garantir a data correta
    const month = String(d.getUTCMonth() + 1).padStart(2, "0"); // getUTCMonth() retorna 0-11, então adicionamos 1
    const year = d.getUTCFullYear(); // Usa getUTCFullYear() para o ano correto

    return `${day}/${month}/${year}`; // Retorna a data no formato dd/mm/yyyy
  };

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;
  const handleStatusCss = (status) => {
    switch (status) {
      case "pendente":
        return styles.pendente; // Retorna a classe 'pendente'
      case "pago":
        return styles.pago; // Pode adicionar um estilo para o status 'pago', se necessário
      case "vencido":
        return styles.vencido; // Pode adicionar um estilo para o status 'pago', se necessário
      default:
        return ""; // Se não for 'pendente' nem 'pago', retorna uma string vazia
    }
  };

  return (
    <div className={styles.container}>
      <h3>
        Total de Receitas do Mês: R$
        {isNaN(totalReceitasPagas) ? "0.00" : totalReceitasPagas.toFixed(2)}
      </h3>

      <button onClick={handleClickOpenModal}>Criar Produto</button>
      {openModal && (
        <div className={styles.modal}>
          <div ref={modalRef} className={styles.modalContent}>
            <span className={styles.cartClose} onClick={handleClickCloseModal}>
              X
            </span>

            <h3>Cadastrar Receita ou despesa</h3>
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
                  <option value="vencido">Vencido</option>
                </select>
              </div>
              <div>
                <label>Tipo:</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange} // Certifique-se de que a função handleChange está sendo chamada corretamente
                  required
                >
                  <option value="receita">Receita</option>
                  <option value="despesa">Despesa</option>
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
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Data de Vencimento</th>
              <th>Status de Pagamento</th>
              <th>Data de Criação</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.tipo}</td>
                <td>{product.nome}</td>
                <td>R${product.preco.toFixed(2)}</td>
                <td>{formatDate(product.dataDeVencimento)}</td>
                <td
                  className={handleStatusCss(product.statusDePagamento)}
                  onClick={() =>
                    handleClickOpenUpdateModal(
                      product._id,
                      product.statusDePagamento
                    )
                  }
                >
                  {product.statusDePagamento}
                </td>

                <td>{formatDate(product.dataCriacao)}</td>
                <td onClick={() => handleClickOpenDeleteModal(product._id)}>
                  <img
                    src="https://i.imgur.com/flqGals.png"
                    alt=""
                    style={{
                      width: "1rem",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {openDeleteModal && (
        <>
          <div className={styles.DeleteModal}>
            <span
              className={styles.cartClose}
              onClick={handleClickCloseDeleteModal}
            >
              X
            </span>
            <div ref={modalRef} className={styles.DeleteModalContent}>
              <p>Tem certeza que deseja excluir este produto?</p>
              <button onClick={() => handleDelete(selectedProductId)}>
                Sim
              </button>
              <button onClick={handleClickCloseDeleteModal}>Não</button>
            </div>
          </div>
        </>
      )}

      {openUpdateModal && (
        <>
          <div className={styles.UpdateModal}>
            <span
              className={styles.closeUpdateModal}
              onClick={handleClickCloseUpdateModal}
            >
              X
            </span>
            <div ref={modalRef} className={styles.UpdateModalContent}>
              <p>Tem certeza que deseja mudar o status de pagamento?</p>
              <button onClick={handleUpdateStatus}>Sim</button>{" "}
              {/* Chama a função para atualizar o status */}
              <button onClick={handleClickCloseUpdateModal}>Não</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
