import styled from "styled-components";
import background from "../../assets/img/back.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  background-color: #ba324f;
  border-bottom: 5px solid #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1% 0;
  @media (max-width: 1050px) {
    align-items: center;
    justify-content: center;
    padding-left: 0;
    p {
      margin-left: 0px;
    }
  }
`;

export const LogoText = styled.div`
  margin-left: 5%;
  h1 {
    color: #ffffff;
    margin: 0;
  }

  p {
    color: #ffffff;
    margin: 0;
    margin-left: 20px;
  }
`;

export const MainContent = styled.main`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20% 10% 0% 10%;
  background-image: url(${background});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 1050px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 65%;

  @media (max-width: 1050px) {
    display: none;
  }
`;

export const GetToKnowText = styled.h1`
  font-size: 2.5rem;
  text-align: start;
  color: #ffffff;
`;

export const AboutText = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  color: #ffffff;
`;

export const Card = styled.div`
  width: 40%;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 16px;

  @media (max-width: 1050px) {
    width: 95%;
  }
`;

export const HeaderBar = styled.div`
  width: 100%;
  height: 85px;
  background-color: #102e4a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 13px 13px 0 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  padding: 5% 0;
`;

export const Label = styled.span`
  font-size: 1rem;
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 1%;
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  margin-bottom: 5%;
  transition: linear 0.2s;

  :focus {
    outline: 0;
    border-bottom-color: #f1ae02;
  }
`;

export const ForgotPasswordText = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 0.8rem;
  margin-top: 10px;
  transition: linear 0.5s;
  align-self: flex-start;
  margin-left: 8%;
  &:hover {
    cursor: pointer;
    transform: translate(0, -5px);
  }
`;

export const RegisterText = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 0.8rem;
  transition: linear 0.5s;
  &:hover {
    cursor: pointer;
    transform: translate(0, -5px);
  }
`;

export const Button = styled.button`
  width: 60%;
  height: 40px;
  color: #ffffff;
  background-color: #f1ae02;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 16px;
  margin: 20px 0px;
  transition: linear 0.2s;

  &:hover {
    background-color: #ac7c00;
    cursor: pointer;
    width: 65%;
  }
`;
