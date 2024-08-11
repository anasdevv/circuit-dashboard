import { Light } from './Light';

export const TunnelViewPanel = ({
  title,
  kCircuits,
  rdCircuits,
  lights,
  sensors,
  labels,
  after = true,
}) => {
  return (
    <div className='p-4 rounded-lg flex flex-col space-y-5'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className='text-white text-2xl font-semibold mb-4'>{title}</div>
        <div className='flex items-center border p-3 border-secondary rounded gap-x-4'>
          <div className='p-4 text-[#6A75EA]'>CIRCUIT :</div>
          <div className='flex flex-wrap gap-x-4'>
            {kCircuits.map((val, i) => (
              <div className='flex flex-col gap-y-3'>
                <div
                  className={`w-3 h-5 rounded-sm shadow ${
                    val
                      ? 'bg-[#2FDD20] shadow-[#009317]'
                      : 'bg-[#7686AD] border border-[#5A6B95] shadow shadow-[#00000040]'
                  }`}
                ></div>
                <span className='text-sm text-[#A9B0BE]'>K{i + 1}</span>
              </div>
            ))}
            <div className='w-[1px] bg-[#3E4B6B]'></div>
            {rdCircuits.map((val, i) => (
              <div className='flex flex-col gap-y-3'>
                <div
                  className={`w-3 h-5 rounded-sm shadow ${
                    val
                      ? 'bg-[#2FDD20] shadow-[#009317]'
                      : 'bg-[#7686AD] border border-[#5A6B95] shadow shadow-[#00000040]'
                  }`}
                ></div>
                <span className='text-sm text-[#A9B0BE]'>rd{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex space-x-4'>
        {!after && (
          <div className='flex flex-col gap-y-3 w-full lg:w-1/2'>
            <div className='p-4 flex items-center justify-between border border-secondary'>
              <div className='flex w-full md:w-1/2 items-start'>
                <div className='text-[#6A75EA]'>LIGHT STATE :</div>
              </div>
              <div className='flex w-full md:w-1/2 items-center gap-x-5'>
                <div className='flex flex-col gap-y-4'>
                  <Light isOn={true} />
                  <span className='text-[#CDD0D5]'>ON</span>
                </div>
                <div className='flex flex-col gap-y-4'>
                  <Light isOn={false} />
                  <span className='text-[#CDD0D5]'>OFF</span>
                </div>
              </div>
            </div>
            <div className='p-4 flex flex-col border border-secondary'>
              <div className='text-[#6A75EA]'>Light Sensor readings :</div>
              <div className='flex flex-col mt-3 gap-y-6 text-white'>
                <div className='flex items-start gap-x-3'>
                  <p>L20:</p>
                  <p className='text-[#CDD0D5] font-semibold'>
                    {sensors.l20} cd/m^2
                  </p>
                </div>
                <div className='flex items-start gap-x-3'>
                  <p>Lth:</p>
                  <p className='text-[#CDD0D5] font-semibold'>
                    {sensors.lth} cd/m^2
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='flex flex-col lg:flex-row gap-4 mb-4 border border-secondary'>
          {lights?.map((rows, i) => (
            <div className='flex flex-col small:py-2 small:px-3 py-5 px-6 border-r border-secondary space-y-4'>
              <div className='flex items-center justify-center'>
                <p className='bg-[#B2BCCF] text-3xl rounded px-7 font-semibold'>
                  {labels[i]}
                </p>
              </div>
              <div className='flex flex-col gap-y-8 small:gap-y-6'>
                {rows?.map((c) => (
                  <div className='flex items-center gap-x-9 small:gap-x-6'>
                    {c?.map((l) => (
                      <Light isOn={l} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {after && (
          <div className='flex flex-col gap-y-3 w-full lg:w-1/2'>
            <div className='p-4 flex items-center justify-between border border-secondary'>
              <div className='flex w-full md:w-1/2 items-start'>
                <div className='text-[#6A75EA]'>LIGHT STATE :</div>
              </div>
              <div className='flex w-full md:w-1/2 items-center gap-x-5'>
                <div className='flex flex-col gap-y-4'>
                  <Light isOn={true} />
                  <span className='text-[#CDD0D5]'>ON</span>
                </div>
                <div className='flex flex-col gap-y-4'>
                  <Light isOn={false} />
                  <span className='text-[#CDD0D5]'>OFF</span>
                </div>
              </div>
            </div>
            <div className='p-4 flex flex-col border border-secondary'>
              <div className='text-[#6A75EA]'>Light Sensor readings :</div>
              <div className='flex flex-col mt-3 gap-y-6 text-white'>
                <div className='flex items-start gap-x-3'>
                  <p>L20:</p>
                  <p className='text-[#CDD0D5] font-semibold'>
                    {sensors.l20} cd/m^2
                  </p>
                </div>
                <div className='flex items-start gap-x-3'>
                  <p>Lth:</p>
                  <p className='text-[#CDD0D5] font-semibold'>
                    {sensors.lth} cd/m^2
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
