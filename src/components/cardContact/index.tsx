
import IMGProfile from "../../assets/iconProfile.png"
import { Button, Flex, FormControl, FormLabel, Img, Input, useDisclosure } from "@chakra-ui/react"
import { DeleteIcon, SearchIcon } from "@chakra-ui/icons"
import { iContactObject } from "../../contexts/types"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useContext } from "react"
import { ClientContext } from "../../contexts"
import { iFormUpdateContact } from "../../pages/registerPage/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schemaUpdateContact } from "../../pages/registerPage/schema"

export const CardContact = ({ name, email, contactNumber, id }: iContactObject) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { deleteContact, updateContact } = useContext(ClientContext)

    const { register, handleSubmit, reset } = useForm<iFormUpdateContact>({
        resolver: yupResolver(schemaUpdateContact)
      })

    const onSubmit = (data: iContactObject) => {
      updateContact(`${id}`, data)
      reset()
    };

    return(
        <Flex
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"white"}
        paddingX={"20px"}
        paddingY={"10px"}
        borderRadius={"5px"}
        margin={"5px"}
      >
        <Img src={IMGProfile} w={"50px"} h={"50px"} marginRight={"10px"} />
        <div>
          <h3>{name}</h3>
          <p>{email}</p>
          <p>{contactNumber}</p>
        </div>
        <div>
          <Button onClick={onOpen} leftIcon={<SearchIcon />} marginLeft={"10px"} />
          <>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Dados do contato</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input placeholder={name} {...register("name")} />
                        </FormControl>
        
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder={email} {...register("email")} />
                        </FormControl>
        
                        <FormControl mt={4}>
                            <FormLabel>Contato</FormLabel>
                            <Input placeholder={contactNumber} {...register("contactNumber")} />
                        </FormControl>

                        <ModalFooter>
                        <Button type="submit" colorScheme="blue" mr={3}>
                            Atualizar
                        </Button>
                        <Button mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button onClick={() => deleteContact(`${id}`)} leftIcon={<DeleteIcon/>} color={"white"} bg={"red.400"}>
                            Deletar
                        </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
  
              </ModalContent>
            </Modal>
          </>
        </div>
      </Flex>
    )
}