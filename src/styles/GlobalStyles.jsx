import styled, { createGlobalStyle } from 'styled-components';
import { mainBG } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter';
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${mainBG};
  }
`;