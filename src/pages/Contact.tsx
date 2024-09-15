const Contact = () => {
  return (
    <div>
      <div className="bg-[url(contact.jpg)] bg-no-repeat bg-cover bg-top w-screen h-64 flex justify-center">
        <h1 className="text-6xl font-resort-sans py-24 ">CONTACT US</h1>
      </div>
      <div className="flex justify-center">
        <p className="mx-20 mt-16 mb-16 font-bold text-[#747474] text-2xl text-center max-w-[770px]">
          Experience seamless customer service with our AI-powered phone call
          responder, designed to assist with inquiries, provide solutions, and
          deliver fast, accurate support anytime you need it.
        </p>
      </div>
      <p className="mt-10 mb-10 font-resort-sans font-black text-4xl text-center text-[#517783]">
        PHONE NUMBER:
      </p>
      <div className="flex justify-center">
        <p className="mx-20 mb-16 font-bold text-[#747474] text-2xl text-center max-w-[770px]">
          +1 (315) 909-7610
        </p>
      </div>
    </div>
  );
};

export default Contact;
