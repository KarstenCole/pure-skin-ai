const Footer = () => {
  return (
    <div className="flex w-full bg-[#517783] text-white justify-around">
      <div id="contact">
        <h2 className="underline font-bold text-2xl text-center mt-7 mb-7 max-lg:mb-5">
          Contact
        </h2>
        <div className="flex max-lg:flex-col text-center">
          <p className="mr-5 max-lg:mb-1">krishm@vt.edu</p>
          <p> +1 (315) 909-7610 </p>
        </div>
      </div>
      <img src="logo.png" alt="logo" className="scale-75" />
      <div className="flex flex-col">
        <div className="mt-7">
          <span className="mr-5">Privacy Policy</span>
          <span className="">Terms of Service</span>
        </div>
        <p className="mt-7">
          © 2024 Pure Skin AI Skincare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
