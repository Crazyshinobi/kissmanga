import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export const MangaCard = ({ data }) => {
  return (
    <div>
      <div className="h-[280px] border border-gray-300 rounded-md shadow-lg">
        <div className="flex gap-3 p-4">
          <div className="flex-1 overflow-hidden rounded-md cursor-pointer">
            <Link to={`/manga/${data.title.toLowerCase().replace(/\s+/g, "-")}`}>
              <img
                src={data.cover}
                alt={data.title}
                className="rounded h-[220px] transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-end gap-2">
            <h3 className="text-sm text-end text-gray-800 font-semibold">
              {data.title.length > 50
                ? data.title.slice(0, 50) + "..."
                : data.title}
            </h3>
            <p className="text-xs font-bold">
              Rating:{" "}
              <span className="font-semibold text-gray-500">{data.rating}</span>
            </p>
            <StarRatings
              rating={Math.floor(data.rating)}
              starRatedColor="gold"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="0px"
            />

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
        <p className="text-xs font-semibold text-end px-5">
          Updated on:{" "}
          <span className="text-gray-600">{data.chapters[0][2]}</span>
        </p>
      </div>
    </div>
  );
};
