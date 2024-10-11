"use server";

import connectToMongo from "@/config/dbConn";
import { auth, signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { Posts, Users } from "@/config/models";
import { AppFormState } from "@/components/register/RegisterForm";
import { redirect } from "next/navigation";

export const handleGithubSignIn = async (previousState: AppFormState) => {
  try {
    await signIn("github", { redirectTo: "/" });

    return { success: true, message: "Logged in" };
  } catch (error: any) {
    if (error.message == "NEXT_REDIRECT") throw error;
    return { error: true, message: "This github account has no user email." };
  }
};
export const handleGoogleSignIn = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const handleCredentialsSignIn = async (
  previousState: AppFormState,
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
  previousState: AppFormState,
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

interface Post {
  title: string, 
  description : string, 
  img : string
}
export const handleAddPost = async (
  previousState: AppFormState,
  formData: FormData
) => {
  const {title, description,img } = Object.fromEntries(formData) as unknown as Post

  //add the current user's ID as the value for the 'author' field when creating post. Add a slug as well


  const activeSession = await auth()
  const author = activeSession?.user._id
  const slug = title.toLowerCase().split(" ").join('-')

  try {
    await Posts.create({
      title, description, img, slug, author
    })
    return {
      success: true,
      message: "Blog updated.",
    };
  } catch (error) {
    console.log(error)
    return {
      error: true,
      message: "Failed to create post.",
    };
  }
};
