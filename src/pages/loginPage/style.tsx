import styled from 'styled-components'

import {DarkColors} from '../../styles/themes/colors'

export const Section = styled.section`
    max-width: 22.125rem; 
`
export const ImgLogo = styled.img`
    width:12.5rem;
    margin-bottom: 3rem;
`

export const Form = styled.form`
    max-width: 22.125rem;
    width: 100%;
    display:flex;
    flex-direction: column;
    gap:0.75rem;
`
export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    gap: 0.75rem;
`
export const Input = styled.input`
    /* width:100%; */
    height: 3.25rem;
    padding: 0.875rem 1rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${DarkColors.text_color};
    border: 0.063rem solid ${DarkColors.border_default};
    background-color: ${DarkColors.surface_color};

    &::placeholder{
        color: ${DarkColors.text_color};
    }

    &:focus{
        border: 0.063rem solid ${DarkColors.text_color};
    }
`
export const Button = styled.button`
    border: 0.063rem solid ${DarkColors.border_default};
    background-color: ${DarkColors.transparent};
    transition: 0.2s ease-in;
    padding: 0.875rem 1rem;

    &:hover {
        background-color: ${DarkColors.surface_color_strong};
        border: 0.063rem solid ${DarkColors.surface_color_strong};
    }
`

export const Paragraph = styled.p`
    color: ${DarkColors.text_color_muted};

    & a{
        color:white;
        text-decoration:underline;
        padding: 0.75rem 1.25rem;

        &:hover{
            background-color: ${DarkColors.surface_color_strong};
            border-radius: 0.375rem;
        }
    }
`
export const ParagraphContainer = styled.div`
    height: 3.25rem;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-top: 0.75rem;
`

export const  StyledDivForm = styled.div`
    width: 354px;

`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    margin-top: 32px;
`

export const StyledInput = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 52px;
    border-radius: 6px;
    padding: 0 12px;
    border: 1px solid rgba(100, 100, 100, 0.6);
    background: #0D1117;
    
    &::placeholder{
        color: #C9D1D9;
    }
    &:focus{
      border: 1px solid #C9D1D9;  
    }

`
export const StyledButton = styled.button`
    
    height: 3.4em;
    border-radius: 6px;
    border: 1px solid rgba(100, 100, 100, 0.6);

    &:hover{
        background: #30363D;
        color: #FFFFFF;
    }
    

`


export const StyledImg = styled.img`
    width: 216px;
`
export const StyledText = styled.p`
    color: #98A6B3;

    &.primary{
        text-align: start;
        font-size: 0.8em;
    }
    &.secundary{
        font-size: 1.0em;
    }
    &.message{
        margin: 0;
        position: relative;
        top: -10px;
        align-self: start;
        padding: 0 10px;
    }
`

export const StyledLink = styled.a`
    color: #EEEEEE;
    font-size: 0.9em;
    font-weight: 400;  
    text-decoration: underline;

`
