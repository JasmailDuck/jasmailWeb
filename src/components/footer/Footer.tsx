const Footer = () => {
  return (
    <div id="footerWrapper" className=" w-full flex justify-center bg-black  ">
      <div
        id="S_footerContainer"
        className=" w-full max-w-screen-xl flex flex-col mt-52 pb-10"
      >
        <h1 className=" text-white font-bold text-5xl">Like What you See?</h1>
        <h1 className=" font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 w-96">
          Reach out to Me!
        </h1>

        <div className="mt-32 flex ">
          <div className=" flex-1 flex flex-col justify-center">
            <h1 className=" text-white text-3xl font-bold">Jasmail Duck</h1>
            <h2 className=" text-neutral-500  ">jasmailduck@gmail.com</h2>
            <h2 className=" text-neutral-500">Alberta, Canada</h2>
          </div>
          <div className=" text-white flex flex-wrap w-96 tracking-wider items-center">
            <h1 className=" m-5">About</h1>
            <h1 className=" m-5">Services</h1>
            <h1 className=" m-5">Experience</h1>
            <h1 className=" m-5">Contact</h1>
            <h1 className=" m-5">Blog</h1>
            <h1 className=" m-5">Projects</h1>
            <h1 className=" m-5">Github</h1>
            <h1 className=" m-5">Twitter</h1>
            <h1 className=" m-5">Instagram</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
