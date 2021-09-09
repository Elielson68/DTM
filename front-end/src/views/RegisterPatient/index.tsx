/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import { RegisterPage, RegisterButton, RegisterInputs, RegisterForm, GenderChose, FeelsPain } from "./styles";

const RegisterPatient: React.FC = () => {
  const [currentRadioValue, setCurrentValue] = React.useState("on");


  return (
    <>
      <RegisterPage>
        <h2>Cadastrar Paciente</h2>
        <RegisterForm>
          <h3>Nome</h3>
          <RegisterInputs type="text" name="Nome" />
          <h3>Data de Nascimento</h3>
          <RegisterInputs type="date" name="Data de Nascimento" />
          <h3>Gênero</h3>
          <GenderChose>
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
          </GenderChose>
          <h3>Email</h3>
          <RegisterInputs type="email" name="Email" />
          <h3>Celular</h3>
          <RegisterInputs type="tel" name="Celular" />
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
          <RegisterButton type="submit" name="Salvar">
            SALVAR
          </RegisterButton>
        </RegisterForm>
      </RegisterPage>
    </>
  );
};

export default RegisterPatient;
