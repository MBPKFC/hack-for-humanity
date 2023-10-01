import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/utils/cn";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between bg-brand-blue px-4 py-2 text-white">
      <Link href="/">
        <Image src="/acs-logo.svg" alt="American Cancer Society Logo" width={80} height={80} />
      </Link>
      <img src="/images/img-6456-photo-room-11.png" className={cn(["max-h-11 w-auto", { hidden: router.route === "/" }])} />
    </div>
  );
};
