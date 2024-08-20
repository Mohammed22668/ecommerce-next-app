import Image from "next/image";
import React from "react";
export default function Home() {
  return (
    <main className="">
      Hello
      <Image
        src="/assets/images/carrefour-3.svg"
        alt="logo"
        width={200}
        height={200}
      />
    </main>
  );
}
