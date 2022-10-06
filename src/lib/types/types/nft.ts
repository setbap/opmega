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

export interface INFTSalesInfo {
  Day: string;
  "NFT Collection": string;
  "Sales Volume": number;
  "Total Sales Volume": number;
  "AVG Sales Volume": number;
  "Unique Sellers": number;
  "Unique Buyers": number;
  "Total Unique Sellers": number;
  "Total Unique Buyers": number;
  "Sales Count": number;
  "Total Sales Count": number;
}

export interface INFTSaleChange {
  "Current Sales Volume": number;
  "Current Unique Sellers": number;
  "Current Unique Buyers": number;
  "Current Sales Count": number;
  "Previous Sales Volume": number;
  "Previous Unique Sellers": number;
  "Previous Unique Buyers": number;
  "Previous Sales Count": number;
  "change (%) Sales Volume": number;
  "change (%) Unique Sellers": number;
  "change (%) Unique Buyers": number;
  "change (%) Sales Count": number;
}
