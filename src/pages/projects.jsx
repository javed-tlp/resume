import React from "react";
import todo from "/image/todo.png";
import coockr from "/image/coockr.png";
import bookstore from "/image/bookstore.png";

const Projects = () => {
  return (
    <div className="p-2">
      <div className="h-2/3 m-5 sm:flex gap-5 justify-center items-center">
        <img
          className="sm:rounded-2xl border-2 border-orange-300 sm:w-2/5"
          src={todo}
          alt="project"
        />
        <div className=" sm:w-3/5 h-auto p-2 text-left  border-orange-400 border-l-2 border-b-2">
          <p className="text-lg font-bold ">Project Name: Todo List App</p>
          <hr className="my-1 border-black" />
          <p className="font-semibold">Description: </p>
          <p className="text-md leading-8 tracking-wide">
            This is a simple todo list app built with react, node and
            mongodb.that allows users to add, delete and mark the task.
          </p>
        </div>
      </div>

      <div className="h-2/3 m-5 sm:flex gap-5 justify-center items-center">
        <img
          className="sm:rounded-2xl border-2 border-orange-300 sm:w-2/5"
          src={coockr}
          alt="project"
        />
        <div className=" sm:w-3/5 h-auto p-2 text-left border-orange-400 border-l-2 border-b-2">
          <p className="text-lg font-bold ">Project Name: Recipe App</p>
          <hr className="my-1 border-black" />
          <p className="font-semibold">Description: </p>
          <p className="text-md leading-8 tracking-wide">
            This is a responsive web application that allows users to create,
            edit and delete recipes. Users are able to search for specific
            recipe names in the database. an external api has been used for
            dummy data generation.
          </p>
        </div>
      </div>

      <div className="h-2/3 m-5 sm:flex gap-5 justify-center items-center">
        <img
          className="sm:rounded-2xl border-2 border-orange-300 sm:w-2/5"
          src={bookstore}
          alt="project"
        />
        <div className=" sm:w-3/5 h-auto p-2 text-left  border-orange-400 border-l-2 border-b-2">
          <p className="text-lg font-bold ">Project Name: Bookstore App</p>
          <hr className="my-1 border-black" />
          <p className="font-semibold">Description: </p>
          <p className="text-md leading-8 tracking-wide">
            This is a responsive web application that allows users to create,
            edit and delete recipes. Users are able to search for specific
            recipe names in the database. an external api has been used for
            dummy data generation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
