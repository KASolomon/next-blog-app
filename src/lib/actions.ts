"use server";

import connectToMongo from "@/config/dbConn";
import { auth, signIn, signOut } from "./auth";
import bcrypt from 'bcryptjs'
import { Users } from "@/config/models";
export const handleGithubSignIn = async () => {
  await signIn("github");
  console.log(await auth())
};
export const handleGoogleSignIn = async () => {
  await signIn("google");
  console.log(await auth());
};

export const handleCredentialsSignIn = async (formData:FormData)=>{

  try {
    await signIn('credentials', formData)
    
  } catch (error) {
    console.log('Credentials validation failed')
    //Show user feedback when validation fails
  }
console.log(await auth());
}

export const handleSignOut = async () => {
  await signOut({redirectTo:'/login'});

};

export const handleRegister = async (formData:FormData)=>{
const {username, password, passwordRep, email} = Object.fromEntries(formData)
console.log(password)
if(password !== passwordRep){
  throw new Error('Invalid data')
}
//hash password and store in database
const hashSalt = bcrypt.genSaltSync(10)
const passHash = bcrypt.hashSync(password.toString(),hashSalt)
try {
  connectToMongo()
  await Users.create({
    username, 
    email, password : passHash
  })
  //give feedback about user success
} catch (error) {
  console.log(error)
  throw new Error('Failed to create new user credentials')
}

}