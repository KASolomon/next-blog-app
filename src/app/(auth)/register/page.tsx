import { handleRegister } from "@/lib/actions";
import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className="bg-bgSoft text-2xl  flex flex-col justify-center my-4 items-center text-black dark:text-white py-8 px-4" 
      style={{minWidth : '90%'}}>
        <h3 className="font-bold text-5xl mb-24 text-center" >Join the Creative Agency</h3>
        <form
          action={handleRegister}
          className="flex flex-col gap-14 "
          style={{minWidth : '95%'}}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="p-4 rounded-md bg-background"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-4 rounded-md bg-background"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            required className="p-4 rounded-md bg-background"
          />
          <input
            type="password"
            name="passwordRep"
            placeholder="Repeat password"
            required className="p-4 rounded-md bg-background"
          />
          <div className="flex ">

          <button className="bg-btn rounded-md p-4 m-auto text-white " style={{width :'80%'}}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
