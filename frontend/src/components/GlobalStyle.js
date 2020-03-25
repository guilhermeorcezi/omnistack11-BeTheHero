import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
      font-size:14px;
      font-family: Roboto, 'sans-serif';
      background: #f0f0f5;
      -webkit-font-smoothing:antialised;
  }
 
  input,button,textarea{
      font: 400 18px Roboto, sans-serif;
  }

  button{
      cursor:pointer
  }
  
  ul{
      list-style:none;
  }
  `;
