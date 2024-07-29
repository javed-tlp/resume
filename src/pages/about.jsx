import React from "react";
import codeImg from "/image/coding.jpg";

const About = () => {
  return (
    <>
      <div className=" items-center mt-auto sm:grid sm:grid-cols-2 ">
        <div className="h-1/4 m-1 p-1  sm:w-auto sm:h-3/4 sm:ml-20">
          <img
            className=" border-orange-400 border-l-4 border-b-4 h-full w-full"
            src={codeImg}
            alt="codeimg"
          ></img>
        </div>
        <div className="m-1 sm:mt-24 sm:w-auto sm:mr-20 md:h-3/4 p-1">
          <h3 className="text-xl sm:text-2xl text-orange-600  underline font-bold">about me</h3>
          <p className="text-sm my-2 sm:text-lg  border-orange-400 border-l-2 border-b-2  p-2">
            Hello! I’m Javed Saifi, a passionate web developer with a knack for creating visually appealing and highly functional websites. With a solid foundation in HTML, CSS, JavaScript, and various modern frameworks, I specialize in delivering responsive and user-friendly web solutions.
            My journey in web development began with a fascination for how websites are built from scratch. Since then, I’ve honed my skills in front-end and back-end technologies, working on diverse projects ranging from interactive contact forms to complex data-driven applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
