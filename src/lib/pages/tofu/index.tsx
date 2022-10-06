import { Box, SimpleGrid } from "@chakra-ui/react";
import BarGraph from "lib/components/charts/BarGraph";
import DonutChart from "lib/components/charts/DonutChart";
import ChartBox from "lib/components/charts/LineChart";
import { StatsCard } from "lib/components/charts/StateCard";
import names from "lib/utility/names";
import { NextSeo } from "next-seo";
import { INFTSaleChange, INFTSalesInfo } from "lib/types/types/nft";
import StackedAreaChart from "lib/components/charts/StackedAreaGraph";
import { ReturnDataType } from "lib/types/base";

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
  collections: string[];
  saleVolume: any[];
  queryLink: string;
  topBasedOnSaleCount: {
    nameKey: string;
    valueKey: number;
  }[];
  topBasedOnSaleVolume: {
    nameKey: string;
    valueKey: number;
  }[];
  coollectionSaleVolumeVSCount: any[];
  coollectionUniqueBuyersVSSellers: any[];
  totalInfo: INFTSalesInfo;
  salesvolumein$ETH: any[];
  salesCount: any[];
  tofuNFTSalesChangeInfo: ReturnDataType<INFTSaleChange>;
}

const Governance = ({
  collections,
  queryLink,
  saleVolume,
  topBasedOnSaleCount,
  topBasedOnSaleVolume,
  coollectionSaleVolumeVSCount,
  coollectionUniqueBuyersVSSellers,
  salesCount,
  totalInfo,
  salesvolumein$ETH,
  tofuNFTSalesChangeInfo,
}: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Tofu NFT marketplace`}
        description={`Track the latest stats and trends on ${names.BLOCKCHAIN}`}
        openGraph={{
          url: `https://${names.SITE_URL}/`,
          title: `Tofu NFT marketplace`,
          description: `Track the latest stats and trends on ${names.BLOCKCHAIN}`,
          images: [
            {
              url: `https://${names.SITE_URL}/og.png`,
              alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
            },
          ],
          site_name: `${names.APP_NAME}`,
        }}
        twitter={{
          handle: "@flipsidecrypto",
          cardType: "summary_large_image",
        }}
      />
      <Box mx={"auto"} px={{ base: 3, sm: 2, md: 8 }}>
        <SimpleGrid
          my={"6"}
          columns={{ base: 1, md: 2, lg: 2, "2xl": 3 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <StatsCard
            stat={totalInfo["Total Sales Count"]}
            title="Total Sales Count"
            status="unchanged"
            hasArrowIcon={false}
            link={tofuNFTSalesChangeInfo.key}
          />
          <StatsCard
            stat={totalInfo["Total Sales Volume"]}
            title="Total Sales Volume"
            status="unchanged"
            hasArrowIcon={false}
            link={tofuNFTSalesChangeInfo.key}
          />
          <StatsCard
            stat={totalInfo["Total Unique Buyers"]}
            title="Total Unique Buyerss"
            status="unchanged"
            hasArrowIcon={false}
            link={tofuNFTSalesChangeInfo.key}
          />

          <StatsCard
            stat={totalInfo["Total Unique Sellers"]}
            title="Total Unique Sellers"
            status="unchanged"
            change={undefined}
            hasArrowIcon={false}
            link={tofuNFTSalesChangeInfo.key}
          />
          <StatsCard
            hasArrowIcon={true}
            title={"Current Sales Count"}
            link={tofuNFTSalesChangeInfo.key}
            stat={tofuNFTSalesChangeInfo.data["Current Sales Count"]}
            change={tofuNFTSalesChangeInfo.data["change (%) Sales Count"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={"Current Sales Volume"}
            link={tofuNFTSalesChangeInfo.key}
            decimal={4}
            stat={tofuNFTSalesChangeInfo.data["Current Sales Volume"]}
            change={tofuNFTSalesChangeInfo.data["change (%) Sales Volume"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={"Current Unique Buyers"}
            link={tofuNFTSalesChangeInfo.key}
            stat={tofuNFTSalesChangeInfo.data["Current Unique Buyers"]}
            change={tofuNFTSalesChangeInfo.data["change (%) Unique Buyers"]}
            status={"inc"}
          />
          <StatsCard
            hasArrowIcon={true}
            title={"Current Unique Sellers"}
            link={tofuNFTSalesChangeInfo.key}
            stat={tofuNFTSalesChangeInfo.data["Current Unique Sellers"]}
            change={tofuNFTSalesChangeInfo.data["change (%) Unique Sellers"]}
            status={"inc"}
          />
        </SimpleGrid>
        <SimpleGrid
          position={"relative"}
          transition={"all 0.9s ease-in-out"}
          py={"6"}
          gap={4}
          zIndex={100}
          columns={{ sm: 1, md: 1, lg: 2, "2xl": 3 }}
          spacing={{ base: 1, md: 2, lg: 4 }}
        >
          <DonutChart
            data={topBasedOnSaleCount.slice(0, 10)}
            nameKey="NFT Collection"
            dataKey="Sales Count"
            title="Top 10 NFT collection based on count"
            baseSpan={1}
            modalInfo=""
          />
          <DonutChart
            data={topBasedOnSaleVolume.slice(0, 10)}
            nameKey="NFT Collection"
            dataKey="Sales Volume"
            title="Top 10 NFT collection based on volume"
            baseSpan={1}
            modalInfo=""
          />
          <BarGraph
            hideLegend
            queryLink={queryLink}
            extraInfoToTooltip=""
            modalInfo=""
            values={saleVolume}
            title="volume per NFT collection"
            dataKey="Name"
            oyLabel="Sales Volume"
            oxLabel="Day"
            baseSpan={3}
            labels={collections.map((item, i) => ({
              color: colors[i % colors.length],
              key: item,
            }))}
          />

          <BarGraph
            isSeprate
            isNotDate
            queryLink={queryLink}
            extraInfoToTooltip=""
            modalInfo=""
            values={coollectionSaleVolumeVSCount}
            title="volume of sales in $ETH and number of sales for each NFT collection"
            dataKey="NFT Collection"
            disclaimer="NFT Collection"
            baseSpan={3}
            labels={[
              {
                color: colors[1],
                key: "Sales Count",
              },
              {
                color: colors[2],
                key: "Sales Volume",
              },
            ]}
          />
          <ChartBox
            queryLink={queryLink}
            modelInfo=""
            data={salesCount}
            areaDataKey="Sales Count"
            oyLabel="Count"
            xAxisDataKey="Day"
            title="Sales count"
            baseSpan={3}
          />
          <BarGraph
            isSeprate
            queryLink={queryLink}
            extraInfoToTooltip=""
            modalInfo=""
            values={coollectionUniqueBuyersVSSellers}
            title="Unique buyers/sellers"
            dataKey="Day"
            oyLabel="Count"
            oxLabel=""
            baseSpan={3}
            labels={[
              {
                color: colors[1],
                key: "Unique Buyers",
              },
              {
                color: colors[2],
                key: "Unique Sellers",
              },
            ]}
          />

          <StackedAreaChart
            queryLink={queryLink}
            extraInfoToTooltip=""
            modalInfo=""
            values={salesvolumein$ETH}
            title="Sales volume in $ETH"
            dataKey="Day"
            oyLabel="Volume"
            oxLabel=""
            baseSpan={3}
            labels={[
              {
                color: colors[1],
                key: "Sales Volume",
              },
              {
                color: colors[2],
                key: "AVG Sales Volume",
              },
            ]}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Governance;
