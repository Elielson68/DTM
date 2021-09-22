/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import MenuBar from "../../components/MenuBar";

import { Container, Button, Card, RatioDiv, MainContent } from "./styles";

export default function EditPatient() {
  const [currentRadioValue, setCurrentValue] = React.useState("on");

  return (
    <Container>
      <MenuBar />
      <MainContent>
        <h1>Editar Paciente</h1>
        <Card>
          <h3>Nome</h3>
          <input type="text" name="Nome" />
          <h3>Data de Nascimento</h3>
          <input type="date" name="Data de Nascimento" />
          <h3>Gênero</h3>
          <RatioDiv>
            <div className="ratio1">
              <input
                name="gender"
                value="on"
                type="radio"
                onChange={(e) => setCurrentValue(e.target.value)}
                defaultChecked={currentRadioValue === "on"}
              />
              <label htmlFor="gender">MASCULINO</label>
              {currentRadioValue === "on"}
            </div>
            <div className="ratio2">
              <input
                name="gender"
                value="off"
                type="radio"
                onChange={(e) => setCurrentValue(e.target.value)}
                defaultChecked={currentRadioValue === "off"}
              />
              <label htmlFor="gender">FEMENINO</label>
              {currentRadioValue === "off"}
            </div>
          </RatioDiv>
          <h3>Email</h3>
          <input type="email" name="Email" />
          <h3>Celular</h3>
          <input type="tel" name="Celular" />
          <h3>Sente dor?</h3>
          <RatioDiv>
            <div className="ratio1">
              <input
                name="pain"
                value="on"
                type="radio"
                onChange={(e) => setCurrentValue(e.target.value)}
                defaultChecked={currentRadioValue === "on"}
              />
              <label htmlFor="pain">SIM</label>
              {currentRadioValue === "on"}
            </div>
            <div className="ratio2">
              <input
                name="pain"
                value="off"
                type="radio"
                onChange={(e) => setCurrentValue(e.target.value)}
                defaultChecked={currentRadioValue === "off"}
              />
              <label htmlFor="pain">NÃO</label>
              {currentRadioValue === "off"}
            </div>
          </RatioDiv>
          <Button type="submit" name="Salvar">
            SALVAR
          </Button>
        </Card>
      </MainContent>
    </Container>
  );
}
