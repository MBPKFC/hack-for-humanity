import Image from "next/image";
import { Button } from "@/library/Button";
import { Container } from "@/library/Container";
import Answer from '@/components/Answer'

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-between font-semibold">
      <div className="mb-12 mt-6">
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
      <h3 className="mt-6 max-w-[280px] text-center text-lg">
        Learn about health screenings and win prizes.
      </h3>
      <Button className="mt-6 w-full">Play</Button>
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
