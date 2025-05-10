import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <Image src="/logo.png" alt="Somew.co Logo" width={120} height={60} className="w-auto h-full" priority />
    </div>
  );
}
