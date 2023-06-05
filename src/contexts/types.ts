
export interface iClientProvider {
    children: React.ReactNode
}

export interface iContactObject {
    name: string
    email: string
    contactNumber: string
}

export interface iClientTypes {
    registerClient(data: iDataRegister): void
    loginClient(data: iDataLogin): void
    logoutClient(): void
    client: iClientObject
    setClient: React.Dispatch<object>
    clientToken: string
    listContact: iContactObject[]
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
    name?: string
    email?: string
    contactNumber?: string
}

