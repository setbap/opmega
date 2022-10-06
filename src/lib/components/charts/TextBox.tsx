import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";
import MDRenderer from "../basic/MDRenderer";
import { GRID_ITEM_SIZE } from "./template";

const TextBox = ({ children }: any) => {
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <GridItem
      rowSpan={1}
      color={textColor}
      bgColor={bgCard}
      shadow="base"
      transition={"all 0.5s "}
      _hover={{ boxShadow: "var(--chakra-shadows-lg)" }}
      borderRadius={"2xl"}
      width="100%"
      colSpan={GRID_ITEM_SIZE[2]}
    >
      <Box p="4">
        <MDRenderer>{children}</MDRenderer>
      </Box>
    </GridItem>
  );
};

export default TextBox;
