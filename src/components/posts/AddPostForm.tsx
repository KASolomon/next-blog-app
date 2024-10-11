"use client";
import { handleAddPost, handleRegister } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";
import FormStateMessage from "../form/FormStateMessage";

export interface AppFormState {
  error?: boolean;
  success?: boolean;
  message: string;
}
const AddPostForm = () => {
  const [state, modifiedAddPost
  ] = useFormState<AppFormState, FormData>(
    handleAddPost,
    { success: false, error: false, message: "" }
  );

  return (
    <form
      action={modifiedAddPost}
      className="flex flex-col gap-14 "
      style={{ minWidth: "95%" }}
    >
      <input
        type="text"
        name="title"
        placeholder="Post Title..."
        required
        className="p-4 rounded-md bg-background"
      />
      <textarea
        name="description"
        placeholder="Post Description..."
        required
        className="p-4 rounded-md bg-background"
      />
      {/* <input
        type="textarea"
        name="password"
        placeholder="Enter password"
        required
        className="p-4 rounded-md bg-background"
      /> */}

      <div className="flex ">
        <button
          className="bg-btn rounded-md p-4 m-auto text-white "
          style={{ width: "80%" }}
        >
          Add Post
        </button>
      </div>
      <FormStateMessage state={state} />
    </form>
  );
};

export default AddPostForm;
