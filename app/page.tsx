import Image from "next/image";
import { cormorantGaramond } from "./assets/fonts";


export default function Home() {
  return (
    <>
      <header className={`flex justify-center ${cormorantGaramond.className}`}>
        <Image 
          src="/self-portrait.png" 
          alt="Fikri Albaihaqi Self Portrait" 
          width={320} 
          height={0} 
          className="absolute top-32"
        />
        <h1 className="absolute top-8 left-[30%] text-8xl font-semibold mix-blend-exclusion">
          Fikri <br /> Albaihaqi
        </h1>
        <h1 className="absolute bottom-8 right-[30%] text-8xl font-semibold mix-blend-exclusion">
          Front end <br /> Developer
        </h1>
      </header>

      <main className="">

      </main>
    </>
  );
}
