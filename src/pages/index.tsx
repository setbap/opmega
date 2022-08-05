import Home from "lib/pages/home";
import {
  dailyTXInformation,
  getAVGTXInfo,
  getDailyNewWallet,
  getDappsSwapCount,
  getDistributionOfTXBetweenDapps,
  getMostPopularTypeOfDappsUsed,
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
    distributionOfTXBetweenDapps,
    mostPopularTypeOfDappsUsed,
    dailyNewWallet,
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
    getDistributionOfTXBetweenDapps(),
    getMostPopularTypeOfDappsUsed(),
    getDailyNewWallet(),
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
      distributionOfTXBetweenDapps,
      mostPopularTypeOfDappsUsed,
      dailyNewWallet,
      //
      dappsSwapCount,
    },
    revalidate: 10 * 60,
  };
}
export default Home;
