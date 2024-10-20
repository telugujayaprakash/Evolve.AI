// AboutUs.js
import React from "react";
import jp from "../Assets/jp.jpg";
import manikanta from "../Assets/manikanta.jpg";
import bharath from "../Assets/barath.jpg";
import srivardhan from "../Assets/srivardhan.jpg";
import sadvi from "../Assets/sadvi.jpg";
import mythreya from "../Assets/mythreya.jpg";

function AboutUs() {
  return (
    <div className="w-full h-screen bg-[url('/src/Assets/2.jpg')]">
      <div className="text-center text-6xl font-bold">Who we are?</div>
      <div className="flex h-2/4 items-center justify-center gap-32">
        <div>
          <div></div>
          <img
            src={jp}
            alt=""
            className="w-52 rounded-full border-solid border-2 border-stone-950 p-1"
          />
          <h6 className="text-center text-2xl font-bold">Jayaprakash</h6>
          <h4 className="text-center">Founder</h4>
        </div>
        <div>
          <img
            src={manikanta}
            alt=""
            className="w-52 rounded-full border-solid border-2 border-stone-950 p-1"
          />
          <p className="text-center text-2xl font-bold">Manikanta</p>
          <h4 className="text-center">Co-Founder</h4>
        </div>
      </div>
      <div className="flex h-1/2 justify-center gap-32 mt-10">
        <div>
          <img
            src={srivardhan}
            alt=""
            className="w-32 rounded-full border-solid border-2 border-stone-950 p-1"
          />
          <h5 className="text-center text-xl font-bold">Srivardhan</h5>
          <h6 className="text-center">Developer</h6>
        </div>
        <div>
          <img
            src={bharath}
            alt=""
            className="w-32 rounded-full border-solid border-2 border-stone-950 p-1"
          />
          <h5 className="text-center text-xl font-bold">Bharath</h5>
          <h6 className="text-center">Media Marketing</h6>
        </div>
        <div>
          <img
            src={sadvi}
            alt=""
            className="w-32 rounded-full border-solid border-2 border-stone-950 p-1"
          />
          <h5 className="text-center text-xl font-bold">Sadvi</h5>
          <h6 className="text-center">Designer</h6>
        </div>
        <div>
          <img
            src={mythreya}
            alt=""
            className="w-32 rounded-full border-solid border-2 border-stone-950 p-1"
          />
          <h5 className="text-center text-xl font-bold">Mythreya</h5>
          <h6 className="text-center">Media Marketing</h6>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
