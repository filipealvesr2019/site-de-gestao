"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ProductList.module.css";
import { jsPDF } from "jspdf"; // Importar a biblioteca jsPDF
import "jspdf-autotable"; // Import the autoTable plugin
import Footer from "../Footer/Footer";
import SuccessAlert from "../Alert/SuccessAlert";
import Loading from "../Loading/Loading";
import FailureAlert from "../Alert/FailureAlert";
import Script from "next/script";
import Link from "next/link";

function ProductList() {
  const [screenSize, setScreenSize] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama a função uma vez para definir o tamanho inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedProducts, setSelectedProducts] = useState([]); // Para armazenar os produtos selecionados
  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de produtos por página

  const [totalReceitasPagas, setTotalReceitasPagas] = useState(0); // Novo estado para o total de receitas do mês
  const [totalDespesas, setTotalDespesas] = useState(0); // Novo estado para o total de receitas do mês
  const [diferenca, setTotalDiferenca] = useState(0); // Novo estado para o total de receitas do mês
  const [filteredProducts, setFilteredProducts] = useState([]); // Usar filteredProducts aqui
  const [showDatePickers, setShowDatePickers] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const modalRef = useRef(null);
  const [toggleColors, setToggleColors] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false); // Modal de atualização
  const [searchTerm, setSearchTerm] = useState(""); // Para armazenar o termo de pesquisa
  const [filterType, setFilterType] = useState("dataDeVencimento"); // Default é filtrar por data de vencimento
  // Adicione estados para armazenar tipo e nome
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Função para lidar com a mudança do tipo de filtro
  const handleFilterTypeChange = (e) => {
    const selectedValue = e.target.value;
    setFilterType(selectedValue);
    // Verifica se a opção selecionada é "relatorioPesornalizado"
    // Verifica se a opção selecionada é "relatorioPesornalizado"
    if (selectedValue === "relatorioPesornalizado") {
      // Chama a função para filtrar produtos por relatórios
      handleFilterProductsByReports();
    }
    // Controla a exibição do campo de nome
    setShowNameInput(selectedValue === "relatorioPesornalizado");
  };

  const handleFilterProductsByReports = async () => {
    // Aqui você pode fazer a chamada para a sua API passando as datas

    const response = await fetch(
      `https://www.gestaofinanceirapro.com.br/api/reports?diaInicio=${new Date(
        startDate
      ).getUTCDate()}&mesInicio=${
        new Date(startDate).getUTCMonth() + 1
      }&anoInicial=${new Date(startDate).getUTCFullYear()}&diaFim=${new Date(
        endDate
      ).getUTCDate()}&mesFim=${
        new Date(endDate).getUTCMonth() + 1
      }&anoFinal=${new Date(endDate).getUTCFullYear()}`
    );
    if (!response.ok) {
      throw new Error("Erro ao filtrar produtos");
    }

    const data = await response.json();
    setFilteredProducts(data.produtos); // Atualiza os produtos filtrados
    setShowDatePickers(false); // Fecha os date pickers após a filtragem
    setOpenFilterModal(false);
    setTotalReceitasPagas(data.receita);
    setTotalDespesas(data.despesa);
    setTotalDiferenca(data.diferenca);
  };
  const [action, setAction] = useState(""); // Novo estado para controlar a ação selecionada
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  const [showFailureAlert, setShowFailureAlert] = useState(false);
  const [failureAlertMessage, setFailureAlertMessage] = useState("");

  const handleFilterProducts = async () => {
    // Aqui você pode fazer a chamada para a sua API passando as datas
    const response = await fetch(
      `https://www.gestaofinanceirapro.com.br/api/filtrar?diaInicio=${new Date(
        startDate
      ).getUTCDate()}&mesInicio=${
        new Date(startDate).getUTCMonth() + 1
      }&anoInicial=${new Date(startDate).getUTCFullYear()}&diaFim=${new Date(
        endDate
      ).getUTCDate()}&mesFim=${
        new Date(endDate).getUTCMonth() + 1
      }&anoFinal=${new Date(endDate).getUTCFullYear()}&type=${filterType}`
    );

    if (!response.ok) {
      throw new Error("Erro ao filtrar produtos");
    }

    const data = await response.json();
    setFilteredProducts(data); // Atualiza os produtos filtrados
    setShowDatePickers(false); // Fecha os date pickers após a filtragem
    setOpenFilterModal(false);
  };

  const closeFailureAlert = () => {
    setShowFailureAlert(false);
    setFailureAlertMessage("");
  };
  // useEffect para fechar o alerta de falha automaticamente

  // useEffect para fechar o alerta de falha automaticamente
  useEffect(() => {
    if (showFailureAlert) {
      const timer = setTimeout(() => {
        setShowFailureAlert(false);
        setFailureAlertMessage(""); // Limpa a mensagem
      }, 5000); // Fecha após 5 segundos

      return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }
  }, [showFailureAlert]);

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

  const handleClickOpenFilterModal = () => {
    setOpenFilterModal(true);
    setShowDatePickers(true);
  };

  const handleClickCloseFilterModal = () => {
    setOpenFilterModal(false);
  };

  const handleClickOpenUpdateModal = (productId, currentStatus) => {
    setSelectedProductId(productId); // Armazena o id do produto
    setStatus(currentStatus);
    setOpenUpdateModal(true);
  };

  const handleClickCloseUpdateModal = () => {
    setOpenUpdateModal(false);
  };

  const handleClickOpenDeleteModal = (productId, tipo, nome) => {
    setSelectedProductId(productId);
    setTipo(tipo); // Armazena o tipo
    setNome(nome); // Armazena o nome
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
    setLoading(true); // Inicia o loading

    e.preventDefault();
    const formattedDataDeVencimento = formData.dataDeVencimento; // A data já está no formato correto
    console.log("Dados enviados:", formData); // Verifique se o tipo está presente aqui

    // Verifique se 'tipo' não está vazio antes de enviar
    if (!formData.tipo) {
      // Alterado de 'tipo' para 'formData.tipo'
      alert("O tipo é obrigatório.");
      return;
    }

    const response = await fetch(
      "https://www.gestaofinanceirapro.com.br/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dataDeVencimento: formattedDataDeVencimento,
        }),
      }
    );

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
    // Chama as funções para buscar os dados atualizados
    await fetchExpenses();
    await fetchRevenue();
    await fetchProfit();
    await fetchProducts();

    if (response.ok) {
      setAlertMessage(`${formData.tipo} criada com sucesso!`);
      setShowAlert(true);
    }
  };
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // Fecha após 5 segundos

      return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }
  }, [showAlert]);

  const closeAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        (openModal || openDeleteModal || openUpdateModal || openFilterModal)
      ) {
        setOpenModal(false);
        setOpenFilterModal(false);
        setOpenDeleteModal(false);
        setOpenUpdateModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal, openDeleteModal, openUpdateModal, openFilterModal]);

  // Função para buscar produtos com base no nome
  // Função para filtrar produtos com base na pesquisa
  const filterProducts = (term) => {
    const lowercasedTerm = term.toLowerCase().trim();
    const filtered = products.filter(
      (product) =>
        product.nome.toLowerCase().trim().includes(lowercasedTerm) ||
        (product.client &&
          product.client.toLowerCase().trim().includes(lowercasedTerm))
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
      console.log(e.target.value);
    }
  };
  const fetchRevenue = async () => {
    try {
      const response = await fetch(
        "https://www.gestaofinanceirapro.com.br/api/receitas"
      );
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
      const response = await fetch(
        "https://www.gestaofinanceirapro.com.br/api/despesas"
      );
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
      const response = await fetch(
        "https://www.gestaofinanceirapro.com.br/api/diferenca"
      );
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
      const response = await fetch(
        "https://www.gestaofinanceirapro.com.br/api/products"
      );
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
      `https://www.gestaofinanceirapro.com.br/api/products?id=${productId}`,
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

  if (loading) return <Loading />;
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

    // Lógica para gerar a Recibo com os produtos selecionados
    if (selectedItems.length === 0) {
      alert("Nenhum produto selecionado para gerar a Recibo.");
      return;
    }

    // Calcular total de receitas e despesas
    const totalReceitas = selectedItems
      .filter((item) => item.tipo === "receita")
      .reduce((total, item) => total + item.preco, 0);

    const totalDespesas = selectedItems
      .filter((item) => item.tipo === "despesa")
      .reduce((total, item) => total + item.preco, 0);

    const diferenca = totalReceitas - totalDespesas;

    // Gerar a HTML da Recibo
    const invoiceContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Recibo</h2>
        <p><strong>Data de Emissão:</strong> ${new Date().toLocaleDateString()}</p>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="text-align: left; padding: 8px; border: 1px solid #ccc;">Descrição</th>
              <th style="text-align: left; padding: 8px; border: 1px solid #ccc;">Preço</th>
              <th style="text-align: left; padding: 8px; border: 1px solid #ccc;">Data de Vencimento</th>
            </tr>
          </thead>
          <tbody>
            ${selectedItems
              .map(
                (item) => `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ccc; ">${
                      item.nome
                    }</td>


                  <td style="padding: 8px; border: 1px solid #ccc;">R$ ${
                    item.tipo === "despesa" ? "-" : ""
                  }${item.preco}</td>
                  <td style="padding: 8px; border: 1px solid #ccc;">${formatDate(
                    item.dataDeVencimento
                  )}</td>
                </tr>`
              )
              .join("")}
          </tbody>
        </table>
      
        <h3 style="margin-top: 20px;">Total: R$${diferenca}</h3>
      </div>
    `;

    // Criar uma nova janela e carregar o conteúdo da Recibo nela
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
      alert("Nenhum produto selecionado para gerar a Recibo.");
      return;
    }

    // Calcular total de receitas e despesas
    const totalReceitas = selectedItems
      .filter((item) => item.tipo === "receita")
      .reduce((total, item) => total + item.preco, 0);

    const totalDespesas = selectedItems
      .filter((item) => item.tipo === "despesa")
      .reduce((total, item) => total + item.preco, 0);

    const diferenca = totalReceitas - totalDespesas;

    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.text("Recibo", 20, 20);
    doc.text(`Data de Emissão: ${new Date().toLocaleDateString()}`, 20, 30);
    doc.autoTable({
      startY: 40,
      head: [["Descrição", "Preço", "Data de Vencimento"]],
      body: selectedItems.map((item) => [
        item.nome,
        `R$ ${item.tipo === "despesa" ? "-" : ""}${item.preco}`,
        formatDate(item.dataDeVencimento),
      ]),
    });

    doc.text(`Total: R$${diferenca}`, 20, doc.lastAutoTable.finalY + 30);

    doc.save("recibo.pdf");
  };
  const handleFocus = (event) => {
    event.target.showPicker(); // Abre o seletor de data
  };

  return (
    <div className={styles.container}>



 

      {showAlert && (
        <SuccessAlert message={alertMessage} onClose={closeAlert} />
      )}
      {showFailureAlert && (
        <FailureAlert
          message={failureAlertMessage}
          onClose={closeFailureAlert}
        />
      )}
      <span className={styles.span}>
        {startDate && endDate ? (
          <>
            Relatório de (
            <span className={styles.date}>{formatDate(startDate)}</span>) até (
            <span className={styles.date}>{formatDate(endDate)}</span>)
          </>
        ) : (
          <>
            Relatório de Gestão do{" "}
            <span className={styles.date}>Mês Atual</span>
          </>
        )}
      </span>
      <div className={styles.cardsContainer}>
        <div className={styles.stylesTotalReceitas}>
          <h3>
            {filterType === "relatorioPesornalizado"
              ? "Total de Receitas:"
              : " Total de Receitas do Mês:"}{" "}
            R$
            {isNaN(totalReceitasPagas) ? "0" : totalReceitasPagas}
          </h3>
        </div>
        <div className={styles.stylesTotalDespesas}>
          <h3>
            {filterType === "relatorioPesornalizado"
              ? "Total de Despesas: "
              : " Total de despesas do Mês: "}{" "}
            R$
            {isNaN(totalDespesas) ? "0" : totalDespesas}
          </h3>
        </div>
        <div className={styles.stylesDiferenca}>
          <h3>
            {filterType === "relatorioPesornalizado"
              ? "Total de Diferença: "
              : " Total de Diferença do Mês: "}{" "}
            R$
            {isNaN(diferenca) ? "0" : diferenca}
          </h3>
        </div>
      </div>
      <div className={styles.buttonsStyles}>
        {openFilterModal && (
          <div className={styles.modal}>
            <div ref={modalRef} className={styles.modalContent}>
              <span className={styles.cartClose}>
                <img
                  src="https://i.imgur.com/zpy7fcj.png"
                  alt="icone de fechar aba"
                  className={styles.filterClose__img}
                  onClick={handleClickCloseFilterModal}
                />
              </span>
              {showDatePickers && (
                <div className={styles.filterContainer}>
                  <label>Filtrar por:</label>
                  <select
                    value={filterType}
                    onChange={handleFilterTypeChange}
                    className={styles.dateFilterInput}
                  >
                    <option value="dataDeVencimento">Data de Vencimento</option>
                    <option value="dataCriacao">Data de Criação</option>
                    <option value="relatorioPesornalizado">
                      Relatório do Fluxo de Caixa
                    </option>
                  </select>
                  <label>Data Inicial:</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    onFocus={handleFocus} // Abre o datepicker ao focar no input
                    style={{ cursor: "pointer" }}
                    required
                    className={styles.shorterFilterInput}
                  />
                  <label>Data Final:</label>

                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    onFocus={handleFocus} // Abre o datepicker ao focar no input
                    style={{ cursor: "pointer" }}
                    required
                    className={styles.shorterFilterInput}
                  />
                  {filterType === "relatorioPesornalizado" ? (
                    <button
                      onClick={handleFilterProductsByReports}
                      className={styles.filterContainer__button}
                    >
                      Gerar Relatório
                    </button>
                  ) : (
                    <button
                      onClick={handleFilterProducts}
                      className={styles.filterContainer__button}
                    >
                      Filtrar
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
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
          <button
            onClick={handleClickOpenFilterModal}
            className={styles.buttons}
          >
            Filtragem Personalizada
          </button>
          <button onClick={handlePrintInvoice} className={styles.buttons}>
            Imprimir Recibo
          </button>
          <button onClick={handleDownloadInvoice} className={styles.buttons}>
            Baixar Recibo
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
          <div className={styles.selectContainer}>
            <button
              onClick={handleClickOpenFilterModal}
              className={styles.buttons}
            >
              Filtragem Personalizada
            </button>
            {/* Select para ações */}
            <select
              value={action}
              onChange={handleActionChange}
              className={styles.select}
              disabled={!hasSelectedProducts}
            >
              <option value="">Selecionar Ação</option>
              <option value="imprimir">Imprimir Recibo</option>
              <option value="baixar">Baixar Recibo</option>
            </select>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={styles.modal}>
          <div ref={modalRef} className={styles.modalContent}>
            <span className={styles.cartClose} onClick={handleClickCloseModal}>
              <img
                src="https://i.imgur.com/zpy7fcj.png"
                alt="icone de fechar aba"
                className={styles.createClose__img}
              />
            </span>

            <form onSubmit={handleSubmit}>
              <div className={styles.openModalContainer}>
                <h3>Cadastrar Receita ou Despesa</h3>

                <label>Descrição:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="e.x. 1kg de queijo"
                  className={styles.biggerInput}
                />

                <label>Cliente(opcional):</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                  className={styles.biggerInput}
                  placeholder="e.x. valdir gomes"
                />

                <label>Preço(R$):</label>
                <input
                  type="number"
                  name="preco"
                  value={formData.preco}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className={styles.biggerInput}
                  placeholder="e.x. 50"
                />

                <label>Data de Vencimento:</label>
                <input
                  type="date"
                  name="dataDeVencimento"
                  value={formData.dataDeVencimento}
                  onChange={handleChange}
                  onFocus={handleFocus} // Abre o datepicker ao focar no input
                  style={{ cursor: "pointer" }}
                  className={styles.dateInput}
                  required
                />

                <label>Status de Pagamento:</label>
                <select
                  name="statusDePagamento"
                  value={formData.statusDePagamento}
                  onChange={handleChange}
                  className={styles.shorterInput}
                >
                  <option value="pendente">Pendente</option>
                  <option value="pago">Pago</option>
                  <option value="vencido">Vencido</option>
                </select>

                <label>Tipo:</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange} // Certifique-se de que a função handleChange está sendo chamada corretamente
                  required
                  className={styles.shorterInput}
                >
                  <option value="receita">Receita</option>
                  <option value="despesa">Despesa</option>
                </select>
                <button
                  type="submit"
                  className={styles.openModalContainer__button}
                >
                  Cadastrar
                </button>
              </div>
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
              <div className={`${styles.cell}`}>
                <span>Preço</span>

                <span
                  className={`${handleStatusCss(product.statusDePagamento)}`}
                >
                  R${product.preco}
                </span>
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
                  style={{
                    cursor: "pointer",
                  }}
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
                onClick={() =>
                  handleClickOpenDeleteModal(
                    product._id,
                    product.tipo,
                    product.nome
                  )
                }
              >
                <span>Excluir</span>
                <img
                  src="https://i.imgur.com/flqGals.png"
                  alt="icone de excluir"
                  style={{
                    width: "1rem",
                    cursor: "pointer",
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
            <tbody className={styles.tbody}>
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
                    R${product.preco}
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
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {product.statusDePagamento}
                  </td>

                  <td>{formatDate(product.dataCriacao)}</td>
                  <td
                    onClick={() =>
                      handleClickOpenDeleteModal(
                        product._id,
                        product.tipo,
                        product.nome
                      )
                    }
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="https://i.imgur.com/flqGals.png"
                      alt="icone de excluir"
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
            style={{ width: "1.5rem", cursor: "pointer" }}
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
            style={{ width: "1.5rem", cursor: "pointer" }}
          />
        </div>
      </div>

      {openDeleteModal && (
        <>
          <div className={styles.DeleteModal}>
            <img
              src="https://i.imgur.com/zpy7fcj.png"
              className={styles.deleteClose}
              onClick={handleClickCloseDeleteModal}
            />

            <div ref={modalRef} className={styles.DeleteModalContent}>
              <p>
                Tem certeza que quer excluir{" "}
                <b
                  className={tipo === "receita" ? styles.pago : styles.vencido}
                >
                  {tipo}
                </b>{" "}
                de <b>{nome}</b>?
              </p>
              <div className={styles.DeleteModalButtons}>
                <button
                  onClick={() => handleDelete(selectedProductId)}
                  className={styles.buttonA}
                >
                  Sim
                </button>
                <button
                  onClick={handleClickCloseDeleteModal}
                  className={styles.buttonB}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {openUpdateModal && (
        <>
          <div className={styles.UpdateModal}>
            <img
              src="https://i.imgur.com/zpy7fcj.png"
              className={styles.closeUpdateModal}
              onClick={handleClickCloseUpdateModal}
            />
            <div ref={modalRef} className={styles.UpdateModalContent}>
              <p>
                Tem certeza que deseja mudar o status de pagamento de {status}{" "}
                para{" "}
                <b>
                  {status === "pendente" || status === "vencido"
                    ? "pago"
                    : "pendente"}
                </b>
                ?
              </p>
              <div className={styles.updateModalButtons}>
                <button onClick={handleUpdateStatus} className={styles.buttonA}>
                  Sim
                </button>{" "}
                <button
                  onClick={handleClickCloseUpdateModal}
                  className={styles.buttonB}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />

    </div>
  );
}

export default ProductList;
