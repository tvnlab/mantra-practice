import Banner from "./components/Banner";
import NFt3 from "assets/img/nfts/Nft3.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import TopicCard from "components/card/TopicCard";
import trendingTopicData from "./variables/trendingTopicData";

const MyHomes = () => {
  return (
    <div className="col-span-1 mt-3 h-fit w-full xl:col-span-1 2xl:col-span-2">
      {/* Discover Banner */}
      <Banner />

      {/* NFt Header */}
      <h4 className="my-4 ml-1 text-2xl font-bold text-navy-700 dark:text-white">
        Popular Topics
      </h4>

      {/* NFTs trending card */}
      <div className="z-20 flex flex-wrap gap-5">
        {trendingTopicData.map((item) => (
          <TopicCard
            key={item.id}
            bidders={[avatar1, avatar2, avatar3]}
            title={item.title}
            author={item.author}
            price={item.memberCount}
            image={NFt3}
          />
        ))}
      </div>

      {/* NFt Header */}
      <h4 className="my-4 ml-1 text-2xl font-bold text-navy-700 dark:text-white">
        Trending Topics
      </h4>

      {/* NFTs trending card */}
      <div className="z-20 flex flex-wrap gap-5">
        {trendingTopicData.map((item) => (
          <TopicCard
            key={item.id}
            bidders={[avatar1, avatar2, avatar3]}
            title={item.title}
            author={item.author}
            price={item.memberCount}
            image={NFt3}
          />
        ))}
      </div>
    </div>
  );
};

export default MyHomes;
