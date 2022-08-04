import Fees from "lib/pages/fee";
import {
  getDailyCollectedFees,
  getDailyAverageTransactionCost,
  getTransactionFeeInDayOfWeek,
  getTransactionFeeInHour,
} from "lib/requests/fee";
export async function getStaticProps() {
  const [
    // static

    // simple
    dailyCollectedFees,
    transactionFeeInHour,
    dailyAverageTransactionCost,
    transactionFeeInDayOfWeek,
    // seorate
  ] = await Promise.all([
    // static

    // simple
    getDailyCollectedFees(),
    getTransactionFeeInHour(),
    getDailyAverageTransactionCost(),
    getTransactionFeeInDayOfWeek(),
    // seorate
  ]);
  return {
    props: {
      // static

      // simple
      dailyCollectedFees,
      transactionFeeInHour,
      dailyAverageTransactionCost,
      transactionFeeInDayOfWeek,
      // seorate
    },
    revalidate: 10 * 60,
  };
}
export default Fees;
