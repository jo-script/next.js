import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-[#FDF8EE] px-[5%]  ">

      {/* logo */}
      <div className="flex items-center gap-2">
        <Image src='/img/logo.svg' width={50} height={50} alt="logo" />
        <h3 className="text-[#1D1D1D] font-bold text-[24px]">Book Store</h3>
      </div>

      <div className="flex items-center gap-[60px]">

        {/* links */}
        <div className="flex items-center gap-[45px] max-[970px]:hidden">
          <Link href='/' className="hover:text-[#4D2C5E]">Home</Link> 
          <Link href='/about' className="hover:text-[#4D2C5E]">About</Link>
          <Link href='/content' className="hover:text-[#4D2C5E]">Content</Link>
          <Link href='/courses' className="hover:text-[#4D2C5E]">Courses</Link>
          <Link href='/serves' className="hover:text-[#4D2C5E]">Serves</Link>
        </div>

        <button className="w-[150px] h-[45px] bg-[#4D2C5E] hover:bg-[#755187] cursor-pointer rounded-full text-white font-bold">Sign in</button>
      </div>
    </div>
  )
}
