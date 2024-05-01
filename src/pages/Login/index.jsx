import React from "react";
import { Container, Or } from './styled';
import { FaGoogle, FaCodepen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <Container>
        <h2>Log in to your account</h2>
        <Link to="/Login">
          <FaGoogle />
          Log in with Google
        </Link>
        <Or>
          <div></div>
          <p>OR</p>
          <div></div>
        </Or>
        <div>
          <label htmlFor="">Email Adress</label>
          <input type="text" />
        </div>
        <button>
          <FaCodepen /> 
          Get login code
        </button>
        <p htmlFor="">Don't have an account? <strong>Create now</strong></p>
      </Container>
    </>
  );
}