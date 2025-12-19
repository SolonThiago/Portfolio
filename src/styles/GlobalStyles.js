import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #050505;        /* Preto Quase Total */
    --bg-gradient: radial-gradient(circle at 50% -20%, #1e1e2f, #050505); /* Luz vindo de cima */
    --text-color: #f0f0f0;
    --text-secondary: #a0a0a0;
    --accent-color: #8a4fff;    /* Roxo Principal */
    --accent-gradient: linear-gradient(90deg, #8a4fff, #c471ed); /* Gradiente Roxo -> Lilás */
    --font-primary: 'Inter', sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html {
    scroll-behavior: smooth; /* Rolagem suave ao clicar nos links */
  }

  body {
    background: var(--bg-color);
    background-image: var(--bg-gradient);
    background-attachment: fixed; /* O fundo não mexe ao rolar */
    color: var(--text-color);
    font-family: var(--font-primary);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  
  /* Barra de Rolagem Estilizada (Webkit) */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { 
    background: #333; 
    border-radius: 4px; 
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--accent-color); }

  a { text-decoration: none; color: inherit; cursor: pointer; transition: 0.3s; }
  button { cursor: pointer; border: none; font-family: var(--font-primary); }
`;