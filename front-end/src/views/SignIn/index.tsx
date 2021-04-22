import React from "react";
import Button from "@material-ui/core/Button";
import { Container, Text } from "./styles";


const SignIn: React.FC = () => (
  <Container>
    <Text>SignIn</Text>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </Container>
);

export default SignIn;
