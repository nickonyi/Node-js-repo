const generateRandomNumber = ()=> {
    return Math.floor(Math.random()*100)+1;
}

const celciousToFahrenheit = (cel)=>{
    return (cel * 9) /5 + 32;
}
module.exports = {generateRandomNumber,celciousToFahrenheit};