import React from "react";
import data from "../temp.json";
import { SmallMangaCard } from "./SmallMangaCard";

export const SideBar = () => {
  return (
    <aside className="my-10 min-h-screen sticky top-0">
      <h4 className="bg-red-500 text-2xl rounded-t-md py-3 text-white text-center font-semibold">
        New Manga
      </h4>
      <div className="flex flex-col gap-3 border border-gray-200 shadow-md rounded-b-md">
        {data.slice(0, 5).map((manga, i) => {
          return (
            <div key={i}>
              <SmallMangaCard data={manga} />
            </div>
          );
        })}
      </div>
    </aside>
  );
};
