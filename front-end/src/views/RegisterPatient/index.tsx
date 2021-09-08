/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import { RegisterPage, RegisterButton, RegisterInputs, RegisterForm } from "./styles";

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
          <div>
            <input
              name="radio-item-1"
              value="on"
              type="radio"
              onChange={(e) => setCurrentValue(e.target.value)}
              defaultChecked={currentRadioValue === "on"}
            />
            <label htmlFor="radio-item-1">Radio Item 1</label>
            {currentRadioValue === "on" && <div>one</div>}
          </div>
          <div>
            <input
              name="radio-item-1"
              value="off"
              type="radio"
              onChange={(e) => setCurrentValue(e.target.value)}
              defaultChecked={currentRadioValue === "off"}
            />
            <label htmlFor="radio-item-1">Radio Item 2</label>
            {currentRadioValue === "off" && <div>two</div>}
          </div>
          <h3>Email</h3>
          <RegisterInputs type="email" name="Email" />
          <h3>Celular</h3>
          <RegisterInputs type="tel" name="Celular" />
          <div>
            <input
              name="radio-item-1"
              value="on"
              type="radio"
              onChange={(e) => setCurrentValue(e.target.value)}
              defaultChecked={currentRadioValue === "on"}
            />
            <label htmlFor="radio-item-1">Radio Item 1</label>
            {currentRadioValue === "on" && <div>one</div>}
          </div>
          <div>
            <input
              name="radio-item-1"
              value="off"
              type="radio"
              onChange={(e) => setCurrentValue(e.target.value)}
              defaultChecked={currentRadioValue === "off"}
            />
            <label htmlFor="radio-item-1">Radio Item 2</label>
            {currentRadioValue === "off" && <div>two</div>}
          </div>
          <RegisterButton type="submit" name="Salvar">
            SALVAR
          </RegisterButton>
        </RegisterForm>
      </RegisterPage>
    </>
  );
};

export default RegisterPatient;
