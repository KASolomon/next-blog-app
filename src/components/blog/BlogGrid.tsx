import React from "react";
import BlogCard from "./BlogCard";
import appAxios from "@/config/appAxios";
import { ObjectId } from "mongoose";
import { getPosts } from "@/data/data";

export interface Post{
  author : ObjectId,
  id : ObjectId,
  title : string,
  description : string,
  img : string,
  slug : string
}
// const getPosts = async ()=>{
//   try{

//     const posts = await appAxios.get('/posts')
//     return posts.data
//   }catch(e){
//     console.log(e)
//   }
// }

const BlogGrid = async () => {

  const blogPosts : Post[] = await getPosts()
  // const blogPosts = [
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1523289619259-44358ba02ba5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1596725858508-70543890c732?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1523289619259-44358ba02ba5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1523289619259-44358ba02ba5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1596725858508-70543890c732?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  //   {
  //     title: "First Blog Post",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nisi nulla cum quos praesentium quam quisquam, iure eum optio at, porro sequi nostrum iusto hic ex nobis. Ratione, nam distinctio!",
  //     image:
  //       "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     blog_link: "",
  //   },
  // ];
  return (
    <div
className=" py-6 my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      style={{
        display: "grid",
        placeContent : 'center',
        position : 'relative',
        columnGap : '30px',
        rowGap : '45px'
      }}
    >
      {blogPosts.map((post) => (
        <BlogCard blogItem={post} key={post.id.toString()} />
      ))}
    </div>
  );
};

export default BlogGrid;
