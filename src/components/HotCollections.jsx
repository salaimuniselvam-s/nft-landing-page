import { CarouselFC } from './Carousel';
export const collectionTitle = ['Cat Nft', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'];

export const Collections = ({ img, title }) => {
  return (
    <div>
      <div className="w-full grid place-items-center max-w-sm bg-white border cursor-pointer border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg" src={img} alt={title} />
        <h5 className="text-xl py-3 font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      </div>
    </div>
  );
};

export const Title = ({ title }) => <h1 className="text-blue-900 pt-12 pb-6 font-bold text-3xl">{title}</h1>;

export const Wrapper = ({ children }) => {
  return <div className="flex flex-col justify-center items-center">{children}</div>;
};

const HotCollections = () => {
  return (
    <div>
      <Title title="Hot Collections" />
      <CarouselFC />
    </div>
  );
};
export default HotCollections;
