





// -----
export interface ITransactionFeeInDayOfWeek {
  "Day Name": string;
  "Day Number": number;
  Fee: number;
}

export interface IDailyCollectedFees {
  Day: string;
  Fees: number;
}

export interface ITransactionFeeInHour {
  Hour: number;
  Fee: number;
}