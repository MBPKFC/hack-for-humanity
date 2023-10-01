import { Button } from "@/library/Button";
import { Container } from "@/library/Container";
import Image from "next/image";
import { useRouter } from 'next/router'

import { createUser } from "../utils/API";

export default function Home() {
  const router = useRouter()

  const clickHandler = async (e, url) => {
    e.preventDefault();

    // is userId already exists in local storage then continue to page redirect
    if (localStorage.getItem("userId")) return pageRedirect(url);

    try {
      const res = await createUser({});
      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const user = await res.json();
      console.log(user);
      localStorage.setItem("userId", user.id);
    } catch (err) {
      console.error(err);
    }
     pageRedirect(url);
  };

  const pageRedirect = (url) => {
   console.log(url)
   router.push(`/${url}`)
  };

  return (
    <Container className="justify-between flex flex-col items-center font-semibold">
      <div className="mt-6 mb-12">
        <h1 className="text-4xl font-bold">ScreenSmart:</h1>
        <h2 className="text-lg">Your path to Better Health</h2>
      </div>
      <Image
        src="/images/img-6456-photo-room-11.png"
        alt="hero mascot"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-1/2"
      />
      <h3 className="text-lg text-center mt-6 max-w-[280px]">
        Learn about health screenings and win prizes.
      </h3>
      <Button onClick={(e) => clickHandler(e, "game")} className="w-full mt-6">
        Play
      </Button>
      <p className="mt-6">Sponsored by</p>
      <Image
        src="/images/american-cancer-society-logo-1.png"
        alt="american cancer society logo"
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-1/2"
      />
    </Container>
  );
}
