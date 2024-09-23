import React from "react";
import Image from "next/image";
import appAxios from "@/config/appAxios"
interface Props{
  params :{[key : string] : string},
  searchParams :{[key : string] : string},
}

const getPost = async (postId:number )=>{
  try{
    const post = await appAxios.get(`/posts/${postId}`)

    return post.data
  }catch(e){
    console.log(e, 'Error while fetching post.')
  }
}

const getUser = async (userId : number)=>{
  try{
    const userResponse = await appAxios.get(`/users/${userId}`)
    return userResponse.data
  }catch(e){
console.log(e)
  }
}

const SinglePost = async ({params, searchParams} : Props) => {
  // console.log(params, searchParams)
  const currentPost = await getPost(parseInt(params.slug))
  const {username} = await  getUser(parseInt(currentPost.userId))
  return (
    <div className="flex w-full h-full my-10 justify-center lg:justify-start">
      <div className="relative w-1/3 min-h-screen overflow-hidden hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col w-2/3 gap-16 p-6 lg:ml-16">
        <div>
          <h1 className="text-5xl font-bold">{currentPost?.title}</h1>
        </div>
        <div className="flex  items-center gap-20">
          <div
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              overflow: "hidden",
              borderRadius: "50%",

            }}

          >
            <Image
              src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              // className="rounded-full"
            />
          </div>
          <div>
            <p className="text-gray-400 text-2xl">Author</p>
            <p>{username}</p>
          </div>
          <div>
            <p className="text-gray-400 text-2xl">Published</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div>
         {currentPost?.body}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
