import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import HotCollections from "./components/HotCollections";
import LiveAuctions from "./components/LiveAuctions";
import RecentylAdded from "./components/RecentlyAdded";
import TopCreators from "./components/TopCreators";

const App = () => {
  return (
    <div className="cover">
      <div className="w-screen max-w-1600 mx-auto min-h-screen flex flex-col bg-primary">
        <Header />
        <main className="mt-14  md:mt-20 px-4 md:px-16 py-4 w-full">
          <Home />
          <HotCollections />
          <TopCreators />
          <LiveAuctions />
          <RecentylAdded />
        </main>
      </div>
      <div className="bg-gray-100  border-t-1 border-gray-200 ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
