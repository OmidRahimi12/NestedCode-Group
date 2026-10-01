import logo1 from "../assets/Logos2/Alitalia_logo.svg";
import logo2 from "../assets/Logos2/Signify Logo SVG.svg";
import logo3 from "../assets/Logos2/tomtom.svg";
import logo4 from "../assets/Logos2/walmart-ar21.svg";
import logo5 from "../assets/Logos2/Zoetis_logo.svg";

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function Logos() {
  return (
    <section className="w-full overflow-hidden py-8">
      <div className="flex animate-logoMove w-max">
       

        <div className="flex shrink-0">
          {logos.map((logo, index) => (
            <div key={index} className="w-40 flex justify-center">
              <img src={logo} alt="" className="w-24 h-10 object-contain" />
            </div>
          ))}
        </div>

       

        <div className="flex shrink-0">
          {logos.map((logo, index) => (
            <div key={index} className="w-40 flex justify-center">
              <img src={logo} alt="" className="w-24 h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
