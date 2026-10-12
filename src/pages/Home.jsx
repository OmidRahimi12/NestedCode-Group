import Button from "../components/Button";
import heroImage from "../assets/9561779.jpg";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useState } from "react";
import storyVideo from "../assets/video/Our Story.mp4"
import { Link } from "react-router-dom";


const experiences = [
  {
    amount: "150+",
    title: "Projects Completed",
  },
  {
    amount: "98%",
    title: "Client Satisfaction",
  },
  {
    amount: "24/7",
    title: "Support Available",
  },
];

export default function Home() {
     
      const [showVideo , setShowVideo] = useState(false);
  return (
    <main className="w-full bg-linear-to-br from-white via-[#e8f8f7] to-[#d5f3f0]">
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">

        
        <div>
          
          <div>
            <h1 className="text-4xl font-medium leading-tight text-gray-700 sm:text-5xl lg:text-6xl">
              Creating Digital Experiences That Matter
            </h1>
          </div>

        
          <div className="mt-6">
            <p className="max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              We craft beautiful, functional and meaningful digital solutions
              that help businesses connect with their audiences in authentic
              ways.
            </p>
          </div>

         
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Link to="/contact">
               <Button style="rounded">
                            <span className="flex items-center gap-2">Started Your Journey</span>
                </Button>
              </Link>
           

            <button className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#00a19e] cursor-pointer"
              onClick={() => {
                setShowVideo(true)
              }}
             >
              <span >
                <IoPlayCircleOutline className="w-8 h-8 text-[#00a19e]"/>
              </span>
              Watch Our Story
            </button>
          </div>

         
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {experiences.map((experience) => (
              <div key={experience.amount}>
                <h2 className="text-2xl font-bold text-[#00a19e]">
                  {experience.amount}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {experience.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Digital experience"
              className="h-auto w-full object-cover "
            />
          </div>
        </div>

      </section>


     {showVideo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    
    <div className="relative w-full max-w-4xl">
      
      <button
        onClick={() => setShowVideo(false)}
        className="absolute right-2 top-2 text-3xl font-bold text-red-600 transition hover:text-[#00a19e]"
      >
        ✕
      </button>

      <video
        src={storyVideo}
        controls
        muted
        autoPlay
        className="w-full rounded-xl shadow-2xl"
      >
        Your browser does not support video.
      </video>

    </div>
  </div>
)}
    
    </main>
  );
}