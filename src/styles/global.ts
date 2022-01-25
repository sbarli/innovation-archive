// src/styles/global.ts
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700|Nunito+Sans:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
 
  #root {
    margin: 0 auto;
  }
  
/* font-family: 'Josefin Sans', sans-serif;
font-family: 'Nunito Sans', sans-serif; */

:root {
  /* color variables */
  --color-primary-light: #CDEDF6;
  --color-primary-medium: #5EB1BF;
  --color-primary-dark: #143642;
  --color-charcoal-dark: #0B0B0B;
  --color-charcoal-medium: #373737;
  --color-charcoal-light: #5D5C5D;
  --color-gray-light: #fcfcfc;
  --color-gray-medium: #efefef;
  --color-gray-dark: #d8d8d8;
  --color-error: #A8201A;
  --color-warning: #EC9A29;
  /* font-related variables */
  --font-stack-all: -apple-system, BlinkMacSystemFont, 'Nunito Sans', 'Josefin Sans', sans-serif;
  --font-stack-default: -apple-system, BlinkMacSystemFont, 'Nunito Sans', sans-serif;
  --font-stack-headers: 'Josefin Sans', sans-serif;
  --font-stack-code: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  --font-weight-default: 400;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-size-sm: 0.9rem;
  --font-size-lg: 1.2rem;
  /* form-related variables */
  --form-border: 1px solid;
  --input-width: 15rem;
  /* border-related variables */
  --radius-default: 5px;
  --border-default: 1px solid black;
  --box-shadow-default: 1.5px 0.5px 1.8px;
  /* button-related variables */
  --button-light: #B0BC98;
  --button-medium: #87A878;
  --button-dark: #788046;
  --button-disabled: #d8d8d8;
  --button-hover-brightness: 85%;
  /* card-related variables */
  --card-primary: #9F9F92;
  --card-secondary: #E3DBDB;
  --card-tertiary: #C9D5B5;
  --card-border: #522B29;
  --card-empty-resource-bg: #0B0B0B;
  --card-purple-effect: #b7bfdc;
  --card-purple-bg: #70509b;
  --card-green-effect: #9bd29c;
  --card-green-bg: #5db39d;
  --card-yellow-effect: #f5f6bf;
  --card-yellow-bg: #f6f6a2;
  --card-red-effect: #451517;
  --card-red-bg: #e790aa;
  --card-blue-effect: #89cbe0;
  --card-blue-bg: #9bd3e2;
  /* player-related variables */
  --player-one-color: #4F5D2F;
  --player-two-color: #311847;
  --player-three-color: #EAD94C;
  --player-four-color: #4B88A2;
}

  body {
    height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
`;
