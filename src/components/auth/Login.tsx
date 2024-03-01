import React from "react";
import { useSession, signIn } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div>
        <button
          onClick={() =>
            signIn("google", { callbackUrl : "/login" }, { prompt: "login" })
          }
        >
          ログイン
        </button>
      </div>
    );
  }
  return null;
}
