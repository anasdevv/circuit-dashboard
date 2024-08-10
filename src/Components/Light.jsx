export const Light = ({ isOn }) => (
  <div
    className={`w-4 h-7 m-1 ${
      isOn
        ? 'bg-yellow-400 border border-[#D5B50C] shadow shadow-[#EDB716]'
        : 'bg-[#7686AD] border border-[#5A6B95] shadow shadow-[#00000040]'
    }`}
  ></div>
);
