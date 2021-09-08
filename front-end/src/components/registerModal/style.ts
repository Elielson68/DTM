import styled from "styled-components";

// Elemento PAI
export const Body = styled.div`
  text-align: center;
`;

// Estilização dos componentes
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6C7A89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
`;

export const Card = styled.div`
  background-color: white;
  height: 400px;
  width: 400px;
  border-radius: 15px;
  margin: 0 auto;
`;

export const CardText = styled.div`
  text-align: center;
  background-color: #102E4A;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size: 20px;
  font-weight: bolder;
  padding: 2px;
`;

export const InputArea = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px;

`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Text = styled.div`
  text-align: center;
  background-color: #102E4A;
  padding: 15px;
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size: 20px;
  font-weight: bolder;
`;