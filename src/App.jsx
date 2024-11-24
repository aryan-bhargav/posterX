import React from "react";
import Rectangle from "./components/rectangle";
import Rectangle2 from "./components/Rectangle2";
import Navbar from "./components/navbar";



function App() {

  return (
    <>
      <Navbar />
      <Rectangle text1="Discover the " text2="Art" text3=" of Fandom" top="412" />

      <div className=" flex mx-auto w-[506*2px] h-[721*2px] -mt-40 justify-center">
        <img src="src\assets\POSTER-MOCKUP.png" alt="" />
      </div>

      <div className="absolute top-[315px] -left-[178px] w-[357px] h-[357px] bg-[#862760] rounded-full blur-[150px] opacity-50" />
      <div className="absolute top-[460px] left-[1335px] w-[486px] h-[486px] bg-[#A26725] rounded-full blur-[200px] opacity-50" />
      <div className="absolute top-[1822px] left-[434px] w-[486px] h-[486px] bg-[#A26725] rounded-full blur-[200px] opacity-50" />

    </>
  );
}

export default App