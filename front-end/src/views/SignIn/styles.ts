import styled from "styled-components";
import signInImage from "../../assets/background-signIn2.jpg";

export const TopHeader = styled.header`
  background-color: #ba324f;
  color: white;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  
  h1{
    color: white;
  }

  span{
    padding-left: 34px;
    margin-top: -10px;
  }
`;


export const TextsDiv = styled.div`
  color: #ffffff;
  width:500px;
  justify-self: center;

  h3{
    font-size: 3rem;
  }

  p{
    margin-top: 17px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  }
`;

export const LoginBox = styled.div`
  width: 500px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  justify-self: center;

`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2.5vw 5vw 0vw 5vw;

  @media(max-width: 1080px){
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${LoginBox}{
    width: 460px;
  }

  ${TextsDiv}{
    display: none;
  }
}
`;

export const Body = styled.div`
  background-image: url(${signInImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height:100vh;
`;
