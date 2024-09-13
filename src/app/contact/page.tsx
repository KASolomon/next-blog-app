import React from "react";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className="flex ">
      <div className=" flex-1 ">
        <div className="relative w-3/4 h-3/4 m-auto">
          <Image src={"/contact.png"} alt="contactImg" fill />
        </div>
      </div>
      <div className=" flex-1">
        <form action="" className="flex flex-col gap-10">
          <input
            className="p-6 bg-bgSoft"
            type="text"
            name=""
            id=""
            placeholder="Full name"
          />
          <input
            className="p-6 bg-bgSoft"
            type="email"
            name=""
            id=""
            placeholder="Email (optional)"
          />
          <input
            className="p-6 bg-bgSoft"
            type="number"
            name=""
            id=""
            placeholder="Phone number (optional)"
          />
          <textarea
            className="p-6 bg-bgSoft"
            name=""
            id=""
            placeholder="Your comments..."
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-btn w-full p-6 rounded-md">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
