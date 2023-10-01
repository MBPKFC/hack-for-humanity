import { Button } from "@/library/Button";
import { Container } from "@/library/Container";
import Image from "next/image";

export default function Home() {
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
         <Button className="w-full mt-6">Play</Button>
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
