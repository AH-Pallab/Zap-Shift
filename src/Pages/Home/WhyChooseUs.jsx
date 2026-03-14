import {
  FaClock,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "Fast Delivery",
    description:
      "We ensure quick and reliable delivery across the country with real-time tracking support.",
    icon: <FaClock />,
  },
  {
    title: "Secure Handling",
    description:
      "Your parcels are handled with maximum care and safety throughout the delivery process.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Nationwide Coverage",
    description:
      "We operate in every district, ensuring your packages reach even the most remote areas.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "24/7 Support",
    description:
      "Our customer support team is available round the clock to assist you anytime.",
    icon: <FaHeadset />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">
          Why Choose Us
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-base-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-primary text-4xl mb-6">{item.icon}</div>

              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
