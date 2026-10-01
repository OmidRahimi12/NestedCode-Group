import { IoIosCheckmark } from "react-icons/io";


export default function CheckBox({title}){


    return (
        <div className="flex items-center gap-3 ">
            <IoIosCheckmark className="bg-[#00a19e] text-white rounded-full w-5 h-5"/>

            <p className="text-black">{title}</p>
        </div>
    )
}