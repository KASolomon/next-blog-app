import AddPostForm from '@/components/posts/AddPostForm';
import React from 'react'

const page = () => {
  return (
    <div>
      <div
        className="bg-bgSoft text-2xl  flex flex-col justify-center my-4 items-center text-black dark:text-white py-8 px-4"
        style={{ minWidth: "90%" }}
      >
        <h3 className="font-bold text-4xl mb-24 text-center">
            Add New Post
        </h3>
        <AddPostForm />
      </div>
    </div>
  );
}

export default page