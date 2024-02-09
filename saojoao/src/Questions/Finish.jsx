// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import logo from '../assets/Logo São João/Logosaojoao.png';
import './Estilos/Finish.css';

const Finish = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header className='container_logo_finish'>
        <img src={logo} alt="logo" />
      </header>
      <main className='container_main_finish'>
        <h1><span id='pink'>AGRADECEMOS</span> POR DEDICAR SEU TEMPO PARA <span id='ocean'>COMPARTILHAR SUAS OPINIÕES</span> NA NOSSA PESQUISA DE SATISFAÇÃO DO SÃO JOÃO 2023.</h1>
        <h1>TE ESPERAMOS NO <span id='orange'>SÃO JOÃO DA GENTE - 2024</span>, ATÉ BREVE!</h1>
      </main>
    </div>
  );
};

export default Finish;
