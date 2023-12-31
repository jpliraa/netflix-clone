'use client'

import { signIn } from "next-auth/react";

export default function UnauthPage() {
  return (
    <div>
      <button onClick={() => signIn("github")}>Sing In</button>
    </div>
  );
}