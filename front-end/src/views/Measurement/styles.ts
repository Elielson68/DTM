import styled from "styled-components";

// Importando imagem dos assets
import img from "../../assets/img/imgMeasurementCard.jpg";

// Elemento Pai
export const Container = styled.div`
  background-color: #102E4A;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;

  @media(max-width: 1024px) {
        & {
            display: flex;
            flex-direction: column;
            height: 150vh;
        }
    }
`;

// Lado Esquerdo
export const DivLeft = styled.div`
  h1 {
    color: #fff;
    padding: 10px;
    text-align: center;
    @media(max-width: 1024px) {
        & {
            font-size: 35px;
        }
    }
  }
`;
export const CardLeft = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 23px 0px 75px 0px;
  width: 490px;
  margin-right: 10px;

  @media(max-width: 1024px) {
    margin-left: 10px;
  }
  p {
    font-size: 15px;
    font-weight: bold;
    margin-left: 90px;

    @media(max-width: 1024px) {
        & {
            font-size: 18px;
        }
    }
  }
  h4 {
    text-align: center;
    @media(max-width: 1024px) {
        & {
            font-size: 20px;
        }
    }
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const DivBox = styled.div`
  border: 1px solid #808080;
  border-radius: 15px;

  width: 150px;
  height: 40px;
  
  margin-left: 10px;
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

  @media(max-width: 1024px) {
        & {
            font-size: 20px;
            height: 47px;
        }
    }
`;

// Lado Direito
export const DivRight = styled.div`
  margin-left: 10px;
   
  h1 {
    color: #fff;
    padding: 10px;
    text-align: center;
    @media(max-width: 1024px) {
        & {
            font-size: 35px;
        }
    }
  }
`;
export const CardRight = styled.div`
  background-color: #fff;
  padding: 10px;
  width: 590px;
  height: 490px;
  border-radius: 15px;
  border: 10px solid #fff;
  
  @media(max-width: 1024px) {
        & {
            width: 490px;
        }
  }
`;
export const Img = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  
  width: 100%;
  height: 100%;
  border-radius: 15px;

  @media(max-width: 1024px) {
    &{
      align-items: center;
      width: 100%;
    }
  }
`;