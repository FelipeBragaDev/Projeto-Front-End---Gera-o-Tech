import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

// --- Estilos ---
const pageStyles = { display: 'flex', flexDirection: 'column', minHeight: '100vh' };
const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '800px',
  width: '90%',
  margin: '30px auto',
  padding: '30px 40px',
  backgroundColor: 'var(--white)',
  borderRadius: '8px',
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.07)',
};
const pageTitleStyles = {
  fontSize: 'clamp(22px, 4vw, 28px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '30px',
  textAlign: 'center',
};

const formSectionStyles = { marginBottom: '30px' };
const formSectionTitleStyles = { fontSize: '18px', fontWeight: '600', color: 'var(--dark-gray-2)', marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid var(--light-gray-3)'};
const inputGroupStyles = { marginBottom: '20px' };
const labelStyles = { display: 'block', fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '6px', fontWeight: '500' };
const inputStyles = { width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray-2)', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', backgroundColor: 'var(--light-gray-3)' };

const primaryButtonStyles = {
  width: '100%',
  maxWidth: '300px',
  display: 'block',
  margin: '40px auto 0 auto',
  padding: '14px',
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
};


const checkboxGroupStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '25px',
  marginTop: '10px', 
};

const checkboxInputStyles = {
  marginRight: '10px',
  marginTop: '3px',
  width: '16px', 
  height: '16px',
  accentColor: 'var(--primary)',
  cursor: 'pointer',
};

const checkboxLabelStyles = {
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  lineHeight: '1.5',
  cursor: 'pointer',
  flex: 1, 
};

const primaryButtonStyles_full = {
  width: '100%',
  maxWidth: '300px',
  display: 'block',
  margin: '30px auto 0 auto',
  padding: '14px',
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
};


function DetailedSignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', cpf: '', email: '', celular: '',
    cep: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '',
    password: '', confirmPassword: '',
  });
  const [receiveOffers, setReceiveOffers] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setReceiveOffers(checked);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    console.log('Dados do formulário:', { ...formData, receiveOffers });
    alert('Cadastro detalhado (simulado) realizado com sucesso! Redirecionando para login.');
    navigate('/login');
  };

    return (
    <div style={pageStyles}>
      <Header />
      <main style={mainContentContainerStyles}>
        <h1 style={pageTitleStyles}>Complete seu Cadastro</h1>
        <form onSubmit={handleSubmit}>
          {/* Seção Informações Pessoais */}
          <div style={formSectionStyles}>
            <h2 style={formSectionTitleStyles}>Informações Pessoais</h2>
            <div style={inputGroupStyles}>
              <label htmlFor="fullName" style={labelStyles}>Nome Completo *</label>
              <input type="text" name="fullName" id="fullName" style={inputStyles} placeholder="Insira seu nome completo" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div style={inputGroupStyles}><label htmlFor="cpf" style={labelStyles}>CPF *</label><input type="text" name="cpf" id="cpf" style={inputStyles} placeholder="000.000.000-00" value={formData.cpf} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="celular" style={labelStyles}>Celular *</label><input type="tel" name="celular" id="celular" style={inputStyles} placeholder="(00) 00000-0000" value={formData.celular} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="email" style={labelStyles}>Email *</label><input type="email" name="email" id="email" style={inputStyles} placeholder="seuemail@exemplo.com" value={formData.email} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="password" style={labelStyles}>Senha *</label><input type="password" name="password" id="password" style={inputStyles} placeholder="Crie uma senha (mín. 6 caracteres)" value={formData.password} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="confirmPassword" style={labelStyles}>Confirmar Senha *</label><input type="password" name="confirmPassword" id="confirmPassword" style={inputStyles} placeholder="Confirme sua senha" value={formData.confirmPassword} onChange={handleChange} required /></div>
          </div>

          {/* Seção Informações de Endereço */}
          <div style={formSectionStyles}>
            <h2 style={formSectionTitleStyles}>Endereço de Entrega</h2>
            <div style={inputGroupStyles}><label htmlFor="cep" style={labelStyles}>CEP *</label><input type="text" name="cep" id="cep" style={inputStyles} placeholder="00000-000" value={formData.cep} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="endereco" style={labelStyles}>Endereço (Rua, Av.) *</label><input type="text" name="endereco" id="endereco" style={inputStyles} placeholder="Ex: Rua das Palmeiras" value={formData.endereco} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="numero" style={labelStyles}>Número *</label><input type="text" name="numero" id="numero" style={inputStyles} placeholder="Ex: 123" value={formData.numero} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="complemento" style={labelStyles}>Complemento</label><input type="text" name="complemento" id="complemento" style={inputStyles} placeholder="Ex: Apto 101, Bloco B" value={formData.complemento} onChange={handleChange} /></div>
            <div style={inputGroupStyles}><label htmlFor="bairro" style={labelStyles}>Bairro *</label><input type="text" name="bairro" id="bairro" style={inputStyles} placeholder="Insira seu bairro" value={formData.bairro} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="cidade" style={labelStyles}>Cidade *</label><input type="text" name="cidade" id="cidade" style={inputStyles} placeholder="Insira sua cidade" value={formData.cidade} onChange={handleChange} required /></div>
            <div style={inputGroupStyles}><label htmlFor="estado" style={labelStyles}>Estado (UF) *</label><input type="text" name="estado" id="estado" style={inputStyles} placeholder="Ex: CE" value={formData.estado} onChange={handleChange} maxLength="2" required /></div>
          </div>
          
          {/* Checkbox para ofertas por email */}
          <div style={checkboxGroupStyles}>
            <input 
              type="checkbox" 
              id="receiveOffers" 
              name="receiveOffers"
              style={checkboxInputStyles}
              checked={receiveOffers}
              onChange={handleChange}
            />
            <label htmlFor="receiveOffers" style={checkboxLabelStyles}>
              Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
            </label>
          </div>
          
          <button type="submit" style={primaryButtonStyles_full}>Criar Conta</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default DetailedSignupPage;