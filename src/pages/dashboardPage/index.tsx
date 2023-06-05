import { useContext } from "react"
import { HeaderPage } from "../../components/header"
import { DashStyled, DivUl } from "./style"
import { ClientContext } from "../../contexts"
import { CardContact } from "../../components/cardContact"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

export const DashboardPage = () => {

  const {listContact} = useContext(ClientContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <DashStyled>
        <HeaderPage />
        <section>
          <DivUl>
            <div className="divHeader">
              <h2>Contatos Salvos</h2>
              <Button onClick={onOpen}>Adicionar Contato</Button>
            </div>
            <Modal
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Nome do contato</FormLabel>
                    <Input placeholder='Nome completo' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email' />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Número para contato</FormLabel>
                    <Input placeholder='Número para contato' />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3}>
                    Salvar Contato
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <ul>
              {
                listContact?.map((item, index) => {
                  const {name, email, contactNumber} = item
                  return(
                    <CardContact key={index} name={name} email={email} contactNumber={contactNumber} />
                  )
                })
              }
              <li>
                <h3>Pedro Lisboa</h3>
                <p>pedro@mail</p>
                <p>(88)992710349</p>
              </li>
            </ul>
          </DivUl>
        </section>
    </DashStyled>
  )
}
