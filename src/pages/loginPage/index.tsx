import { iDataLogin } from "../../contexts/types";
import { schemaLogin } from "./schema";
import { iFormLogin } from "./types";
import { useContext } from "react";
import { Form, Input, } from "./style";
import { Link } from "react-router-dom";
import { ClientContext } from "../../contexts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/logoBlue.png"
import { Button, Center, Flex, Img } from "@chakra-ui/react";


export const LoginPage = () => {

    const { loginClient, loading } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormLogin>({
        resolver: yupResolver(schemaLogin)
    })

    const onSubmit = (data: iDataLogin) => {        
        loginClient(data);
    }

    return (
        <Flex bg={"blue.3"} h={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} >
            <Center bg={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"30px"} borderRadius={"10px"}>
                <Img w={"250px"} marginBottom={"20px"} src={Logo} alt="Logo ContactApp" />
                <div style={{ width: '22.125rem' }}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input type="email" placeholder='Email' {...register('email')} />
                        {errors.email && <p className='message'>{errors.email?.message}</p>}
                        <Input type="password" placeholder='Senha' {...register('password')} />
                        {errors.password && <p className='message'>{errors.password?.message}</p>}

                        <Button _hover={{ bg: "#00296F", color: "white" }} type='submit'>Entrar</Button>
                    </Form>

                    <Center marginTop={"20px"}>
                        <p>Não tem uma conta? <Link to="/register">Criar Conta</Link></p>
                    </Center>

                </div>
            </Center>
        </Flex>
    )
}
