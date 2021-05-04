import styled from "styled-components";
import signInImage from "../../assets/background-signIn2.jpg";

export const Container = styled.div`

`;

export const HeaderTop = styled.header`
  background-color: #ba324f;
  color: white;
  height: 5.5rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

export const TextDTM = styled.h1`
  color: white;
`;

export const TextEvaluation = styled.span`
padding-left: 34px;
margin-top: -10px;
`

export const Image = styled.div`
background-image: url(${signInImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
min-height: 100vh;
`

export const HeaderBody = styled.header`
position: absolute;
width: 483px;
height: 124px;
left: 100px;
top: 190px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 45px;
line-height: 58.59px;

color: #FFFFFF;

`

export const ArticleText = styled.article`
margin-top: 17px;
font-size: 16px;
line-height: 19px;
font-weight: 700;
position: absolute;
width: 518px;
height: 157px;
position: absolute;
`