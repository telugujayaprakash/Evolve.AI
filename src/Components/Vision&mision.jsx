import React from "react";
import vm from "../Assets/ai-vision.jpg";

export default function ViMi() {
  return (
    <div className="h-screen w-full px-32 flex items-center bg-[url('/src/Assets/2.jpg')]">
      <div className="flex flex-col gap-20">
        <div>
          <h2 className="text-6xl font-bold pb-10 uppercase">Vision</h2>
          <p className="text-lg w-3/5 text-center">
            To empower businesses of all sizes with seamless and innovative AI
            integration, driving a future where technology and human potential
            work hand-in-hand to unlock limitless possibilities.
          </p>
        </div>
        <div>
          <h2 className="text-6xl font-bold pb-10 uppercase">mission</h2>
          <p className="text-lg w-3/6 text-center">
            Our mission is to bridge the gap between businesses and cutting-edge
            AI technology. We provide expert AI model integration services,
            helping companies overcome resource or skill gaps to implement
            intelligent solutions that enhance productivity, innovation, and
            growth. Through tailored solutions, we strive to make AI accessible,
            efficient, and transformative for every business.
          </p>
        </div>
      </div>
      <div>
        <img src={vm} alt="itsanimage" className="shadow" />
      </div>
    </div>
  );
}
