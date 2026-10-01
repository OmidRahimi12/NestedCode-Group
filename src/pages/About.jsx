import bigImage from "../assets/pexels-natri-792199.jpg";
import smallImage1 from "../assets/pexels-mikhail-nilov-7988759.jpg";
import smallImage2 from "../assets/pexels-mizunokozuki-12902862.jpg";

import { IoRocket } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import studentLogo from "../assets/logos/webstudent.png";

const logos = [
  {
    logo: IoRocket,
    name: "Trusted Security",
    title:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
  {
    logo: FaArrowRightLong,
    name: "Fast Performance",
    title:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
  {
    logo: IoRocket,
    name: "Expert Support",
    title:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
];

const experiences = [
  { amount: "250+", title: "Projects Completed" },
  { amount: "98%", title: "Client Satisfaction" },
  { amount: "24/7", title: "Support Available" },
  { amount: "12+", title: "Years Experience" },
];

export default function About() {
  return (
    <section className="w-full bg-linear-to-br from-white via-white to-[#eefafa] px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      
        <div>
          <button className="rounded bg-[#c8f8f7] px-3 py-1.5 text-sm font-bold text-[#03790c]">
            ABOUT OUR COMPANY
          </button>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            Tempor incididunt ut labore et dolore magna
          </h1>

          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            magnam distinctio illo aperiam obcaecati exercitationem accusamus ut
            quibusdam officiis!
          </p>

          <p className="mt-4 text-base leading-7 text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas maiores quam quisquam, porro modi labore in
            beatae praesentium explicabo libero! Consectetur magnam!
          </p>

         
          <div className="mt-8 grid grid-cols-2 gap-4">
            {experiences.map((experience) => (
              <div
                key={experience.amount}
                className="rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm"
              >
                <h2 className="text-2xl font-bold text-[#00a19e]">
                  {experience.amount}
                </h2>

                <p className="mt-1 text-sm text-gray-400">{experience.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - IMAGES */}
        <div className="w-full">
          <div className="overflow-hidden rounded-xl">
            <img
              src={bigImage}
              alt="Our company"
              className="h-75 w-full object-cover sm:h-100"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl">
              <img
                src={smallImage1}
                alt="Our team"
                className="h-40 w-full object-cover sm:h-48"
              />
            </div>

            <div className="overflow-hidden rounded-xl">
              <img
                src={smallImage2}
                alt="Our work"
                className="h-40 w-full object-cover sm:h-48"
              />
            </div>
          </div>
        </div>
      </div>

    
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center bg-[#00a19e] rounded-full">
              <logo.logo className=" text-white" />
            </div>

            <h2 className="text-xl font-bold text-gray-800">{logo.name}</h2>

            <p className="mt-3 max-w-sm leading-6 text-gray-400">
              {logo.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
