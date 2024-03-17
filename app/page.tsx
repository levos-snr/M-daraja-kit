//Import packages
import Image from "next/image";

//Import locally
import { SmallNav } from "@/components/SmallNav";
import intro from "../public/intro.png";
import SmoothScroll from "@/components/SmoothScroll";
import { NextPage } from "@/components/NextPage";

export default function Home() {
  return (
    <main className="w-4/5 p-5 mb-10 bg-myBgColor">
      <SmallNav />
      <h1 className="h1 text-myTextColor">
        Introducing M-Daraja-Kit
      </h1>
      <Image
        src={intro}
        className="w-full h-[30vh] object-cover mt-5"
        alt="maple"
      />
      <p className="mt-5 text-myGray">
        Embark on a journey of effortless financial transactions with
        M-Daraja-Kit, a cutting-edge toolkit meticulously crafted to streamline
        interactions with the Safaricom Daraja API. Picture a realm where
        complexities dissipate, and innovation thrives – that&apos;s where
        M-Daraja-Kit reigns supreme. Welcome to a realm of elegance and
        efficiency, where the power of React converges with the robustness of
        Node.js. M-Daraja-Kit empowers developers to orchestrate M-Pesa payments
        with finesse, be it within the depths of Node.js environments or the
        vibrant landscapes of React. Marvel at the artistry of M-Daraja-Kit as
        it elegantly bridges the gap between your application and the Safaricom
        Daraja API. Say goodbye to cumbersome integrations and hello to a world
        where simplicity is king. Embrace the future of fintech with
        M-Daraja-Kit. Seamlessly weave M-Pesa functionalities into your
        applications, unlocking a realm of possibilities for both developers and
        end-users alike. With M-Daraja-Kit, embark on a journey where every
        interaction is a symphony of modernity and stress-free execution. Say
        yes to efficiency, yes to innovation, and yes to a brighter future
        powered by M-Daraja-Kit.
      </p>
      <NextPage nextHref="installation" />
      <SmoothScroll />
    </main>
  );
}
