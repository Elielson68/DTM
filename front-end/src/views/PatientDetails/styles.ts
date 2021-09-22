import styled from "styled-components"

// Elemento Pai
export const Container = styled.div`
    background-color: #102E4A;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: calc(100vh - 16vh);
    @media(max-width: 1280px) {
        flex-direction: column;
        height: 150vh;
    }
`;
// Elementos Filhos
// Bloco do lado esquerdo
export const DivLeft = styled.div`
    margin: 10px 10px 0px 10px;
`;
export const Card = styled.div`
    background-color: #ffffff;
    width: 450px;
    padding: 15px 30px 15px 30px;
    border-radius: 20px;
    @media(max-width: 535px) {
        width: 400px;
    }
    @media(max-width: 460px) {
        width: 350px;
    }
    @media(max-width: 431px) {
        width: 300px;
    }
`;
export const Info = styled.p`
    margin-top: 4%;
    margin-bottom: 4%;
    @media(max-width: 1280px) {
        text-align: center;
    }
`;
export const Data = styled.h3`
    margin-top: 4.6%;
    margin-bottom: 4.6%;
    @media(max-width: 1280px) {
        text-align: center;
    }
`;
export const MainText = styled.h1`
    color: #ffffff;
    padding: 10px;
    @media(max-width: 736px) {
        text-align: center;
    }
`;
export const Linha = styled.div`
    border: 0.5px solid #808080;
    width: 100%;
`;
export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
`;
export const EditButton = styled.button`
    background-color: #0AA093;
    border: none;
    border-radius: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 17px;
    height: 35px;
    width: 100%;
    cursor: pointer;
`;
export const DeleteButton = styled.button`
    background-color: #B93451;
    border: none;
    border-radius: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 17px;
    height: 35px;
    width: 100%;
    cursor: pointer;
`;
// Bloco lado direito
export const DivRight = styled.div`
    padding-top: 10px;
`;
export const Div = styled.div`
    display: flex;
    @media(max-width: 736px) {
        flex-direction: column;
        justify-content: center;
    }
`;
export const DivTable = styled.div`
    display: flex;
`;
export const NewExamButtom = styled.button`
    background-color: #0AA093;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    width: 200px;
    height: 40px;
    margin-top: 10px;
    margin-left: 250px;
    cursor: pointer;
    @media(max-width: 736px) {
        margin: 0 auto;
    }
`;
export const CardTop = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 315px;
    padding: 10px;
    border-radius: 20px;
    @media(max-width: 780px) {
        margin: 0 auto;
        width: 700px;
    }
    @media(max-width: 736px) {
        width: 600px;
        margin-top: 10px;
    }
    @media(max-width: 635px) {
        width: 500px;
    }
    @media(max-width: 535px) {
        width: 400px;
    }
    @media(max-width: 431px) {
        width: 300px;
    }
`;
export const CardBottom = styled.div`
    background-color: white;
    width: 100%;
    border-radius: 20px;
    padding: 5px;
    @media(max-width: 1280px) {
        margin-bottom: 20px;
    }
    @media(max-width: 780px) {
        align-items: center;
        width: 700px;
    }
    @media(max-width: 736px) {
        width: 600px;
    }
    @media(max-width: 635px) {
        width: 500px;
    }
    @media(max-width: 535px) {
        width: 400px;
    }
    @media(max-width: 431px) {
        width: 300px;
    }
`;
export const DataTable = styled.h3`
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 15px;
`;
export const LineTable = styled.div`
    border: 0.5px solid gray;
    width: 100%;
`;
export const InfoTable = styled.p`
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const DivChart = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin: 0 auto;
    width: 100%;
    height: 50%;
`;