import styled from "styled-components";
// Importando imagem dos assets
import img from "../../assets/img/imgMeasurementCard.jpg";

// Elemento Pai
export const Container = styled.div`
  background-color: #102E4A;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  @media(max-width: 1170px) {
    flex-direction: column;
    height: 100%;
  }
`;
// Lado Esquerdo
export const DivLeft = styled.div`
  h1 {
    color: #fff;
    padding: 10px;
    text-align: center;
  }
`;
export const CardLeft = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 23px 0px 75px 0px;
  width: 490px;
  margin-right: 10px;
  @media(max-width: 1170px) {
    margin-right: 0;
  }
  @media(max-width: 490px) {
    width: 400px;
  }
  @media(max-width: 425px) {
    width: 300px;
    padding: 20px 0px 70px 0px;
  }
  p {
    font-size: 15px;
    font-weight: bold;
    margin-left: 90px;
    @media(max-width: 425px) {
      text-align: center;
      margin-left: 0px;
    }
  }
  h4 {
    text-align: center;
  }
`;
export const Div = styled.div`
  display: flex;
  flex: row wrap;
  justify-content: center;
`;
export const DivBox = styled.div`
  border: 1px solid #808080;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  margin-left: 10px;
  @media(max-width: 425px) {
    margin-left: 5px;
    width: 100px;
  }
`;
export const StartButton = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: #009F92;
  text-align: center;
  color: #fff;
  font-weight: bold;
  @media(max-width: 425px) {
    margin-right: 0px;
    width: 100px;
  }
`;
export const Line = styled.div`
  border-bottom: 1px solid #808080;
  width: 60%;
  margin: 0 auto;
  padding: 5px;
`;
export const FinishButton = styled.button`
  width: 70%;
  height: 40px;
  margin-top: 80px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: #F1AE02;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;
// Lado Direito
export const DivRight = styled.div`
  h1 {
    color: #fff;
    padding: 10px;
    text-align: center;
  }
`;
export const CardRight = styled.div`
  background-color: #fff;
  padding: 25px;
  width: 590px;
  height: 490px;
  border-radius: 15px;
  margin-left: 10px;
  @media(max-width: 1170px) {
    margin-bottom: 250px;
  }
  @media(max-width: 665px) {
    width: 500px;
    padding: 20px;
  }
  @media(max-width: 565px) {
    width: 400px;
    padding: 15px;
  }
  @media(max-width: 442px) {
    width: 300px;
    padding: 10px;
  }
  @media(max-width: 330px) {
    width: 260px;
  }
`;
export const Img = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  align-items: center;
`;