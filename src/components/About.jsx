import React from 'react';
import AboutImage from '../assets/slider2.png';

function About() {
  return (
    <section id='about' className="bg-[#FFF6E6] py-16 px-4 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5C2671] mb-6">About Minaz Tasty Foods</h2>
          
          <p className="text-gray-800 text-base sm:text-lg mb-4">
            Minaz Tasty Foods is a family-run restaurant that has been proudly serving delicious, homemade dishes since 2022. 
            We specialize in a range of flavorful meals from shawarmas and wraps to traditional Gambian dishes like Domoda, Yassa Ganarr, and Super Kanja.
          </p>
          
          <p className="text-gray-800 text-base sm:text-lg mb-6">
            With love and passion poured into every plate, we aim to bring comfort, culture, and taste to your table. Whether you're craving grilled chicken, fried fish, or a hearty plate of Jollof Rice, Minaz is the place to be.
          </p>
          
          <a 
            href="#menu"
            className="inline-block bg-[#C1272D] hover:bg-[#A21B24] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Explore Our Menu
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img 
            src={AboutImage} 
            alt="Minaz restaurant interior or dish" 
            className="rounded-xl object-cover w-full h-[250px] sm:h-[350px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
