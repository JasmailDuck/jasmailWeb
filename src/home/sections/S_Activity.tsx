const S_Activity = () => {
  // When the user scolls the background changes to blackl
  return (
    <section
      id="S_ActiviytWrapper"
      className=" flex flex-col items-center overflow-x-hidden mb-5"
    >
      <div
        id="S_Activity"
        className=" max-w-screen-xl w-full flex flex-col px-5 mb-20 "
      >
        <div className="flex flex-col items-end">
          <h1 className="text-3xl font-semibold  w-44 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
            ACTIVITES
          </h1>
          <h1 className="text-6xl  font-black ">
            It's not just all about tech!
          </h1>
        </div>
      </div>
      <div className=" h-[600px] w-full bg-snowboard bg-fixed" />

      <div className="relative w-full h-[600px]">
        <div className=" absolute bg-black h-[500px] rounded-md w-[800px] -top-96 left-44 flex justify-center items-center">
          <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
            SNOWBOARDING
          </h1>
        </div>

        <div className=" flex justify-center h-full ">
          <div className="max-w-screen-xl w-full flex flex-col justify-center">
            <h1 className=" text-neutral-500 text-2xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia vitae a incidunt aperiam fuga reprehenderit non itaque maxime
              eius.
            </h1>

            <h1 className=" text-neutral-500 text-2xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia vitae a incidunt aperiam fuga reprehenderit non itaque maxime
              eius.
            </h1>

            <h1 className=" text-neutral-500 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia vitae a incidunt aperiam fuga reprehenderit non itaque maxime
              eius.
            </h1>
          </div>
        </div>
      </div>
      <div className=" h-[600px] w-full bg-soccer bg-fixed bg-cover" />
      <div className="relative w-full h-[600px]">
        <div className=" absolute bg-black h-[500px] rounded-md w-[800px] -top-96 right-44 flex justify-center items-center">
          <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
            SOCCER
          </h1>
        </div>
        <div className=" flex justify-center h-full ">
          <div className="max-w-screen-xl w-full flex flex-col justify-center">
            <h1 className=" text-neutral-500 text-2xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia vitae a incidunt aperiam fuga reprehenderit non itaque maxime
              eius.
            </h1>

            <h1 className=" text-neutral-500 text-2xl mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia vitae a incidunt aperiam fuga reprehenderit non itaque maxime
              eius.
            </h1>

            <h1 className=" text-neutral-500 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia vitae a incidunt aperiam fuga reprehenderit non itaque maxime
              eius.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default S_Activity;
