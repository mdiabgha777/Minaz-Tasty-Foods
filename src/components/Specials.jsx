import React from 'react'
import { Star } from 'lucide-react'
import specials from '../Data/SpecialsData.js'

function Specials() {
  return (
    <section className="bg-[#FFF6E6] py-16 px-4 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5C2671] mb-12">
        Popular Dishes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {specials.map((dish, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-[#5C2671] mb-1">
                {dish.name}
              </h3>

              {/* ⭐ 5 Star Rating */}
              <div className="flex items-center text-yellow-500 mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="mr-1" />
                  ))}
              </div>

              <p className="text-sm md:text-base text-gray-700 mb-1">
                {dish.description}
              </p>
              <p className="text-md font-semibold text-[#C1272D]">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#menu"
          className="inline-block bg-[#C1272D] hover:bg-[#A21B24] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          See Full Menu
        </a>
      </div>
    </section>
  )
}

export default Specials