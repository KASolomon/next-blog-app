import { handleGithubSignIn,handleGoogleSignIn } from "@/lib/actions";
import React from "react";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubSignIn}>
        <button>Github Login</button>
      </form>
      <form action={handleGoogleSignIn}>
        <button>Google Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
