import React from 'react'

const MainSection = () => {
  return (
    <div className="flex justify-center items-center flex-col text-white mt-20">
      <h2 className="md:text-5xl text-3xl font-bold text-center leading-[50px] md:leading-[55px]">
        Empowering Nigerian Freelancers and Entrepreneurs
        <br /> <span className='text-green-500'>Nameless </span>Redefining Digital Collaboration
      </h2>
      <p className="text-center pt-2 text-lg font-semibold">
        Connecting Talent with Opportunity Transforming the Gig Economy
        Experience in Nigeria
      </p>
      <div className="flex justify-between rounded-lg border-[2px] w-[320px] md:w-[380px] h-[50px] border-white mt-5">
        <input
          placeholder="your email"
          className="bg-transparent p-2"
          type="email"
        />
        <button className="bg-white text-black p-1 font-bold">
          Join Waitlist
        </button>
      </div>
    </div>
  );
}

export default MainSection;