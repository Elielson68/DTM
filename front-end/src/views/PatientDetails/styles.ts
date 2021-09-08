import styled from "styled-components"

// Elemento Pai
export const Container = styled.div`
    background-color: #102E4A;
    width: 98vw;
    height: 98vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media(max-width: 1000px) {
        & {
            display: flex;
            flex-direction: column;
            height: 120vh;
            width: 90vw;
            padding: 15px 0px 5px 10px;
        }
    }

    @media(max-width: 425px) {
        & {
            height: 130vh;
        }
    }
`

// Elementos Filhos

// Bloco do lado esquerdo
export const DivLeft = styled.div`
    margin: 10px 10px 0px 10px;

    @media(max-width: 1000px) {
        & {
            text-align: center;
        }
    }
`
export const Card = styled.div`
    background-color: #ffffff;
    width: 450px;
    padding: 15px 0px 15px 30px;
    border-radius: 20px;

    @media(max-width: 1000px) {
        & {
            width: 410px;
            padding: 15px 0px 15px 13px;
            margin: 0 auto;
        }
    }
    
    @media(max-width: 425px) {
        & {
            width: 380px;
        }
    }
`
export const Info = styled.p`
    @media(max-width: 425px) {
        & {
            font-size: 19px;
        }
    }
`
export const Data = styled.h3`
    @media(max-width: 425px) {
        & {
            font-size: 21px;
        }
    }
`
export const MainText = styled.h1`
    color: #ffffff;
`
export const Line = styled.div`
    border: 0.5px solid #808080;
    width: 400px;

    @media(max-width: 425px) {
        & {
            width: 365px;
        }
    }
`
export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
`
export const EditButton = styled.button`
    background-color: #0AA093;
    border: none;
    border-radius: 20px;

    color: #ffffff;
    font-weight: bold;
    font-size: 17px;

    margin-top: 15px;

    height: 35px;
    width: 400px;

    cursor: pointer;

    @media(max-width: 425px) {
        & {
            width: 365px;
        }
    }
`
export const DeleteButton = styled.button`
    background-color: #B93451;
    border: none;
    border-radius: 20px;

    color: #ffffff;
    font-weight: bold;
    font-size: 17px;

    height: 35px;
    width: 400px;

    cursor: pointer;

    @media(max-width: 425px) {
        & {
            width: 365px;
        }
    }
`


// Bloco lado direito

export const DivRight = styled.div`
    padding-top: 10px;

    @media(max-width: 1000px) {
        & {
            display: flex;
            flex-direction: column;
        }
    }
`

export const Div = styled.div`
    display: flex;

    @media(max-width: 1000px) {
        & {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            padding-bottom: 15px;
        }
    }
`
export const DivTable = styled.div`
    display: flex;

    @media(max-width: 1000px) {
        & {
            margin: 0 auto;
            padding-bottom: 15px;
        }
    }
`
export const NewExamButtom = styled.button`
    background-color: #0AA093;

    color: #ffffff;
    font-size: 18px;
    font-weight: bold;

    border: none;
    border-radius: 20px;

    width: 200px;
    height: 40px;
    margin: 20px 0px 0px 250px;

    cursor: pointer;

    @media(max-width: 1000px) {
        & {
            margin: 0 auto;
        }
    }
`;
export const CardTop = styled.div`
    background-color: #ffffff;
    width: 752px;
    height: 308px;
    padding: 10px;
    border-radius: 20px;

    @media(max-width: 1000px) {
        & {
            width: 415px;
            margin: 0 auto;
        }
    }

    @media(max-width: 425px) {
        & {
            width: 365px;
        }
    }
`
export const CardBottom = styled.div`
    background-color: white;
    width: 745px;
    height: 308px;
    padding: 15px 0px 15px 30px;
    border-radius: 20px;

    @media(max-width: 1000px) {
        & {
            width: 410px;
            margin: 0 auto;
        }
    }

    @media(max-width: 425px) {
        & {
            width: 365px;
        }
    }
`
export const DataTable = styled.h3`
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 15px;
`
export const LineTable = styled.div`
    border: 0.5px solid gray;
    width: 100%;
`
export const InfoTable = styled.p`
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    @media(max-width: 425px) {
        & {
            font-size: 21px;
        }
    }
`