import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #111;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font padrão da aplicação é 16px que é ideal para desktop

    //Sempre colocar o font size nesses casos de adaptação de tela  em % por conta da responsividade

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: #fff;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button { 
        cursor: pointer;
    }

`;