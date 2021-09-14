/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import MenuBar from "../../components/MenuBar";

import {
  Container,
  EditForm,
  EditButton,
  EditInputs,
  ChooseGender,
  FeelsPain,
  DivisionLine,
} from "./styles";

export default function EditPatient() {
  const [currentRadioValue, setCurrentValue] = React.useState("on");

  return (
    <>
      <MenuBar />
      <Container>
        <h2>Editar Paciente</h2>
        <EditForm>
          <h3>Nome</h3>
          <EditInputs type="text" name="Nome" />
          <h3>Data de Nascimento</h3>
          <EditInputs type="date" name="Data de Nascimento" />
          <h3>Gênero</h3>
          <ChooseGender>
            <div className="masculinoDiv">
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
            <div className="femininoDiv">
              <input
                name="gender"
                value="off"
                type="radio"
                onChange={(e) => setCurrentValue(e.target.value)}
                defaultChecked={currentRadioValue === "off"}
              />
              <label htmlFor="gender">FEMININO</label>
              {currentRadioValue === "off"}
            </div>
          </ChooseGender>
          <DivisionLine />
          <h3>Email</h3>
          <EditInputs type="email" name="Email" />
          <h3>Celular</h3>
          <EditInputs type="tel" name="Celular" />
          <h3>Sente dor?</h3>
          <FeelsPain>
            <div className="pain">
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
            <div className="noPain">
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
          </FeelsPain>
          <DivisionLine />
          <EditButton type="submit" name="Salvar">
            SALVAR
          </EditButton>
        </EditForm>
      </Container>
    </>
  );
}
