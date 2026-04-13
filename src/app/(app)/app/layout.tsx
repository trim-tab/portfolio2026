import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import BackgroundPattern from "@/components/background-pattern";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
  <>
 <main className= "bg-white  w-full absolute top-0 -z-4">
  <BackgroundPattern />
  <div className = "flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
    <AppHeader />
    {children}
    <AppFooter />
  </div>
  </main>
 
  </>
    )
}
