const generateRandomNum = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const celciousToFarenheight = (celcious) => {
  return (celcious * 9) / 5 + 32;
};

module.exports = { generateRandomNum, celciousToFarenheight };
