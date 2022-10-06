import {
  Box,
  IconButton,
  chakra,
  Menu,
  MenuButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

export default function ChartHeader({
  title,
  chartMenu,
  modalInfo,
  disclaimer,
}: {
  disclaimer?: string;
  modalInfo: string;
  title: string;
  chartMenu: any;
}) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.700"
      backdropFilter="blur(10px) hue-rotate(20deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      {/* {!(modalInfo === "" || modalInfo === null) ? ( */}
      {false ? (
        <IconButton
          size={"sm"}
          variant={"outline"}
          aria-label="open info about chart"
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          icon={<AiOutlineInfoCircle />}
        />
      ) : (
        <Box></Box>
      )}
      <Box>
        <chakra.h6 textAlign={"center"} noOfLines={1} textOverflow="ellipsis">
          {title}
        </chakra.h6>
        {disclaimer && <chakra.sub>{disclaimer}</chakra.sub>}
      </Box>

      <Menu closeOnSelect={false}>
        <MenuButton
          size={"sm"}
          as={IconButton}
          aria-label="Options"
          icon={<FiSettings />}
          variant="outline"
        />
        {chartMenu}
      </Menu>
      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg={"#232323"}>
          <ModalHeader>Chart Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box px={4}>
              <ReactMarkdown>{modalInfo}</ReactMarkdown>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
