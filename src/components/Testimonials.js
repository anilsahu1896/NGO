import React from 'react';

// Import images (replace with your actual image paths)
import person1 from '../assets/images/Person1.jpeg';
import person2 from '../assets/images/person2.jpg';
import person3 from '../assets/images/person3.jpg';
import person4 from '../assets/images/person4.jpg';
import person5 from '../assets/images/person5.jpg';
import person6 from '../assets/images/person6.jpg';


const testimonialsData = [
  {
    quote: "I am so grateful to this NGO for helping me to get back on my feet. When I lost my job, I didn't know how I was going to feed my family. But thanks to their support, I was able to get back into the workforce and provide for my loved ones.",
    author: "John Smith",
    role: "Beneficiary",
    image: person1,
  },
  {
    quote: "I have been volunteering with this NGO for over a year now and it has been one of the most rewarding experiences of my life. I have met so many amazing people and I have seen firsthand the impact that this organization has on the community.",
    author: "Jane Doe",
    role: "Volunteer",
    image: person2,
  },
  {
    quote: "As a partner of this NGO, I have been consistently impressed by their dedication and commitment to making a difference. They are a true asset to the community and I am proud to support their work.",
    author: "Dr. David Lee",
    role: "Partner",
    image: person3,
  },
  {
    quote: "This NGO is a lifeline for so many people in our community. They provide essential services and support that help people to overcome challenges and build a better future.",
    author: "Maria Rodriguez",
    role: "Beneficiary",
    image: person4,
  },
  {
    quote: "I am so inspired by the work that this NGO does. They are making a real difference in the world and I am honored to be a part of their team.",
    author: "Michael Brown",
    role: "Volunteer",
    image: person5,
  },
  {
    quote: "This NGO is a true leader in the field of community development. They are innovative, effective, and compassionate. I am proud to partner with them to create positive change.",
    author: "Sarah Jones",
    role: "Partner",
    image: person6,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                className="w-24 h-24 rounded-full object-cover mb-4"
                src={testimonial.image}
                alt={testimonial.author}
              />
              <div className="text-center">
                <p className="text-lg italic text-gray-700 mb-2">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-base font-medium text-gray-900">
                  - {testimonial.author}, {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;