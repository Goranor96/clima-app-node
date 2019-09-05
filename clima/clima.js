const axios = require('axios');

const getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=729d74470a31e2cb07ffe3797be2d2f9&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}