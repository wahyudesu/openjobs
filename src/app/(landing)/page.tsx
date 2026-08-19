"use client";

import { useRouter } from "next/navigation";
import { AIInput } from "@/components/jobs-input";


export default function Home() {
  const router = useRouter();

  function handleSubmit(value: string) {
    const q = value.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <main className="flex h-full flex-col items-center justify-center gap-6 overflow-hidden px-4">
      <h1 className="text-5xl font-bold tracking-tight">JobSearch</h1>
      <div className="w-full max-w-xl">
        <AIInput
          onSubmit={handleSubmit}
          placeholder="Cari lowongan kerja..."
        />
      </div>
    </main>
  );
}
