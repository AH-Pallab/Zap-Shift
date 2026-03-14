import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rasel Ahamed",
    title: "CTO",
    image: "https://i.pravatar.cc/100?img=1",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
  },
  {
    id: 2,
    name: "Awlad Hossin",
    title: "Senior Product Designer",
    image: "https://i.pravatar.cc/100?img=2",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders and spine.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    title: "CEO",
    image: "https://i.pravatar.cc/100?img=3",
    review: "Encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 4,
    name: "Tanvir Hasan",
    title: "Founder",
    image: "https://i.pravatar.cc/100?img=4",
    review:
      "Excellent courier service with accurate tracking and fast delivery.",
  },
  {
    id: 5,
    name: "Sadia Islam",
    title: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=5",
    review: "Very reliable delivery partner for my ecommerce business.",
  },
  {
    id: 6,
    name: "Mehedi Hasan",
    title: "Business Owner",
    image: "https://i.pravatar.cc/100?img=6",
    review: "Smooth experience and great support team.",
  },
  {
    id: 7,
    name: "Farzana Akter",
    title: "Digital Marketer",
    image: "https://i.pravatar.cc/100?img=7",
    review: "Professional parcel handling and on-time delivery.",
  },
  {
    id: 8,
    name: "Shakib Ahmed",
    title: "Logistics Manager",
    image: "https://i.pravatar.cc/100?img=8",
    review: "Nationwide coverage helped grow our business.",
  },
  {
    id: 9,
    name: "Samiul Haque",
    title: "Freelancer",
    image: "https://i.pravatar.cc/100?img=9",
    review: "Affordable pricing and dependable service.",
  },
  {
    id: 10,
    name: "Mariam Chowdhury",
    title: "Fashion Store Owner",
    image: "https://i.pravatar.cc/100?img=10",
    review: "Best courier partner for my online shop.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="py-24 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          centeredSlides
          loop
          slidesPerView={3}
          spaceBetween={30}
          watchSlidesProgress
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="testimonial-card bg-white rounded-3xl p-8 shadow-md h-[260px] flex flex-col justify-between">
                {/* Quote icon */}
                <FaQuoteLeft className="text-4xl text-[#a8d5d8]" />

                {/* Review text */}
                <p className="text-gray-600 leading-relaxed">{review.review}</p>

                {/* Dotted line */}
                <div className="border-t border-dashed border-teal-300"></div>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-lg text-[#03373D]">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{review.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + dots */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button className="prev-btn w-12 h-12 rounded-full bg-white hover:bg-lime-400 transition flex items-center justify-center shadow">
            <FaArrowLeft />
          </button>

          <div className="custom-pagination flex gap-3"></div>

          <button className="next-btn w-12 h-12 rounded-full bg-white hover:bg-lime-400 transition flex items-center justify-center shadow">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider animation styles */}
      <style>
        {`
        .swiper-slide {
          opacity: 0.35;
          transform: scale(0.9);
          transition: all 0.5s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #9cc9cc;
          opacity: 1;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background: #03373d;
        }
        `}
      </style>
    </div>
  );
};

export default TestimonialSlider;
