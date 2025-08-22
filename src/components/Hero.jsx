import SaladImg from '../assets/Salad-anh-nguyen.jpg'
import Sliderimg from '../assets/slider1.png'

function Hero() {
  return (
    <section id='home' className="px-4 md:px-24 py-10 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5C2671] leading-tight mb-6">
            Taste the Tradition at <br /> Minaz Tasty Foods
          </h1>

          <p className="text-md sm:text-lg text-[#5C2671] mb-8">
            Serving mouthwatering shawarmas, wraps, grilled chicken & fish, and Gambian favorites like domoda, super kanja, and yassa — from our family to yours.
          </p>

          <button className="bg-[#C1272D] hover:bg-[#a32025] cursor-pointer
            text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200">
            View Menu
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[500px]">
          <img
            src={Sliderimg}
            alt="Delicious Gambian Food"
            className="rounded-2xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
