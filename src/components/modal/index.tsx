import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,

  } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { ClientContext } from "../../contexts";
import { api } from "../../services";


export const ModalProfile = () => {

    const {setModalProfile, modalProfile, client, setClient} = useContext(ClientContext)

    const modalClose = () => {
        setModalProfile(false);
    };

    const token = localStorage.getItem("@ContactApp:token")

    useEffect(() => {
        (async () => {
          try {
            const response = await api.get("/client/profile", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setClient(response.data);
          } catch (error) {
            console.log(error);
            }
        })();
    }, []);

  return (
    <>
        <Modal
        isOpen={modalProfile}
        onClose={modalClose}
        >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Seus dados</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input value={client.name} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input value={client.email} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Contato</FormLabel>
                <Input value={client.contactNumber} />
            </FormControl>
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue' mr={3}>
                Save
            </Button>
            <Button onClick={modalClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  )
}
