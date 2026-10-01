import { GrInsecure } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import CheckBox from "./CheckBox";
import { FaArrowRightLong } from "react-icons/fa6";

const informations = [
  {
    icon: GrInsecure,
    title: "Strategic Business Intelligence",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: GrSecure,
    title: "Advanced Security Network",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function FeatureInfo() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {informations.map((information) => {
        const Icon = information.icon;

        return (
          <div key={information.title} className="flex min-h-75 flex-col p-4">
            <Icon className="h-10 w-10 rounded-full bg-[#cbeded] p-2 text-[#00a19e]" />

            <h2 className="mt-3 text-lg font-medium text-gray-800">
              {information.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {information.info}
            </p>

            <div className="mt-4 space-y-3">
              <CheckBox title="Advanced protection" />
              <CheckBox title="Advanced protection" />
            </div>

            <button className="mt-auto flex w-fit items-center gap-2 self-center text-sm font-medium text-[#00a19e] transition hover:text-[#008f8c]">
              Learn More
              <FaArrowRightLong />
            </button>
          </div>
        );
      })}
    </div>
  );
}
