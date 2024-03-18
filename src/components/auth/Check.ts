import { useSession } from "next-auth/react";
export default function Check() {
  const { data: session } = useSession();
  if (
    session &&
    session.user &&
    session.user &&
    session.user.email !== "dekinousyonn@gmail.com" &&
    session.user.email !== "y230190@mail.ryukoku.ac.jp" &&
    session.user.email !== "ryukokuhorizon.member@gmail.com"
  )
    return true;
}
