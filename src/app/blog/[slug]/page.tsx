import React from "react";
import Image from "next/image";
import { Suspense } from "react";
import { getPost, getUser } from "@/lib/data";
interface Props {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
}

// const getPost = async (postId:number )=>{
//   try{
//     const post = await appAxios.get(`/posts/${postId}`)

//     return post.data
//   }catch(e){
//     console.log(e, 'Error while fetching post.')
//   }
// }

// const getUser = async (userId : number)=>{
//   try{
//     const userResponse = await appAxios.get(`/users/${userId}`)
//     return userResponse.data
//   }catch(e){
// console.log(e)
//   }
// }

export const generateMetadata = async ({ params }: Props) => {
  const currentPost = await getPost(params.slug);
  return {
    title: currentPost.title,
    description: currentPost.description,
  };
};

const SinglePost = async ({ params }: Props) => {
  const currentPost = await getPost(params.slug);

  return (
    <div className="flex w-full h-full my-10 justify-center lg:justify-start">
      {currentPost.img && (
        <div className="relative w-1/3 min-h-screen overflow-hidden hidden lg:block">
          <Image
            src={currentPost.img}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <div className="flex flex-col w-2/3 gap-16 p-6 lg:ml-16">
        <div>
          <h1 className="text-5xl font-bold">{currentPost.title}</h1>
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
              src={
                currentPost.author.img
                  ? currentPost.author.img
                  : "/noavatar.png"
              }
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div>
            <p className="text-gray-400 text-2xl">Author</p>
            <p>{currentPost.author.username}</p>
          </div>
          <div>
            <p className="text-gray-400 text-2xl">Published</p>
            <p>{currentPost.createdAt.toLocaleDateString()}</p>
          </div>
        </div>
        <div>{currentPost?.description}</div>
      </div>
    </div>
  );
};

export default SinglePost;
