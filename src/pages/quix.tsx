import Quix from "lib/pages/quix";
import {
  getQuixNFTSalesInfo,
  getQuixNFTSalesChangeInfo,
} from "lib/requests/quix";
export async function getStaticProps() {
  const nFTSalesInfo = await getQuixNFTSalesInfo();
  const quixNFTSalesChangeInfo = await getQuixNFTSalesChangeInfo();
  return {
    props: { ...nFTSalesInfo, quixNFTSalesChangeInfo },
    revalidate: 10 * 60,
  };
}
export default Quix;
