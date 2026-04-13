
export default function comment(CommentProps:{id:string}) {
  return (
    <>
      <div className="flex items-center p-5">
        <h1 className="pr-5 justify-center ">
          Commentary regarding photo {CommentProps.id}
        </h1>
        <button className="h-12 w-22 bg-blue-500 hover:bg-blue-700 text-white mr-3 py-2 px-4 rounded-full">
          button
        </button>
      </div>2
    </>
  );
}
