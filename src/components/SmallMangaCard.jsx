import React from "react";

export const SmallMangaCard = ({ data }) => {
  return (
    <div>
      <div className="h-[150px]">
        <div className="flex gap-1 p-4">
          <div className="flex-1/3 overflow-hidden rounded-md cursor-pointer">
            <img
              src={data.cover}
              alt={data.title}
              className="rounded-md h-[100px] transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className="flex-2/3 flex flex-col items-end gap-2">
            <h3 className="text-xs text-end text-gray-800 font-semibold">
              {data.title.length > 30
                ? data.title.slice(0, 30) + "..."
                : data.title}
            </h3>
            <div className="flex flex-col gap-3 mt-3">
              {data.chapters.map((chapter, index) => {
                return (
                  <a key={index} href={chapter[1]} target="_blank">
                    <span className="bg-gray-300 rounded-lg px-2 py-1 inline-block hover:bg-black hover:text-white hover:cursor-pointer">
                      <p className="text-center text-xs font-semibold">
                        {chapter[0]}
                      </p>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-300 w-[60%] mx-auto" />
    </div>
  );
};
