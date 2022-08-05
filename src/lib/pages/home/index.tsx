import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import ChartBox from "lib/components/charts/LineChart";
import LineChartWithBar from "lib/components/charts/LineChartWithBar";
import MultiChartBox from "lib/components/charts/MultiLineChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { StatsCard } from "lib/components/charts/StateCard";
import { StateCardRemoteData } from "lib/components/charts/StateCardRemoteData";
import {
  IAVGTXInfo,
  IDailyInformation,
  IDailyNewWallet,
  IDistributionOfTXBetweenDapps,
  IMostPopularTypeOfDappsUsed,
  IRawTotalTXInfo,
  IRawTXDistance,
  ITransactionBotRate,
  ITXDistribution,
} from "lib/types/types/home";

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
  //
  avgTxInfo: IAVGTXInfo;
  totalTXInfo: IRawTotalTXInfo;
  timeBetweenTwoTXInfo: IRawTXDistance;
  //
  transactionBotRateData: ITransactionBotRate[];
  transactionDistributionData: ITXDistribution[];
  dailyTXInformationData: IDailyInformation[];
  distributionOfTXBetweenDapps: IDistributionOfTXBetweenDapps[];
  mostPopularTypeOfDappsUsed: IMostPopularTypeOfDappsUsed[];
  dailyNewWallet: IDailyNewWallet[];
  //
  dappsSwapCount: any;
}

const Home = ({
  //
  avgTxInfo,
  totalTXInfo,
  timeBetweenTwoTXInfo,
  //
  transactionBotRateData,
  transactionDistributionData,
  dailyTXInformationData,
  distributionOfTXBetweenDapps,
  mostPopularTypeOfDappsUsed,
  dailyNewWallet,
  //
  dappsSwapCount,
}: Props) => {
  const bgCard = useColorModeValue("white", "#191919");

  return (
    <>
      <NextSeo
        title="OptimismDash | Business Intelligence Dashboard for optimism.io"
        description="Track the latest stats and trends on Optimism"
        openGraph={{
          url: "https://OptimismDash.vercel.app/ust",
          title:
            "OptimismDash | Business Intelligence Dashboard for optimism.io",
          description: "Track the latest stats and trends on Optimism",
          images: [
            {
              url: "https://ogOptimismDash.vercel.app/ogOptimismDash.png",
              width: 1200,
              height: 630,
              alt: "Overview Terra Information",
              type: "image/png",
            },
          ],
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
          <StateCardRemoteData
            url="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
            link="https://www.coingecko.com/en/coins/ethereum"
            status="unchanged"
            title={"Current Ethereum Price (USD)"}
            getStat={(data) => data.ethereum.usd}
          />
          <StateCardRemoteData
            url="https://api.coingecko.com/api/v3/simple/price?ids=optimism&vs_currencies=usd"
            link="https://www.coingecko.com/en/coins/optimism"
            status="unchanged"
            title={"Current Optimism Price (USD)"}
            getStat={(data) => data["optimism"].usd}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/4269e790-3142-496c-a8e7-aea2397336c9"
            status="inc"
            title={"Average Successful Transaction Rate"}
            stat={avgTxInfo["Average Success rate"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/4269e790-3142-496c-a8e7-aea2397336c9"
            status="inc"
            title={"Average # Tx Rate(tx/min)"}
            stat={avgTxInfo["Average Tx per Minute"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/fab5c6ac-9824-48bd-addc-1ae9f8de1962"
            status="inc"
            title={"# Total Transactions"}
            stat={totalTXInfo["total_tx_count"]}
          />

          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/fab5c6ac-9824-48bd-addc-1ae9f8de1962"
            status="inc"
            title={"# Total Unique Address"}
            stat={totalTXInfo["total_unique_address"]}
          />
          <StatsCard
            link="https://app.flipsidecrypto.com/velocity/queries/5bb5762b-6ec4-4c7f-8304-0c2d50622465"
            status="inc"
            title={"Average Time Between Two TX of Users(Min)"}
            stat={timeBetweenTwoTXInfo["avrage time betwwen two TX"]}
          />

          <StateCardRemoteData
            url="https://node-api.flipsidecrypto.com/api/v2/queries/a00daf05-438c-40b9-894e-a4f27d9c0284/data/latest"
            link="https://app.flipsidecrypto.com/velocity/queries/a00daf05-438c-40b9-894e-a4f27d9c0284"
            status="unchanged"
            title={"Current New Wallets"}
            getStat={(data) => data[0]["Current New Wallets"]}
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
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/c9226b84-3ca7-4da2-ab29-91dc9e438ca4"
            data={transactionDistributionData}
            tooltipTitle="Distribution of Transaction in Optimism"
            modelInfo="Distribution of Transaction in Optimism"
            title="Distribution of Transaction in Optimism"
            dataKey="count"
            nameKey="TX # Range"
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/bdd865ba-8dac-4318-b12e-a633f4440e30"
            data={distributionOfTXBetweenDapps}
            tooltipTitle=""
            modelInfo=""
            title="Transaction based distribution of DEX"
            dataKey="TX Count"
            nameKey="Name"
          />
          <DonutChart
            queryLink="https://app.flipsidecrypto.com/velocity/queries/ada28b11-e4eb-45e3-b15a-e11836fda955"
            data={mostPopularTypeOfDappsUsed}
            tooltipTitle=""
            modelInfo=""
            title="Most Popular Type of Dapps By TX Number "
            dataKey="TX count"
            nameKey="Type"
          />

          <LineChartWithBar
            customColor={colors[1]}
            barColor={colors[0]}
            data={dailyNewWallet}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/b0d672a2-bb9a-47ef-babc-cd87a03bca84"
            tooltipTitle=""
            modelInfo=""
            title="Daily new wallets"
            baseSpan={3}
            barDataKey="New Wallets"
            lineDataKey="Avg New Wallets"
            xAxisDataKey="Day"
          />
          <ChartBox
            customColor={colors[0]}
            data={dailyTXInformationData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4b25478f-c64c-4ac8-9e42-cc5ed0660290"
            tooltipTitle="Number of unique address"
            modelInfo="Number of unique address"
            title="Number of daily unique address"
            baseSpan={3}
            areaDataKey="Unique Address"
            xAxisDataKey="Day"
          />

          <BarGraph
            queryLink="https://app.flipsidecrypto.com/velocity/queries/5a47aece-0336-4822-bead-e41b5b8a0118"
            modelInfo=""
            values={dappsSwapCount.dappsSwapCount}
            title="Number of TX on each DEX"
            dataKey="date"
            baseSpan={3}
            oyLabel="Number of Swaps"
            oxLabel="Dapps Name"
            labels={dappsSwapCount.dappsName.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <ChartBox
            customColor={`${colors[0]}80`}
            data={transactionBotRateData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/81eb5605-531d-4111-bd71-d7187c6d5687"
            tooltipTitle="Transaction Bot Rate(%)"
            modelInfo="Transaction Bot Rate(%)"
            title="Transaction Bot Rate(%)"
            baseSpan={3}
            areaDataKey="Bot rate"
            xAxisDataKey="Day"
          />

          <ChartBox
            customColor={`${colors[0]}80`}
            data={dailyTXInformationData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4b25478f-c64c-4ac8-9e42-cc5ed0660290"
            tooltipTitle="Number of transactions"
            modelInfo="Number of transactions"
            title="Number of transactions"
            baseSpan={1}
            areaDataKey="TX Number"
            xAxisDataKey="Day"
          />

          <ChartBox
            customColor={`${colors[0]}80`}
            data={dailyTXInformationData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4b25478f-c64c-4ac8-9e42-cc5ed0660290"
            tooltipTitle="Transactions success rate"
            modelInfo="Transactions success rate"
            title="Transactions success rate"
            baseSpan={1}
            areaDataKey="Success Rate"
            xAxisDataKey="Day"
          />

          <ChartBox
            customColor={`${colors[0]}80`}
            data={dailyTXInformationData}
            queryLink="https://app.flipsidecrypto.com/velocity/queries/4b25478f-c64c-4ac8-9e42-cc5ed0660290"
            tooltipTitle="Number of TX per minute"
            modelInfo="Number of TX per minute"
            title="Number of TX per minute"
            baseSpan={1}
            areaDataKey="TX per Miunte"
            xAxisDataKey="Day"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
