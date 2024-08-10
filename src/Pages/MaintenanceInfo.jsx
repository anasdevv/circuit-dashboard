import React, { useCallback, useMemo } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import {
  filterByKey,
  formatCircuitStringFormat,
  formatTimeStringFormat,
} from '../helper/utils';
import { useQuery } from 'react-query';
import { Section } from '../Components/Section';
import Loader from '../Components/Loader';

const tabs = [
  {
    name: 'Sofia Pipe',
  },
  {
    name: 'Pernik',
  },
];

const MaintenanceInfo = () => {
  const { data: maintenanceData, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        'https://mhpp-api.vercel.app/get_maintenance_data'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      return data;
    },
    refetchInterval: 3500,
  });
  const { primary: sofTimePrimary, secondary: sofTimeSecondary } = filterByKey(
    maintenanceData?.sof_time,
    'dimm'
  );
  const { primary: pernikTimePrimary, secondary: pernikTimeSecondary } =
    filterByKey(maintenanceData?.sof_time, 'dimm');
  const { primary: sofCircuitPrimary, secondary: sofCircuitSecondary } =
    filterByKey(maintenanceData?.sof_time_of_circuits, 'pri');
  const { primary: pernikCircuitPrimary, secondary: pernikCircuitSecondary } =
    filterByKey(maintenanceData?.sof_time_of_circuits, 'pri');

  const formatSecondaryData = useCallback((secondaryData, formatFn) => {
    const formattedData = {};
    for (const key in secondaryData) {
      const formattedKey = formatFn(key);
      formattedData[formattedKey] = secondaryData[key];
    }
    return formattedData;
  }, []);
  console.log('maintenanceData ', maintenanceData);
  return (
    <div className='px-16 py-6 flex flex-col gap-y-3 h-screen bg-slate-900'>
      <h1 className='text-white font-semibold text-2xl'>
        Maintenance Information
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='w-full'>
          <TabGroup>
            <TabList className='flex gap-4 border-b border-[#394869] p-2'>
              {tabs.map(({ name }) => (
                <Tab
                  key={name}
                  className='rounded data-[selected]:border text-white data-[selected]:text-[#6A75EA] data-[selected]:border-[#6A75EA]  py-1 px-3 text-lg font-semibold  focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white'
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            {/* <TabS */}
            <TabPanels className='mt-3 bg-slate-900'>
              <TabPanel key='Sofia Pipe' className='rounded-xl '>
                <div className='grid grid-cols-3 gap-4 p-8 '>
                  <Section
                    title='General'
                    data={maintenanceData?.sof_general}
                  />
                  <Section
                    title='Time'
                    data={sofTimePrimary}
                    subTitle='Dimming'
                    subsection={formatSecondaryData(
                      sofTimeSecondary,
                      formatTimeStringFormat
                    )}
                  />
                  <Section
                    title='Time of Circuits'
                    data={sofCircuitPrimary}
                    subsection={formatSecondaryData(
                      sofCircuitSecondary,
                      formatCircuitStringFormat
                    )}
                  />
                </div>
              </TabPanel>
              <TabPanel key='Pernik' className='rounded-xl '>
                {/* <h1>hell</h1> */}
                <div className='grid grid-cols-3 gap-4 p-8 '>
                  <Section
                    title='General'
                    data={maintenanceData?.pernik_general}
                  />
                  <Section
                    title='Time'
                    subTitle='Dimming'
                    data={pernikTimePrimary}
                    subsection={formatSecondaryData(
                      pernikTimeSecondary,
                      formatTimeStringFormat
                    )}
                  />
                  <Section
                    title='Time of Circuits'
                    data={pernikCircuitPrimary}
                    subsection={formatSecondaryData(
                      pernikCircuitSecondary,
                      formatCircuitStringFormat
                    )}
                  />
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      )}
    </div>
  );
};

export default MaintenanceInfo;
