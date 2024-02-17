import React, { useEffect } from 'react';
import logo from '../assets/Logo São João/Logosaojoao.png';
import './Estilos/Finish.css';
import { useNavigate } from 'react-router-dom';

const Finish = () => {
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <div className='container_finish'>
        <header className='container_logo_finish'>
          <img src={logo} alt="logo" />
        </header>
        <main className='container_main_finish'>
          <h1><span id='pink'>AGRADECEMOS</span> POR DEDICAR SEU TEMPO PARA <span id='ocean'>COMPARTILHAR SUAS OPINIÕES</span> NA NOSSA PESQUISA DE SATISFAÇÃO DO SÃO JOÃO 2023.</h1>
          <div className='title-saojoao'>
            <h1 id='saojoao'>TE ESPERAMOS NO <span id='orange'>SÃO JOÃO DA GENTE - 2024</span>, ATÉ BREVE!</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Finish;
