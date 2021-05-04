import React from "react";
import { Button } from "@material-ui/core";
import { Container, Text } from "./styles";

// Importação do componente RegisterModal
import RegisterModal from "../../components/registerModal/index";

const SignIn: React.FC = () => (

  <Container>
    <Text>SignIn</Text>
    <Button variant="contained" color="primary">Hello World!</Button>
    {/* Utilizando o componente */}
    <RegisterModal />
  </Container>

);

export default SignIn;
