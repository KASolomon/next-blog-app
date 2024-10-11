import GithubLogin from "@/components/login/GithubLogin";
import LoginForm from "@/components/login/LoginForm";
import {
  handleGoogleSignIn
} from "@/lib/actions";
import { auth } from "@/lib/auth";

export const metadata ={
  title: 'Login',
  description : 'Log into you creative ideas account.'
}

const LoginPage = async () => {


  return (
    <div
      className="bg-bgSoft text-2xl  flex flex-col justify-center items-center text-black dark:text-white py-8 px-4"
      style={{ width: "80vw", margin: "40px auto",  }}
    >
      <h3 className="font-bold text-4xl mb-24 text-center">Login</h3>
      <div className="flex flex-col gap-14 " style={{ minWidth: "95%" }}>
        <GithubLogin/>
        <form action={handleGoogleSignIn} className="flex justify-center">
          <button
            className="bg-white rounded-md p-4 m-auto text-black "
            style={{ width: "70%" }}
          >
            Google Login
          </button>
        </form>
        <hr className="m-auto" style={{width:'60vw'}}/>
        <h3 className="font-bold text-2xl text-center">Login with credentials</h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
