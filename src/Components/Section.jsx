export const Section = ({ title, data = {}, subsection, subTitle, unit }) => {
  return (
    <div className='p-4 bg-[#1F2940] rounded-lg '>
      <h3 className='text-lg font-semibold text-white mb-4'>{title}</h3>
      <div className='space-y-2 '>
        {Object?.entries(data).map(([key, value], index) => (
          <div key={key} className='flex justify-between'>
            <span className='text-[#A9B0BE]'>
              {key
                .replace(/_/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </span>
            <input
              type='text'
              value={value}
              readOnly
              className='p-2 text-left text-white bg-[#2D395466] border border-[#34415E66] rounded-md  w-40'
            />
          </div>
        ))}
        {Boolean(subsection) && (
          <div className='my-4'>
            <hr className='border-t border-[#34415E] border-dashed' />
            {Boolean(subTitle) && (
              <h4 className='text-md font-semibold text-white mt-4 mb-2 my-2'>
                {subTitle}
              </h4>
            )}
            <div className='space-y-2 mt-2'>
              {Object.entries(subsection).map(([key, value]) => (
                <div key={key} className='flex justify-between'>
                  <span className='text-[#A9B0BE]'>
                    {key
                      .replace(/_/g, ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                  <input
                    type='text'
                    value={value}
                    readOnly
                    className='p-2 text-left text-white bg-[#2D395466] border border-[#34415E66] rounded-md w-40'
                  />
                  {Boolean(unit) && (
                    <span className='text-[#A9B0BE]'>cd/m^2</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
