import { iDataLogin } from "../../contexts/types";
import { schemaLogin } from "./schema";
import { iFormLogin } from "./types";
import { useContext } from "react";
import { Button, Form, ImgLogo, Input, Paragraph, ParagraphContainer, Section, StyledText } from "./style";
import { Link } from "react-router-dom";
import { ClientContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logo.svg"


export const LoginPage = () => {

    const { loginClient } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        resolver: yupResolver(schemaLogin)
    })

    const onSubmit = (data: iDataLogin) => {
        console.log(data);
        
        loginClient(data);
    }

    return (
        <Section>
            <ImgLogo src={Logo} alt="Logo ContactApp" />
            <div style={{ width: '22.125rem' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="email" placeholder='Email' {...register('email')} />
                    {errors.email && <StyledText className='message'>{errors.email?.message}</StyledText>}
                    <Input type="password" placeholder='Senha' {...register('password')} />
                    {errors.password && <StyledText className='message'>{errors.password?.message}</StyledText>}

                    <Button type='submit'>Entrar</Button>
                </Form>

                <ParagraphContainer>
                    <Paragraph>Não tem uma conta? <Link to="/register">Criar Conta</Link></Paragraph>
                </ParagraphContainer>

            </div>
        </Section>
    )
}
