"use client";
import { handleRegister } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";
import FormStateMessage from "../form/FormStateMessage";

export interface AppFormState {
  error?: boolean;
  success?: boolean;
  message: string;
}
const RegisterForm = () => {
  const [state, modifiedRegisterAction] = useFormState<AppFormState, FormData>(
    handleRegister,
    { success: false, error: false, message: "" }
  );

  return (
    <form
      action={modifiedRegisterAction}
      className="flex flex-col gap-14 "
      style={{ minWidth: "95%" }}
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
        required
        className="p-4 rounded-md bg-background"
      />
      <input
        type="password"
        name="passwordRep"
        placeholder="Repeat password"
        required
        className="p-4 rounded-md bg-background"
      />
      <div className="flex ">
        <button
          className="bg-btn rounded-md p-4 m-auto text-white "
          style={{ width: "80%" }}
        >
          Register
        </button>
      </div>
      <FormStateMessage state={state} />
    </form>
  );
};

export default RegisterForm;
