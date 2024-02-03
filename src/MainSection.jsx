import React, { useEffect, useState } from 'react';
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
        setError("Enter your email address");
         setTimeout(() => {
           setError("");
         }, 3000);
      } else {
        const response = await fetch("/addtowaitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const result = await response.json();
          setSuccessMessage(result.message);
        } else {
          const errorResult = await response.json();
          setError(`Error: ${errorResult.error}`);
          setSuccessMessage("Email submitted successfully");
            setTimeout(() => {
              setSuccessMessage("");
            }, 3000);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccessMessage("");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          className="md:w-[800px] h-fit py-5 w-full px-5 md:px-0 shadow-md bg-[#282a3e] flex flex-col items-center rounded-lg mt-10"
        >
          <div>
            {error && (
              <div className="flex justify-center  items-center text-white  md:text-[15px] text-[12px] ">
                <div className="flex justify-between items-center text-red-500">
                  <p>{error}</p>
                </div>
              </div>
            )}
            <div className="md:w-[380px] w-[300px] flex justify-center flex-col items-center">
              <h1 className="text-2xl text-white font-bold mt-5">
                Coming Soon!
              </h1>
              <p className="mt-2 text-lg mt-5 text-center">
                Kindly allow us the necessary time to finalize our work. To
                receive notification of its completion, we invite you to join
                our waitlist. Thank you for your patience and understanding.
              </p>
              <input
                placeholder="Enter Address"
                className="bg-gray-500 rounded-md text-white p-2 mt-5 w-full placeholder-white"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="bg-green-500 mt-5 rounded-md py-2 text-white px-5 font-bold"
                disabled={loading}
              >
                {loading ? <p>...</p> : <p>Join the waitlist</p>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;