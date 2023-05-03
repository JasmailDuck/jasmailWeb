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
        <div className="flex flex-col items-end mb-32">
          <h1 className="text-3xl font-semibold  w-44 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-5 tracking-widest">
            ACTIVITES
          </h1>
          <h1 className="text-6xl  font-black text-white ">
            It's not just all about tech!
          </h1>
        </div>

        <div className=" flex w-full h-[600px] mb-10 ">
          <div className="flex flex-col flex-1 w-full mr-5 ">
            <div className="flex-1 bg-snowboard bg-cover rounded-tl-md" />
            <div className="flex flex-1 mt-5">
              <div className=" flex-1 bg-basketball bg-cover mr-5 rounded-bl-md " />
              <div className=" flex-1 bg-football bg-cover" />
            </div>
          </div>
          <div className="flex w-1/3 ">
            <div className=" flex-1 bg-soccer bg-cover rounded-r-md" />
          </div>
        </div>

        <h1 className="text-3xl font-semibold  mb-5 tracking-widest">Sports</h1>
        <p className=" text-lg text-neutral-500">
          As a lifelong sports enthusiast, I have honed my skills and passion
          for various sports throughout the years. From my early days as a
          skilled soccer player, to my recent endeavors in basketball, my love
          for sports has always been a driving force in my life. With a keen eye
          for strategy and a deep appreciation for the athleticism and
          camaraderie that sports bring, I am constantly pushing myself to excel
          in every game. Whether it's scoring goals on the soccer field, sinking
          baskets on the basketball court, or immersing myself in the thrilling
          world of American football as a devoted fan, sports are not just a
          pastime for me - they are a way of enjoying life.
        </p>
      </div>
    </section>
  );
};

export default S_Activity;
