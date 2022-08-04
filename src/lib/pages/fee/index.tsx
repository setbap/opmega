import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import ChartBox from "lib/components/charts/LineChart";
import {
  IDailyCollectedFees,
  ITransactionFeeInDayOfWeek,
  ITransactionFeeInHour,
} from "lib/types/types/fees";
import {} from "lib/types/types/home";

import { NextSeo } from "next-seo";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#4caf50",
  "#00bcd4",
  "#f44336",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#009688",
  "#607d8b",
];

interface Props {
  // simple
  dailyCollectedFees: IDailyCollectedFees[];
  transactionFeeInHour: ITransactionFeeInHour[];
  dailyAverageTransactionCost: IDailyCollectedFees[];
  transactionFeeInDayOfWeek: ITransactionFeeInDayOfWeek[];
  // seorate
}

const Fees = ({
  // static

  // simple
  dailyCollectedFees,
  transactionFeeInHour,
  dailyAverageTransactionCost,
  transactionFeeInDayOfWeek,
}: // seorate
Props) => {
  const bgCard = useColorModeValue("white", "#191919");

  return (
    <>
      <NextSeo
        title="OptimismDash | Business Intelligence Dashboard for Polygon"
        description="Track the latest stats and trends on Polygon"
        openGraph={{
          url: "https://OptimismDash.vercel.app/",
          title: "OptimismDash | Business Intelligence Dashboard for Polygon",
          description: "Track the latest stats and trends on Polygon",

          site_name: "OptimismDash",
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 6, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        ></SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <ChartBox
            customColor={colors[0]}
            data={dailyCollectedFees}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4b54e417-2e97-4d62-adab-d0a7db68146e"
            tooltipTitle=""
            modelInfo=""
            title="Total Transaction Fees ($ETH)"
            baseSpan={3}
            areaDataKey="Fee"
            xAxisDataKey="Day"
          />
          <BarGraph
            values={transactionFeeInHour}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/e424a548-c863-4afb-a4e0-04ed6fbfedc5"
            modelInfo=""
            title="Average Transaction Fees in Each Hour ($ETH)"
            baseSpan={3}
            extraDecimal={12}
            dataKey="Hour"
            oxLabel="Hour"
            oyLabel=""
            labels={[
              {
                color: colors[0],
                key: "Fee",
              },
            ]}
            isNotDate
          />

          <ChartBox
            customColor={colors[0]}
            data={dailyAverageTransactionCost}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/91e59759-4008-4676-ba2e-288d38b3ebe3"
            tooltipTitle=""
            modelInfo=""
            title="Daily Average of Transaction Fees ($ETH)"
            baseSpan={3}
            extraDecimal={8}
            areaDataKey="Fees"
            xAxisDataKey="Day"
          />

          <BarGraph
            values={transactionFeeInDayOfWeek}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/0bdf89e5-33c2-4653-859b-c126c2e5c87e"
            modelInfo=""
            title="Average Transaction Fees in Each weekday ($ETH)"
            baseSpan={3}
            dataKey="Day Name"
            extraDecimal={8}
            labels={[
              {
                color: colors[0],
                key: "Fee",
              },
            ]}
            isNotDate
            oxLabel={"Day Name"}
            oyLabel={""}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Fees;
