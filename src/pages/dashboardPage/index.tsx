import { useContext, useEffect } from "react"
import { HeaderPage } from "../../components/header"
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
  Input,
  Flex,
  Text
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { schemaRegisterContact } from "../registerPage/schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { iFormRegisterContact } from "../registerPage/types"
import { api } from "../../services"
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"


export const DashboardPage = () => {



  const { contact, client, registerContact, deleteContact, updateContact, setContact } = useContext(ClientContext)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { register, handleSubmit } = useForm<iFormRegisterContact>({
    resolver: yupResolver(schemaRegisterContact)
  })

  const onSubmit = (data: iFormRegisterContact) => {
    registerContact(data)
  };

  const clientPdf = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
    const reportTitle = {
      text: "Informações",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45]
    };

    const dataContacts = contact.map((contactObj) => {
      return [
        {text: contactObj.id, fontSize: 10, margin: [0, 3, 0, 3]},
        {text: contactObj.name, fontSize: 10, margin: [0, 3, 0, 3]},
        {text: contactObj.email, fontSize: 10, margin: [0, 3, 0, 3]},
        {text: contactObj.contactNumber, fontSize: 10, margin: [0, 3, 0, 3]},
      ]
    })

    const dataClient = [
        {text: client.id, fontSize: 10, margin: [0, 3, 0, 3]},
        {text: client.name, fontSize: 10, margin: [0, 3, 0, 3]},
        {text: client.email, fontSize: 10, margin: [0, 3, 0, 3]},
        {text: client.contactNumber, fontSize: 10, margin: [0, 3, 0, 3]},
      ]
  
    const details1 = [
      {
        table: {
          headerRows: 1,
          widths: ["*", "*", "*", "*"],
          body: [
            [
              {text: "Id", style: "tableHeader", fontSize: 10},
              {text: "Nome", style: "tableHeader", fontSize: 10},
              {text: "Email", style: "tableHeader", fontSize: 10},
              {text: "Contato", style: "tableHeader", fontSize: 10},
            ], 
            dataClient,
          ]
        },
        layoult: "headerLineOnly"
      }
    ];
    const details2 = [
      {
        table: {
          headerRows: 1,
          widths: ["*", "*", "*", "*"],
          body: [
            [
              {text: "Id", style: "tableHeader", fontSize: 10},
              {text: "Nome", style: "tableHeader", fontSize: 10},
              {text: "Email", style: "tableHeader", fontSize: 10},
              {text: "Contato", style: "tableHeader", fontSize: 10},
            ], 
            ...dataContacts,
          ]
        },
        layoult: "headerLineOnly"
      }
    ];
  
    const footerPage = (currentPage: string, pageCount: string) => {
      return [
        {
          text: currentPage + " / " + pageCount,
          alignment: "right",
          fontSize: 9,
          margin: [0, 10, 20, 0]
        }
      ]
    };
  
    const docDefs: any = {
      pageSize: "A4",
      pageMargins: [15, 50, 15, 40],
      header: reportTitle,
      content: [{text: "Informações do cliente"} ,
        details1,
        {text: "Informações dos contatos"},
        details2
      ],
      footer: footerPage
    };
  
    pdfMake.createPdf(docDefs).download();
  };

  const token = localStorage.getItem("@ContactApp:token")

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/contact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [ registerContact, deleteContact, updateContact ]);

  return (
    <>
        <HeaderPage />
        <Flex
          fontFamily={"quickSand"}
          as={"section"}
          bg={"blue.3"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          h={"100vh"}
          >
          <Flex display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          >
            <Text fontFamily={"quickSand"} margin={"20px"} fontSize={"25px"} color={"white"}>Contatos Salvos</Text>
            <Button onClick={onOpen} bg={"blue.2"} color={"white"} marginBottom={"15px"}>Adicionar Contato</Button>
            <Button onClick={() => clientPdf()} bg={"white"} color={"blue.2"} marginBottom={"15px"}>Relatório</Button>
          </Flex>
          <Flex as={"ul"} display={"flex"} w={"90%"} alignItems={"center"}
          justifyContent={"center"} flexWrap={"wrap"}
          >
          <Modal
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Dados para contato</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl >
                      <FormLabel>Nome do contato</FormLabel>
                      <Input placeholder='Nome completo' {...register("name")}/>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Email</FormLabel>
                      <Input placeholder='Email' {...register("email")}/>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Número para contato</FormLabel>
                      <Input placeholder='Número para contato' {...register("contactNumber")}/>
                    </FormControl>

                    <ModalFooter>
                      <Button type="submit" onClick={onClose} colorScheme='blue' mr={3}>
                        Salvar Contato
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>
              {
                contact?.map((item, index) => {
                  const {name, email, contactNumber, id} = item
                  return(
                    <CardContact key={index} name={name} email={email} contactNumber={contactNumber} id={id}/>
                  )
                })
              }
          </Flex>
        </Flex>
    </>
  )
}
