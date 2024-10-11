import HomeButtons from "@/components/home/HomeButtons";
import { auth } from "@/lib/auth";
import Image from "next/image";

const  page =  async ()=> {
  console.log(await auth());
  return (
    <div className="flex flex-col text-center lg:flex-row lg:text-left lg:items-center">
      <div className="flex flex-col flex-1 gap-12 my-6">
        <h1 className="text-6xl font-bold">Creative Thoughts Agency.</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          similique consequuntur ipsam laudantium, atque distinctio aliquid
          corporis? Facere necessitatibus iure rem, sit excepturi quae quis
          molestiae, eligendi temporibus cupiditate saepe.
        </p>
        <HomeButtons />
        <div className="relative w-full h-full max-h-16 lg:w-3/4 min-h-16 ">
          <Image src={"/brands.png"} alt="" fill className="grayscale m-auto min-w-36" />
        </div>
      </div>
      <div className=" flex-1" style={{ height: " 50rem", }} >

          <div style={{ width: "90%", height: "90%"}} className={'relative'}>
            <Image src="/hero.gif" alt="" fill className="max-w-xl m-auto" />
          </div>

      </div>
    </div>
  );
}

export default page