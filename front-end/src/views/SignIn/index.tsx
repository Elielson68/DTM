import React from "react";
import { Body, Container, TextsDiv, LoginBox, TopHeader } from "./styles";

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
      <LoginBox />
    </Container>
  </Body>
);

export default SignIn;
