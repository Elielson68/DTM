import React from 'react';

// Importações do Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// Importações do styles
import { Text, Container, useStyles } from './style';

// Conteúdo da Tabela
function createData( id: number, name: string, age: number, email: string ) {
  return { id, name, age, email };
}
const rows = [
  createData(1, 'bob', 18, 'bob@gmail.com'),
  createData(2, 'Luscas', 22, 'lusquinha@gmail.com'),
];

export function MyTable(){
  const classes = useStyles();
  return(
    <Container>

      <Grid 
      container 
      direction="row" 
      justify="center" 
      alignItems="center"
      >
          <Grid item xs={6}
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Text>Lista de Pacientes</Text>
          </Grid>
          <Grid item xs={3}
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
              <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <TextField 
                    className={classes.textField} 
                    id="input-with-icon-grid"
                    placeholder="Nome do Paciente ou Data do Exame" />
                  </Grid>
                  <Grid item>
                    <SearchIcon style={{ color: 'orange', fontSize: 30 }} />
                  </Grid>
              </Grid>  
          </Grid>
        </Grid>

      <Grid
      container
      justify="center" 
      alignItems="center"
      >
        <Paper className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Idade</TableCell>
                <TableCell align="center">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Container>
  );
}



// Segunda Alternativa de Input
// {/* <TextField
// id="input-with-icon-textfield"
// className={classes.textField}
// placeholder="Nome do Paciente ou Data do Exame"
// InputProps={{
//   startAdornment: (
//     <InputAdornment position='end'>
//       <SearchIcon style={{ color: 'orange', fontSize: 30 }} />
//     </InputAdornment>
//   ),
// }}
// />  */}