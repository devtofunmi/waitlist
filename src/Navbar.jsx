import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
     
    <div>
      <h1 data-aos="flip-left" className="text-2xl text-green-500 text-green-500 font-bold">Nameless</h1>
    </div>
  );
}

export default Navbar;