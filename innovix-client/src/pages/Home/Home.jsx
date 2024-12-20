import Banner from "../../components/Home/Banner";
import ContactInfo from "../../components/Home/ContactInfo";
import FAQ from "../../components/Home/FAQ";
import FeaturedProduct from "../../components/Home/FeaturedProduct";
import Reviews from "../../components/Home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-lg mx-auto">
        <div className="my-16">
          <h2 className="title text-3xl font-bold text-wrap text-center mb-10 text-[#00BFFF]">
            Featured Products
          </h2>
          <FeaturedProduct></FeaturedProduct>
        </div>
        <div className="my-16">
          <h2 className="title text-3xl font-bold text-wrap text-center mb-10 text-[#1E90FF] ">
            Words from Happy Customers
          </h2>
          <Reviews></Reviews>
        </div>
        <div className="my-16">
          <h2 className="title text-3xl font-bold text-wrap text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQ></FAQ>
        </div>
        <div className="my-16">
          <h2 className="title text-3xl font-bold text-wrap text-center mb-10">
            Contact Info
          </h2>
          <ContactInfo></ContactInfo>
        </div>
      </div>
    </div>
  );
};

export default Home;
