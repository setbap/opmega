import Quix from "lib/pages/quix";
import {
  getQuixNFTSalesInfo,
  getQuixNFTSalesChangeInfo,
  getTotalSaleCountAndVolume,
} from "lib/requests";
export async function getStaticProps() {
  const nFTSalesInfo = await getQuixNFTSalesInfo();
  const quixNFTSalesChangeInfo = await getQuixNFTSalesChangeInfo();
  const totalSaleCountAndVolume = await getTotalSaleCountAndVolume();
  return {
    props: { ...nFTSalesInfo, quixNFTSalesChangeInfo, totalSaleCountAndVolume },
    revalidate: 10 * 60,
  };
}
export default Quix;
