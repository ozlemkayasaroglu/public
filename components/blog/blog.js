import Image from "next/image";





export default function Blog() {



  return (
<>
<div className="flex justify-center items-center bg-gradient-to-b from-teal-100 to-white">
  <div className="text-center mt-12">
    <span className="font-xs font-bold">#Trend&amp;News</span>
    <h2 className="mt-4 mb-2 font-bold text-3xl">Blog</h2>
    <p className="max-w-xs text-sm">
      Check out latest post to learn more about the different treatments and procedures.
      
    </p>
  </div>
</div>

    <div className="flex justify-center items-center mt-12">
      <div className="w-full max-w-4xl px-4">
        <div className="grid grid-cols-3 gap-8">
      
          <div className="text-left">
            <Image src="/images/1.jpg" alt="before" width={400} height={400} />
            <p className="font-bold text-xs text-black whitespace-nowrap mt-4">19.01.2023</p>
            <h2 className="font-bold text-sm text-black whitespace-nowrap mt-2">Smile Beauty: Dental Implant</h2>
            <p className="text-xs text-black mt-2">
              innovations in the realm of medicine are also happening as a
              result of advancing technology.
            </p>
            <p className="text-xs font-bold uppercase text-black mt-4">read more...</p>
            <p className="text-xs text-black mt-2">07 Jan 2022 +5 mins read</p>
          </div>
       
          <div className="text-left">
            <Image src="/images/1.jpg" alt="before" width={400} height={400} />
            <p className="font-bold text-xs text-black whitespace-nowrap mt-4">19.01.2023</p>
            <h2 className="font-bold text-sm text-black whitespace-nowrap mt-2">Smile Beauty: Dental Implant</h2>
            <p className="text-xs text-black mt-2">
              innovations in the realm of medicine are also happening as a
              result of advancing technology.
            </p>
            <p className="text-xs font-bold uppercase text-black mt-4">read more...</p>
            <p className="text-xs text-black mt-2">07 Jan 2022 +5 mins read</p>
          </div>
        
          <div className="text-left">
            <Image src="/images/1.jpg" alt="before" width={400} height={400} />
            <p className="font-bold text-xs text-black whitespace-nowrap mt-4">19.01.2023</p>
            <h2 className="font-bold text-sm text-black whitespace-nowrap mt-2">Smile Beauty: Dental Implant</h2>
            <p className="text-xs text-black mt-2">
              innovations in the realm of medicine are also happening as a
              result of advancing technology.
            </p>
            <p className="text-xs font-bold uppercase text-black mt-4">read more...</p>
            <p className="text-xs text-black mt-2">07 Jan 2022 +5 mins read</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex justify-center items-center mt-10 mb-24">
        <button className="border text-md border-black uppercase  text-sm m-4 p-3">
          see all posts
        </button>
      </div>
    
     </>
  
  );
}