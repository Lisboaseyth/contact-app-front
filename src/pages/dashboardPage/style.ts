import styled from "styled-components";

export const DashStyled = styled.section`

    width: 100vw;
    height: 100vh;
    
    section{
        display: flex;
        flex-direction: column;

        align-items: center;
    }

`

export const DivUl = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 50px;

    border: solid 2px #0066FF;
    border-radius: 10px;

    width: 80%;

    padding: 20px;

    h2 {
        background-color: #333333;
        color: white;
        
        width: 350px;

        border-radius: 5px;

        font-size: 30px;
        font-family: 'Quicksand', sans-serif;

        margin-bottom: 10px;
    }

    li {
        font-family: 'Quicksand', sans-serif;

        background-color: #E6E4E4;
        
        padding: 10px 30px ;

        border-radius: 15px;

        h3 {
            background-color: #333333;
            color: white;
            font-size: 20px;
            padding: 0 10px;
        }

        p {
            font-size: 18px;
            color: #0066FF;
        }
    }

    .divHeader {
        display: flex;
        flex-direction: column;

        margin-bottom: 30px;
        
    }

`