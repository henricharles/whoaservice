import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import welcome from '../data/welcome-bg.svg';

import { useStateContext } from '../contexts/ContextProvider';
import MonthYear from '../components/MonthYear';
const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap  lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">

          <div className="flex justify-between items-center">
            <div>
              {MonthYear()}
              {/* <p className= "font-bold text-gray-400">{MonthYear}</p> */}
              <p className="text-xl font-semibold">20000000fr</p>
            </div>
            <div>
              <img src={welcome} />
            </div>
            <div className="mt-12">
              <Button color="white" bgColor="blue" text="Telecharger" borderRadius="10px" size="md" />
            </div>

          </div>

        </div>
        <div className="flex m3   flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-6">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm mt-1 text-gray-400 ">{item.title}</p>
            </div>

          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center" >
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl"> Revenue mise a jour</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoBook /></span>
                <span>Depenses</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoBook /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10  flex gap-10 flex-wrap justify-center ">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">45000000 Fr</span>
                  <span className="px-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
                <div className="mt-8">
                    <p>
                      <span className="text-3xl font-semibold">48566 Fr</span>
                    </p>
                    <p className="text-gray-500 mt-1">depenses</p>
                </div>
                <div className="mt-5">
                  <SparkLine currentColor="blue" id="line-sparkline" type="Line" height="80px" width="250px" data={SparklineAreaData} color="blue" />
                </div>
               <div className="mt-10">
                  <Button
                    color="white"
                    bgColor="blue"
                     text="telecharger Raport"
                      borderRadius="10px"
                    />
                </div>
            </div>
            <div>
              <Stacked  width="320px" height="360px" />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Ecommerce