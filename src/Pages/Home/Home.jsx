import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import LogoMarquee from "./LogoMarquee";
import MerchantSection from "./MerchantSection";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyChooseUs/>
            <Services/>
            <LogoMarquee/>
            <Feature/>
            <MerchantSection/>
            <Testimonial/>
            <FAQ/>
        </div>
    );
};

export default Home;