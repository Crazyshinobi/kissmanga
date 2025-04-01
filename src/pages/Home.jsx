import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import { MangaCard } from '../components/MangaCard'
import { Sidebar } from '../components/SideBar'
import data from "../temp.json"

export const Home = () => {
  useEffect(() => {
    document.title = "Home - KissManga"
  }, [])

  console.log(data)

  return (
    <>
      <Layout>
        <div className="flex gap-3">
          <div className='flex-[80%] my-10'>
            <h1 className='text-3xl text-red-500 font-semibold'>Latest Manga Releases</h1>
            <div className=' grid sm:grid-cols-12 my-5 gap-3'>
              {
                data.map((manga, i) => {
                  return (
                    <div key={i} className="col-span-12 lg:col-span-4">
                      <MangaCard data={manga} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex-[20%]  my-10">
            <Sidebar />
          </div>
        </div>



      </Layout>
    </>
  )
}
