import Banner from "../../Components/Home/Banner";
import FeaturedProducts from "../../Components/Home/FeaturedProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="mt-14">
                <h2 className="text-center text-2xl font-bold">Featured Products</h2>
                <FeaturedProducts />
            </div>
        </div>
    );
};

export default Home;