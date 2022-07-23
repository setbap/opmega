export interface IRawTransactionBotRate {
  date: string;
  bot_rate: number;
}

export interface ITransactionBotRate {
  Day: string;
  "Bot rate": number;
}

export interface IRawAVGTXInfo {
  avg_tx_per_min: number;
  avg_success_rate: number;
}

export interface IAVGTXInfo {
  "Average Tx per Minute": number;
  "Average Success rate": number;
}

export interface IRawTotalTXInfo {
  total_tx_count: number;
  total_unique_address: number;
}

export interface IRawTXDistribution {
  DIS: string;
  count: number;
}
export interface ITXDistribution {
  "TX # Range": string;
  count: number;
}

export interface IRawDailyInformation {
  date: string;
  tx_count: number;
  unique_address: number;
  tx_per_min: number;
  success_rate: number;
}
export interface IDailyInformation {
  Day: string;
  "TX Number": number;
  "Unique Address": number;
  "TX per Miunte": number;
  "Success Rate": number;
}

export interface IRawTXDistance {
  "avrage time betwwen two TX": number;
}

export interface IRawDappsSwapCount {
  DATE: string;
  NAME: string;
  "COUNT(*)": number;
}
