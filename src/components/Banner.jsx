import React from "react";
import RocketData from "./RocketData";

function Banner() {
  return (
    <>
      <div className="showcase">
        <div className="overlay">
          <article className="uppercase text-center text-white font-extrabold">
            <h1 className=" header text-8xl">SpaceX World</h1>
            <h3>React App</h3>
          </article>
        </div>
        <div className="h-screen bg-blue-200">
          <RocketData />
        </div>
      </div>
    </>
  );
}

export default Banner;
