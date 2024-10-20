import React from "react";

export default function Aboutc() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/2 bg-[url('/src/Assets/ais.avif')] bg-no-repeat bg-cover bg-center"></div>
      <div className="w-full h-1/2 bg-[url('/src/Assets/2.jpg')] bg-cover bg-no-repeat flex gap-32 justify-center items-center">
        <h2 className="text-6xl font-bold uppercase flex-none">
          about company
        </h2>
        <p className="w-2/5 text-lg">
          <b>Evolve.AI</b>
          <br />
          Our company specializes in providing seamless AI integration services
          to businesses. We help companies that lack the resources or skilled
          talent to successfully implement AI models into their applications.
          From AI-powered automation to intelligent data-driven solutions, our
          expert team ensures that businesses of all sizes can harness the power
          of AI to enhance their operations, improve decision-making, and stay
          competitive in the digital era. We bridge the gap between technology
          and innovation, making AI accessible and efficient for everyone.
        </p>
      </div>
    </div>
  );
}
