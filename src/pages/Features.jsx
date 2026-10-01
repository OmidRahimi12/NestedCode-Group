import FeatureCard from "../components/FeatureCard";
import { IoRocket } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import FeatureInfo2 from "../components/FeaturesInfo2";
import Logos from "../components/Logos";

import smallImage2 from "../assets/pexels-mizunokozuki-12902862.jpg";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import FeatureInfo from "../components/FeaturesInfo";

const experiences = [
  {
    amount: "99%",
    title: "UPTIME",
  },
  {
    amount: "50K+",
    title: "USERS",
  },
  {
    amount: "24/7",
    title: "SUPPORT",
  },
];

export default function Features() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="relative flex justify-center">
              <h1 className="absolute -top-4 text-3xl font-bold text-gray-200">
                FEATURES
              </h1>

              <h1 className="relative text-2xl font-bold text-gray-800">
                FEATURES
              </h1>
            </div>

            <p className="mt-3 max-w-2xl text-sm text-gray-400">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="mt-10 rounded-xl bg-white p-6 shadow-lg md:p-8">
            <FeatureCard />

            <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <IoRocket className="h-14 w-14 rounded-2xl bg-[#00a19e] p-3 text-white" />

                <h2 className="mt-5 text-2xl font-bold text-gray-800">
                  Innovation Excellence
                </h2>

                <p className="mt-4 leading-7 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat minus quos itaque ad, mollitia repellat atque labore
                  molestias dicta error soluta.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <CheckBox title="Excepteur sint occaecat cupidatat non proident" />

                  <CheckBox title="At vero eos et accusamus et iusto odio" />

                  <CheckBox title="Sunt in culpa qui officia deserunt mollit anim" />

                  <CheckBox title="Et harum quidem rerum facilis est et expedita" />
                </div>

                <div className="mt-8 grid grid-cols-3 gap-2">
                  {experiences.map((experience) => (
                    <div key={experience.title} className="flex flex-col">
                      <h3 className="text-xl font-bold text-[#00a19e]">
                        {experience.amount}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        {experience.title}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button style="rounded-3xl">
                    <span className="flex  gap-2">
                      Learn More
                      <FaArrowRightLong />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={smallImage2}
                  alt="Innovation"
                  className="h-88 w-full max-w-xl rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 ">
        <div className="mx-auto max-w-7xl ">
          <div className="flex flex-row shadow-lg gap-4 p-4 bg-white rounded-2xl">
            <FeatureInfo />
          </div>
          <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <h1 className="font-black">Cloud integration</h1>

              <button className="mt-2 rounded-full bg-[#cbeded] px-3 py-2 text-blue-600">
                in Development
              </button>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <h1 className="font-black">Data Management</h1>

              <button className="mt-2 rounded-full bg-[#cbeded] px-3 py-2 text-[#00a19e]">
                implemented
              </button>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <h1 className="font-black">Process Automation</h1>

              <button className="mt-2 rounded-full bg-[#cbeded] px-3 py-2 text-[#00a19e]">
                implemented
              </button>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <h1 className="font-black">AI Solutions</h1>

              <button className="mt-2 rounded-full bg-[#cbeded] px-3 py-2 text-[#00a19e]">
                Scheduled
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 ">
        <div className="mx-auto max-w-7xl">
          <FeatureInfo2 />
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-64">
              <img
                src={smallImage2}
                alt="Omid Rahimi"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col justify-center">
              <div className="mb-4">
                <IoRocket className="w-9 h-9 p-2 rounded-full bg-[#cbeded] text-[#00a19e]" />
              </div>

              <div>
                <p className="text-sm leading-6 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita aspernatur, eius consequuntur vero odit laborum
                  mollitia rerum omnis, placeat, eaque optio provident neque
                  reprehenderit.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="text-base font-bold text-gray-800">
                  Omid Rahimi
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Product Director at NestedCode Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0F3332] py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-6">
              <h1 className="text-2xl font-bold text-white">
                Transform Your Business With Cutting-Edge Technology
              </h1>

              <p className="mt-4 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae dolores vero architecto, aliquid officia
                et dolorem quaerat quod laudantium nulla facere in nesciunt,
                labore velit fuga!
              </p>

              <div className="mt-5 space-y-3">
                <CheckBox
                  title="Streamline operation and enhance productivity"
                  className=""
                />
                <CheckBox
                  title="Achieve remarkable cost savings and efficiency gains"
                  className=""
                />
                <CheckBox
                  title="Scale your business resources intelligently"
                  className=""
                />
              </div>

              <div className="mt-6">
                <Button style="rounded">
                  <span className="flex items-center font-bold text-sm">
                    Started Your Journey
                  </span>
                </Button>
              </div>
            </div>

            <div className="relative h-64 p-6 ">
              <img
                src={smallImage2}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />

              <div className="absolute right-2 top-12 w-40 p-4 bg-[#00a19e] rounded-xl text-white">
                <h2 className="text-sm font-bold">
                  Advanced Security Solutions
                </h2>

                <p className="mt-2 text-xs">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Logos />
    </main>
  );
}
