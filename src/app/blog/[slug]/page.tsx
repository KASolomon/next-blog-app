import React from "react";
import Image from "next/image";
const SinglePost = () => {
  return (
    <div className="flex w-full h-full my-10">
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
          <h1 className="text-5xl font-bold">Title</h1>
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
            <p>Kwesi Benchi</p>
          </div>
          <div>
            <p className="text-gray-400 text-2xl">Published</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sunt
          sapiente commodi fugiat accusamus at sed sint earum rem officia,
          repellendus culpa atque quidem! Dignissimos praesentium reiciendis
          expedita molestiae sunt? Voluptates ipsam adipisci quas itaque quasi
          sed fugit velit debitis voluptatibus laboriosam expedita earum labore
          maiores molestiae repudiandae, nemo vero tenetur. Ipsum quam libero
          atque ad. Quia blanditiis adipisci consequatur. Ullam, iure? Ducimus
          quos iste quia fuga nulla iusto pariatur a consequatur repellat quis
          tenetur optio sint dolorum iure vel dolor architecto, esse inventore
          ut, vero magnam cum rerum! Magnam!
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
