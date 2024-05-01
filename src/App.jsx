import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;