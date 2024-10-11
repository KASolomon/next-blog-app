"use client";
import { handleCredentialsSignIn, handleGithubSignIn } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { AuthFormState } from "../register/RegisterForm";
import FormStateMessage from "../form/FormStateMessage";

const LoginForm = () => {
  const [state, modifiedCredentialsSignIn] = useFormState<
    AuthFormState,
    FormData
  >(handleCredentialsSignIn, { success: false, error: false, message: "" });

  const router = useRouter();
  // router.refresh()
  if (state.success) setTimeout(() => router.refresh(), 2000);
  console.log(state);

  return (
    <form
      action={modifiedCredentialsSignIn}
      className="flex flex-col gap-12 m-auto"
      style={{ width: "80%" }}
    >
      <input
        className="p-4 rounded-md bg-background"
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        className="p-4 rounded-md bg-background"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button
        className="bg-btn rounded-md p-4 m-auto text-white "
        style={{ width: "70%" }}
      >
        Login
      </button>
      <FormStateMessage state={state} />
    </form>
  );
};

export default LoginForm;
