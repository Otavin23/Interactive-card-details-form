import styled from "styled-components";

export const main__Card = styled.main`
  background: yellow;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const container__block = styled.div`
  background: blue;
  max-width: 100%;
  width: 100%;
  display: flex;
  height: 100%;
`;

export const aside__images = styled.aside`
  background: red;
  width: 45%;
`;

export const form__block = styled.form`
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const form__container = styled.div`
  max-width: 1440px;
  width: 45%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  label {
    color: hsl(278, 68%, 11%);
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    text-transform: uppercase;
    font-size: clamp(13px, 1vh, 30px);
    letter-spacing: 1.5px;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.4rem;
    border: 1px solid hsl(270, 3%, 87%);
    outline: none;
    padding-left: 0.7rem;
    &::placeholder {
      padding-left: 0.3rem;
      opacity: 0.5;
      letter-spacing: 1px;
    }
  }

  button {
    margin-top: 1rem;
    background: red;
    border: none;
    width: 100%;
    height: 3rem;
    background: hsl(278, 68%, 11%);
    border-radius: 0.4rem;
    color: white;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export const inputs__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
`;

export const input__block__date = styled.div`
  display: flex;
  flex-direction: column;
`;

export const inputs__date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  input {
    width: 45%;
  }
`;

export const input__block__cvc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
