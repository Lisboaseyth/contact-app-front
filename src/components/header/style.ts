import styled from 'styled-components'

export const HeaderDashboadStyled = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 10px 15px;

    background: #333333;

`

export const DivLogo = styled.div`

    img {
        width: 200px;
    }


`

export const DivBtn = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    .btnDefault{
        border: none;

        color: #BDBDBD;

        cursor: pointer;

        font-size: 18px;

        margin-right: 5px;

        -webkit-transition: 0.2s ease-out;
        -moz-transition: 0.2s ease-out;
        -o-transition: 0.2s ease-out;
        transition: 0.2s ease-out;

    }

`

export const DivSeach = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 2px solid #333333;
    border-radius: 8px;

    margin-right: 5px;

    button{
        
        background: #0066FF;
        color: #FFFFFF;

        border: 2px solid #0066FF;
        border-radius: 8px;

        width: 80px;
        height: 40px;

        margin-right: 5px;

        cursor: pointer;

        -webkit-transition: 0.2s ease-out;
        -moz-transition: 0.2s ease-out;
        -o-transition: 0.2s ease-out;
        transition: 0.2s ease-out;

        :hover{
            background-color: #333333;

            -webkit-transition: 0.2s ease-out;
            -moz-transition: 0.2s ease-out;
            -o-transition: 0.2s ease-out;
            transition: 0.2s ease-out;
        }
        
    }

`