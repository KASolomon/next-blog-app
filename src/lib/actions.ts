"use server";

import connectToMongo from "@/config/dbConn";
import { auth, signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { Users } from "@/config/models";
import { AuthFormState } from "@/components/register/RegisterForm";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export const handleGithubSignIn = async (previousState: AuthFormState) => {
  try {
    await signIn("github", { redirectTo: "/" });

    return { success: true, message: "Logged in" };
  } catch (error: any) {
    // console.log(error, 'Github action error');

    if (error.message == "NEXT_REDIRECT") throw error;

    // if (error instanceof AuthError ){
    //   return { error: true, message: error?.message };
    // }
    return { error: true, message: "This github account has no user email." };
  }
};
export const handleGoogleSignIn = async () => {
  await signIn("google", { redirectTo: "/" });

};

export const handleCredentialsSignIn = async (
  previousState: AuthFormState,
  formData: FormData
) => {
  try {
    await signIn("credentials", formData);

    
    return { success: true, message: "Login successful." };
  } catch (error: any) {
    if (error.message === "NEXT_REDIRECT")
      return { success: true, message: "Login successful." };
    return { error: true, message: "Invalid username or password." };
  }
};

export const handleSignOut = async () => {
  await signOut({ redirectTo: "/login" });
};

export const handleRegister = async (
  previousState: AuthFormState,
  formData: FormData
) => {
  const { username, password, passwordRep, email } =
    Object.fromEntries(formData);
  console.log(password);
  if (password !== passwordRep) {
    return { error: true, message: "Passwords do not match." };
  }
  //hash password and store in database
  const hashSalt = bcrypt.genSaltSync(10);
  const passHash = bcrypt.hashSync(password.toString(), hashSalt);
  try {
    connectToMongo();
    if (await Users.exists({ $or: [{ username }, { email }] }).exec())
      return {
        error: true,
        message: "This username or email is already in use.",
      };
    await Users.create({
      username,
      email,
      password: passHash,
    });
    //give feedback about user success
    setTimeout(() => redirect("/login"), 2000);
    return { success: true, message: "Registration successful." };
  } catch (error) {
    console.log(error);
    return {
      error: true,
      message: "Failed to create new user credentials. Please try again.",
    };
  }
};
