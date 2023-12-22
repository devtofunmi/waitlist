import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    // <div className='flex'></div>
    <div className="flex justify-center items-center flex-col text-white mt-20">
      <h2
        data-aos="fade-up"
        className="md:text-5xl text-4xl font-bold text-center leading-[50px] md:leading-[55px]"
      >
        Empowering Nigerian Freelancers and Entrepreneurs
        <br /> <span className="text-green-500">Nameless </span>Redefining
        Digital Collaboration
      </h2>
      <p
        data-aos="fade-right"
        className="text-center pt-2 text-lg font-semibold"
      >
        Connecting Talent with Opportunity Transforming the Gig Economy
        Experience in Nigeria
      </p>
      <div
        data-aos="fade-left"
        className="md:w-[400px] md:h-[150px] w-[300px] h-[200px] bg-[#282a3e] flex flex-col items-center rounded-lg mt-10"
      >
        <h1 className="text-2xl text-white font-bold mt-5">
          JOIN THE WAITLIST
        </h1>
        <div className="flex justify-between rounded-full border-[2px] w-[280px] md:w-[350px] h-[50px] border-white mt-5 bg-white">
          <input
            placeholder="your email"
            className="bg-transparent p-2"
            type="email"
          />
          <button className="bg-green-500 rounded-full text-white px-5 font-bold">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;