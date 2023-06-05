import { useContext } from "react"
import { ClientContext } from "../../contexts"
import { DivBtn, DivSeach, DivLogo, HeaderDashboadStyled } from "./style"
import Logo from "../../assets/logo.svg"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'


export const HeaderPage = () => {

  const { logoutClient, client } = useContext(ClientContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (

    <HeaderDashboadStyled>
        <DivLogo>
            <img src={Logo} alt="" />
        </DivLogo>
        <DivBtn>
            <DivSeach>
            <Button  colorScheme='teal' onClick={onOpen}>
              Perfil
            </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Informações de Perfil</DrawerHeader>

                <DrawerBody>
                  <h2>Name: Pedro Lisboa</h2>
                  <h2>Email: pedro@mail.com</h2>
                  <p>Contato: (88)992710349</p>
                </DrawerBody>

                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Fechar
                  </Button>
                  <Button colorScheme='blue'>Alterar</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
              <button onClick={() => logoutClient}>Sair</button>
            </DivSeach>
            <button  className='btnDefault'></button>
        </DivBtn>
    </HeaderDashboadStyled>
  )
}
