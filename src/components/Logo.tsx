import Image from "next/image"
import logobug from "../../public/svg/logobug.svg"
import Link from "next/link"

export default function Logo() {
  return (
   <Link href="/"><Image
    src = {logobug}
    alt = "logobug"
    width={90}
    height={90}
     /></Link> 
  )
}
