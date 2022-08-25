import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 125px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 75%;
  height: 100%;

  h1 {
    margin: 0;
    color: #fff;
    margin-bottom: 1.5%;
    font-size: 300%;
  }

  @media screen and (max-width: 1920px) {
    max-width: 100%;
  }

  @media screen and (max-width: 1440px) {
    h1 {
      font-size: 200%;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 3.5%;
  width: 30%;
  height: 80%;
  background-color: #fff;
  border-radius: 16px;
  padding: 3%;
  position: relative;

  h3 {
    margin: 0;
    align-self: flex-start;
    font-size: 150%;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    padding: 1% 0;
    font-size: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 2%;
  }

  @media screen and (max-width: 1920px) {
    h3 {
      font-size: 150%;
    }
    input {
      font-size: 100%;
    }
  }

  @media screen and (max-width: 1440px) {
    h3 {
      font-size: 150%;
    }
    input {
      font-size: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    h3 {
      font-size: 200%;
    }
    input {
      font-size: 150%;
    }
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    h3 {
      font-size: 150%;
    }
    input {
      font-size: 100%;
    }
  }
`;

export const RatioDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: aliceblue;
  width: 100%;
  height: fit-content;
  margin-top: 2%;
  margin-bottom: 4%;
  .ratio1,
  .ratio2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: fit-content;
    height: fit-content;
    border-radius: 16px;
    background: #009f93;
    padding: 2.5% 5%;
    input {
      width: fit-content;
      height: fit-content;
      margin: 0;
      padding: 0;
      background: none;
      margin-right: 5%;
    }
    label {
      margin: 0;
      padding: 0;
      font-size: 100%;
      color: #ffffff;
      background: none;
    }
  }

  .ratio1 {
    margin-right: 5%;
  }

  @media screen and (max-width: 1920px) {
    .ratio1,
    .ratio2 {
      height: 100%;
      label {
        font-size: 120%;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .ratio1,
    .ratio2 {
      label {
        font-size: 75%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .ratio1,
    .ratio2 {
      height: 100%;
      label {
        font-size: 120%;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .ratio1,
    .ratio2 {
      height: 120%;
      label {
        font-size: 75%;
      }
    }
  }
`;

export const Button = styled.button`
  background: #f1ae02;
  border-radius: 16px;
  width: 100%;
  height: 7.5%;
  outline: none;
  border: none;
  font-size: 150%;
  line-height: 21px;
  color: #ffffff;
  transition: linear 0.2s;
  &:hover {
    background-color: #ac7c00;
    cursor: pointer;
    width: 65%;
  }
  @media screen and (max-width: 1440px) {
    font-size: 100%;
  }
`;


