import React from "react";
import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";
import thumbnail from "../assets/thumbnail.jpg";
import data from "../detail.json";
import StarRatings from "react-star-ratings";
import { SideBar } from "../components/SideBar";

export const MangaDetails = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div className="flex gap-3">
        <div className="flex-[80%] my-10">
          <h2 className="text-3xl text-red-500 font-bold py-10">
            {data.title}
          </h2>
          <div className="flex gap-10">
            <div>
              <img
                src={thumbnail}
                alt={data.title}
                className="rounded-md h-[350px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 h-[30px]">
                <StarRatings
                  rating={Math.floor(data.score)}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="30px"
                  starSpacing="3px"
                />

                <p className="font-semibold text-3xl">{data.score}</p>
              </div>
              <ul className="flex flex-col gap-4 mt-5">
                <li className="font-semibold text-md">
                  Rating:{"    "}{" "}
                  <span className="text-gray-400 ">{data.rating}</span>
                  {"    "}
                </li>
                <li className="font-semibold text-md">
                  Rank:{"    "}{" "}
                  <span className="text-gray-400 ">{data.rank}</span>{" "}
                </li>
                <li className="font-semibold text-md">
                  Alternative:{"    "}
                  <span className="text-gray-400 ">{data.alternative}</span>
                  {"    "}
                </li>
                <li className="font-semibold text-md">
                  Author:{"    "}
                  <span className="text-gray-400 "> {data["author(s)"]}</span>
                </li>
                <li className="font-semibold text-md">
                  Artists:{"    "}
                  <span className="text-gray-400 ">{data["artist(s)"]}</span>
                  {"    "}
                </li>
                <li className="flex gap-2  items-center font-semibold text-md">
                  Genre:{"    "}
                  <span className="text-gray-400 flex flex-wrap gap-3">
                    {data["genre(s)"].split(",").map((genre) => {
                      return (
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          {genre}
                        </span>
                      );
                    })}
                  </span>
                  {"    "}
                </li>
                <li className="font-semibold text-md">
                  Release:{"    "}
                  <span className="text-gray-400 ">{data.release}</span>
                  {"    "}
                </li>
                <li className="font-semibold text-md">
                  Status: <span className="text-gray-400 ">{data.status}</span>
                  {"    "}
                </li>
              </ul>
            </div>
          </div>
          <h2 className="text-3xl text-red-500 font-bold py-8">Summary</h2>
          <p>{data.summary}</p>

          <h2 className="text-3xl text-red-500 font-bold py-8">
            Latest Manga Releases
          </h2>
          <div className="flex justify-center flex-col border border-gray-200 rounded-md shadow-md">
            {data.chapters.map((chapter, i) => {
              return (
                <div>
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <a
                        href={chapter.path}
                        target="_blank"
                        className="hover:text-red-500"
                      >
                        <p className="p-4 font-semibold">
                          Chapter {chapter.number}
                        </p>
                      </a>
                      <p className="text-gray-300 font-semibold p-4">
                        {chapter.published_on}
                      </p>
                    </div>
                  </div>
                  <hr className="text-gray-300" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-[20%] my-10">
          <SideBar />
        </div>
      </div>
    </Layout>
  );
};
