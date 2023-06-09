import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import Logo from "../../assets/logoBlue.png"
import {
  Button,
  Flex,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../../contexts"
import { ModalProfile } from "../modal"


export const HeaderPage = () => {

  const [web, setWeb] = useState(true)

  const [isMobileScreen] = useMediaQuery("(max-width: 720px)");
  const {logoutClient, setModalProfile} = useContext(ClientContext)

  const modalIsOpen = () => {
    setModalProfile(true)
  }

  useEffect(() => {
    setWeb(!isMobileScreen);
  }, [isMobileScreen]);

  return (
    <Flex
      fontFamily={"quickSand"}
      as={"header"} bg={"white"}
      alignItems={"center"}
      justifyContent={"space-between"}
      h={{ base: "230px", md: "80px" }}
      paddingInline={{base: "60px", md: "60px"}}
    >
      <ModalProfile />
      <Img src={Logo} w={"200px"} />
      {
        web ? (
        <Flex>
          <Button onClick={() => modalIsOpen()} bg={"#00296F"} _hover={{bg: "blue.2"}} color={"white"} marginRight={"5px"}>Ver Perfil</Button>
          <Button onClick={() => logoutClient()} bg={"#00296F"} _hover={{bg: "blue.2"}} color={"white"}>Sair</Button>
        </Flex>
        ) : (
           <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button} rightIcon={isOpen ? <CloseIcon/> : <HamburgerIcon/> }>
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => modalIsOpen()}>Profile</MenuItem>
                    <MenuItem onClick={() => logoutClient()}>Sair</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
        )
      }
    </Flex>
  )
}
