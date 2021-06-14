import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

export const Text = styled.h1`
    color: white;
    font-weight: 800;
    padding: 15px;
    padding-left: 30px;
`;
export const Container = styled.div`
    width: 99vw;
	height: 98vh;

	background: #102e4a;
`;

export const useStyles = makeStyles({
    table: {
      width: 1400,
    },
    textField: {
      minWidth: 290,
      '& .MuiInput-root': {
        color: 'gray',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
    }
});