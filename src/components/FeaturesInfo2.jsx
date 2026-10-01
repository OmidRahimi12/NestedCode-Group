import { FaArrowRightLong } from "react-icons/fa6";
import { GrInsecure } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";

import pexel1 from "../assets/pexels-mizunokozuki-12902862.jpg";
import CheckBox from "./CheckBox";

const cards = [
    {
        icon: FaArrowRightLong,
        heading: "Intuitive Dashboard Interface",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at veritatis, minima iure ex sequi assumenda pariatur possimus expedita quae corrupti quia corporis enim quaerat consectetur, doloribus cumque culpa fuga!",
        image: pexel1,
        background: "bg-white",
         border: "border-none"
    },
      {
        icon: GrInsecure,
        heading: "Intuitive Dashboard Interface",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at veritatis, minima iure ex sequi assumenda pariatur possimus expedita quae corrupti quia corporis enim quaerat consectetur, doloribus cumque culpa fuga!",
        image: pexel1,
        background: "bg-linear-to-t from-white via-[#e8f8f7] to-[#d5f3f0]",
        border: "border-none"
    },
      {
        icon: GrSecure,
        heading: "Intuitive Dashboard Interface",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at veritatis, minima iure ex sequi assumenda pariatur possimus expedita quae corrupti quia corporis enim quaerat consectetur, doloribus cumque culpa fuga!",
        image: pexel1,
        background: "bg-white",
         border: "border-none"
    },
]

export default function FeatureInfo2() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {cards.map((card, index) => {

                const Icon = card.icon;

                return (
                    <div
                        key={index}
                        className={`${card.background} ${card.border} bg-white rounded-xl shadow-lg p-5 h-130`}
                    >

                        <Icon className="bg-[#00a19e] text-xl text-white h-10 w-10 p-2 rounded-2xl" />

                        <h2 className="mt-4 text-lg font-bold">
                            {card.heading}
                        </h2>

                        <p className="mt-3 text-sm text-gray-500">
                            {card.info}
                        </p>

                          <div className="flex flex-col gap-4 mt-4">
                             <CheckBox title="Predictive analysis"/>
                           <CheckBox title="Custom reporting "/>
                           <CheckBox title="Data exploration"/>
                          </div>

                        <img
                            src={card.image}
                            alt=""
                            className="w-full h-40 object-cover rounded-lg mt-5"
                        />

                    </div>
                );
            })}

        </div>
    );
}