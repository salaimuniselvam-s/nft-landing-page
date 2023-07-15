import { Title, Wrapper } from './HotCollections';
import hotcollectionthree from '../assets/hotcollectionthree.png';

const TopCreatorsCard = ({ img, title, items }) => {
  return (
    <div className=" flex flex-wrap  lg:justify-center cursor-pointer bg-blue-100 items-center  border border-gray-200 rounded-lg shadow">
      <img className=" w-24 rounded-t-lg" src={img} alt={title} />
      <div className="pl-4 pr-12 py-3 text-center xl:text-start">
        <h5 className="text-xl  font-semibold tracking-tight">{title}</h5>{' '}
        <h6 className="text-blue-700 pt-1">{items}</h6>
      </div>
    </div>
  );
};
const TopCreators = () => {
  return (
    <Wrapper>
      <Title title="Top Creators" />
      <div className="grid-1 grid md:grid-cols-2 place-items-center lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((creators) => (
          <TopCreatorsCard img={hotcollectionthree} title="lenin quies" items="176 items" key={creators} />
        ))}
      </div>
    </Wrapper>
  );
};

export default TopCreators;
