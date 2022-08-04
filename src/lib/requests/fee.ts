import {
  IDailyCollectedFees,
  ITransactionFeeInDayOfWeek,
  ITransactionFeeInHour,
} from "lib/types/types/fees";
import moment from "moment";

export const getTransactionFeeInDayOfWeek: () => Promise<
  ITransactionFeeInDayOfWeek[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/0bdf89e5-33c2-4653-859b-c126c2e5c87e/data/latest"
  );
  const fetchedData: ITransactionFeeInDayOfWeek[] = await res.json();
  return fetchedData.sort((a, b) =>
    a["Day Number"] > b["Day Number"]
      ? 1
      : a["Day Number"] < b["Day Number"]
      ? -1
      : 0
  );
};

export const getDailyAverageTransactionCost: () => Promise<
  IDailyCollectedFees[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/91e59759-4008-4676-ba2e-288d38b3ebe3/data/latest"
  );
  const fetchedData: IDailyCollectedFees[] = await res.json();
  return fetchedData;
};

export const getTransactionFeeInHour: () => Promise<
  ITransactionFeeInHour[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/e424a548-c863-4afb-a4e0-04ed6fbfedc5/data/latest"
  );
  const fetchedData: ITransactionFeeInHour[] = await res.json();
  return fetchedData.sort((a, b) =>
    a.Hour > b.Hour ? 1 : a.Hour < b.Hour ? -1 : 0
  );
};

export const getDailyCollectedFees: () => Promise<
  IDailyCollectedFees[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/4b54e417-2e97-4d62-adab-d0a7db68146e/data/latest"
  );
  const fetchedData: IDailyCollectedFees[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};
