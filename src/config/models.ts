import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String, 
        required : true,
        unique : true,
        min : 3,
        max : 20
    },
    email: {
        type :String,
        required : true,
        unique : true,
        max : 50
    },
    password : {
        type : String,
        min : 6
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    img : String
}, {timestamps : true})

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref : 'users',
      required : true
    },
    img: String,
    slug : {
        type : String,
        required : true,
        unique : true
    }
  },
  { timestamps: true }
);

export const Users = mongoose.models?.users || mongoose.model('users',userSchema)
export const Posts = mongoose.models?.posts || mongoose.model("posts", postsSchema);