import React from "react";

export default function Services() {
  return (
    <div className="w-full h-screen bg-[url('/src/Assets/2.jpg')]">
      <h4 className="text-6xl font-bold text-center py-20">Services</h4>
      <div className="flex gap-1 w-full justify-center">
        <div class="block max-w-xs p-6 bg-white border border-gray-200 rounded-sm mt-10">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Custom AI Integration:{" "}
          </h5>
          <p class="font-normal text-gray-700 ">
            We tailor AI models to meet the specific needs of your business,
            seamlessly integrating intelligent solutions that enhance your
            operations and capabilities.
          </p>
        </div>
        <div class="block max-w-xs p-6 bg-gray-100 border border-gray-200 rounded-sm mt-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            AI-Powered Growth Recommendations:{" "}
          </h5>
          <p class="font-normal text-gray-700 ">
            Our team provides expert recommendations on the latest AI-driven
            trends and technologies to boost your company's growth and keep you
            competitive in the market.
          </p>
        </div>
        <div class="block max-w-xs p-6 bg-black border border-gray-200 rounded-sm">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
            Data Simplification with AI:{" "}
          </h5>
          <p class="font-normal text-gray-300 ">
            We help simplify and analyze your large datasets or complex
            statistics using AI, providing insights that drive smarter
            decision-making and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
