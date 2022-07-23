import Home from "lib/pages/home";
import {
  dailyTXInformation,
  getAVGTXInfo,
  getDappsSwapCount,
  getTimeBetweenTwoTXInfo,
  getTotalTXInfo,
  transactionBotRate,
  transactionDistribution,
} from "lib/requests/home";
export async function getStaticProps() {
  const [
    transactionBotRateData,
    transactionDistributionData,
    dailyTXInformationData,
    avgTxInfo,
    totalTXInfo,
    timeBetweenTwoTXInfo,
    dappsSwapCount,
  ] = await Promise.all([
    // static
    transactionBotRate(),
    transactionDistribution(),
    dailyTXInformation(),
    // simple
    getAVGTXInfo(),
    getTotalTXInfo(),
    getTimeBetweenTwoTXInfo(),
    // seorate
    getDappsSwapCount(),
  ]);
  return {
    props: {
      //
      transactionBotRateData,
      transactionDistributionData,
      dailyTXInformationData,
      //
      avgTxInfo,
      totalTXInfo,
      timeBetweenTwoTXInfo,
      //
      dappsSwapCount,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
