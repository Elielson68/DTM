import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
  border-bottom: 7px solid white;

  h1 {
    color: white;
  }

  span {
    padding-left: 34px;
    margin-top: -10px;
  }
`;

export const TextsDiv = styled.div`
  color: #ffffff;
  width: 500px;
  justify-self: center;

  h3 {
    font-size: 3.7rem;
    width: 30vw;
  }

  p {
    margin-top: 19px;
    font-size: 1.4rem;
    line-height: 19px;
    font-weight: 800;
    width: 30vw;
  }
`;

export const LoginBox = styled.div`
  width: 500px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px 15px 15px 15px;
  justify-self: center;
  align-items: center;
`;

export const UsersInput = styled(TextField)`
  &.MuiTextField-root {
    margin-bottom: 15px;
    margin-top: 15px;
    height: 5vh;
    width: 450px;
    font-size: 1.1rem;
  }
`;

export const InputsLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const ForgotPass = styled.div`
  color: #777777;
  width: 29%;
  font-size: 14px;
  transition: ease-in 1s;

  :hover {
    border-bottom: 1px solid gray;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginButton = styled(Button)`
  width: 75%;

  &.MuiButton-root {
    background-color: #f1ae02;
    border-radius: 15px;
    margin-top: 85px;
    font-size: 1.2rem;
    margin-bottom: 15px;

    :hover {
      background-color: #f29e02;
    }
  }
`;

export const ModalButton = styled(Button)`
  background-color: white;
`;

export const BottomMessage = styled.div`
  padding-top: 15px;
  color: #777777;
  font-size: 14px;

  :hover {
    border-bottom: 1px solid gray;
  }
`;

export const TopEnterAccount = styled.div`
  background: #102e4a;
  border-radius: 15px 15px 0px 0px;

  h3 {
    font-size: 1.3rem;
    padding: 31px 0 35px 0;
    color: white;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2.5vw 5vw 0vw 5vw;
  margin-top: 5vh;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${LoginBox} {
      width: 460px;
    }

    ${TextsDiv} {
      display: none;
    }

    ${UsersInput} {
      &.MuiTextField-root {
        width: 430px;
      }
    }
    ${ForgotPass} {
      width: 31%;
    }
  }
`;

export const Body = styled.div`
  background-image: url(${signInImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
`;
