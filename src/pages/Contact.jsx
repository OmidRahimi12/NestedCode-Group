import ContactForm from "../components/contactForm";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full bg-[#f1f8f7] px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex justify-center">
          <h1 className="absolute -top-4 text-3xl font-bold text-gray-200">
            CONTACT
          </h1>

          <h1 className="relative text-2xl font-bold text-[#173f3f]">
            CONTACT
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-sm text-[#456363]">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold tracking-wider text-[#173f3f]">
            CONTACT US
          </p>

          <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight text-[#173f3f] sm:text-5xl">
            Nemo enim ipsam voluptatem quia voluptas aspernatur
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#6c8989]">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <FaEnvelope className="text-xl text-[#00a19e]" />

            <p className="text-base text-[#345858]">info@example.com</p>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <FaPhone className="text-xl text-[#00a19e]" />

            <p className="text-base text-[#345858]">+1 5589 55488 558</p>
          </div>

          {/* Address */}
          <div className="mt-5 flex items-center gap-4">
            <FaLocationDot className="text-xl text-[#00a19e]" />

            <p className="text-base text-[#345858]">
              A108 Adam Street, New York, NY 535022
            </p>
          </div>

          {/* Open map */}
          <div className="mt-8 flex items-center gap-2">
            <span className="text-base font-semibold text-[#173f3f]">
              Open Map
            </span>

            <FaArrowRight className="text-sm text-[#173f3f]" />
          </div>
        </div>

      
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
