import React from 'react';

// Importações Material-UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

// Importações do style
import { 
    Container, 
    Text,
    useStyles,
    InfoText,
    Result,
    Div
} from "./style";

export function ExamPage() {
    const classes = useStyles();
    return(
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Text className={classes.text}>Exame</Text>
                    <Paper className={classes.card} elevation={3}>
                        <InfoText>Medição com Boca Aberta</InfoText>
                        <Grid 
                        className={classes.card} 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center" 
                        spacing={3}>
                            <Button className={classes.btn}>INICIAR</Button>
                            <Result className={classes.resultF} />
                        </Grid>
                        <Div />
                        <InfoText>Medição com Boca Fechada</InfoText>
                        <Grid 
                        className={classes.card} 
                        container 
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <Result />
                        </Grid>
                        <Div />
                        <InfoText>Resultado</InfoText>
                        <Grid 
                        className={classes.card} 
                        container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <Result />
                        </Grid>
                        <Div />
                        <Grid 
                        className={classes.card} 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center" 
                        spacing={3}>
                            <Button className={classes.btnFinal}>FINALIZAR</Button>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Text className={classes.text}>Medidor</Text>
                    <Paper className={classes.cardC} elevation={3}>
                        {/* Imagem da area do camera */}
                        <CardMedia
                            component="img"
                            alt="Area da camera"
                            height="450"
                            width="300"
                            image="https://i.ytimg.com/vi/ve3-VFJimR8/maxresdefault.jpg"
                            title="Area da Camera"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}