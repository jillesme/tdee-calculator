const BASE = {
  kg: 0.453592, // 1 pound
  cmF: 30.48, // 1 foot
  cmI: 2.54 // 1 inch
};

let Convert = {
  weight: (lbs) => {
    return (BASE.kg * lbs).toFixed(1);
  },
  height: (fi) => {
    return Math.round((BASE.cmF * fi.feet) + (BASE.cmI * fi.inches));
  }
};

export default Convert;