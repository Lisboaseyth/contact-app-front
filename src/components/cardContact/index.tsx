import { iClientObject } from "../../contexts/types"
import { CardStyle } from "./style"

export const CardContact = ({ name, email, contactNumber }: iClientObject) => {
    return(
        <CardStyle>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{contactNumber}</p>
        </CardStyle>
    )
}