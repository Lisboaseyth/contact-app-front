export interface iFormRegister {
    name:string;
    email: string;
    password: string;
    contactNumber: string;
}

export interface iFormRegisterContact {
    name:string;
    email: string;
    contactNumber: string;
}

export interface iFormUpdateContact {
    name?:string;
    email?: string;
    contactNumber?: string;
}