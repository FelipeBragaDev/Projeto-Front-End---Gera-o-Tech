import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate, Link } from 'react-router-dom'; // Link para o botão Home, useNavigate se precisar para outros
import { FaPrint } from 'react-icons/fa'; // Exemplo de ícone para Imprimir

// Mock data para a página de sucesso (no app real, viria do pedido processado)
const mockOrderDetails = {
  personalInfo: {
    name: 'Francisco Antonio Pereira',
    cpf: '123.456.789-10', // Lembre-se de mascarar ou não exibir dados sensíveis reais
    email: 'francisco@gmail.com',
    celular: '(85) 5555-5555',
  },
  shippingInfo: {
    address: 'Rua João Pessoa, 333',
    neighborhood: 'Centro',
    cityState: 'Fortaleza, Ceará',
    cep: '433-8800', // Formato CEP pode variar
  },
  paymentInfo: {
    cardHolder: 'FRANCISCO A P',
    cardLastDigits: '************2020', // Mostrar apenas os últimos dígitos
  },
  orderSummary: {
    items: [
      {
        id: 'prod1',
        name: 'Tênis Nike Revolution 6 Next Nature Masculino',
        imageUrl: '/images/products/nike-revolution-thumb1.png', // Imagem do produto
      },
    ],
    total: 219.00,
    installments: 'ou 10x de R$ 21,90 sem juros',
  },
};


// --- Estilos para a OrderSuccessPage ---
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--light-gray-3)', // Fundo geral da página
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '800px', // Container um pouco mais estreito para esta página
  width: '90%',
  margin: '40px auto',
  padding: '30px 40px', // Padding interno
  backgroundColor: 'var(--white)', // Caixa de conteúdo branca
  borderRadius: '8px',
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.07)',
  textAlign: 'center', // Centralizar o conteúdo superior (ícone, título)
};

const successIconStyles = {
  fontSize: '60px', // Tamanho do ícone/emoji
  marginBottom: '15px',
};

const successTitleStyles = {
  fontSize: 'clamp(24px, 4vw, 32px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '30px',
};

const infoSectionStyles = {
  textAlign: 'left', // Alinhar texto das seções à esquerda
  marginBottom: '25px',
  paddingBottom: '25px',
  borderBottom: '1px solid var(--light-gray-3)',
};
// Para a última seção não ter borda inferior
const lastInfoSectionStyles = { ...infoSectionStyles, borderBottom: 'none', marginBottom: '10px', paddingBottom: '10px' };


const sectionTitleStyles = {
  fontSize: '18px',
  fontWeight: '600',
  color: 'var(--dark-gray-2)',
  marginBottom: '15px',
};

const infoRowStyles = {
  display: 'flex',
  marginBottom: '8px',
  fontSize: '14px',
};

const infoLabelStyles = {
  color: 'var(--light-gray)',
  minWidth: '100px', // Para alinhar os valores
  marginRight: '10px',
};

const infoValueStyles = {
  color: 'var(--dark-gray-2)',
  fontWeight: '500',
};

// Estilos para o resumo do item comprado
const orderItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '10px 0', // Menos padding vertical
};
const orderItemImageStyles = {
    width: '60px', // Imagem menor no resumo
    height: '60px',
    objectFit: 'contain',
    borderRadius: '4px',
    border: '1px solid var(--light-gray-3)',
};
const orderItemNameStyles = {
    fontSize: '15px',
    color: 'var(--dark-gray-2)',
    fontWeight: '500',
};

const totalAmountStyles = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: 'var(--dark-gray)',
    marginTop: '5px', // Espaço do item acima
};
const totalInstallmentStyles = {
    fontSize: '13px',
    color: 'var(--dark-gray-2)',
    marginTop: '3px',
};

const buttonsContainerStyles = {
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column', // Botões empilhados
  alignItems: 'center', // Centraliza os botões
  gap: '15px',
};

const secondaryButtonStyles = { // Para "Imprimir Recibo"
  padding: '10px 25px',
  backgroundColor: 'var(--light-gray-2)',
  color: 'var(--dark-gray-2)',
  border: '1px solid var(--light-gray-3)',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  minWidth: '200px',
  transition: 'background-color 0.2s ease',
};

const primaryButtonStyles = { // Para "Voltar para Home"
  padding: '12px 30px',
  backgroundColor: 'var(--warning)', // Laranja
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  minWidth: '200px',
  textAlign: 'center',
  textDecoration: 'none', // Para o Link
  display: 'inline-block', // Para o Link
  transition: 'background-color 0.2s ease',
};


function OrderSuccessPage() {
  const navigate = useNavigate();
  const order = mockOrderDetails; // Usando dados mockados

  const handlePrintReceipt = () => {
    console.log("Simulando impressão de recibo...");
    alert("Funcionalidade de impressão de recibo ainda não implementada.");
    window.print(); // função de impressão do navegador
  };

  return (
    <div style={pageStyles}>
      <Header />
      <main style={mainContentContainerStyles}>
        <div style={successIconStyles}>🎉</div> {/* Ícone de Sucesso */}
        <h1 style={successTitleStyles}>Compra Realizada com Sucesso!</h1>

        {/* Informações Pessoais */}
        <section style={infoSectionStyles}>
          <h2 style={sectionTitleStyles}>Informações Pessoais</h2>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Nome:</span> <span style={infoValueStyles}>{order.personalInfo.name}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>CPF:</span> <span style={infoValueStyles}>{order.personalInfo.cpf}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Email:</span> <span style={infoValueStyles}>{order.personalInfo.email}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Celular:</span> <span style={infoValueStyles}>{order.personalInfo.celular}</span></div>
        </section>

        {/* Informações de Entrega */}
        <section style={infoSectionStyles}>
          <h2 style={sectionTitleStyles}>Informações de Entrega</h2>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Endereço:</span> <span style={infoValueStyles}>{order.shippingInfo.address}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Bairro:</span> <span style={infoValueStyles}>{order.shippingInfo.neighborhood}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Cidade:</span> <span style={infoValueStyles}>{order.shippingInfo.cityState}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>CEP:</span> <span style={infoValueStyles}>{order.shippingInfo.cep}</span></div>
        </section>

        {/* Informações de Pagamento */}
        <section style={infoSectionStyles}>
          <h2 style={sectionTitleStyles}>Informações de Pagamento</h2>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Titular:</span> <span style={infoValueStyles}>{order.paymentInfo.cardHolder}</span></div>
          <div style={infoRowStyles}><span style={infoLabelStyles}>Final do Cartão:</span> <span style={infoValueStyles}>{order.paymentInfo.cardLastDigits}</span></div>
        </section>

        {/* Resumo da compra */}
        <section style={lastInfoSectionStyles}> {/* Usando o estilo para não ter borda inferior */}
          <h2 style={sectionTitleStyles}>Resumo da compra</h2>
          {order.orderSummary.items.map(item => (
            <div key={item.id} style={orderItemStyles}>
              <img src={item.imageUrl} alt={item.name} style={orderItemImageStyles} />
              <span style={orderItemNameStyles}>{item.name}</span>
            </div>
          ))}
          <div style={{textAlign: 'right', marginTop: '15px'}}> {/* Alinhamento do total */}
            <span style={infoLabelStyles}>Total</span>
            <div style={totalAmountStyles}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.orderSummary.total)}</div>
            <div style={totalInstallmentStyles}>{order.orderSummary.installments}</div>
          </div>
        </section>

        <div style={buttonsContainerStyles}>
          <button style={secondaryButtonStyles} onClick={handlePrintReceipt}>
            <FaPrint style={{ marginRight: '8px' }} />
            Imprimir Recibo
          </button>
          <Link to="/" style={primaryButtonStyles}>
            Voltar para Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OrderSuccessPage;