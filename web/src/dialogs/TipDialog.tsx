import { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Dialog from "./SimpleDialog";
import { StarIcon } from "@chakra-ui/icons";

export function TipTutorDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className="rounded-lg bg-gray-900 px-8 py-2 text-white h-8 text-lg font-body-2-body-2 font-thin hover:bg-black "
        onClick={onOpen}
      >
        Rate
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="white">
          <Button className="flex justify-end mt-6" onClick={onClose}>
            <img src="/close.svg" />
          </Button>
          {/* <ModalCloseButton color="black" /> */}
          <ModalBody className="mx-auto">
            <TipTutorDialogContent />
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Button
              w={{ base: "150px", md: "250px", lg: "350px" }}
              className="mt-1 mb-2 rounded-smi bg-gray-900 px-36 py-6 text-white h-10 text-lg font-body-2-body-2 font-thin hover:bg-black mx-auto "
            >
              Tip and confirm
            </Button>
            <Button
              w={{ base: "150px", md: "250px", lg: "350px" }}
              variant="outline"
              borderColor="black"
              className="mb-3 rounded-smi px-36 py-6 text-black h-10 text-lg font-body-2-body-2 font-thin mx-auto "
            >
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const TipTutorDialogContent = () => {
  return (
    <div className="font-body-2-body-2">
      <p className="text-3xl font-bold text-black text-start my-4 ">
        Thank your tutor with a tip.
      </p>
      <div className="space-y-2 mt-4">
        <Text className=" text-gray1-200 ">Amount</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" className="text-gray1-200">
            $
          </InputLeftElement>
          <Input
            className="hover:border-black"
            variant="outline"
            placeholder="Tip your tutor"
            focusBorderColor="black"
            borderColor="grey"
            w={{ base: "150px", md: "250px", lg: "350px" }}
          />
        </InputGroup>
      </div>
    </div>
  );
};
