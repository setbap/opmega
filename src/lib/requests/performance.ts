import {
  IDailyBlockAge,
  ITotalPerformance,
  ITXinSecondPerformance,
} from "lib/types/types/performance";
import moment from "moment";

export const getBlockPerformanceTotalInfo =
  async (): Promise<ITotalPerformance> => {
    const res = await fetch(
      "https://node-api.flipsidecrypto.com/api/v2/queries/23c6e050-6817-496e-953b-1ebdbf5a9248/data/latest"
    );
    const data: ITotalPerformance = (await res.json())[0];
    return data;
  };

export const getDailyBlockAge: () => Promise<IDailyBlockAge[]> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/dcfcfa07-8c49-4958-8d35-209e58ff1ef9/data/latest"
  );
  const fetchedData: IDailyBlockAge[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};

export const getTPSPerformance: () => Promise<
  ITXinSecondPerformance[]
> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/6db7b9fa-3b24-45c4-b441-47f5f2547ae6/data/latest"
  );
  const fetchedData: ITXinSecondPerformance[] = await res.json();
  return fetchedData.sort((a, b) =>
    moment(a.Day).isAfter(moment(b.Day)) ? 1 : -1
  );
};
