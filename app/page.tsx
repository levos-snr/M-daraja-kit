//Import packages
import Image from "next/image";

//Import locally
import { SmallNav } from "@/components/SmallNav";

export default function Home() {
  return (
    <main className="w-4/5 p-5 bg-myBgColor">
      <SmallNav />
      <h1>main page </h1>
    </main>
  );
}
