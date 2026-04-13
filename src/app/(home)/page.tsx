import LeftHero from "../../components/LeftHero"
import RightHero from "../../components/RightHero"
export default function page() {
  return (
    <>
    <div className="hero flex flex-col md:flex-row" >
      <body className="flex sm:w-15">
        <LeftHero />
        <RightHero />
    </body>
    </div>
    </>
  )
}
 