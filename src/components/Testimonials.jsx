function Testimonials() {
  return (
    <section className="py-16 px-4 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5C2671] mb-12">
        What Our Customers Say
      </h2>

      <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 */}
        <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300" aria-label="Testimonial by Amina J.">
          <blockquote className="text-gray-700 mb-4 italic">
            "Absolutely delicious! The jollof rice and grilled chicken are always on point. Highly recommend!"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5C2671] text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <p className="font-semibold text-[#5C2671]">Amina J.</p>
              <p className="text-sm text-gray-500">Local Resident</p>
            </div>
          </div>
        </article>

        {/* Testimonial 2 */}
        <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300" aria-label="Testimonial by Malik D.">
          <blockquote className="text-gray-700 mb-4 italic">
            "Best African food spot in town. Warm service and tasty meals that feel like home."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5C2671] text-white rounded-full flex items-center justify-center font-bold">
              M
            </div>
            <div>
              <p className="font-semibold text-[#5C2671]">Malik D.</p>
              <p className="text-sm text-gray-500">Repeat Customer</p>
            </div>
          </div>
        </article>

        {/* Testimonial 3 */}
        <article className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300" aria-label="Testimonial by Fatou S.">
          <blockquote className="text-gray-700 mb-4 italic">
            "A hidden gem! The portions are generous and the flavors are authentic. 10/10!"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5C2671] text-white rounded-full flex items-center justify-center font-bold">
              F
            </div>
            <div>
              <p className="font-semibold text-[#5C2671]">Fatou S.</p>
              <p className="text-sm text-gray-500">Repeat Customer</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials