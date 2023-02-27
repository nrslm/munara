import React, { useState, useEffect } from 'react'
import MainBackImage from '../../assets/image/Group 1.png'
import MainBackImageRight from '../../assets/image/IMAGE.png'
import CardImg1 from '../../assets/image/Frame.png'
import CardImg2 from '../../assets/image/Frame (1).png'
import CardImg3 from '../../assets/image/Frame (2).png'
import MainImage1 from '../../assets/image/main_hous_1.png'
import MainImage2 from '../../assets/image/main_hous_2.png'
import TopUgl from '../../assets/image/ugl_top.png'
import BotUgl from '../../assets/image/ugl_bot.png'
import Card_img1 from '../../assets/image/main_card_1.png'
import Card_img2 from '../../assets/image/main_card_2.png'
import Card_img3 from '../../assets/image/main_card_3.png'
import Card_img4 from '../../assets/image/main_card_4.png'
import Card_img5 from '../../assets/image/main_card_5.png'
import Card_img6 from '../../assets/image/main_card_6.png'
import Famaly from '../../assets/image/family.png'

import { Square } from 'tabler-icons-react';
import { Select } from '@mantine/core'

import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

function Home() {
  const [dataCards, setDataCards] = useState([])

  async function getCities(db) {
    const citiesCol = collection(db, '1')
    const citySnapshot = await getDocs(citiesCol)
    const cityList = citySnapshot.docs.map(doc => doc.data())
    setDataCards(cityList)
    return 
  }

  useEffect(() =>{
    getCities(db)
  },[])
  console.log(dataCards)
  const data = [
    {
      name: "SUN HOUSE",
      prace: "500$ > m2",
      adres: "Нариман",
      room: "2-комнатный",
      sqr: "69m2",
      img: Card_img1
    },
    {
      name: "АБАД",
      prace: "600$ > m2",
      adres: "Ош район",
      room: "3-комнатный",
      sqr: "93m2",
      img: Card_img2
    },
    {
      name: "SUN HOUSE",
      prace: "500$ > m2",
      adres: "Нариман",
      room: "1-комнатный",
      sqr: "42m2",
      img: Card_img3
    },
    {
      name: "SUN HOUSE",
      prace: "500$ > m2",
      adres: "Нариман",
      room: "3-комнатный",
      sqr: "84m2",
      img: Card_img4
    },
    {
      name: "АБАД",
      prace: "600$ > m2",
      adres: "Ош район",
      room: "1-комнатный",
      sqr: "42m2",
      img: Card_img5
    },
    {
      name: "SUN HOUSE",
      prace: "500$ > m2",
      adres: "Нариман",
      room: "2-комнатный",
      sqr: "74m2",
      img: Card_img6
    },
  ]

  const [value, setValue] = useState("")

  return (
    <div className='pt-20'>
      <div className='grid grid-cols-2'>
        <div
          style={{ backgroundImage: `url("${MainBackImage}")`, height: "90vh" }}
          className={" bg-cover bg-center flex justify-center items-center"}
        >
          <div className='w-3/4'>
            <div className='inline-block rounded-lg bg-gray-200 p-2 text-xs '>Find your dream place</div>
            <h1 className='text-5xl mt-4'>Мунара строй теперь в Оше</h1>
            <p className='mt-4 text-lg'>Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum curabitur eget aliquam elit in mauris purus.</p>
            <div className='flex mt-6'>
              <Select value={value} onChange={setValue} data={["fsdfdsf", "fdsfdsf"]} />
              <button
                className='rounded-lg bg-amber-600
                text-white p-2 pl-4 pr-4 ml-4'
              >Search</button>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url("${MainBackImageRight}")` }}
          className={"bg-cover bg-center "}
        >

        </div>
      </div>

      <div className='container mx-auto mt-16 mb-14'>
        <div className='text-center mb-10'>
          <h1>
            How it work
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolores harum obcaecati eligendi blanditiis
          </p>
        </div>
        <div className='flex justify-around flex-wrap'>
          <div className='bg-white w-1/4 rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-300'>
            <img src={CardImg1} alt="" className='w-14' />
            <h1>Find property</h1>
            <p className='text-center'>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
          </div>
          <div className='w-1/4 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-300'>
            <img src={CardImg2} alt="" className='w-14' />
            <h1>Find property</h1>
            <p className='text-center'>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
          </div>
          <div className='bg-white w-1/4 rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-300'>
            <img src={CardImg3} alt="" className='w-14' />
            <h1>Find property</h1>
            <p className='text-center'>Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto pt-10 pb-10'>
        <div className='grid grid-cols-2 gap-4 items-center '>
          <div>
            <div className='inline-block rounded-lg bg-gray-200 p-2 text-xs mb-2'>Find your dream place</div>
            <h1 className='mb-4 text-5xl'>
              The best houses for family comfort
            </h1>
            <p>
              Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.
            </p>

            <div className='mt-10'>
              <button className='bg-white p-4 mr-2 rounded-lg border border-gray-300 shadow-lg'>
                Explore properties
              </button>

              <button className='bg-white p-4 rounded-lg duration-300 hover:shadow-lg hover:border border-gray-300'>
                Contact agent
              </button>
            </div>
          </div>
          <div>
            <img src={MainImage1} alt="" />
          </div>
        </div>


        <div className='grid grid-cols-2 gap-4 items-center mt-20'>
          <div>
            <img src={MainImage2} alt="" />
          </div>
          <div>

            <div className='inline-block rounded-lg bg-gray-200 p-2 text-xs mb-2'>Find your dream place</div>
            <h1 className='mb-4 text-5xl'>
              The best houses for family comfort
            </h1>
            <p>
              Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin sollicitudin, lorem non posuere blandit.
            </p>

            <div className='mt-10'>
              <button className='bg-white p-4 mr-2 rounded-lg border border-gray-300 shadow-lg'>
                Explore properties
              </button>

              <button className='bg-white p-4 rounded-lg duration-300 hover:shadow-lg hover:border border-gray-300'>
                Contact agent
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className='mt-10 bg-gray-100 pb-40'>
        <div className='flex justify-end'>
          <img src={TopUgl} alt="" />
        </div>
        <div className='container mx-auto text-center'>
          <div className='inline-block rounded-lg bg-gray-200 p-2 text-xs mb-2'>Find your dream place</div>
          <h1 className='text-5xl '>
            Houses in your favorite area
          </h1>

          <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center mt-10'>
            {
              dataCards.map((v, i) => {
                return (
                  <div key={i} className=' max-w-md w-5/6 rounded-b-lg shadow-md bg-white'>
                    <div className='bg-center bg-cover h-64' style={{ backgroundImage: `url("$")` }}>
                    </div>
                    <div className='p-4 text-start'>
                      <h1 className='text-2xl'>{v.title}</h1>
                      <h6>{v.price}</h6>
                      <p>{v.adres}</p>
                      <span>{v.rooms}-комнат</span>
                      <span className='ml-4'>
                        <Square
                          className='inline-block'
                          size={30}
                          strokeWidth={1}
                          color={'black'}
                        />
                        {v.sqr}
                      </span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='mt-14'>
            <button className='bg-white p-4 mr-2 rounded-lg border border-gray-300 shadow-lg'>
              Explore properties
            </button>

            <button className='bg-white p-4 rounded-lg duration-300 hover:shadow-lg hover:border border-gray-300'>
              Contact agent
            </button>
          </div>
        </div>
        <div className='flex justify-start'>
          <img src={BotUgl} alt="" />
        </div>

        <div className='container mx-auto mb-20'>
          <h1 className='text-center text-4xl'>Location</h1>
          <div className='flex justify-center'>
            <p className='w-3/6 text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate blanditiis ea tempore qui voluptatibus ut ad aliquam porro</p>
          </div>

          <div className='grid grid-cols-3 gap-10 justify-items-center mt-10'>
            {
              data.map((item, i) => {
                return (
                  <div key={i} className='w-11/12 shadow-lg rounded-lg p-4 bg-white'>
                    <h1>{item.adres}</h1>
                    <button className='bg-white p-4 rounded-lg duration-300 hover:shadow-lg mt-2  hover:border-gray-300 border border-gray-100'
                    >
                      View properyties
                    </button>
                  </div>
                )
              })
            }
          </div>
          <div className='mt-14 flex justify-center'>
            <button className='bg-white p-4 mr-2 rounded-lg border border-gray-300 shadow-lg'>
              Explore properties
            </button>

            <button className='bg-white p-4 rounded-lg duration-300 hover:shadow-lg hover:border border-gray-300 '>
              Contact agent
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center -translate-y-1/2' style={{}}>
        <div className='w-2/3 rounded-lg shadow-lg p-14 flex flex-col items-center px-28' style={{ backgroundColor: "#65665C" }}>
          <img src={Famaly} alt="" className='w-14' />
          <h1 className='text-white text-4xl my-4'>
            Families are our priority
          </h1>
          <p className='text-white text-center'>
            Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.
          </p>
          <button
            className='rounded-lg bg-amber-600 mt-6 text-white py-4 px-6 hover:bg-amber-700 ease-in duration-300'
          >
            get started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home