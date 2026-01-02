function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5C2671] mb-12">
        Get in Touch
      </h2>

      <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-6">
        <p>
          Have questions, want to place an order, or just want to say hi? Reach
          out to us anytime!
        </p>

        <div className="space-y-2">
          <p>
            📞{' '}
            <span className="font-semibold text-[#5C2671]">
              +220 347 3005
            </span>
          </p>
          <p>
            📍{' '}
            <span className="font-semibold text-[#5C2671]">
              Minaz Tasty Foods, Kairaba Avenue, Serrekunda
            </span>
          </p>
          <p>
            📧{' '}
            <a
              href="mailto:minaztastyfoods@gmail.com"
              className="text-[#5C2671] font-semibold underline"
            >
              minaztastyfoods@gmail.com
            </a>
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <a
            href="https://facebook.com/minaztastyfoods"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C2671] font-semibold underline"
          >
            Facebook
          </a>
          <a
            href="https://tiktok.com/@minaztastyfoods"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C2671] font-semibold underline"
          >
            TikTok
          </a>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/2203473005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-[#1ebe5d] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M16.003 3C9.374 3 3.998 8.376 3.998 15c0 2.647.871 5.093 2.345 7.075L3 29l7.163-3.29A12.92 12.92 0 0016.003 27c6.63 0 12.003-5.374 12.003-12S22.633 3 16.003 3zm.003 22c-1.83 0-3.53-.503-5.01-1.373l-.358-.215-4.245 1.948.895-4.132-.24-.378A10.04 10.04 0 016.003 15c0-5.52 4.478-10 10.003-10s10.003 4.48 10.003 10-4.478 10-10.003 10zm5.767-7.21c-.314-.157-1.857-.917-2.146-1.022-.288-.105-.498-.157-.707.157-.21.314-.81 1.022-.995 1.232-.183.21-.367.236-.68.08-.314-.157-1.325-.488-2.522-1.556-.93-.83-1.557-1.854-1.74-2.168-.183-.314-.02-.483.137-.64.14-.14.314-.366.472-.55.157-.183.21-.314.314-.524.105-.21.052-.393-.026-.55-.08-.157-.707-1.71-.97-2.342-.255-.61-.514-.527-.707-.537l-.6-.01c-.21 0-.55.078-.838.393-.288.314-1.1 1.073-1.1 2.613s1.127 3.027 1.283 3.237c.157.21 2.217 3.393 5.375 4.753.752.324 1.34.516 1.797.662.754.24 1.44.205 1.98.124.604-.09 1.857-.758 2.12-1.49.262-.732.262-1.36.183-1.49-.08-.13-.288-.21-.6-.367z" />
            </svg>
            Contact us on WhatsApp
          </a>
        </div>

        {/* <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.532758164803!2d-16.711818671928498!3d13.441223386914595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29b3cec387e21%3A0xd94477151c748730!2sMinaz%20Tasty%20Food!5e0!3m2!1sen!2sgm!4v1750076766364!5m2!1sen!2sgm"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Minaz Tasty Food Location"
          ></iframe>
        </div> */}
      </div>
    </section>
  )
}

export default Contact
