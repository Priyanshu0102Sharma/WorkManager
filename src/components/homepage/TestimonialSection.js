"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, ABC Inc.",
    message:
    "Working with Work Manager has been a game-changer for our team. Their strategic vision and excellent leadership skills have guided us through complex projects with ease.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Manager, XYZ Corp.",
    message:
    "Work Manager and their team delivered exceptional results on our project. They were not only professional but also very proactive in identifying potential issues and providing solutions.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
    "I've had the privilege of working alongside Work Manager for the past two years. Their dedication to our team's success is unmatched..",
  },
  {
    id: 4,
    name: "Emily Turner",
    designation: "Stake Holder",
    message:
    "Work Manager played a pivotal role in ensuring the success of our project. Their ability to manage resources, mitigate risks, and maintain clear communication with all stakeholders is commendable.",
  },
  {
    id: 5,
    name: "Michael Jordan",
    designation: "Sports Player",
    message:
      "Work Manager has a remarkable ability to keep everyone motivated and on track. I couldn't ask for a better manager!",
  },
 
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-800 py-10">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Testimonials
        </h2>
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">{testimonial.message}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
