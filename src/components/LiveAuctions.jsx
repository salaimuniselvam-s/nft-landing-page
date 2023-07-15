import liveauctions from '../assets/liveauctions.png';
import { AiFillHeart } from 'react-icons/ai';
import { Title, Wrapper } from './HotCollections';
import moment from 'moment';
import { useEffect, useState } from 'react';

export const liveAuctionsTitle = ['Women NFT', 'Women NFT', 'Women NFT', 'Women NFT'];

const StarRating = () => {
  return (
    <div className="flex items-center space-x-1">
      <svg
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        className="w-4 h-4 text-gray-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
};

export const LiveAuctionsCard = ({ img, title, isRecent }) => {
  const [time, setTime] = useState('11:24:00');

  useEffect(() => {
    const setTimes = () => {
      let times = moment().format('LTS');
      setTime(times.substring(0, times.length - 2));
    };
    setInterval(() => {
      setTimes();
    }, 1000);
    return () => clearInterval(setTimes, 1000);
  }, []);
  console.log(time.split(':'));
  return (
    <div className="max-w-350 cursor-pointer relative rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <img className="rounded-t-lg" src={img} alt={title} />
      {!isRecent && (
        <div className="absolute top-3 right-5 z-40 text-white font-semibold">
          <span className="bg-sky-700 rounded-sm p-1">{time.split(':')[0]}</span>:{' '}
          <span className="bg-sky-700 rounded-sm  p-1">{time.split(':')[1]}</span> :{' '}
          <span className="bg-sky-700 rounded-sm p-1">{time.split(':')[2]}</span>
        </div>
      )}
      <div className="pt-6 px-6">
        <div className="flex items-center justify-between">
          <h5 className="mb-2 text-blue-900 text-xl font-medium leading-tight ">
            {title} <span className="ml-2">#325</span>
          </h5>
          {isRecent && <StarRating />}
        </div>
        <div className="flex justify-between">
          <h3> Highesh bid</h3>
          <h3>15,000 BUSD</h3>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex justify-between items-center space-x-2">
            <div className="flex py-3 mb-5 -space-x-4">
              <img className="w-8 h-8 border-2 border-white rounded-full" src={liveauctions} alt="" />
              <img className="w-8 h-8 border-2 border-white rounded-full" src={liveauctions} alt="" />
            </div>
            <div>
              <div>@robert03</div>
              <div className="text-sm text-gray-500 ">by lorem ipsum</div>
            </div>
          </div>
          <div className="text-gray-600 flex items-center gap-2">
            {' '}
            <AiFillHeart /> <span>246</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveAuctions = () => {
  return (
    <Wrapper>
      <Title title="Live Auctions" />
      <div className="grid-1 grid md:grid-cols-2 place-items-center lg:grid-cols-4 gap-6">
        {liveAuctionsTitle.map((title, index) => (
          <LiveAuctionsCard img={liveauctions} title={title} key={index} />
        ))}
      </div>{' '}
    </Wrapper>
  );
};
export default LiveAuctions;
