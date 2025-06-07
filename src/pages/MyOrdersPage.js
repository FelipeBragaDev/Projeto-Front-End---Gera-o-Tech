import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


// --- Mock Data ---
const mockUserProfile = {
  personalInfo: {
    name: 'Francisco Antonio Pereira',
    cpf: '123.485.913-35',
    email: 'francisco@gmail.com',
    celular: '(85) 5555-5555',
  },
  shippingInfo: {
    address: 'Rua João Pessoa, 333',
    neighborhood: 'Centro',
    cityState: 'Fortaleza, Ceará',
    cep: '433-8800',
  },
};

const mockUserOrders = [
  {
    id: '2234981932',
    items: [{ name: 'Tênis Nike Revolution 6 Next Nature Masculino', imageUrl: '/images/products/nike-revolution-thumb1.png' }], 
    status: 'Produto em trânsito',
    statusColor: 'var(--warning)',
  },
  {
    id: '4495810492',
    items: [{ name: 'Tênis Nike Revolution 6 Next Nature Masculino', imageUrl: '/images/products/nike-revolution-thumb2.png' }],
    status: 'Finalizado',
    statusColor: 'var(--success)',
  },
  {
    id: '4495810493',
    items: [{ name: 'Tênis Nike Revolution 6 Next Nature Masculino', imageUrl: '/images/products/nike-revolution-thumb3.png' }],
    status: 'Cancelado',
    statusColor: 'var(--error)', 
  },
  {
    id: '4495810494',
    items: [{ name: 'Tênis Nike Revolution 6 Next Nature Masculino', imageUrl: '/images/products/nike-revolution-thumb4.png' }],
    status: 'Finalizado',
    statusColor: 'var(--success)',
  },
  {
    id: '4495810495',
    items: [{ name: 'Tênis Nike Revolution 6 Next Nature Masculino', imageUrl: '/images/products/nike-revolution-main.png' }],
    status: 'Finalizado',
    statusColor: 'var(--success)',
  },
];


// --- Estilos ---
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--light-gray-3)',
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '1200px',
  width: '90%',
  margin: '30px auto',
  display: 'flex',
  gap: '30px',
  alignItems: 'flex-start',
};

// Sidebar de Navegação (Esquerda)
const sidebarStyles = {
  flex: '0 0 280px', 
  backgroundColor: 'var(--white)',
  padding: '25px',
  borderRadius: '8px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
};

const sidebarTitleStyles = {
  fontSize: '14px',
  fontWeight: '600',
  color: 'var(--dark-gray-3)',
  textTransform: 'uppercase',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '1px solid var(--light-gray-3)',
};

const navLinkStyles = {
  display: 'block',
  padding: '12px 15px',
  margin: '0 -15px 5px -15px', 
  borderRadius: '4px',
  textDecoration: 'none',
  fontSize: '16px',
  color: 'var(--dark-gray-2)',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease',
};

const activeNavLinkStyles = {
  ...navLinkStyles,
  backgroundColor: 'var(--primary-light)',
  color: 'var(--primary)',
  fontWeight: 'bold',
};

// Área de Conteúdo Principal (Direita)
const contentAreaStyles = {
  flex: 1, 
  backgroundColor: 'var(--white)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
};

const contentTitleStyles = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '25px',
  paddingBottom: '15px',
  borderBottom: '1px solid var(--light-gray-3)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const editLinkStyles = {
    fontSize: '14px',
    color: 'var(--primary)',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: '500',
};


// Estilos para a lista de pedidos
const orderListItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px 0',
    borderBottom: '1px solid var(--light-gray-3)',
};
const orderItemImageStyles = { width: '60px', height: '60px', objectFit: 'contain', borderRadius: '4px', backgroundColor: 'var(--light-gray-3)'};
const orderItemDetailsStyles = { flexGrow: 1 };
const orderIdStyles = { fontSize: '12px', color: 'var(--light-gray)', marginBottom: '4px' };
const orderItemNameStyles = { fontSize: '15px', color: 'var(--dark-gray-2)', fontWeight: '500' };
const orderStatusStyles = (statusColor) => ({
    fontSize: '14px',
    fontWeight: '600',
    color: statusColor || 'var(--dark-gray-2)',
    textAlign: 'right',
    minWidth: '120px',
});

// Estilos para Minhas Informações
const infoSectionStyles = { marginBottom: '30px' };
const infoSectionTitleStyles = { fontSize: '18px', fontWeight: '600', color: 'var(--dark-gray)', marginBottom: '15px'};
const infoRowStyles = { display: 'flex', marginBottom: '10px', fontSize: '15px' };
const infoLabelStyles = { color: 'var(--dark-gray-3)', minWidth: '120px', marginRight: '10px' };
const infoValueStyles = { color: 'var(--dark-gray-2)', fontWeight: '500' };


function MyOrdersPage() {
  const [activeView, setActiveView] = useState('meus-pedidos');

  const renderContent = () => {
    switch (activeView) {
      case 'meus-pedidos':
        return (
          <div>
            <h2 style={contentTitleStyles}>Meus Pedidos</h2>
            {mockUserOrders.length > 0 ? (
              mockUserOrders.map(order => (
                <div key={order.id} style={orderListItemStyles}>
                  <img src={order.items[0].imageUrl} alt={order.items[0].name} style={orderItemImageStyles} />
                  <div style={orderItemDetailsStyles}>
                    <p style={orderIdStyles}>Pedido n° {order.id}</p>
                    <p style={orderItemNameStyles}>{order.items[0].name}</p>
                  </div>
                  <span style={orderStatusStyles(order.statusColor)}>{order.status}</span>
                </div>
              ))
            ) : (
              <p>Você ainda não fez nenhum pedido.</p>
            )}
          </div>
        );
      case 'minhas-informacoes':
        return (
          <div>
            <div style={contentTitleStyles}>
                <h2>Minhas Informações</h2>
                <span style={editLinkStyles} onClick={() => alert('Funcionalidade "Editar" não implementada.')}>Editar</span>
            </div>
            <div style={infoSectionStyles}>
                <h3 style={infoSectionTitleStyles}>Informações Pessoais</h3>
                <div style={infoRowStyles}><span style={infoLabelStyles}>Nome Completo:</span> <span style={infoValueStyles}>{mockUserProfile.personalInfo.name}</span></div>
                <div style={infoRowStyles}><span style={infoLabelStyles}>CPF:</span> <span style={infoValueStyles}>{mockUserProfile.personalInfo.cpf}</span></div>
                <div style={infoRowStyles}><span style={infoLabelStyles}>Email:</span> <span style={infoValueStyles}>{mockUserProfile.personalInfo.email}</span></div>
                <div style={infoRowStyles}><span style={infoLabelStyles}>Celular:</span> <span style={infoValueStyles}>{mockUserProfile.personalInfo.celular}</span></div>
            </div>
            <div style={infoSectionStyles}>
                <h3 style={infoSectionTitleStyles}>Informações de Entrega</h3>
                <div style={infoRowStyles}><span style={infoLabelStyles}>Endereço:</span> <span style={infoValueStyles}>{mockUserProfile.shippingInfo.address}</span></div>
                <div style={infoRowStyles}><span style={infoLabelStyles}>Bairro:</span> <span style={infoValueStyles}>{mockUserProfile.shippingInfo.neighborhood}</span></div>
                <div style={infoRowStyles}><span style={infoLabelStyles}>Cidade:</span> <span style={infoValueStyles}>{mockUserProfile.shippingInfo.cityState}</span></div>
                <div style={infoRowStyles}><span style={infoLabelStyles}>CEP:</span> <span style={infoValueStyles}>{mockUserProfile.shippingInfo.cep}</span></div>
            </div>
          </div>
        );
      case 'metodos-pagamento':
        return (
          <div>
            <h2 style={contentTitleStyles}>Métodos de Pagamento</h2>
            <p>Gerencie seus métodos de pagamento aqui. (Em construção)</p>
          </div>
        );
      default:
        return <div>Selecione uma opção.</div>;
    }
  };

  return (
    <div style={pageStyles}>
      <Header />
      <main style={mainContentContainerStyles}>
        <aside style={sidebarStyles}>
          <h3 style={sidebarTitleStyles}>Meu Perfil</h3>
          <nav>
            <div
              style={activeView === 'meus-pedidos' ? activeNavLinkStyles : navLinkStyles}
              onClick={() => setActiveView('meus-pedidos')}
              role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActiveView('meus-pedidos')}
            >
              Meus Pedidos
            </div>
            <div
              style={activeView === 'minhas-informacoes' ? activeNavLinkStyles : navLinkStyles}
              onClick={() => setActiveView('minhas-informacoes')}
              role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActiveView('minhas-informacoes')}
            >
              Minhas Informações
            </div>
            <div
              style={activeView === 'metodos-pagamento' ? activeNavLinkStyles : navLinkStyles}
              onClick={() => setActiveView('metodos-pagamento')}
              role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setActiveView('metodos-pagamento')}
            >
              Métodos de Pagamento
            </div>
          </nav>
        </aside>
        <section style={contentAreaStyles}>
          {renderContent()}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyOrdersPage;