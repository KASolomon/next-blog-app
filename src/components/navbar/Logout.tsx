
import React from "react";
import { signOut } from "@/lib/auth";
import { handleSignOut } from "@/lib/actions";
const Logout = () => {
  return (
    <form action={handleSignOut}>
      <button
        className={
          "bg-white rounded-md text-bgSoft text-xl p-3 text-center min-w-28  font-bold"
        }
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default Logout;
