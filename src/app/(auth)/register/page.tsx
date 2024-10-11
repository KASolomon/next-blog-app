import { handleRegister } from "@/lib/actions";
import React from "react";
import RegisterForm from "@/components/register/RegisterForm";
const RegisterPage = () => {
  return (
    <div>
      <div
        className="bg-bgSoft text-2xl  flex flex-col justify-center my-4 items-center text-black dark:text-white py-8 px-4"
        style={{ minWidth: "90%" }}
      >
        <h3 className="font-bold text-5xl mb-24 text-center">
          Join the Creative Agency
        </h3>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
