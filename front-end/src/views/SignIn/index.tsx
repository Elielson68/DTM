import React from "react";
// import RegisterModal from "../../components/registerModal/index";

import {
  Body,
  Container,
  TextsDiv,
  LoginBox,
  TopHeader,
  TopEnterAccount,
  InputsLogin,
  UsersInput,
  LoginButton,
  ButtonDiv,
  // BottomMessage,
  ForgotPass,
  ModalButton,
} from "./styles";



const SignIn: React.FC = () => (
  <Body>
    <TopHeader>
      <h1>DTM</h1>
      <span>evaluation</span>
    </TopHeader>
    <Container>
      <TextsDiv>
        <h3>Conheça mais sobre o projeto DTM</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          molestie laoreet finibus. Vestibulum sodales consequat magna at
          placerat. Aenean sagittis erat eu iaculis ultricies. Proin at nibh
          enim. Nullam ac ornare lacus, at luctus quam. Phasellus scelerisque
          odio purus, id fermentum tellus interdum a. Donec efficitur metus eget
          quam tempor facilisis. Nam tincidunt commodo ex nec varius.
        </p>
      </TextsDiv>
      <LoginBox>
        <TopEnterAccount>
          <h3>ENTRE COM A SUA CONTA</h3>
        </TopEnterAccount>
        <InputsLogin>
          <UsersInput
            id="outlined-basic"
            label="E-mail"
            placeholder="E-mail"
            variant="outlined"
          />
          <UsersInput
            id="outlined-basic"
            label="Senha"
            placeholder="Senha"
            variant="outlined"
            type="password"
          />
          <ForgotPass>Esqueci minha senha</ForgotPass>
        </InputsLogin>
        <ButtonDiv>
          <LoginButton variant="contained" color="primary" size="large">
            ENTRAR
          </LoginButton>
          <ModalButton>Não tenho uma conta</ModalButton>
          {/* <BottomMessage onClick={openModal()} >Não tenho uma conta</BottomMessage> */}
        </ButtonDiv>
      </LoginBox>
    </Container>
  </Body>
);

export default SignIn;