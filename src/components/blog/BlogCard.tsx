import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Post } from './BlogGrid'


interface Props{
blogItem : Post
}

const BlogCard = ({blogItem}:Props) => {
  return (
    <div className=" px-2 flex">
      <div className="flex flex-col gap-6 " >
        {blogItem.img && <div
          className="relative rounded-lg overflow-hidden"
          style={{ width: "95%", height: "420px" }}
        >
          <Image alt="" src={blogItem.img} className="object-cover " fill />
        </div>}

        <h3 className='text-3xl font-bold'>{blogItem.title}</h3>
        <p className='text-lg text-gray-500'>{blogItem.description}</p>
        <Link href={`/blog/${blogItem.slug}` }className='underline'>READ MORE</Link>
      </div>
      <div className="flex flex-col justify-center ">
        <p style={{ transform: "rotate(270deg)" }}>Date</p>
      </div>
    </div>
  );
}

export default BlogCard