import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import ChartBox from "lib/components/charts/LineChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import { StatsCard } from "lib/components/charts/StateCard";

import {} from "lib/types/types/home";
import {
  IDailyBlockAge,
  ITotalPerformance,
  ITXinSecondPerformance,
} from "lib/types/types/performance";

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
  // static
  blockPerformanceTotalInfo: ITotalPerformance;
  // simple
  dailyBlockAge: IDailyBlockAge[];
  TPSPerformance: ITXinSecondPerformance[];
  // seorate
}

const Performance = ({
  // static
  blockPerformanceTotalInfo,
  // simple
  dailyBlockAge,
  TPSPerformance,
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
        >
          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/23c6e050-6817-496e-953b-1ebdbf5a9248"
            status="inc"
            title={"Max Block Time (second)"}
            stat={blockPerformanceTotalInfo["Min Block Time"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/23c6e050-6817-496e-953b-1ebdbf5a9248"
            status="dec"
            title={"Max Block Time (second)"}
            stat={blockPerformanceTotalInfo["Max Block Time"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/23c6e050-6817-496e-953b-1ebdbf5a9248"
            status="inc"
            title={"Average Block Time (second)"}
            stat={blockPerformanceTotalInfo["Average Block Time"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/23c6e050-6817-496e-953b-1ebdbf5a9248"
            status="inc"
            title={"Min TX count per block (second)"}
            stat={blockPerformanceTotalInfo["Min TX count per block"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/23c6e050-6817-496e-953b-1ebdbf5a9248"
            status="dec"
            title={"Max TX count per block (second)"}
            stat={blockPerformanceTotalInfo["Max TX count per block"]}
          />
          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/23c6e050-6817-496e-953b-1ebdbf5a9248"
            status="dec"
            title={"Average TX count per block (second)"}
            stat={blockPerformanceTotalInfo["Average TX count per block"]}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={dailyBlockAge}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/dcfcfa07-8c49-4958-8d35-209e58ff1ef9"
            tooltipTitle=""
            modelInfo=""
            title="Daily Block Age (second)"
            baseSpan={3}
            barDataKey="Daily Block Age"
            lineDataKey="Average Block Time"
            xAxisDataKey="Day"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[5]}
            data={TPSPerformance}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/6db7b9fa-3b24-45c4-b441-47f5f2547ae6"
            tooltipTitle=""
            modelInfo=""
            title="Daily transaction per second (TPS)"
            baseSpan={3}
            barDataKey="TPS"
            lineDataKey="Average TPS"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Performance;
