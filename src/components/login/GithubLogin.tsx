"use client"
import { handleGithubSignIn } from '@/lib/actions'
import React from 'react'
import { useFormState } from 'react-dom';
import { AuthFormState } from '../register/RegisterForm';
import FormStateMessage from "../form/FormStateMessage";

const GithubLogin = () => {
     const [githubFormState, modifiedGithubSignIn] =
       useFormState<AuthFormState>(handleGithubSignIn, {
         success: false,
         error: false,
         message: "",
       });
  return (
    <form action={modifiedGithubSignIn} className="flex justify-center">
      <button
        className="bg-white rounded-md p-4 m-auto text-black "
        style={{ width: "70%" }}
      >
        Github Login
      </button>
      <FormStateMessage state={githubFormState}/> 
    </form>
  );
}

export default GithubLogin