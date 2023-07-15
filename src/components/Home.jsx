import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center gap-12 py-6">
      <div className="py-6 px-2 text-4xl md:text-8xl font-bold">
        <h1 className="text-blue-900 drop-shadow-2xl">Discover</h1>
        <h3>Digital art &</h3>
        <h3>Collect NFTs</h3>
        <h6 className="text-lg font-semibold">
          EdaFace is a user interface aggregator that brings all the various functionalites of the crypto Industry onto
          a single platform! EdaFace is a user interface aggregator that brings all the various functionalities of the
          crypto industry onto a single platform!
        </h6>
      </div>
      <div className="max-w-md w-full h-420 items-start bg-white border border-gray-200 rounded-lg shadow-2xl">
        <img className="w-full h-80 rounded-t-lg" src={banner} alt="home-page-banner" />
        <div className="px-5 py-3 flex items-center gap-2">
          <img className="w-12 h-12  p-1 rounded-full  " src={banner} alt="Bordered avatar" />
          <div>
            <h3 className="text-blue-900 font-bold text-xl">Blue Studios NFT</h3>
            <h6>by lorem ipsum</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
