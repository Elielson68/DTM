import styled from "styled-components";

export const RegisterForm = styled.form`
  width: 35%;
  height: fit-content;
  display: flex;
  margin-top: 1%;
  padding: 3%;
  background-color: #ffff;
  border-radius: 15px;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: black;
    font-size: 1rem;
    align-self: flex-start;
  }

  @media (max-width: 1000px) {
    width: 75%;
  }
`;

export const DivisionLine = styled.hr`
  border: 1px solid gray;
  width: 100%;
`

export const RegisterInputs = styled.input`
  height: 8%;
  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  margin-bottom: 30px;
  outline: none;
  transition: linear 0.5s;

  :hover {
    border-bottom: 1.5px solid orange;
    transition-delay: 0.1s;
  }
  :focus {
    border-bottom: 1.5px solid orange;
  }
`;
export const RegisterButton = styled.button`
  border-radius: 1rem;
  border: 1px solid white;
  background-color: #f1ae02;
  display: flex;
  height: fit-content;
  width: 85%;
  color: white;
  margin-top: 5%;
  padding: 3%;
  justify-content: center;
  align-self: center;
  font-weight: bolder;
  font-size: 0.9rem;
`;

export const ChooseGender = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row; 
    align-self: center;
    justify-content: flex-start;
    width: 100%;

    .masculinoDiv{
        background-color: #009F93;
        border-radius: 15px;
        padding: 8px;
        width: 25%;
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;

        label {
            color: #FFFF;
            font-wights: bold;
            font-size: 0.8rem;
        }
    }

    .femininoDiv{
        background-color: #009F93;
        border-radius: 15px;
        padding: 8px;
        width: 25%;
        display: flex;
        flex-direction: row;
        align-items: center;


        label {
            color: #FFFF;
            font-wights: bold;
            font-size: 0.8rem;
        }
    }

    @media(max-width: 1000px){

        .masculinoDiv{
            width: 100%;
        }

        .femininoDiv{
            width: 100%;
        }
    }



`;
export const FeelsPain = styled.div`
display: flex;
align-items: center;
flex-direction: row; 
align-self: center;
justify-content: flex-start;
width: 100%;


    .pain{
        background-color: #009F93;
        border-radius: 15px;
        padding: 8px;
        margin-right: 20px;
        width: 60px;

        label {
            color: #FFFF;
            font-wights: bold;
            font-size: 0.8rem;
        }
    }
    .noPain{
        background-color: #009F93;
        border-radius: 15px;
        padding: 8px;
        margin-right: 20px;
        width: 60px;

        label {
            color: #FFFF;
            font-wights: bold;
            font-size: 0.8rem;
        }
    }
    }
`
export const Container = styled.div`
  background-color: #102e4a;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    text-align: center;
    color: white;
    margin-top: -1%;
  }

  @media(max-width: 360px) {
    height: fit-content;
  }
`;


