import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Success from './Success';

const MainSection = ({success}) => {
   const [email, setEmail] = useState("");
   const [error, setError] = useState("");
   const [successMessage, setSuccessMessage] = useState("");
   const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {

      if (!email) {
        setError("Enter your email");
        setTimeout(() => {
         setError();
        }, 1000);
        console.log("Enter your email");
      } else {
        setSuccessMessage("Email submitted successfully");
         setTimeout(() => {
           setSuccessMessage();
         }, 1500);
        console.log("Email submitted successfully");
      }
    } catch (error) {
      console.error("An error occurred:", error);
        setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };
   useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClose = () => {
    // Implement logic to close the success message
    setSuccessMessage("");
  };


  return (
    <div>
      {successMessage && (
        <Success success={successMessage} onClose={handleClose} />
      )}

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
          {error && (
            <div className="flex justify-center  items-center text-white  md:text-[15px] text-[12px] ">
              <div className="flex justify-between items-center text-red-500">
                <p>{error}</p>
              </div>
            </div>
          )}
          <div className="flex justify-between rounded-full border-[2px] w-[280px] md:w-[370px] h-[50px] border-white mt-5 bg-white">
            <input
              placeholder="your email"
              className="bg-transparent focus:border-transparent rounded-full p-2 w-full "
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={handleSubmit}
              className="bg-green-500 rounded-full text-white px-5 font-bold"
            >
              {loading ? <p>...</p> : <p>Join</p>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;