import React, { useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';
import { TunnelViewPanel } from '../Components/TunnelViewPanel';
import Loader from '../Components/Loader';

const TunnelView = () => {
  const { data: tunnelData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        'https://mhpp-api.vercel.app/get_tunel_data'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      return data;
    },
    refetchInterval: 3500,
  });
  const getPernikLights = useCallback(
    (row0, row1) => {
      return [
        [row0?.slice(0, 4), row1?.slice(0, 4)],
        [row0?.slice(4, 8), row1?.slice(4, 8)],
        [row0?.slice(8, 12), row1?.slice(8, 12)],
        [row0?.slice(12), row1?.slice(12)],
      ];
    },
    [tunnelData?.lights?.sof_lights_row_0, tunnelData?.lights?.sof_lights_row_1]
  );
  const getSofiaLights = useCallback(
    (row0, row1) => {
      return [
        [row0?.slice(0, 7), row1?.slice(0, 7)],
        [row0?.slice(7, 11), row1?.slice(7, 11)],
        [row0?.slice(11, 15), row1?.slice(11, 15)],
        [row0?.slice(15), row1?.slice(15)],
      ];
    },
    [tunnelData?.lights?.sof_lights_row_0, tunnelData?.lights?.sof_lights_row_1]
  );
  return (
    <div className='px-16 py-6 flex flex-col gap-y-3 h-screen '>
      <h1 className='text-white font-semibold text-2xl'>Tunnel View</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='bg-[#1F2940]  rounded-lg '>
            <TunnelViewPanel
              title='Pernik'
              labels={['', 'IIP  1', 'BX 2', 'BX 1']}
              kCircuits={tunnelData?.circuits?.pernik_k_circuits ?? []}
              rdCircuits={tunnelData?.circuits?.pernik_rd_circuits ?? []}
              sensors={{
                l20: tunnelData?.sensors?.pernik_l20,
                lth: tunnelData?.sensors?.pernik_lth,
              }}
              lights={getPernikLights(
                tunnelData?.lights?.pernik_lights_row_0,
                tunnelData?.lights?.pernik_lights_row_1
              )}
            />
          </div>
          <div className='bg-[#1F2940] rounded-lg min '>
            <TunnelViewPanel
              after={false}
              title='Sofia'
              labels={['BX 1', 'BX 2', 'IIP  1', '']}
              kCircuits={tunnelData?.circuits?.sof_k_circuits ?? []}
              rdCircuits={tunnelData?.circuits?.sof_rd_circuits ?? []}
              sensors={{
                l20: tunnelData?.sensors?.sof_l20,
                lth: tunnelData?.sensors?.sof_lth,
              }}
              lights={getSofiaLights(
                tunnelData?.lights?.sof_lights_row_0,
                tunnelData?.lights?.sof_lights_row_1
              )}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TunnelView;
