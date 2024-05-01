import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  border: 1px solid #ddd;
  border-radius: 20px;
  color: white;

  h2 {
    text-align: center;
  }

  p {
    margin-top: 8px;
    text-align: center;
  }

  label {
    text-align: center;
    margin-bottom: 8px
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  div input {
    border: 1px solid #ddd;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    color: white;
  }

  button, a {
    text-decoration: none;
    border: 1px solid #ddd;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    color: white;
    font-size: 16px;
    transition: all .3s;
    cursor: pointer;
    margin-top: 15px;

    &:hover {
      background-color: #ffffff44;
    }
  }
`;

export const Or = styled.section`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;

  p {
    font-size: 14px
  }

  div {
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin-top: 8px;    
  }
`;