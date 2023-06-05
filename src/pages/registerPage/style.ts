import styled from 'styled-components';
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

export const StyledText = styled.p`
    color: ${DarkColors.text_color_muted};

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
        top: -0.625rem;
        align-self: start;
        padding: 0 0.625rem;
    }
`

export const StyledLink = styled.a`
    color: ${DarkColors.button_text_color};
    font-size: 0.9em;
    font-weight: 400;  
    text-decoration: underline;
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
