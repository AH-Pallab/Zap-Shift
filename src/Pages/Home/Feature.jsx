import trackingImg from "../../assets/live-tracking.png";
import safeImg from "../../assets/safe-delivery.png";
import supportImg from "../../assets/safe-delivery.png";

const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: trackingImg,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: safeImg,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: supportImg,
  },
];

const Feature = () => {
  return (
    <div className="pb-20 ">
      <div data-aos="zoom-in-right" className="max-w-7xl  mx-auto px-4 lg:px-20">
        {features.map((item) => (
          <div
          
            key={item.id}
            className="grid md:grid-cols-[auto_1fr] gap-10 items-center mb-8 bg-white rounded-xl"
            
          >
            {/* Left Image (Natural Width) */}
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-auto max-w-[200px] p-8"
              />
            </div>

            {/* Right Side Card */}
            <div className="relative card">
              {/* Vertical Dashed Line */}
              <div className="hidden md:block absolute left-0 top-0 h-full border-l-2 border-dashed border-black-8"></div>
              <div className="">
                <div className="card-body">
                  <h3 className="card-title text-xl">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
