import React, { useState } from 'react';
// Importação do material ui
import { Button, TextField, Modal } from '@material-ui/core';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
// Importação das div's que foram criadas no style
import {
  Container, 
  Text, 
  Card, 
  CardText, 
  InputArea, 
  ButtonArea, 
  Body
} from "./style";

// Snackbar
export interface State extends SnackbarOrigin {
  open: boolean;
}

// Inicio do componente modal
const RegisterModal: React.FC = () => {

// Alerta de finalizando
const [state, setState] = React.useState<State>({
  open: false,
  vertical: 'top',
  horizontal: 'center',
});
const { vertical, horizontal, open } = state;
const handleClick = (newState: SnackbarOrigin) => () => {
  setState({ open: true, ...newState });
};
const handleCloseAlert = () => {
  setState({ ...state, open: false });
};

// Abertura e fechamento do modal
const [ abrir, setAbrir ] = useState<boolean>(false);
const handleOpen = () => {
  setAbrir(true);
}
const handleClose = () => {
    setAbrir(false);
}

  return(
    <Body>
      {/* Botão para abrir o modal */}
      <Button variant="contained" color="primary" onClick={handleOpen}>AbrirModal</Button>

      {/* Interface do modal */}
      <Modal
        aria-labelledby="modal-title"
        arial-describedby="modal-description"
        open={abrir}
        onClose={handleClose}
      >

          <Container>
            <Card>
                <CardText>
                  {/* Card do texto superior */}
                    <Text>FAÇA O SEU CADASTRO</Text>
                </CardText>
                <InputArea>
                    <TextField id="outlined-basic" variant="outlined" label="Nome"/>
                    <br/>
                    <TextField id="outlined-basic" variant="outlined" label="E-mail"
                    type='email'/>
                    <br/>
                    <TextField id="outlined-basic" variant="outlined" label="Matricula" type='number'/>
                    <br/>
                </InputArea>
                <ButtonArea>
                  {/* Area dos botões */}
                    <Button variant="contained" color="secondary" size="large" onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" color="primary" size="large" onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>Confirmar</Button>
                    {/* Finalizando conta - Alerta */}
                    <Snackbar
                      anchorOrigin={{ vertical, horizontal }}
                      open={open}
                      onClose={handleCloseAlert}
                      message="Conta criada com sucesso!"
                      key={vertical + horizontal}
                    />
                </ButtonArea>
            </Card>
          </Container>

      </Modal>
    </Body>
  );

};

export default RegisterModal;