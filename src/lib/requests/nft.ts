import {
  IDailyMostPopularNFTCollectionBaseOnSellCount,
  IDailyMostValueNfTCollection,
  INFTDailyUniqueSalerAndBuyerCount,
  INFTTotalSaleCountAndVolume,
  IRawNFTSaleCountAndVolume,
  ITop10NFTCollectionBaseSellCount,
  ITop10NFTCollectionBaseSellVolume,
} from "lib/types/types/nft";
import moment from "moment";

export const getTotalSaleCountAndVolume = async (): Promise<
  INFTTotalSaleCountAndVolume[]
> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/4ff5074f-ffb6-4b34-a4d8-0c46c2aa0130/data/latest"
  );
  const data: INFTTotalSaleCountAndVolume[] = await res.json();
  return data;
};

export const getNFTDailyUniqueSalerAndBuyerCount = async (): Promise<
  INFTDailyUniqueSalerAndBuyerCount[]
> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/d2ddb049-b461-4be8-80cf-640b333fbc02/data/latest"
  );
  const data: INFTDailyUniqueSalerAndBuyerCount[] = await res.json();
  return data;
};

export const getTop10NFTCollectionBaseSellCount = async (): Promise<
  ITop10NFTCollectionBaseSellCount[]
> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/20f3ae27-b449-44c0-97fc-b8449bc65338/data/latest"
  );
  const data: ITop10NFTCollectionBaseSellCount[] = await res.json();
  return data;
};

export const getTop10NFTCollectionBaseSellVolume = async (): Promise<
  ITop10NFTCollectionBaseSellVolume[]
> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/3c9f9fb5-191d-498b-8a6f-7205aec64405/data/latest"
  );
  const data: ITop10NFTCollectionBaseSellVolume[] = await res.json();
  return data;
};

export const getSaleCountAndVolume: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/c1cb47cf-de40-40b7-a45b-654b247130f5/data/latest"
  );
  const fetchedData: IRawNFTSaleCountAndVolume[] = await res.json();
  const currencyName = Array.from(
    new Set(
      fetchedData.map((item) => {
        return item["CURRENCY"];
      })
    )
  );
  const saleCount = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    fetchedData,
    "DATE",
    "CURRENCY",
    "SALES_COUNT",
    currencyName,
    0
  );

  const saleVolume = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    fetchedData,
    "DATE",
    "CURRENCY",
    "VOLUME_IN_USD",
    currencyName,
    0
  );
  return {
    saleCount,
    saleVolume,
    currencyName,
  };
};

export const getDailyMostPopularNFTCollection: () => Promise<any> =
  async () => {
    const res = await fetch(
      "https://node-api.flipsidecrypto.com/api/v2/queries/fc1b504c-180d-4f6f-90d8-051808f7fe70/data/latest"
    );
    const fetchedData: IDailyMostPopularNFTCollectionBaseOnSellCount[] =
      await res.json();
    const collectionName = Array.from(
      new Set(
        fetchedData.map((item) => {
          return item["COLLECTION"];
        })
      )
    );
    const saleCount = calculateDailyBridgeValue(
      "MM/DD/YYYY",
      fetchedData,
      "DATE",
      "COLLECTION",
      "SALES_COUNT",
      collectionName,
      0
    );

    return {
      saleCount,
      collectionName,
    };
  };

export const getDailyMostValueNfTCollection: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/653b78c3-38eb-4176-9de5-0e258f0c180d/data/latest"
  );
  const fetchedData: IDailyMostValueNfTCollection[] = await res.json();
  const collectionName = Array.from(
    new Set(
      fetchedData.map((item) => {
        return item["COLLECTION"];
      })
    )
  );
  const saleVolume = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    fetchedData,
    "DATE",
    "COLLECTION",
    "SALES_VOLUME",
    collectionName,
    0
  );

  return {
    saleVolume,
    collectionName,
  };
};

function calculateDailyBridgeValue(
  dateFormat: string,
  USTBridgeValue: any[],
  dateKey: string,
  nameKey: string,
  valueKey: string,
  bridges: string[],
  minValue: number = 0
) {
  const dailyEachBridgeSum: { [key: string]: { [key: string]: number } } = {};
  USTBridgeValue.forEach((item) => {
    const date = moment(item[dateKey]).format(dateFormat);
    if (!Boolean(item[valueKey]) || item[valueKey] < minValue) {
    } else if (dailyEachBridgeSum[date] === undefined) {
      dailyEachBridgeSum[date] = {};
      dailyEachBridgeSum[date][item[nameKey]] = item[valueKey];
    } else if (dailyEachBridgeSum[date][item[nameKey]] === undefined) {
      dailyEachBridgeSum[date][item[nameKey]] = item[valueKey];
    } else {
      dailyEachBridgeSum[date][item[nameKey]] += item[valueKey];
    }
  });
  const dailyBridgeValue = Object.entries(dailyEachBridgeSum)
    .map((bc) => {
      const finalObject = { date: bc[0] };
      bridges.forEach((bridge) => {
        if (bc[1][bridge]) {
          // @ts-ignore
          finalObject[bridge] = bc[1][bridge];
        }
      });
      return finalObject;
    })
    .sort((a, b) => {
      return moment(a.date).isAfter(moment(b.date)) ? 1 : -1;
    });
  return dailyBridgeValue;
}
