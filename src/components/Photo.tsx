import Image from "next/image";
import React from "react";
import Comment from "./Comment";

const imageList: string[] = [];
for (let i = 1 ; i < 173; i++) {
  if (i < 10) {
    imageList.push("00" + i);
  } else if (i < 100) imageList.push("0" + i);
  else if (i < 1000) imageList.push(i.toString());
}

type galleryProps = {
  imageName: string;
}

function Gallery({imageName}:galleryProps) {
  return (
    <div className="flex">
      <Image
        id={imageName}
        src={`/images/bb8/bb8_${imageName}.jpg`}
        alt={`Image of ${imageName}`}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        height={1280}
        width={800}
      />
      <div className="flex align-center justify-center border bg-[#E5E2DB] border-[#C1C1C1]">
        <Comment id={imageName} />
      </div>
    </div>
  );
}

export default function Photo() {
  return (
    <div className=" top-0 max-w-250 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {imageList.map((name) => (
          <Gallery key={name} imageName={name} />
        ))}

       
      </main>
      
    </div>
  );
}
