import Tofu from "lib/pages/tofu";
import {
  getTofuNFTSalesChangeInfo,
  getTofuNFTSalesInfo,
} from "lib/requests/tofu";
export async function getStaticProps() {
  const nFTSalesInfo = await getTofuNFTSalesInfo();
  const tofuNFTSalesChangeInfo = await getTofuNFTSalesChangeInfo();
  return {
    props: { ...nFTSalesInfo, tofuNFTSalesChangeInfo },
    revalidate: 10 * 60,
  };
}
export default Tofu;
