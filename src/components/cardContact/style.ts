import styled from "styled-components";


export const CardStyle = styled.li`

    display: flex;

    flex-direction: row;

    min-width: 315px;

    width: 350px;

    font-family: 'Quicksand', sans-serif;

    background-color: #E6E4E4;

    padding: 10px 30px ;

    border-radius: 15px;

    div {
        display: flex;
        flex-direction: column;
    }

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

`