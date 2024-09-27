import {
  handleGithubSignIn,
  handleGoogleSignIn,
  handleCredentialsSignIn,
} from "@/lib/actions";
import React from "react";
import {auth} from '@/lib/auth'

const LoginPage = async () => {
  console.log(await auth())
  return (
    <div>
      <form action={handleGithubSignIn}>
        <button>Github Login</button>
      </form>
      <form action={handleGoogleSignIn}>
        <button>Google Login</button>
      </form>
      <form action={handleCredentialsSignIn}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
