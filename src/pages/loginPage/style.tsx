import styled from "styled-components"
import { DarkColors } from "../../styles/themes/colors"

export const Form = styled.form`
    max-width: 22.125rem;
    width: 100%;
    display:flex;
    flex-direction: column;
    gap:0.75rem;
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