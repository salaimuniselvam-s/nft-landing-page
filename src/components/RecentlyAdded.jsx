import { Title, Wrapper } from './HotCollections';
import { LiveAuctionsCard, liveAuctionsTitle } from './LiveAuctions';
import liveauctions from '../assets/liveauctions.png';
import { CustomButton } from './Button';

const recently = ['Women NFT', 'Women NFT', 'Women NFT', 'Women NFT'];

const RecentylAdded = () => {
  return (
    <Wrapper>
      <Title title="Recently Added NFTs" />
      <div className="grid-1 grid md:grid-cols-2 place-items-center lg:grid-cols-4 gap-6">
        {[...liveAuctionsTitle, ...recently].map((title, index) => (
          <LiveAuctionsCard img={liveauctions} title={title} key={index} isRecent={true} />
        ))}
      </div>{' '}
      <div className="mt-8 mb-6">
        <CustomButton />
      </div>{' '}
    </Wrapper>
  );
};

export default RecentylAdded;
