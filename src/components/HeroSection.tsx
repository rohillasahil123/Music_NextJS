import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";


const HeroSection = () => {
  return (
    <div  className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className=" py-4 relative z-10 w-full text-center ">
      <Spotlight
        className="-top-20 left-0 md:left-80 md:-top-20 h-[500px] "
        fill="white"
      />
            <h1   className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Master the art of Music</h1>
            <p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Dive into our comprehensive music courses and transform your musical journey Today. Whether you are a biginner or lokking to refine your skills ,Join us to unlock your true potential. 
            </p>
        <div className="mt-5">
        <Link href={"/music"}> 
        <Button   className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        borderRadius="1.7rem">
          Explore Music
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
