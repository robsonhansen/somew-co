import { useState } from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const [loading, setLoading] = useState(false);

  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="Somew.co Logo"
        width={120}
        height={60}
        className={`w-auto h-full ${loading ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setTimeout(() => setLoading(true), 4000)}
        priority
      />
    </div>
  );
}
