import { Box, useColorModeValue, GridItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { GRID_ITEM_SIZE } from "./template";
import ChartHeader from "../basic/ChartHeader";
import LinkToSourceMenuItem from "../basic/LinkToSourceMenuItem";
import { IShowTableProps, ShowTable } from "./ShowTable";
import { ModalInfo } from "../basic/ModalInfo";

interface Props<T> extends IShowTableProps<T> {
  modalInfo: string;
  title: string;
  queryLink?: string;
  baseSpan: number;
  infoSizePercentage?: number | "full";
}

function TableBox<T>({
  infoSizePercentage = 50,
  baseSpan = 3,
  queryLink,
  data,
  columnsDef,
  title,
  modalInfo,
  tablePageSize,
  onRowClick,
}: Props<T>) {
  const [spanItem, _] = useState(GRID_ITEM_SIZE[baseSpan - 1]);

  const bgTooltip = useColorModeValue("gray.300", "gray.700");
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
      colSpan={spanItem}
      display="flex"
      flex={2}
      flexDir={"column-reverse"}
    >
      <ModalInfo
        modalInfo={modalInfo}
        infoSizePercentage={infoSizePercentage}
        largeSpanSize={spanItem["2xl"] + 1}
      />
      <Box
        flex={1}
        px="6"
        pt="4"
        pb={"2"}
        _hover={{ boxShadow: `0px 0px 4px ${bgTooltip}` }}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        id={title}
      >
        <ChartHeader
          chartMenu={
            <MenuList bg="#232323">
              {queryLink && (
                <>
                  <LinkToSourceMenuItem queryLink={queryLink} />
                </>
              )}
            </MenuList>
          }
          modalInfo={modalInfo}
          title={title}
        />
        <Box p={"0"} />
        <ShowTable
          tablePageSize={tablePageSize}
          // @ts-ignore
          onRowClick={onRowClick}
          customHeaderColor={"#000"}
          data={data}
          // @ts-ignore
          columnsDef={columnsDef}
        />
      </Box>
    </GridItem>
  );
}

export default TableBox;
