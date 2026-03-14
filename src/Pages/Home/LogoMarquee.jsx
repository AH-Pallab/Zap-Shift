import Marquee from "react-fast-marquee";

import logo1 from "../../assets/brands/amazon.png";
import logo2 from "../../assets/brands/amazon_vector.png";
import logo3 from "../../assets/brands/casio.png";
import logo4 from "../../assets/brands/moonstar.png";
import logo5 from "../../assets/brands/randstad.png";
import logo6 from "../../assets/brands/star.png";
import logo7 from "../../assets/brands/start_people.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogoMarquee = () => {
  return (
    <div className="py-20">
      <div className=" mx-auto px-4 lg:px-20">
        <h2 className="md:text-3xl text-xl font-bold text-center mb-5">
          We've helped thousands of sales teams
        </h2>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          direction="left" // change to "right" if needed
        >
          {logos.map((logo, index) => (
            <div key={index} className="p-5 flex items-center justify-center">
              <img
                src={logo}
                alt="partner logo"
                className="lg:h-10 h-5 md:h-8 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-full mt-20 border-t-2 border-dashed border-gray-400 my-6"></div>
    </div>
  );
};

export default LogoMarquee;
