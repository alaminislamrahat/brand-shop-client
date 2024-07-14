import Banner from "../Components/Banner/Banner";
import BannerSecond from "../Components/Banner/BannerSecond";
import Categories from "../Components/Category/Categories";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Categories></Categories>
          <BannerSecond></BannerSecond>
        </div>
    );
};

export default Home;