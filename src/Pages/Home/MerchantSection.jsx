import bgImage from "../../assets/be-a-merchant-bg.png";
import rightImage from "../../assets/location-merchant.png"; 

const MerchantSection = () => {
  return (
    <div
      className="py-20 mx-20 rounded-xl bg-[#03373D] bg-no-repeat bg-top-left mb-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white col-span-2">
            <h2 className="text-xl md:text-2xl font-bold leading-snug mb-6">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>

            <p className="text-black-4 text-sm mb-8 leading-relaxed">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn bg-primary border-none text-blue-10 hover:bg-primary-focus">
                Become a Merchant
              </button>

              <button className="btn btn-outline text-primary border-white hover:bg-white hover:text-[#03373D]">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img src={rightImage} alt="Merchant" className="max-w-sm w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
