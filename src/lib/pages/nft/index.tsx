import { Box, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import {
  INFTDailyUniqueSalerAndBuyerCount,
  INFTTotalSaleCountAndVolume,
  ITop10NFTCollectionBaseSellCount,
  ITop10NFTCollectionBaseSellVolume,
} from "lib/types/types/nft";

import { NextSeo } from "next-seo";

const colors = [
  "#ff5722",
  "#03a9f4",
  "#ffc107",
  "#e6194b",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#808080",
  "#ffffff",
  "#EEA47F",
  "#F96167,",
  "#F9BF67",
  "#F9E267",
  "#A4F267",
  "#317773",
  "#6AB187",
];

interface Props {
  // static
  // simple
  nFTDailyUniqueSalerAndBuyerCount: INFTDailyUniqueSalerAndBuyerCount[];
  totalSaleCountAndVolume: INFTTotalSaleCountAndVolume[];
  top10NFTCollectionBaseSellCount: ITop10NFTCollectionBaseSellCount[];
  top10NFTCollectionBaseSellVolume: ITop10NFTCollectionBaseSellVolume[];
  // seorate
  saleCountAndVolume: any;
  dailyMostPopularNFTCollection: any;
  dailyMostValueNfTCollection: any;
}

const Performance = ({
  // static
  // simple
  nFTDailyUniqueSalerAndBuyerCount,
  totalSaleCountAndVolume,
  top10NFTCollectionBaseSellCount,
  top10NFTCollectionBaseSellVolume,
  // seorate
  saleCountAndVolume,
  dailyMostPopularNFTCollection,
  dailyMostValueNfTCollection,
}: Props) => {
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
          <DonutChart
            queryLink="4ff5074f-ffb6-4b34-a4d8-0c46c2aa0130"
            data={totalSaleCountAndVolume}
            modalInfo=""
            title="Most popular currency for sales based on sales count"
            dataKey="Sales Count"
            nameKey="Currency"
          />

          <DonutChart
            queryLink="https://app.flipsidecrypto.com/veloc ity/queries/4ff5074f-ffb6-4b34-a4d8-0c46c2aa0130"
            data={totalSaleCountAndVolume}
            modalInfo=""
            title="Most popular currency for sales based on sales volume in USD"
            dataKey="Volume in USD"
            nameKey="Currency"
          />

          <DonutChart
            queryLink="20f3ae27-b449-44c0-97fc-b8449bc65338"
            data={top10NFTCollectionBaseSellCount}
            modalInfo=""
            title="Top 10 popular NFT collections based on sales count"
            dataKey="Sales Count"
            nameKey="Collection Name"
          />

          <DonutChart
            queryLink="3c9f9fb5-191d-498b-8a6f-7205aec64405"
            data={top10NFTCollectionBaseSellVolume}
            modalInfo=""
            title="Top 10 popular NFT collections based on sales volume (USD)"
            dataKey="Sales Volume"
            nameKey="Collection Name"
          />

          <StackedAreaChart
            queryLink="d2ddb049-b461-4be8-80cf-640b333fbc02/"
            dataKey="Day"
            labels={[
              {
                color: colors[1],
                key: "Unique Buyer",
              },
              {
                color: colors[0],
                key: "Unique Seller",
              },
            ]}
            modalInfo=""
            title="Daily Unique Buyers vs Unique Sellers"
            oxLabel="Day"
            oyLabel="Address Count"
            values={nFTDailyUniqueSalerAndBuyerCount}
            baseSpan={3}
          />

          <BarGraph
            queryLink="c1cb47cf-de40-40b7-a45b-654b247130f5"
            modalInfo=""
            values={saleCountAndVolume.saleCount}
            title="Sales Count"
            dataKey="date"
            baseSpan={3}
            oyLabel="Sale Number"
            oxLabel="Day"
            labels={saleCountAndVolume.currencyName.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            queryLink="c1cb47cf-de40-40b7-a45b-654b247130f5"
            modalInfo=""
            values={saleCountAndVolume.saleVolume}
            title="Sales Volume (USD)"
            dataKey="date"
            baseSpan={3}
            oyLabel="Sale Volume (USD)"
            oxLabel="Day"
            labels={saleCountAndVolume.currencyName.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />

          <BarGraph
            hideLegend
            queryLink="c1cb47cf-de40-40b7-a45b-654b247130f5"
            modalInfo=""
            values={dailyMostPopularNFTCollection.saleCount}
            title="top 5 collection in each day based on sales count"
            dataKey="date"
            baseSpan={3}
            oyLabel="Sale Count"
            oxLabel="Day"
            labels={dailyMostPopularNFTCollection.collectionName.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
          <BarGraph
            hideLegend
            queryLink="653b78c3-38eb-4176-9de5-0e258f0c180d"
            modalInfo=""
            values={dailyMostValueNfTCollection.saleVolume}
            title="top 5 collection in each day based on sales volume"
            dataKey="date"
            baseSpan={3}
            oyLabel="Sale Volume (USD)"
            oxLabel="Day"
            labels={dailyMostValueNfTCollection.collectionName.map(
              (item: string, index: number) => ({
                key: item,
                color: colors[index % colors.length],
              })
            )}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Performance;
