import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  Box,
  useColorModeValue,
  GridItem,
  MenuList,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import millify from "millify";
import moment from "moment";
import { GRID_ITEM_SIZE } from "./template";
import ChartSpanMenu from "../basic/ChartSpanMenu";
import ChartHeader from "../basic/ChartHeader";
import LinkToSourceMenuItem from "../basic/LinkToSourceMenuItem";

const FakeChart = ({
  title,

  baseSpan = 1,
  labels,
  modalInfo,

  defualtTime = "day",
  queryLink,
}: {
  defualtTime?: "day" | "month";
  title: string;

  modalInfo: string;
  baseSpan?: number;
  queryLink?: string;
  labels: any[];
}) => {
  const [chartTimeFrame, setChartTimeFrame] = useState<"day" | "month">(
    defualtTime
  );
  const [spanItem, setSpanItem] = useState(GRID_ITEM_SIZE[baseSpan - 1]);
  const [barProps, setBarProps] = useState(
    labels.reduce(
      (a: any, { key }: any) => {
        a[key] = false;
        return a;
      },
      { hover: null }
    )
  );
  const bgTooltip = useColorModeValue("gray.300", "gray.700");
  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <GridItem
      rowSpan={1}
      colSpan={spanItem}
      color={textColor}
      bgColor={bgCard}
      shadow="base"
      transition={"all 0.5s "}
      _hover={{ boxShadow: "var(--chakra-shadows-lg)" }}
      borderRadius={"2xl"}
      width="100%"
    >
      <Box
        px="4"
        pt="4"
        pb={"2"}
        _hover={{ boxShadow: `0px 0px 4px ${bgTooltip}` }}
        display="flex"
        flexDir={"column"}
        alignItems="center"
        height={"480px"}
        id={title}
      >
        <ChartHeader
          disclaimer={"disclaimer"}
          chartMenu={
            <MenuList bg="#232323">
              {queryLink && (
                <>
                  <LinkToSourceMenuItem queryLink={queryLink} />
                  <MenuDivider />
                </>
              )}

              <ChartSpanMenu
                onChange={(span) =>
                  setSpanItem(GRID_ITEM_SIZE[Number(span) - 1])
                }
                baseSpan={baseSpan}
              />
            </MenuList>
          }
          modalInfo={modalInfo}
          title={title}
        />
        <Box p={"1"} />

        <ResponsiveContainer width={"100%"}>
          <Box w="full" height="full" bg="red.300"></Box>
        </ResponsiveContainer>
      </Box>
    </GridItem>
  );
};

export default FakeChart;
