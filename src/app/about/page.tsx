import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="flex ">
      <div className=" flex gap-14 flex-col flex-1 ">
        <h3 className="text-2xl text-btn font-bold">About Agency</h3>
        <h1 className="text-7xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas, flexibility, precision and quality. We give you
          the very best of service for your unique needs.
        </p>
        <div className="flex justify-between">
          <div>
            <p className="text-4xl text-btn font-bold">70+</p>
            <p>Years of experience</p>
          </div>
          <div>
            <p className="text-4xl text-btn font-bold">23 M+</p>
            <p>People reached</p>
          </div>
          <div>
            <p className="text-4xl text-btn font-bold">9 K+</p>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative m-auto w-5/6 h-full ">
          <Image src="/about.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
