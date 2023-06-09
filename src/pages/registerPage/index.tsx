import { useForm } from "react-hook-form";
import { iFormRegister } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "./schema";
import { Input, Form } from "./style";
import Logo from "../../assets/logoBlue.png"
import { useContext } from "react"
import { ClientContext } from "../../contexts";
import { Center, Img, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const RegisterPage = () => {

    const { registerClient } = useContext(ClientContext)

    const { register, handleSubmit, formState: { errors } } = useForm<iFormRegister>({
        resolver: yupResolver(schemaRegister)
    })
    
    const onSubmit = (data: iFormRegister) => {
        registerClient(data)
    }
    
    return (
        <Flex bg={"blue.3"} h={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}  >
            <Center bg={"white"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"30px"} borderRadius={"10px"}>
                <Img w={"250px"} marginBottom={"20px"} src={Logo} alt="Logo ContactApp" />
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
                        <Button _hover={{ bg: "#00296F", color: "white" }} type="submit">Cadastrar</Button>
                    </Form>
                    <Text marginTop={"15px"} textAlign={"center"}>Já possui conta? <Link to="/">Logar</Link></Text>
                </div>
            </Center>
        </Flex>
    )
}
