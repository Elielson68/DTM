import styled from "styled-components";

export const RegisterPage =styled.div`
background-color: #102E4A;
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
padding: 2rem;
flex-direction: column;
align-items: center;

h2{
    font-size: 1.5rem;
    text-align: center;
    color: white;
    margin-top: -1%;
}
`

export const RegisterForm = styled.form`
     width: 30%;
     height: fit-content;
     display: flex;
     margin-top: 1%;
     background-color: #FFFF;
     border-radius: 15px; ;
  
     
     align-items: center;
     justify-content: center;
     flex-direction: column;
     
    
    h3{
        color: black;
        font-size: 1rem;
        padding-left: 0.5rem;
        align-self: flex-start;
        margin-left: 3%;

    } 
     @media(max-width: 1000px){
        width: 95%;
    } 

`
export const RegisterInputs = styled.input`
    height: 5%;
    width: 90%;
    padding: 1%;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    margin-bottom: 30px;
    outline: none;
    transition: linear 0.5s;

    @media(max-width: 1000px){
      margin-bottom: 10%;
    }


    :hover{
    border-bottom: 1.5px solid orange;
    transition-delay: 0.1s;
}
    :focus{
        border-bottom: 1.5px solid orange;
    }

`
export const RegisterButton = styled.button`
    border-radius: 1rem;
    border: 1px solid white;
    background-color: #F1AE02;
    display: flex;
    height: fit-content;
    width: 85%;
    margin-top: 45%;
    color: white;
    padding: 3%;
    justify-content: center;
    align-self: center;
    font-weight: bolder;
    font-size: 0.9rem;
    
`
