import styled from 'styled-components';

export const Container = styled.div`
    background-color: #102E4A;
    margin: 0;
    padding: 0;
    height: calc(100vh - 16vh);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
        text-align: center;
        color: #fff;
        margin-bottom: 20px;
    }
`;
export const Card = styled.div`
    background-color: #fff;
    width: 75%;
    padding: 30px;
    text-align: center;
    border-radius: 15px;
    @media(max-width: 330px) {
        width: 90%;
    }
    p:nth-child(1) {
        font-size: 20px;
        font-weight: 500;
    }
`;