import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';

// Elemento Pai
export const Container = styled.div`
    background: #102e4a;
    width: 98vw;
    height: 98vh;
`;
export const Text = styled.h2``;
export const Div = styled.div`
    border-bottom: .5px solid gray;
    width: 60%;
    margin: 0 auto;
`;
export const InfoText = styled.p`
    font-weight: 1000;
`;
export const Result = styled.div`
    border: 1px solid black;
    padding: 20px 55px 20px 55px;
    border-radius: 30px;
`;
export const useStyles = makeStyles({
    resultF: {
        marginLeft: '15px',
    },
    text: {
        padding: '10px',
        textAlign: 'center',
        color: 'white',
    },
    card: {
        padding: '15px 5px 15px 5px',
        width: '500px',
        textAlign: 'center',
        margin: '0 auto',
        borderRadius: '36px',
    },
    cardC:{
        padding: '10px',
        textAlign: 'center',
        margin: '0 auto',
        width: '800px',
        borderRadius: '36px',
    },
    DivInt: {
        padding: '10px',
    },
    btn: {
        width: '150px',
        height: '40px',
        borderRadius: '40px',
        color: 'white',
        backgroundColor: '#009F93',
        '&:hover': {
            backgroundColor: '#009F99',
            borderColor: '#0062cc',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#04D8D0',
            borderColor: '#005cbf',
          },
    },
    btnFinal: {
        width: '300px',
        height: '40px',
        borderRadius: '40px',
        color: 'white',
        backgroundColor: '#F1AE02',
        '&:hover': {
            backgroundColor: '#CE9708',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#F1AE02',
            borderColor: '#005cbf',
        },
    }
});