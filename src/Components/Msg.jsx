import React from "react";
import image from "../Assets/evolve-image.jpg";

export default function Msg() {
  return (
    <div className="px-32 flex w-full h-screen justify-center items-center gap-80 bg-[url('/src/Assets/2.jpg')]">
      <div className="w-3/6">
        <h2 className="uppercase text-6xl font-bold pb-10">
          message from our founders
        </h2>
        <p className="text-lg text-center">
          At Evolve.AI, we are driven by a passion for AI and a desire to help
          businesses unlock its potential. As AI/ML students, we've seen how
          transformative AI can be, but also the challenges companies face in
          implementing it. Our mission is to make AI integration simple,
          efficient, and impactful for businesses of all sizes. We're excited to
          bring innovative solutions that bridge the gap between technology and
          real-world application. Together, we can shape the future with AI.
        </p>
      </div>
      <div>
        <img
          src={image}
          alt="evolve-image"
          className="w-72 shadow rounded-sm"
        />
      </div>
    </div>
  );
}
