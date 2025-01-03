import Banner from "../Components/Banner/Banner";
import BannerSecond from "../Components/Banner/BannerSecond";
import Categories from "../Components/Category/Categories";
import BrandBanner from "../Components/Banner/BrandBanner"

const Home = () => {
    return (
        <div>
           <BrandBanner/>
           <Categories></Categories>
          <BannerSecond></BannerSecond>
        </div>
    );
};

export default Home;