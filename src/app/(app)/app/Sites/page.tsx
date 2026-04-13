import ContentBlock from "@/components/ContentBlock"
import Sites from "@/components/Sites"


export default function page() {
  return (
     <>
          <div className="mt-5 grid grid-cols-3 grid-rows-[45px_1fr] gap-4">
            <div className="row-start-1 row-span-full col-start-1 col-span-full">
              <ContentBlock>
                <Sites/>
              </ContentBlock>
            </div>
          </div>
        </>  
  )
}
