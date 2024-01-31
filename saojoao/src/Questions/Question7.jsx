import React, { useState } from 'react';
import './Estilos/Question7.css';
import Button from '../Components/Form/Button/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo/Logo.png';

const FaixaEtariaQuestion = () => {
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] = useState({
    atracoes: false,
    estruturas: false,
    ativacoes: false,
    bares: false,
    organizacao: false,
    limpeza: false,
    seguranca: false,
    outros: false,
    outrosText: '',
  });

  const navigate = useNavigate();

  const handleFaixaEtariaChange = (event) => {
    const { id, checked } = event.target;
    const updatedSelection = { ...selectedFaixaEtaria, [id]: checked };

    // Desmarca todas as outras caixas de seleção se uma é marcada
    if (checked) {
      for (const key in updatedSelection) {
        if (key !== id) {
          updatedSelection[key] = false;
        }
      }
    }

    setSelectedFaixaEtaria(updatedSelection);
  };

  const handleOutrosTextChange = (event) => {
    setSelectedFaixaEtaria((prevSelected) => ({
      ...prevSelected,
      outrosText: event.target.value,
    }));
  };

  return (
    <div>
      <h1 className='question-title'>O que você <span id='mais'>mais</span> gostou ?</h1>
      <div className='container_geral'>
        <div>
          <label className='container' htmlFor="atracoes">
            <input
              type="checkbox"
              id='atracoes'
              value='atracoes'
              checked={selectedFaixaEtaria.atracoes}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>ATRACOES</span>
          </label>
        </div>
        <div>
          <label className='container' htmlFor="estruturas">
            <input
              type="checkbox"
              id='estruturas'
              value='estruturas'
              checked={selectedFaixaEtaria.estruturas}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>ESTRUTURAS</span>
          </label>
        </div>
        <div>
          <label className='container' htmlFor="ativacoes">
            <input
              type="checkbox"
              id='ativacoes'
              value='ativacoes'
              checked={selectedFaixaEtaria.ativacoes}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>ATIVAÇÕES</span>
          </label>
        </div>
        <div>
          <label className='container' htmlFor="bares">
            <input
              type="checkbox"
              id='bares'
              value='bares'
              checked={selectedFaixaEtaria.bares}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>BARES</span>
          </label>
        </div>
        <div>
          <label className='container' htmlFor="organizacao">
            <input
              type="checkbox"
              id='organizacao'
              value='organizacao'
              checked={selectedFaixaEtaria.organizacao}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>ORGANIZAÇÃO</span>
          </label>
        </div>
        <div>
          <label className='container' htmlFor="limpeza">
            <input
              type="checkbox"
              id='limpeza'
              value='limpeza'
              checked={selectedFaixaEtaria.limpeza}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>LIMPEZA</span>
          </label>
        </div>
        <div>
          <label className='container' htmlFor="seguranca">
            <input
              type="checkbox"
              id='seguranca'
              value='seguranca'
              checked={selectedFaixaEtaria.seguranca}
              onChange={handleFaixaEtariaChange}
            />
            <div className='checkmark'></div>
            <span>SEGURANÇA</span>
          </label>
        </div>
      </div>
      {/* Adicione o campo de texto para "OUTROS" */}
      <div>
        <label className='container' htmlFor="outros">
          <input
            type="checkbox"
            id='outros'
            value='outros'
            checked={selectedFaixaEtaria.outros}
            onChange={handleFaixaEtariaChange}
          />
          <div className='checkmark'></div>
          <span>OUTROS</span>
        </label>
        {selectedFaixaEtaria.outros && (
          <div className='container_input_especifique'>
            <input
            className='especifique'
              type="text"
              value={selectedFaixaEtaria.outrosText}
              onChange={handleOutrosTextChange}
              placeholder="Especifique"
            />
          </div>
        )}
      </div>
      <div className='container_button'>
        <button id='button_7' onClick={() => navigate('/question8')} >Próxima pergunta</button>
      </div>
      <div className='logosaojoao'>
        <img id='logo_question7' src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default FaixaEtariaQuestion;
