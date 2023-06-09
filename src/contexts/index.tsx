import { useState, createContext, useEffect } from 'react'
import { iClientObject, iClientProvider, iClientTypes, iContactObject, iDataLogin, iDataRegister } from './types'
import { toast } from 'react-toastify'
import { api } from '../services'
import { useNavigate } from 'react-router-dom'

export const ClientContext = createContext({} as iClientTypes)

export const ClientProvider = ({ children }: iClientProvider) => {

    const [client, setClient] = useState({} as iClientObject)

    const [contact, setContact] = useState([] as iContactObject[])

    const [modalProfile, setModalProfile] = useState(false)

    const [loading, setLoading] = useState(false)

    const [clientToken] = useState<string>((localStorage.getItem("@ContactApp:token") as string));

    const navigate = useNavigate()

    const registerClient = async (data: iDataRegister) => {

        try{
            setLoading(true)
            await api.post("/client", data)
            navigate("/")
            toast.success("Cliente cadastrado")
        } catch(err){
            console.log(err);
            toast.error("Algo deu errado :(")
        } finally {
            setLoading(false)
        }

    }

    const loginClient = async (data: iDataLogin) => {

        try{
            setLoading(true)
            const resp = await api.post('/login', data)
            setClient(resp.data.info)
            console.log(client);
            
            localStorage.clear()
            localStorage.setItem('@ContactApp:token', resp.data.info.token)
            localStorage.setItem('@ContactApp:Id', resp.data.info.id)
            navigate("/dashboard")
            toast.success(`Seja bem vindo ${resp.data.info.name}`)
        } catch(err){
            toast.error("Algo deu errado :(")
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const logoutClient = () => {
        localStorage.clear()
        navigate("/")
        toast.success("Até a próxima ;D")
    }
    
    const registerContact = async (data: iContactObject) => {
        const token = localStorage.getItem("@ContactApp:token")

        try{
            setLoading(true)
            await api.post("/contact", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Contato cadastrado")
        } catch(err){
            console.log(err);
            toast.error("Algo deu errado :(")
        } finally {
            setLoading(false)
        }

    }

    const deleteContact = async (contact: string) => {
        const token = localStorage.getItem("@ContactApp:token")

        try {
            await api.delete(`/contact/${contact}`, {
                headers: {
                  authorization: `Bearer ${token}`,
                },
            })
            toast.success("Contato excluido")
        } catch (error) {
            console.log(error);
            toast.error("Algo deu errado! :(")
            
        }

    }

    const updateContact = async (contact: string, data: iContactObject) => {
        const token = localStorage.getItem("@ContactApp:token")

        try {
            await api.patch(`/contact/${contact}`, data, {
                headers: {
                  authorization: `Bearer ${token}`,
                },
            })
            toast.success("Contato atualizado")
        } catch (error) {
            console.log(error);
            toast.error("Algo deu errado! :(")
            
        }

    }

    const baseContacts = async () => {
        const token = localStorage.getItem("@ContactApp:token")
        try{
            const resp = await api.get("/contact", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setContact(resp.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    const baseClient =async () => {
        const token = localStorage.getItem("@ContactApp:token")
        try {
            const resp = await api.get("/client/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setContact(resp.data)
            console.log(resp.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        baseContacts()
    }, [])

    return (
        <ClientContext.Provider value={{ setContact, updateContact, baseClient, modalProfile, setModalProfile, deleteContact, loading, loginClient, registerClient, logoutClient, client, setClient, clientToken, contact, registerContact }}>
            {children}
        </ClientContext.Provider>
    )
}