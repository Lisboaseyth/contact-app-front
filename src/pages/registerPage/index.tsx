import { useForm } from "react-hook-form";
import { iFormRegister } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "./schema";
import { Section, ImgLogo, Input, Button, ParagraphContainer, Paragraph, Form } from "./style";
import Logo from "../../assets/logo.svg"
import { useContext } from "react"
import { ClientContext } from "../../contexts";


export const RegisterPage = () => {

    const { registerClient } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegister>({
        resolver: yupResolver(schemaRegister)
    })
    
    const onSubmit = (data: iFormRegister) => {
        console.log(data);
        registerClient(data)
    }
    
    return (
        <Section>
            <ImgLogo src={Logo} alt="Logo ContactApp+" />
            <div style={{width: '22.125rem'}}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text"  placeholder="Nome completo" {...register("name")}/>
                    {errors.name && <p>{errors.name?.message}</p>}
                    <Input type="text" placeholder="Email" {...register("email")}/>
                    {errors.email && <p>{errors.email?.message}</p>}
                    <Input type="password"  placeholder="Senha" {...register("password")}/>
                    {errors.password && <p>{errors.password?.message}</p>}
                    <Input type="text" placeholder="Contato" {...register("contactNumber")}/>
                    {errors.contactNumber && <p>{errors.contactNumber?.message}</p>}
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <ParagraphContainer>
                    <Paragraph>Já tem uma conta? <a href="/">Entrar</a></Paragraph>
                </ParagraphContainer>
            </div>
        </Section>
    )
}
