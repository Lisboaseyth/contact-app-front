import React from "react"

export interface iClientProvider {
    children: React.ReactNode
}

export interface iContactObject {
    id?: string
    name?: string
    email?: string
    contactNumber?: string
}

export interface iClientTypes {
    registerClient(data: iDataRegister): void
    registerContact(data: iContactObject): void
    loginClient(data: iDataLogin): void
    logoutClient(): void
    client: iClientObject
    setClient: React.Dispatch<object>
    setContact: React.Dispatch<object[]>
    clientToken: string
    contact: iContactObject[]
    loading: boolean
    deleteContact(id: string): void
    updateContact(id: string, data: iContactObject): void
    modalProfile: boolean
    setModalProfile: React.Dispatch<React.SetStateAction<boolean>>
    baseClient(): void
}

export interface iDataRegister {
    name: string
    email: string
    password: string
    contactNumber: string
}

export interface iDataLogin {
    email: string
    password: string
}

export interface iClientObject {
    info?: object
    name?: string
    email?: string
    contactNumber?: string
}

