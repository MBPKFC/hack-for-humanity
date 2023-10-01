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
      <Image
        src="/images/img-6456-photo-room-11.png"
        alt="hero mascot"
        width={0}
        height={0}
        sizes="100vw"
        className={cn(["max-h-11 w-min", { hidden: router.route === "/" }])}
      />
    </div>
  );
};
