import { useState, createContext } from 'react'
import { iClientObject, iClientProvider, iClientTypes, iContactObject, iDataLogin, iDataRegister } from './types'
import { toast } from 'react-toastify'
import { api } from '../services'
import { useNavigate } from 'react-router-dom'

export const ClientContext = createContext({} as iClientTypes)

export const ClientProvider = ({ children }: iClientProvider) => {

    const [client, setClient] = useState<iClientObject>({} as iClientObject)

    const [listContact, setContact] = useState([] as iContactObject[])

    const [clientToken] = useState<string>((localStorage.getItem("@ContactApp:token") as string) || "");

    const navigate = useNavigate()

    const registerClient = async (data: iDataRegister) => {
        try{
            await api.post("/sessions", data)
            navigate("/")
            toast.success("Cliente cadastrado")
        } catch(err){
            console.log(err);
            toast.error("Algo deu errado :(")
        }

    }

    const loginClient = async (data: iDataLogin) => {
        try{
            const resp = await api.post('/login', data)
            localStorage.setItem('@ContactApp:token', resp.data.token)
            // localStorage.setItem('@ContactApp:id', resp.data.client.id)
            navigate("/dashboard")
            toast.success("Logado com sucesso")
        } catch(err){
            toast.error("Algo deu errado :(")
            console.log(err);
        }
    }

    const logoutClient = () => {
        localStorage.clear()
        navigate("/")
        toast.success("Até a próxima ;D")
    }

    return (
        <ClientContext.Provider value={{ loginClient, registerClient, logoutClient, client, setClient, clientToken, listContact }}>
            {children}
        </ClientContext.Provider>
    )
}