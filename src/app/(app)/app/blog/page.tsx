import CommentList from "@/components/comment-list"
import CommentDetails from "@/components/CommentDetails";
import ContentBlock from "@/components/ContentBlock";
import Photo from "@/components/Photo";
import Post from "@/components/Post"; 

export default function page() {
  return (
    <>
      <div className="mt-5 grid grid-cols-3 grid-rows-[45px_1fr] gap-4">
        <div className="row-start-1 row-span-full col-start-1 col-span-full">
          <ContentBlock>
            <Post />
          </ContentBlock>
        </div>
      </div>
    </>  
   );
}
