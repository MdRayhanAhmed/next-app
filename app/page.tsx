import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>
        Hello <span>{session ? session.user!.name : "World."}</span>
      </h1>
      <Link href="/users">Home</Link>
      <ProductCard />
    </main>
  );
}
