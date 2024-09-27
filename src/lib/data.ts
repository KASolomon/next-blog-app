import connectToMongo from "@/config/dbConn"
import { Posts, Users } from "@/config/models"
import { ObjectId } from "mongoose"


export const getPosts = async ()=>{
    try {
        connectToMongo()
        const posts = await Posts.find({}).exec()
        console.log(posts)
        return posts
        
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch posts!')
    }
}
export const getPost = async (slug:string)=>{
    try {
        connectToMongo();
        const post = await Posts.findOne({slug}).populate('author').exec()
        return post
        
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch specified post!')
    }
}
export const getUsers = async ()=>{
    try {
        connectToMongo();
        const users = await Users.find().exec()
        return users
        
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch users!')
    }
}
export const getUser = async (id: ObjectId)=>{
    try {
        connectToMongo();
        const user = await Users.findById(id).exec()
        return user
        
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch user!')
    }
}