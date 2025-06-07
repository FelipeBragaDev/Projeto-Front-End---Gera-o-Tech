import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderSummary from '../components/OrderSummary'; // Reutilizaremos para o resumo
import { mockCartItemsData } from '../data/mockData'; // Supondo que os dados do carrinho estão centralizados
import { useNavigate } from 'react-router-dom';

// --- Estilos para a CheckoutPage ---
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--light-gray-3)', // Fundo geral da página um pouco acinzentado
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '1100px', // Largura um pouco menor para checkout
  width: '90%',
  margin: '30px auto',
  padding: '0 10px',
  boxSizing: 'border-box',
};

const pageTitleStyles = {
  fontSize: 'clamp(22px, 4vw, 28px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '30px',
  textAlign: 'left',
};

const checkoutLayoutStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  alignItems: 'flex-start',
};

// Coluna da Esquerda: Formulários
const formColumnStyles = {
  flex: '2 1 600px',
  backgroundColor: 'var(--white)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
};

const formSectionStyles = {
  marginBottom: '35px',
};

const formSectionTitleStyles = {
  fontSize: '18px',
  fontWeight: '600',
  color: 'var(--dark-gray)',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '1px solid var(--light-gray-3)',
};

const inputGroupStyles = { // Para agrupar label e input
  marginBottom: '15px',
};

const labelStyles = {
  display: 'block',
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  marginBottom: '6px',
  fontWeight: '500',
};

const inputStyles = {
  width: '100%',
  padding: '12px 15px',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  fontSize: '14px',
  boxSizing: 'border-box',
  backgroundColor: 'var(--light-gray-3)', // Fundo dos inputs como na imagem
};

const inputRowStyles = { // Para inputs lado a lado (ex: Data de Validade e CVV)
  display: 'flex',
  gap: '15px',
};

const inputWrapperStyles = { // Para envolver cada input em uma linha flex
  flex: 1,
};

const radioGroupStyles = {
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
};

const radioLabelStyles = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  cursor: 'pointer',
};

const radioInputStyles = {
  marginRight: '8px',
  accentColor: 'var(--primary)',
};

const paymentTotalSectionStyles = {
  marginTop: '30px',
  paddingTop: '20px',
  borderTop: '1px solid var(--light-gray-3)',
  textAlign: 'center',
};

const totalTextContainerStyles = { // Novo estilo
   textAlign: 'right',
   marginBottom: '20px',
};

const paymentButtonContainerStyles = { // Novo estilo
   textAlign: 'center',
};

const totalTextStyles = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '5px',
};

const installmentTextCheckoutStyles = {
  fontSize: '13px',
  color: 'var(--dark-gray-2)',
  marginBottom: '20px',
};

const paymentButtonStyles = {
  padding: '14px 30px',
  backgroundColor: 'var(--warning)', // Laranja
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  display: 'inline-block',
};


// Coluna da Direita: Resumo do Pedido (reutilizando OrderSummary)
const summaryColumnStyles = {
  flex: '1 1 320px', // Largura base menor
  position: 'sticky', // Para o resumo acompanhar a rolagem
  top: '20px',       // Distância do topo ao ficar sticky
};


function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cartao'); // 'cartao' ou 'boleto'
  const navigate = useNavigate();

  // Simular totais (no app real, viriam do carrinho/contexto)
  const subtotal = mockCartItemsData.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const frete = 0.00;
  const desconto = 30.00;
  const total = Math.max(0, subtotal + frete - desconto);

  const handlePayment = () => {
    console.log("Processando pagamento...");
    navigate('/order-success'); // Navega para uma página de sucesso (a ser criada)
  };

  return (
    <div style={pageStyles}>
      <Header />
      <div style={mainContentContainerStyles}>
        <h1 style={pageTitleStyles}>Finalizar Compra</h1>

        <main style={checkoutLayoutStyles}>
          {/* Coluna da Esquerda - Formulários */}
          <section style={formColumnStyles}>
            {/* Informações Pessoais */}
            <div style={formSectionStyles}>
              <h2 style={formSectionTitleStyles}>Informações Pessoais</h2>
              <div style={inputGroupStyles}>
                <label htmlFor="fullName" style={labelStyles}>Nome Completo *</label>
                <input type="text" id="fullName" style={inputStyles} placeholder="Insira seu nome" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="cpf" style={labelStyles}>CPF *</label>
                <input type="text" id="cpf" style={inputStyles} placeholder="Insira seu CPF" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="email" style={labelStyles}>E-mail *</label>
                <input type="email" id="email" style={inputStyles} placeholder="Insira seu email" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="celular" style={labelStyles}>Celular *</label>
                <input type="tel" id="celular" style={inputStyles} placeholder="Insira seu celular" />
              </div>
            </div>

            {/* Informações de Entrega */}
            <div style={formSectionStyles}>
              <h2 style={formSectionTitleStyles}>Informações de Entrega</h2>
              <div style={inputGroupStyles}>
                <label htmlFor="endereco" style={labelStyles}>Endereço *</label>
                <input type="text" id="endereco" style={inputStyles} placeholder="Insira seu endereço" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="bairro" style={labelStyles}>Bairro *</label>
                <input type="text" id="bairro" style={inputStyles} placeholder="Insira seu bairro" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="cidade" style={labelStyles}>Cidade *</label>
                <input type="text" id="cidade" style={inputStyles} placeholder="Insira sua cidade" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="cep" style={labelStyles}>CEP *</label>
                <input type="text" id="cep" style={inputStyles} placeholder="Insira seu CEP" />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="complemento" style={labelStyles}>Complemento</label>
                <input type="text" id="complemento" style={inputStyles} placeholder="Insira o complemento" />
              </div>
            </div>

            {/* Informações de Pagamento */}
            <div style={formSectionStyles}>
              <h2 style={formSectionTitleStyles}>Informações de Pagamento</h2>
              <p style={{...labelStyles, marginBottom:'15px'}}>Forma de Pagamento *</p>
              <div style={radioGroupStyles}>
                <label style={radioLabelStyles}>
                  <input type="radio" name="paymentMethod" value="cartao" checked={paymentMethod === 'cartao'} onChange={() => setPaymentMethod('cartao')} style={radioInputStyles} />
                  Cartão de Crédito
                </label>
                <label style={radioLabelStyles}>
                  <input type="radio" name="paymentMethod" value="boleto" checked={paymentMethod === 'boleto'} onChange={() => setPaymentMethod('boleto')} style={radioInputStyles} />
                  Boleto Bancário
                </label>
              </div>

              {paymentMethod === 'cartao' && (
                <>
                  <div style={inputGroupStyles}>
                    <label htmlFor="cardName" style={labelStyles}>Nome no Cartão *</label>
                    <input type="text" id="cardName" style={inputStyles} placeholder="Insira o nome do Cartão" />
                  </div>
                  <div style={inputGroupStyles}>
                    <label htmlFor="cardNumber" style={labelStyles}>Número do Cartão *</label>
                    <input type="text" id="cardNumber" style={inputStyles} placeholder="Insira o número do Cartão" />
                  </div>
                  <div style={inputRowStyles}>
                    <div style={{...inputWrapperStyles, flex: 2}}> {/* Data de validade maior */}
                      <label htmlFor="cardExpiry" style={labelStyles}>Data de validade do Cartão *</label>
                      <input type="text" id="cardExpiry" style={inputStyles} placeholder="MM/AA" />
                    </div>
                    <div style={inputWrapperStyles}>
                      <label htmlFor="cardCVV" style={labelStyles}>CVV *</label>
                      <input type="text" id="cardCVV" style={inputStyles} placeholder="CVV" />
                    </div>
                  </div>
                </>
              )}
              {paymentMethod === 'boleto' && (
                <p style={{fontSize: '14px', color: 'var(--dark-gray-2)', backgroundColor: 'var(--secondary)', padding: '15px', borderRadius:'4px'}}>Ao finalizar a compra, seu boleto será gerado.</p>
              )}
            </div>
            
            {/* Botão de Pagamento na Coluna Esquerda */}
            <div style={paymentTotalSectionStyles}>
                <div style={totalTextContainerStyles}>
                    <p style={totalTextStyles}>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</p>
                    <p style={installmentTextCheckoutStyles}>ou 10x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total/10)} sem juros</p>
                </div>
                <div style={paymentButtonContainerStyles}>
                    <button style={paymentButtonStyles} onClick={handlePayment}>
                        Realizar Pagamento
                    </button>
                </div>
            </div>
          </section>

          {/* Coluna da Direita - Resumo */}
          <aside style={summaryColumnStyles}>
            <OrderSummary 
                cartItems={mockCartItemsData}
                showActionButton={false}
            />
             {/* Botão de Pagamento na Coluna Direita, como na imagem */}
             <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button 
                    style={paymentButtonStyles} 
                    onClick={handlePayment}
                >
                    Realizar Pagamento
                </button>
            </div>
          </aside>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;