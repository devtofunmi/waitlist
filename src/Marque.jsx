import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <Marquee>
        <div className='flex text-white justify-between gap-10 md:text-2xl mt-10'>
      <p>Programming and Tech</p>
      <p>Website Design</p>
      <p>Graphic Design</p>
      <p>Logo Design</p>
      <p>AI Services</p>
      <p>Voice Over</p>
      <p>Video Explainer</p>
      <p>Photography</p>
      <p>SEO</p>
      <p>Social Media</p>
      <p>Music and Audio</p>
      <p>Business</p>
      <p>etc...</p>
        </div>
    </Marquee>
  );
}

export default Marque
