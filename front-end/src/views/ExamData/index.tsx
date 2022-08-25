import React from "react";
import MenuBar from "../../components/MenuBar";
import {
  Container,
  Exam,
  Data,
  Picture,
  Pictures,
  TextInfo,
  MeasurementInfo,
  MainContent,
} from "./styles";
import DummyPic from "../../assets/img/imgMeasurementCard.jpg";

export default function ExamData() {
  return (
    <Container>
      <MenuBar />
      <MainContent>
        <Exam>
          <h1>Dados do Exame</h1>
          <Data>
            <TextInfo>
              <span>Nome</span>
              <h3>Rodrigo Silva</h3>
            </TextInfo>
            <TextInfo>
              <span>Médico</span>
              <h3>Dr. Manoel Pereira</h3>
            </TextInfo>
            <MeasurementInfo>
              <span>Medição com a boca fechada</span>
              <span>100 mm</span>
            </MeasurementInfo>
            <MeasurementInfo>
              <span>Medição com a boca aberta</span>
              <span>90 mm</span>
            </MeasurementInfo>
            <MeasurementInfo>
              <span>Resultado</span>
              <span>10 mm</span>
            </MeasurementInfo>
            <TextInfo>
              <span>Data</span>
              <h3>20/09/2020</h3>
            </TextInfo>
          </Data>
        </Exam>

        <Pictures>
          <Picture>
            <h1>Foto com a boca aberta</h1>
            <img src={DummyPic} alt="" />
          </Picture>

          <Picture>
            <h1>Foto com a boca fechada</h1>
            <img src={DummyPic} alt="" />
          </Picture>
        </Pictures>
      </MainContent>
    </Container>
  );
}
