import Performance from "lib/pages/performance";
import {} from "lib/requests/fee";
import {
  getBlockPerformanceTotalInfo,
  getDailyBlockAge,
  getTPSPerformance,
} from "lib/requests/performance";
export async function getStaticProps() {
  const [
    // static
    blockPerformanceTotalInfo,
    // simple
    dailyBlockAge,
    TPSPerformance,
    // seorate
  ] = await Promise.all([
    // static
    getBlockPerformanceTotalInfo(),
    // simple
    getDailyBlockAge(),
    getTPSPerformance(),
    // seorate
  ]);
  return {
    props: {
      // static
      blockPerformanceTotalInfo,
      // simple
      dailyBlockAge,
      TPSPerformance,
      // seorate
    },
    revalidate: 10 * 60,
  };
}
export default Performance;
