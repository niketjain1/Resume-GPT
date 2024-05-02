"use client";

import { Chat } from "@/components/chat";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen p-8 bg-gray-700">
      <Chat />
    </main>
  );
}
