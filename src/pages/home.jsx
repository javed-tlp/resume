import React from "react";
import myimg from "/image/javed.png";
import pdfFile from "/resume/Javed.pdf";
const Home = () => {
  return (
    <div className="p-3 sm:px-20 ">
      <div className="flex  justify-center items-center flex-wrap ">
        <div className=" text-left sm:ml-3 sm:w-3/5 mx-2 mt-4 md:my-20 ">
          <div className="  sm:float-start sm:px-10 justify-center">
            <p className="text-2xl font-semibold sm:text-4xl md:font-bold">
              Hello, It's Me 
            </p>
            <h2 className="text-3xl font-medium sm:text-6xl md:font-bold">
              Javed Saifi
            </h2>
            <h2 className="text-2xl mt-3 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 sm:text-4xl bg-orange-600 text-transparent bg-clip-text font-bold ">
              MEAN Stack Developer
            </h2>
            <p className="text-lg font-semibold mt-5  sm:mt-6">
            Hello! I’m Javed Saifi, a passionate web developer with a knack for creating visually appealing and highly functional websites. With a solid foundation in HTML, CSS, JavaScript, and various modern frameworks, I specialize in delivering responsive and user-friendly web solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-4 my-1  md:mx-8 md:w-60 md:h-60">
        <div className=" bg-orange-400 md:w-78 md:h-90">
          <img
            className="h-90 w-78   shadow-md shadow-orange-500  transition-all duration-300  hover:border-orange-500  hover:scale-110 hover:brightness-50 "
            src={myimg}
            alt="Img"
          ></img>
        </div>
        </div>
      </div>
      <div className="grid place-content-center mt-2 ">
        <a className="mx-auto" href={pdfFile} download="Javed Resume">
          <button
            className="px-9 py-2 text-white rounded-2xl font-semibold bg-orange-500 hover:bg-yellow-500 ease-in duration-300"
            type="file"
            download="true"
          >
            Download-Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
