// Home.js
import React from "react";
import "./Components.css";

function Home() {
  return (
    <section className="bg-[url('/src/Assets/H.jpg')] flex justify-center items-center w-full	h-screen flex-col bg-cover">
      <h1 className="text-8xl text-white font-bold tracking-wider">
        EVOLVE AI
      </h1>
      <div className="h-px w-96 mt-2 bg-white mb-20"></div>
    </section>
  );
}

export default Home;
