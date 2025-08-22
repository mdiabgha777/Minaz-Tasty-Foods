import { useState, useMemo } from 'react'
import BLDMenu from '../Data/BLD.js'
import LDMenu from '../Data/LunchDinnerMenu.js'
import SidesMenu from '../Data/Sides.js'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('BreakfastLunchDinner')

  // Memoize menu items to avoid unnecessary recalculations
  const menuItems = useMemo(() => {
    const menuMap = {
      BreakfastLunchDinner: BLDMenu,
      LunchDinner: LDMenu,
      Sides: SidesMenu,
    }
    return menuMap[activeCategory] || BLDMenu
  }, [activeCategory])

  return (
    <section id='menu' className="py-12 px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#5C2671] mb-8">
        Our Menu
      </h2>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {['BreakfastLunchDinner', 'LunchDinner', 'Sides'].map((category) => (
          <button
            key={category}
            className={`px-3 py-2 rounded-lg font-semibold shadow-md transition text-sm sm:text-base whitespace-nowrap ${
              activeCategory === category
                ? 'bg-[#5C2671] text-white'
                : 'bg-white text-[#5C2671]'
            }`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category === 'BreakfastLunchDinner'
              ? 'Breakfast / Lunch / Dinner'
              : category === 'LunchDinner'
              ? 'Lunch & Dinner'
              : 'Sides'}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-40 sm:h-48 object-cover opacity-0 transition-opacity duration-500"
              onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-[#5C2671] mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700 text-sm mb-2">{item.description}</p>
              <p className="text-[#C1272D] font-bold text-base">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu