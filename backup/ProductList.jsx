"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ProductList.module.css";
import { jsPDF } from "jspdf"; // Importar a biblioteca jsPDF
import "jspdf-autotable"; // Import the autoTable plugin

function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState([]); // Para armazenar os produtos selecionados
  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de produtos por página

  const [totalReceitasPagas, setTotalReceitasPagas] = useState(0); // Novo estado para o total de receitas do mês
  const [totalDespesas, setTotalDespesas] = useState(0); // Novo estado para o total de receitas do mês
  const [diferenca, setTotalDiferenca] = useState(0); // Novo estado para o total de receitas do mês
  const [filteredProducts, setFilteredProducts] = useState([]); // Usar filteredProducts aqui

  const modalRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false); // Modal de atualização
  const [searchTerm, setSearchTerm] = useState(""); // Para armazenar o termo de pesquisa

  const [action, setAction] = useState(""); // Novo estado para controlar a ação selecionada

  // Função para verificar se há produtos selecionados
  const hasSelectedProducts = selectedProducts.length > 0;

  const handleActionChange = (e) => {
    const selectedAction = e.target.value;
    setAction(selectedAction);

    // Chama a função apropriada com base na seleção
    if (selectedAction === "imprimir") {
      handlePrintInvoice();
      setAction(""); // Resetar a ação após a execução
    } else if (selectedAction === "baixar") {
      handleDownloadInvoice();
      setAction(""); // Resetar a ação após a execução
    }
  };
  const [formData, setFormData] = useState({
    client: "",
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
      client: "",
      nome: "",
      preco: "",
      dataDeVencimento: "",
      statusDePagamento: "pendente",
      tipo: "receita", // Resetar o campo tipo após o envio
    });
   await fetchProducts()
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

  // Função para buscar produtos com base no nome
  // Função para filtrar produtos com base na pesquisa
  const filterProducts = (term) => {
    const lowercasedTerm = term.toLowerCase().trim();
    const filtered = products.filter((product) =>
      product.nome.toLowerCase().trim().includes(lowercasedTerm) ||
      (product.client && product.client.toLowerCase().trim().includes(lowercasedTerm))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Resetar para a primeira página
  };
  // Funções para navegação na paginação
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // Calcular o índice dos produtos para a página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);
  // Função chamada quando o valor de pesquisa muda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
   
  };

  // Função que é chamada ao pressionar Enter no input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      filterProducts(searchTerm); // Filtra os produtos quando Enter é pressionado
      console.log(e.target.value)
    }
  };
  const fetchRevenue = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/receitas");
      if (!response.ok) {
        throw new Error("Erro ao buscar receitas");
      }
      const data = await response.json();
      setTotalReceitasPagas(data.totalReceitasPagas);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchExpenses = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/despesas");
      if (!response.ok) {
        throw new Error("Erro ao buscar receitas");
      }
      const data = await response.json();
      setTotalDespesas(data.totalDespesas);
      console.log("fetchExpenses", data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchProfit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/diferenca");
      if (!response.ok) {
        throw new Error("Erro ao buscar receitas");
      }
      const data = await response.json();
      setTotalDiferenca(data.diferenca);
      console.log("setTotalDiferenca", data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products); // Inicialmente, exibe todos os produtos

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
   

    fetchExpenses();
    fetchProducts();
    fetchRevenue();
    fetchProfit();
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
      setFilteredProducts((prevProducts) =>
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

      setFilteredProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === selectedProductId
            ? { ...product, statusDePagamento: newStatus }
            : product
        )
      );
      // Chama as funções para buscar os dados atualizados
      await fetchExpenses();
      await fetchRevenue();
      await fetchProfit();

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

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handlePrintInvoice = () => {
    // Filtrar os produtos selecionados
    const selectedItems = products.filter((product) =>
      selectedProducts.includes(product._id)
    );

    // Lógica para gerar a nota com os produtos selecionados
    if (selectedItems.length === 0) {
      alert("Nenhum produto selecionado para gerar a nota.");
      return;
    }

    // Gerar a HTML da nota
    const invoiceContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Nota Fiscal</h2>
        <p><strong>Data:</strong> ${new Date().toLocaleDateString()}</p>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 8px; border: 1px solid #ccc;">Produto</th>
              <th style="text-align: left; padding: 8px; border: 1px solid #ccc;">Preço</th>
              <th style="text-align: left; padding: 8px; border: 1px solid #ccc;">Data de Vencimento</th>
            </tr>
          </thead>
          <tbody>
            ${selectedItems
              .map(
                (item) => `
              <tr>
                <td style="padding: 8px; border: 1px solid #ccc;">${
                  item.nome
                }</td>
                <td style="padding: 8px; border: 1px solid #ccc;">R$${item.preco.toFixed(
                  2
                )}</td>
                <td style="padding: 8px; border: 1px solid #ccc;">${formatDate(
                  item.dataDeVencimento
                )}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
        <h3 style="margin-top: 20px;">Total: R$${selectedItems
          .reduce((total, item) => total + item.preco, 0)
          .toFixed(2)}</h3>
      </div>
    `;

    // Criar uma nova janela e carregar o conteúdo da nota nela
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(invoiceContent);
    printWindow.document.close();

    // Abrir a interface de impressão
    printWindow.print();
  };

  const handleDownloadInvoice = () => {
    const selectedItems = products.filter((product) =>
      selectedProducts.includes(product._id)
    );

    if (selectedItems.length === 0) {
      alert("Nenhum produto selecionado para gerar a nota.");
      return;
    }

    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.text("Nota Fiscal", 20, 20);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.autoTable({
      startY: 40,
      head: [["Produto", "Preço", "Data de Vencimento"]],
      body: selectedItems.map((item) => [
        item.nome,
        `R$${item.preco.toFixed(2)}`,
        formatDate(item.dataDeVencimento),
      ]),
    });

    const total = selectedItems
      .reduce((sum, item) => sum + item.preco, 0)
      .toFixed(2);
    doc.text(`Total: R$${total}`, 20, doc.lastAutoTable.finalY + 10);

    doc.save("nota_fiscal.pdf");
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <div className={styles.stylesTotalReceitas}>
          <h3>
            Total de Receitas do Mês: R$
            {isNaN(totalReceitasPagas) ? "0.0" : totalReceitasPagas.toFixed(2)}
          </h3>
        </div>
        <div className={styles.stylesTotalDespesas}>
          <h3>
            Total de despesas do Mês: R$
            {isNaN(totalDespesas) ? "0.0" : totalDespesas.toFixed(2)}
          </h3>
        </div>
        <div className={styles.stylesDiferenca}>
          <h3>
            Total de diferença do Mês: R$
            {isNaN(diferenca) ? "0.0" : diferenca.toFixed(2)}
          </h3>
        </div>
      </div>

      <div className={styles.buttonsContainerDesktop}>
        {/* Input de pesquisa */}
        
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown} // Aciona a pesquisa ao pressionar Enter
          placeholder="Pesquisar produto, serviço ou nome do cliente..."
          className={styles.inputDesktop}
        />
        <div className={styles.buttonsStyles}>
          <button onClick={handleClickOpenModal} className={styles.buttons}>
            Nova Movimentação
          </button>
          <button onClick={handlePrintInvoice} className={styles.buttons}>
            Imprimir Nota
          </button>
          <button onClick={handleDownloadInvoice} className={styles.buttons}>
            Baixar Nota Fiscal
          </button>
        </div>
      </div>
      <div className={styles.buttonsContainerMobile}>
        {/* Input de pesquisa */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown} // Aciona a pesquisa ao pressionar Enter
          placeholder="Pesquisar produto, serviço ou nome do cliente..."
          className={styles.inputMobile}
        />
        <div className={styles.buttonsStylesMobile}>
          <button onClick={handleClickOpenModal} className={styles.buttons}>
            Nova Movimentação
          </button>

          {/* Select para ações */}
          <select
            value={action}
            onChange={handleActionChange}
            className={styles.select}
            disabled={!hasSelectedProducts}
          >
            <option value="">Selecionar Ação</option>
            <option value="imprimir">Imprimir Nota</option>
            <option value="baixar">Baixar Nota Fiscal</option>
          </select>
        </div>
      </div>
      {openModal && (
        <div className={styles.modal}>
          <div ref={modalRef} className={styles.modalContent}>
            <span className={styles.cartClose} onClick={handleClickCloseModal}>
              X
            </span>

            <h3>Cadastrar Receita ou despesa</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Descrição:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Cliente(opcional):</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
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

      <div>
        <div className={styles.tableWrapper}>
          {displayedProducts.map((product) => (
            <div key={product._id} className={styles.row}>
              <div className={styles.cell}>
                <span>Selecionar</span>{" "}
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product._id)}
                  onChange={() => handleCheckboxChange(product._id)}
                />
              </div>
              <div className={styles.cell}>
                <span>Tipo</span>
                <div
                  className={`${styles.cell} ${
                    product.tipo === "receita" ? styles.pago : styles.vencido
                  }`}
                >
                  {product.tipo}
                </div>
              </div>

              <div className={styles.cell}>
                <span>Cliente</span>

                <div className={styles.cell}>
                  {product.client ? product.client : "nenhum"}
                </div>
              </div>
              <div className={styles.cell}>
                <span>Nome</span>

                <div className={styles.cell}>{product.nome}</div>
              </div>
              <div
                className={`${styles.cell} ${handleStatusCss(
                  product.statusDePagamento
                )}`}
              >
                R${product.preco.toFixed(2)}
              </div>
              <div className={styles.cell}>
                <span>Data de Vencimento </span>
                {formatDate(product.dataDeVencimento)}
              </div>
              <div className={styles.cell}>
                <span>Status de Pagamento </span>

                <div
                  className={`${handleStatusCss(product.statusDePagamento)}`}
                  onClick={() =>
                    handleClickOpenUpdateModal(
                      product._id,
                      product.statusDePagamento
                    )
                  }
                >
                  {product.statusDePagamento}
                </div>
              </div>
              <div className={styles.cell}>
                <span>Data de Criação</span>

                {formatDate(product.dataCriacao)}
              </div>
              <div
                className={styles.cell}
                onClick={() => handleClickOpenDeleteModal(product._id)}
              >
                <span>Excluir</span>
                <img
                  src="https://i.imgur.com/flqGals.png"
                  alt=""
                  style={{
                    width: "1rem",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th>Selecionar</th>
                <th>Tipo</th>

                <th>Descrição</th>
                <th>Cliente</th>

                <th>Preço</th>
                <th>Data de Vencimento</th>
                <th>Status de Pagamento</th>
                <th>Data de Criação</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product._id)}
                      onChange={() => handleCheckboxChange(product._id)}
                    />
                  </td>

                  <td
                    className={
                      product.tipo === "receita" ? styles.pago : styles.vencido
                    }
                  >
                    {product.tipo}
                  </td>
                  <td>{product.nome}</td>
                  <td>{product.client ? product.client : "nenhum"}</td>
                  <td className={handleStatusCss(product.statusDePagamento)}>
                    R${product.preco.toFixed(2)}
                  </td>
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
        </div>
        <div className={styles.pagination}>
          <img
            src="https://i.imgur.com/yYJQoeE.png"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{ width: "1.5rem" }}
          />
          <span>
            Página {currentPage} de{" "}
            {Math.ceil(filteredProducts.length / itemsPerPage)}
          </span>
          <img
            src="https://i.imgur.com/sTDQSBz.png"
            onClick={handleNextPage}
            disabled={
              currentPage === Math.ceil(filteredProducts.length / itemsPerPage)
            }
            style={{ width: "1.5rem" }}
          />
        </div>
      </div>

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