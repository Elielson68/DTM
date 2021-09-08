import React from "react";

import { 
  Container,
  DivLeft,
  CardLeft,
  StartButton,
  Div,
  DivBox,
  Line,
  FinishButton,
  DivRight,
  CardRight,
  Img
} from "./styles";

const Measurement: React.FC = () => (
  <Container>
    <DivLeft>
      <h1>Exame</h1>
      <CardLeft>
        <p>Medição Com Boca Aberta</p>
        <Div>
          <StartButton>Iniciar</StartButton>
          <DivBox />
        </Div>
        <Line />
        <p>Medição Com Boca Fechada</p>
        <Div>
          <DivBox />
        </Div>
        <Line />
        <h4>Resultado</h4>
        <Div>
          <DivBox />
        </Div>
        <Line />
        <Div>
          <FinishButton>Finalizar</FinishButton>
        </Div>
      </CardLeft>
    </DivLeft>

    <DivRight>
      <h1>Medidor</h1>
      <CardRight>
        <Img />
      </CardRight>
    </DivRight>
  </Container>
);

export default Measurement;
