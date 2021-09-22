import React from "react";
import RegisterModal from "../../components/registerModal";
import {
  AboutText,
  Button,
  Card,
  Container,
  ForgotPasswordText,
  Form,
  GetToKnowText,
  Header,
  HeaderBar,
  Input,
  Label,
  LogoText,
  MainContent,
  RegisterText,
  Texts,
} from "./styles";

export default function SignIn() {
  const [show, setShow] = React.useState(false);
  function handleClose() {
    setShow(false);
    return show;
  }
  return (
    <>
      <Header>
        <LogoText>
          <h1>DTM</h1>
          <p>Evaluation</p>
        </LogoText>
      </Header>
      <Container>
        <MainContent>
          <Texts>
            <GetToKnowText>Conheça mais sobre o projeto DTM</GetToKnowText>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              molestie laoreet finibus. Vestibulum sodales consequat magna at
              placerat. Aenean sagittis erat eu iaculis ultricies. Proin at nibh
              enim. Nullam ac ornare lacus, at luctus quam. Phasellus
              scelerisque odio purus, id fermentum tellus interdum a. Donec
              efficitur metus eget quam tempor facilisis. Nam tincidunt commodo
              ex nec varius.
            </AboutText>
          </Texts>

          <Card>
            <HeaderBar>ENTRE COM A SUA CONTA</HeaderBar>
            <Form>
              <Label>E-mail</Label>
              <Input placeholder="exemplo@email.com" type="email" />

              <Label>Matricula</Label>
              <Input placeholder="12345678" type="number" />
              <ForgotPasswordText>Esqueci Minha Senha</ForgotPasswordText>
              <Button>Entrar</Button>
              <RegisterText onClick={() => setShow(true)}>
                Não tenho uma conta
              </RegisterText>
              <RegisterModal onClose={() => handleClose()} show={show} />
            </Form>
          </Card>
        </MainContent>
      </Container>
    </>
  );
}
