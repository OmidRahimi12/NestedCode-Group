import { FiMinusCircle } from "react-icons/fi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const prices = [
  {
    btn: "STARTER",
    title: "Lorem Dolor Sit",
    info: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",

    monthlyPrice: "$12",
    yearlyPrice: "$132",

    features: [
      { text: "Lorem ipsum dolor amet", available: true },
      { text: "Consectetur adipiscing elit", available: true },
      { text: "Sed do eiusmod tempor", available: true },
      { text: "Incididunt ut labore", available: false  },
      { text: "Dolore magna aliqua", available: false },
    ],

    button: "Get Started",
  },

  {
    btn: "PRO",
    title: "Cras Aenean Quam",
    info: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",

    monthlyPrice: "$29",
    yearlyPrice: "$265",

    features: [
      { text: "Excepteur sint occaecat", available: true },
      { text: "Cupidatat non proident", available: true },
      { text: "Sunt in culpa qui officia", available: true },
      { text: "Deserunt mollit anim id", available: true },
      { text: "Est laborum commodo", available: true },
    ],

    button: "Choose Pro",
  },

  {
    btn: "BUSINESS",
    title: "Porta Parturient",
    info: "Quis autem vel eum iure reprehenderit in ea voluptate velit esse.",

    monthlyPrice: "$59",
    yearlyPrice: "$437",

    features: [
      { text: "Quam nulla molestiae", available: true },
      { text: "Consequatur vel illum", available: true },
      { text: "Qui dolorem eum fugiat", available: true },
      { text: "Quis nostrum exercitationem", available: true },
      { text: "Ullam corporis suscipit", available: true },
    ],

    button: "Start Business",
  },
];

export default function PricingCard({ monthly }) {
  return (
    <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {prices.map((price, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        >
        
          <div className="inline-block rounded-full bg-[#e8f5f5] px-4 py-2 text-[12px] font-bold text-[#00a19e]">
            {price.btn}
          </div>

          
          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            {price.title}
          </h2>

         
          <p className="mt-1 text-sm leading-5 text-gray-400">{price.info}</p>

          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-800">
              {monthly ? price.monthlyPrice : price.yearlyPrice}
            </span>

            <span className="ml-1 text-xs text-gray-400">
              {monthly ? "/mo" : "/year"}
            </span>
          </div>

         
          <div className="mt-4 space-y-2">
            {price.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span
                  className={
                    feature.available ? "text-[#00a19e]" : "text-gray-300"
                  }
                >
                  {feature.available ? (
                    <IoCheckmarkCircleOutline />
                  ) : (
                    <FiMinusCircle />
                  )}
                </span>

                <span
                  className={
                    feature.available ? "text-gray-600" : "text-gray-300"
                  }
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

         
          <button className="mt-5 w-full rounded border border-[#00a19e]  py-2 text-[12px] font-semibold text-[#00a19e] hover:bg-[#00a19e] hover:text-white">
            {price.button}
          </button>
        </div>
      ))}
    </div>
  );
}
