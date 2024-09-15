import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[url(AboutUsHeader.png)] bg-no-repeat bg-cover bg-top w-screen h-64 flex justify-center">
        <h1 className="text-6xl font-resort-sans py-24 ">About Us</h1>
      </div>

      <p className="font-roboto-flex text-xl max-w-[770px] mt-28 mx-20">
        {" "}
        <span className="text-2xl">Welcome to</span>{" "}
        <span className="text-2xl text-[#747474] font-semibold">
          PURE SKIN AI
        </span>
        , your trusted companion in diagnosing skin concerns and finding the
        best treatments tailored to your unique needs. Whether you're dealing
        with acne, dryness, sensitivity, or any other skin condition, we're here
        to guide you on your skincare journey.
      </p>

      <p className="font-roboto-flex text-xl max-w-[770px] mt-16 mx-20">
        At <span className="text-[#747474] font-semibold">PURE SKIN AI</span>,
        we believe that everyone deserves healthy, glowing skin. But with
        countless skincare products and treatments available, finding what works
        for you can be overwhelming. That's why we’ve developed a platform to
        simplify the process by helping you identify your skin’s specific needs
        and recommending targeted solutions.
      </p>

      <div className="bg-[#F2F2F2] w-screen flex flex-col items-center mt-28">
        <h1 className="text-4xl font-resort-sans text-[#747474] mt-10 ">
          What We do
        </h1>
        <p className="font-roboto-flex text-xl max-w-[770px] mt-10 mx-20">
          Our advanced AI-powered system analyzes your skin concerns based on
          the information you provide. We help you:
        </p>
        <div className="flex flex-col lg:flex-row mx-5 max-w-[1100px] my-20 justify-between lg:items-center">
          <div className="mb-10 flex flex-col items-center mx-5">
            <img src="diagnoses.svg" alt="diagnoses" className="mb-10" />
            <p className="font-bold text-[#747474] text-2xl text-center">
              Diagnose Skin Issues:
            </p>{" "}
            <p className="font-roboto-flex text-xl max-w-[770px] max-w-[300px] mt-5 text-center">
              Answer a few questions about your skin type and symptoms, and our
              system will identify potential concerns.
            </p>
          </div>
          <div className="mb-10 flex flex-col items-center mx-16">
            <img src="treatments.svg" alt="treatments" className="mb-10" />
            <p className="font-bold text-[#747474] text-2xl text-center">
              Recommend Treatments:{" "}
            </p>{" "}
            <p className="font-roboto-flex text-xl max-w-[770px] max-w-[300px] mt-5 text-center">
              Receive personalized treatment plans, including products,
              routines, and professional advice.
            </p>
          </div>
          <div className="mb-10 flex flex-col items-center mx-5">
            <img src="connecting.svg" alt="diagnoses" className="mb-10" />
            <p className="font-bold text-[#747474] text-2xl text-center">
              Connect with Experts:
            </p>{" "}
            <p className="font-roboto-flex text-xl max-w-[770px] max-w-[300px] mt-5 text-center">
              If needed, we’ll connect you with certified dermatologists or
              skincare professionals for further assistance.
            </p>
          </div>
        </div>
        <Link
          to="/ai-analysis"
          className=" -mt-10 mb-10 font-resort-sans font-black text-4xl text-center text-[#517783]"
        >
          GET STARTED{" "}
          <img
            src="right-arrow.svg"
            alt="right arrow"
            className="inline-block"
          />
        </Link>
      </div>

      <h1 className="text-4xl font-resort-sans text-[#747474] mt-20 ">
        Why Trust Us?
      </h1>
      <div className="flex flex-col mt-10 w-full mb-28">
        <div className="flex flex-col lg:flex-row items-center justify-around mx-auto max-w-[1100px]">
          <div className="px-16">
            <p className="font-bold text-[#747474] text-2xl text-center">
              Personalized Care:{" "}
            </p>{" "}
            <p className="mb-5 font-roboto-flex text-xl max-w-[770px] max-w-[300px] mt-5 text-center">
              Our AI-driven recommendations are based on your unique skin type
              and concerns, ensuring you get advice that's tailored specifically
              to you.
            </p>
          </div>
          <img src="skin-types.jpg" alt="skin types" />
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-around mx-auto max-w-[1100px] mt-10">
          <img src="user.jpg" alt="skin types" className="max-lg:hidden" />
          <div className="px-16">
            <p className="font-bold text-[#747474] text-2xl text-center">
              User-Focused Experience:{" "}
            </p>{" "}
            <p className="mb-5 font-roboto-flex text-xl max-w-[770px] max-w-[300px] mt-5 text-center">
              We aim to make skincare easy and accessible for everyone. Whether
              you're a skincare novice or an enthusiast, our platform provides
              clear, actionable advice without the noise.{" "}
            </p>
          </div>
          <img src="user.jpg" alt="skin types" className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
