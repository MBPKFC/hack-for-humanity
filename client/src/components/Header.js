import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between bg-brand-blue text-white py-2 px-4">
      <Link href="/">
        <Image
          src="/acs-logo.svg"
          alt="American Cancer Society Logo"
          width={80}
          height={80}
        />
      </Link>
      {/* <button className="py-2 px-4 rounded-full font-bold bg-white text-[#ff0000]">Get Screened</button> */}
    </div>
  );
};
