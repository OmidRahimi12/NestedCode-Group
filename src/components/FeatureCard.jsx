import { MdSupportAgent } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { IoRocket } from "react-icons/io5";

const features = [
  {
    logo: IoRocket,
    name: "Innovation",
    title: "Cutting-edge solutions",
    background: "bg-[#00a19e]",
    active: true,
  },
  {
    logo: MdOutlineSecurity,
    name: "Security",
    title: "Advanced protection",
    background: "bg-white",
    active: false,
  },
  {
    logo: GrDocumentPerformance,
    name: "Performance",
    title: "Lightning fast speed",
    background: "bg-white",
    active: false,
  },
  {
    logo: MdSupportAgent,
    name: "Support",
    title: "24/7 assistance",
    background: "bg-white",
    active: false,
  },
];

export default function FeatureCard() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => {
        const Icon = feature.logo;

        return (
          <div
            key={feature.name}
            className={`${feature.background} flex items-center gap-3 rounded-lg border p-3 shadow-sm ${
              feature.active ? "border-[#00a19e]" : "border-gray-200"
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                feature.active ? "bg-white" : "bg-[#00a19e]"
              }`}
            >
              <Icon
                className={`h-6 w-6 ${
                  feature.active ? "text-[#00a19e]" : "text-white"
                }`}
              />
            </div>

            <div>
              <h2
                className={`text-sm font-bold ${
                  feature.active ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.name}
              </h2>

              <p
                className={`text-xs ${
                  feature.active ? "text-white" : "text-gray-400"
                }`}
              >
                {feature.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}