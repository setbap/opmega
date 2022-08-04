import {
  IRawAVGTXInfo,
  IRawTransactionBotRate,
  IAVGTXInfo,
  ITransactionBotRate,
  IRawTotalTXInfo,
  ITXDistribution,
  IRawTXDistribution,
  IRawDailyInformation,
  IDailyInformation,
  IRawTXDistance,
  IRawDappsSwapCount,
} from "lib/types/types/home";
import moment from "moment";

export const getAVGTXInfo = async (): Promise<IAVGTXInfo> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/4269e790-3142-496c-a8e7-aea2397336c9/data/latest"
  );
  const data: IRawAVGTXInfo = (await res.json())[0];
  return {
    "Average Success rate": data.avg_success_rate,
    "Average Tx per Minute": data.avg_tx_per_min,
  };
};
export const getTotalTXInfo = async (): Promise<IRawTotalTXInfo> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/fab5c6ac-9824-48bd-addc-1ae9f8de1962/data/latest"
  );
  const data: IRawTotalTXInfo = (await res.json())[0];
  return data;
};
export const getTimeBetweenTwoTXInfo = async (): Promise<IRawTXDistance> => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/5bb5762b-6ec4-4c7f-8304-0c2d50622465/data/latest"
  );
  const data: IRawTXDistance = (await res.json())[0];
  return data;
};

export const transactionBotRate: () => Promise<
  ITransactionBotRate[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/81eb5605-531d-4111-bd71-d7187c6d5687/data/latest"
  );
  const fetchedData: IRawTransactionBotRate[] = await res.json();
  return fetchedData
    .sort((a, b) => (moment(a.date).isAfter(moment(b.date)) ? 1 : -1))
    .map<ITransactionBotRate>((txCount) => ({
      Day: txCount.date,
      "Bot rate": txCount.bot_rate,
    }));
};

export const transactionDistribution: () => Promise<
  ITXDistribution[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/c9226b84-3ca7-4da2-ab29-91dc9e438ca4/data/latest"
  );
  const fetchedData: IRawTXDistribution[] = await res.json();
  return fetchedData.map<ITXDistribution>((txCount) => ({
    "TX # Range": txCount.DIS,
    count: txCount.count,
  }));
};

export const dailyTXInformation: () => Promise<
  IDailyInformation[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/4b25478f-c64c-4ac8-9e42-cc5ed0660290/data/latest"
  );
  const fetchedData: IRawDailyInformation[] = await res.json();
  return fetchedData
    .sort((a, b) => (moment(a.date).isAfter(moment(b.date)) ? 1 : -1))
    .map<IDailyInformation>((txCount) => ({
      Day: txCount.date,
      "Success Rate": txCount.success_rate,
      "TX Number": txCount.tx_count,
      "TX per Miunte": txCount.tx_per_min,
      "Unique Address": txCount.unique_address,
    }));
};
export const getDappsSwapCount: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/5a47aece-0336-4822-bead-e41b5b8a0118/data/latest"
  );
  const fetchedData: IRawDappsSwapCount[] = await res.json();
  const dappsName = Array.from(
    new Set(
      fetchedData.map((item) => {
        return item["NAME"];
      })
    )
  );
  const dappsSwapCount = calculateDailyBridgeValue(
    "MM/DD/YYYY",
    fetchedData,
    "DATE",
    "NAME",
    "COUNT(DISTINCT TX_HASH)",
    dappsName,
    0
  );
  return {
    dappsSwapCount,
    dappsName,
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
