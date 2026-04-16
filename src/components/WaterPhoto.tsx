import Image from "next/image";
import React from "react";

const imageList: string[] = [];
for (let i = 1 ; i < 6; i++) {
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
        src={`/images/water/water_${imageName}.jpg`}
        alt={`Image of ${imageName}`}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        height={1280}
        width={800}
      />
     
    </div>
  );
}

export default function WaterPhoto() {
  return (
    <div className=" top-0 max-w-250 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20">
      <main className="flex flex-col gap-[20px] row-start-2 items-center sm:items-start">
        {imageList.map((name) => (
          <Gallery key={name} imageName={name} />
        ))}

       
      </main>
      
    </div>
  );
}
