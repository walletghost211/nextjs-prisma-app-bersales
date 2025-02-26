import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    return <p>You need to sign in to view this page.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.email}</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}