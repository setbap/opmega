export interface IRawNFTSaleCountAndVolume {
  DATE: string;
  CURRENCY: string;
  VOLUME_IN_USD: number;
  SALES_COUNT: number;
}

export interface INFTTotalSaleCountAndVolume {
  "Volume in USD": number;
  "Sales Count": number;
  Currency: string;
}

export interface INFTDailyUniqueSalerAndBuyerCount {
  Day: string;
  "Unique Seller": number;
  "Cumulative Unique Seller": number;
  "Unique Buyer": number;
  "Cumulative Unique Buyer": number;
}

export interface IDailyMostPopularNFTCollectionBaseOnSellCount {
  DATE: string;
  NFT_ADDRESS: string;
  COLLECTION: string;
  SALES_COUNT: number;
  AMOUNT_RANK: number;
  COLLECTON_CATEGORY: string;
}

export interface ITop10NFTCollectionBaseSellCount {
  "Collection Name": string;
  "Sales Count": string;
}

export interface IDailyMostValueNfTCollection {
  DATE: string;
  COLLECTION: string;
  SALES_VOLUME: number;
}

export interface ITop10NFTCollectionBaseSellVolume {
  "Collection Name": string;
  "Sales Volume": string;
}
