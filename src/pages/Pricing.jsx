import { useState } from "react";
import PervodeBTN from "../components/PervodeBTN";
import PricingCard from "../components/PricingCard";
import FAQ from "../components/FAQ";

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <section className="w-full bg-linear-to-br from-white via-white to-[#eefafa] px-6 py-12 sm:px-8 lg:px-12 lg:py-20">

      {/* Heading */}
      <div className="flex flex-col items-center text-center">

        <div className="relative flex justify-center">

          <h1 className="absolute -top-4 text-3xl font-bold text-gray-100">
            PRICING
          </h1>

          <h1 className="relative text-2xl font-bold text-gray-800">
            PRICING
          </h1>

        </div>

        <p className="mt-3 max-w-2xl text-sm text-gray-400">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

      </div>


      
      <div className="mt-4 flex w-full items-center justify-center">
        <PervodeBTN
          monthly={monthly}
          setMonthly={setMonthly}
        />
      </div>


     
      <PricingCard monthly={monthly} />

      <FAQ/>

    </section>
  );
}