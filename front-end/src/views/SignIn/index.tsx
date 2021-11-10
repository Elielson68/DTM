import React from "react";
import Cookies from "universal-cookie/es6";
import { useHistory } from "react-router-dom";
import RegisterModal from "../../components/RegisterModal";
import api from "../../services/api";
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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const history = useHistory();

  const cookies = new Cookies();

  function handleClose() {
    setShow(false);
    return show;
  }

  function handleLogin() {
    const data = {
      password,
      email,
    };
    api.post("api/user/login", data).then(() => {
      alert("Cadastro realizado com sucesso");
      cookies.set("user", data, { path: "/" });
      history.push('/dashboard');
    });
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
              <Input
                placeholder="exemplo@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label>Senha</Label>
              <Input
                placeholder="***************"
                type="number"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ForgotPasswordText>Esqueci Minha Senha</ForgotPasswordText>
              <Button onClick={handleLogin}>Entrar</Button>
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
