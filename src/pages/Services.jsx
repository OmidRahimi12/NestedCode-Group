import smallImage1 from "../assets/pexels-mikhail-nilov-7988759.jpg";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="w-full bg-linear-to-br from-white via-white to-[#eefafa] px-6 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="flex flex-col items-center text-center">
        <div className="relative flex justify-center">
          {/* Shadow / background text */}
          <h1 className="absolute -top-4 text-3xl font-bold text-gray-100">
            SERVICES
          </h1>

          {/* Main heading */}
          <h1 className="relative text-2xl font-bold text-gray-800">
            SERVICES
          </h1>
        </div>

        <p className="mt-3 max-w-2xl text-sm text-gray-400">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <button className="rounded-2xl bg-[#c8f8f7] px-3 py-1.5 text-sm font-bold text-[#03790c]">
            * WHAT WE DO
          </button>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-800">
            Tempor incididunt ut labore et dolore magna
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            magnam distinctio illo aperiam obcaecati exercitationem accusamus ut
            quibusdam officiis!
          </p>

          <Button style="mt-6 rounded-4xl px-4 text-sm">
            <span>Explore Our Works</span>
          </Button>
        </div>

        <div className="flex justify-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={smallImage1}
              alt="Our company"
              className="h-72 w-100 object-cover lg:h-64 lg:w-80"
            />
          </div>
        </div>
      </div>
      <ServiceCard/>
    </section>
  );
}
