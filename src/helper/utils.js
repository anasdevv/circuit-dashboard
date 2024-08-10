export const filterByKey = (data, filterKey) => {
  const secondary = {};
  const otherPropertiesObject = {};

  for (const key in data) {
    if (key.includes(filterKey)) {
      secondary[key] = data[key];
    } else {
      otherPropertiesObject[key] = data[key];
    }
  }
  return {
    primary: otherPropertiesObject,
    secondary,
  };
};
export const generalLabels = [
  'Exit 1-8',
  'Entry 1-8',
  'Entry 9-16',
  'ADC1',
  'ADC2',
  'ADC3',
  'ADC4',
  'LTHcurr',
  'L20curr',
  'LTH/L20curr',
];
export function formatCircuitStringFormat(inputString) {
  console.log('input string ', inputString);
  const parts = inputString.split('_');

  const firstPart = parts[0];

  const combinedParts = parts.slice(1).join('+');

  const resultString = `${firstPart} ${combinedParts}`;

  return resultString;
}
export function formatTimeStringFormat(key) {
  const splitKey = key.split(' ');
  const suffix = splitKey.pop().toUpperCase();
  const formattedKey = splitKey.join(' ') + ` ${suffix}., %`;
  return formattedKey;
}
const mapData = (data) => {
  return data?.map((v, idx) => ({
    label: `K${idx + 1}`,
    state: Array.from({
      length: 3,
    }).map((_) => (v ? 'on' : 'off')),
  }));
};
export function preprocessCircuitData(data) {
  if (!Boolean(data)) {
    return {
      sofData: [],
      sofBottomRow: {},
      pernikBottomRow: {},
      pernikData: [],
    };
  }
  const sofData = mapData(data?.sof_k_circuits);
  const pernikData = mapData(data?.pernik_k_circuits);
  const sofBottomRow = sofData?.length > 5 ? sofData[5] : {};
  const pernikBottomRow = pernikData?.length > 5 ? pernikData[5] : {};
  return {
    sofData: sofData?.filter((s) => s?.label !== 'K6'),
    sofBottomRow,
    pernikBottomRow,
    pernikData: pernikData?.filter((s) => s?.label !== 'K6'),
  };
}
