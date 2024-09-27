import connectToMongo from "@/config/dbConn";
import { Users } from "@/config/models";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub, Google, ],
  callbacks: { async signIn({  user}) {
    try{
      if(user.email){
      
        connectToMongo()
        if(! await Users.exists({email : user.email})){
          await Users.create({
            email : user.email,
            img : user.image,
                username : user.name
            })
          }
          return true 
        }else{
        console.log('User account does not have an email.')
        return false
      }
    }catch(error){
        console.log(error)
        return false
    }
        
        
  } },

});
// Credentials({
//     credentials:{
//       email:{},
//       password:{}
//     },
//     authorize : async (credentials){
      
//       return true
//     }
//   })