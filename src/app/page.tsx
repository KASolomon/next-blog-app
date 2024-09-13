import HomeButtons from "@/components/home/HomeButtons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col flex-1 gap-12">
        <h1 className="text-8xl font-bold">Creative Thoughts Agency.</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          similique consequuntur ipsam laudantium, atque distinctio aliquid
          corporis? Facere necessitatibus iure rem, sit excepturi quae quis
          molestiae, eligendi temporibus cupiditate saepe.
        </p>
        <HomeButtons />
        <div className="relative w-3/4 min-h-20">
          <Image src={"/brands.png"} alt="" fill className="grayscale" />
        </div>
      </div>
      <div className="relative flex-1">
        <Image src="/hero.gif" alt="" fill className="max-w-xl m-auto" />
      </div>
    </div>
  );
}
