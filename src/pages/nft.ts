import NFT from "lib/pages/nft";
import {
  getDailyMostPopularNFTCollection,
  getDailyMostValueNfTCollection,
  getNFTDailyUniqueSalerAndBuyerCount,
  getSaleCountAndVolume,
  getTop10NFTCollectionBaseSellCount,
  getTop10NFTCollectionBaseSellVolume,
  getTotalSaleCountAndVolume,
} from "lib/requests/nft";
export async function getStaticProps() {
  const [
    // static

    // simple
    nFTDailyUniqueSalerAndBuyerCount,
    saleCountAndVolume,
    top10NFTCollectionBaseSellCount,
    top10NFTCollectionBaseSellVolume,
    // seorate
    totalSaleCountAndVolume,
    dailyMostPopularNFTCollection,
    dailyMostValueNfTCollection,
  ] = await Promise.all([
    // static
    // simple
    getNFTDailyUniqueSalerAndBuyerCount(),
    getSaleCountAndVolume(),
    getTop10NFTCollectionBaseSellCount(),
    getTop10NFTCollectionBaseSellVolume(),
    // seorate
    getTotalSaleCountAndVolume(),
    getDailyMostPopularNFTCollection(),
    getDailyMostValueNfTCollection(),
  ]);
  return {
    props: {
      // static
      // nft
      nFTDailyUniqueSalerAndBuyerCount,
      saleCountAndVolume,
      top10NFTCollectionBaseSellCount,
      top10NFTCollectionBaseSellVolume,

      // seorate
      totalSaleCountAndVolume,
      dailyMostPopularNFTCollection,
      dailyMostValueNfTCollection,
    },
    revalidate: 10 * 60,
  };
}
export default NFT;
