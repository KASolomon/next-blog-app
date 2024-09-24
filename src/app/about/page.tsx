import React from "react";
import Image from "next/image";

export const metadata = {
  title : 'About',
  description : 'Learn about the creative ideas agency'
}

const AboutPage = () => {
  return (
    <div className=" my-10 flex flex-col lg:flex-row lg:text-left text-center items-center">
      <div className=" flex gap-14 flex-col flex-1 ">
        <h3 className="text-2xl text-btn font-bold">About Agency</h3>
        <h1 className="text-5xl font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas, flexibility, precision and quality. We give you
          the very best of service for your unique needs.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
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
      <div className="flex-1" style={{height : '50rem'}}>
        <div className="relative m-auto w-5/6 h-5/6" >
          <Image src="/about.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
