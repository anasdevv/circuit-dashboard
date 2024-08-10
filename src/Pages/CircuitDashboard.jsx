import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { preprocessCircuitData } from "../helper/utils";
import Loader from "../Components/Loader";

const CircuitDashboard = () => {
  const { data: powerSupplyData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://mhpp-api.vercel.app/get_power_supply"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      return data;
    },
    refetchInterval: 3500,
  });

  const { pernikBottomRow, pernikData, sofBottomRow, sofData } = useMemo(() => {
    return preprocessCircuitData(powerSupplyData);
  }, [powerSupplyData, powerSupplyData?.length]);

  return (
    <div className="px-16 py-6 flex flex-col gap-y-3 h-screen">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-white font-semibold text-2xl">
          Power Supply for Tunnel Lightening
        </h1>
        <div className="flex items-center justify-between">
          <div className="bg-[#1F2940] p-4 rounded-lg text-gray-300 flex space-x-8">
            <ul className="space-y-2">
              <li>K1, K2, K3 - Day Adaptation</li>
              <li>K4, K5 - Round the clock standby</li>
              <li>Lorum Ipsum</li>
            </ul>
            <div className="border-l border-gray-600"></div>
            <ul className="space-y-2">
              <li>K6 - Portal</li>
              <li>To buses - Evacuation & Directing</li>
              <li>Lorum Ipsum</li>
            </ul>
          </div>
          <div className="bg-[#1E293B] p-4 rounded-lg text-gray-300 flex items-center space-x-6 border border-[#3C4B6D]">
            <div className="flex  justify-start h-full">
              <span className="text-[#6A75EA]  font-semibold">
                CIRCUIT STATE:
              </span>
            </div>

            <div className="flex items-center space-y-2 flex-col">
              <div className="w-4 bg-[#2FDD20] shadow-[#009317] rounded-sm shadow-md h-8"></div>
              <span>ON</span>
            </div>
            <div className="flex items-center space-y-2 flex-col ">
              <div className="w-4 h-8 bg-gray-500 rounded-sm shadow-md"></div>
              <span>OFF</span>
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex items-center justify-between space-x-6 ">
            <div className="bg-[#1F2940] p-6 pl-16 rounded-lg text-gray-300 w-1/2">
              <div className="flex ">
                {/* Left Side for K6 */}
                <div className="flex flex-col   w-1/2  border-r-2 border-gray-600">
                  <div className="-rotate-90 text-2xl items-start font-semibold text-gray-200 self-center text-left flex my-auto mr-auto pr-10">
                    SOFIA
                  </div>
                  <div className="relative flex items-center pb-4 self-end">
                    <span className="mr-2 text-lg">{sofBottomRow?.label}</span>
                    <div className="flex items-center relative">
                      <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-10 "></div>
                      {sofBottomRow?.state?.map((state, idx) => (
                        <>
                          <div
                            key={idx}
                            className={`w-8  h-4 ${
                              state === "on" ? "bg-green-500" : "bg-gray-500"
                            } rounded-sm shadow-md z-10`}
                          ></div>
                          {idx !== sofBottomRow?.state?.length - 1 && (
                            <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-7"></div>
                          )}
                        </>
                      ))}
                      <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-[10rem]"></div>
                    </div>
                  </div>
                </div>

                {/* Right Side for Other Rows */}
                <div className="flex flex-col space-y-4 w-1/2">
                  {sofData?.map((row, index) => (
                    <div
                      key={index}
                      className="relative flex items-center space-x-0 py-4"
                    >
                      <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[14px] w-16"></div>
                      <div className="flex items-center z-10 ">
                        {row?.state?.map((state, idx) => (
                          <>
                            <div
                              key={idx}
                              className={`w-8 h-4 ${
                                state === "on" ? "bg-green-500" : "bg-gray-500"
                              } rounded-sm shadow-md`}
                            ></div>
                            {idx !== row?.state?.length - 1 && (
                              <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-7"></div>
                            )}
                          </>
                        ))}
                        <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-10"></div>
                      </div>
                      <span className=" pl-4  text-lg z-10">{row?.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#1F2940] p-6 pl-16 rounded-lg text-gray-300 w-1/2">
              <div className="flex ">
                {/* Right Side for Other Rows */}
                <div className="flex flex-col space-y-4 w-1/2 border-r-2 border-gray-600">
                  {pernikData?.map((row, index) => (
                    <div
                      key={index}
                      className="relative flex items-center space-x-0 py-4"
                    >
                      <span className=" pr-6  text-lg z-10">{row?.label}</span>
                      <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[14px] w-[5rem]"></div>

                      <div className="flex items-center z-10 ">
                        {row?.state?.map((state, idx) => (
                          <>
                            <div
                              key={idx}
                              className={`w-8 h-4 ${
                                state === "on" ? "bg-green-500" : "bg-gray-500"
                              } rounded-sm shadow-md`}
                            ></div>
                            {idx !== row?.state?.length - 1 && (
                              <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-7"></div>
                            )}
                          </>
                        ))}
                        <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-24"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Left Side for K6 */}
                <div className="flex flex-col w-1/2  items-center ">
                  <div className="relative flex items-center pt-4">
                    {/* <span className='mr-2 text-lg'>{bottomRow.label}</span> */}
                    <div className="flex items-center relative">
                      <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-[7rem] "></div>
                      {pernikBottomRow?.state?.map((state, idx) => (
                        <>
                          <div
                            key={idx}
                            className={`w-8  h-4 ${
                              state === "on" ? "bg-green-500" : "bg-gray-500"
                            } rounded-sm shadow-md z-10`}
                          ></div>
                          {idx !== pernikBottomRow?.state?.length - 1 && (
                            <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-7"></div>
                          )}
                        </>
                      ))}
                      <div className=" inset-0 h-[2px] bg-gray-600 z-0 top-[17px] w-[5rem]"></div>
                      <span className=" pl-4  text-lg z-10">
                        {pernikBottomRow?.label}
                      </span>
                    </div>
                  </div>
                  <div className="-rotate-90 text-2xl items-start self-center my-auto ml-auto font-semibold text-gray-200  text-left flex  pr-10">
                    PERNIK
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CircuitDashboard;
