import Image from "next/image"
import kws from "../../public/images/avatar/kwc.jpg";


export default function CommentList() {
  return (
   <>
   <ul className= "bg-white border-b border-[#C1C1C1]">
      <li>
        <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
          <Image
          src={kws}
          width={45}
          height={45}
          alt="img"
          className="rounded-full object-cover"
          />
          <p className="font-semibold">Kevin</p>
        </button>
      </li>
    <li>
        <button className="flex items-center h-[70px] w-full cursor-pointer px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
          <Image
          src="/images/avatar/saj.jpg"
          width={45}
          height={45}
          alt="img"
          className= "rounded-full object-cover"
          />
          <p className="font-semibold">Sarah</p>
        </button>
      </li>
    </ul>

  </>
  )
}
