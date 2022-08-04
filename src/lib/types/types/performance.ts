export interface IDailyBlockPerformance {
  Day: string;
  "Min Block Time": number;
  "Max Block Time": number;
  "Average Block Time": number;
  "Daily Block Age": number;
}

export interface ITXinBlockPerformance {
  Day: string;
  "TX per Block": number;
  "Average TX in Block": number;
}

export interface ITXinSecondPerformance {
  Day: string;
  TPS: number;
  "Average TPS": number;
}

export interface ITotalPerformance {
  "Min Block Time": number;
  "Max Block Time": number;
  "Average Block Time": number;
  "Min TX count per block": number;
  "Max TX count per block": number;
  "Average TX count per block": number;
}
