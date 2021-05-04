import React from "react";
import Button from "@material-ui/core/Button";
import { ArticleText, Container, HeaderBody, HeaderTop,Image,TextDTM, TextEvaluation } from "./styles";

const SignIn: React.FC = () => (
 <Container>
    <HeaderTop>
      <TextDTM>DTM</TextDTM>
      <TextEvaluation>evaluation</TextEvaluation>
    </HeaderTop>
    <Image>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <HeaderBody>
      <h3>Conheça mais sobre o projeto DTM</h3>
      <ArticleText>
        <p >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie laoreet finibus. Vestibulum sodales consequat magna at placerat. Aenean sagittis erat eu iaculis ultricies. Proin at nibh enim. Nullam ac ornare lacus, at luctus quam. Phasellus scelerisque odio purus, id fermentum tellus interdum a. Donec efficitur metus eget quam tempor facilisis. Nam tincidunt commodo ex nec varius. 
          </p>
    </ArticleText>
    </HeaderBody>
    </Image>
  </Container>
);



export default SignIn;
