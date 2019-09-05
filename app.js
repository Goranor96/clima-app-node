const argv = require('./config/yargs.js').argv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
/*
lugar.getLugarLatLng( argv.direccion )
    .then( console.log );

clima.getClima(-36.790001, -73.099998)
    .then( console.log );
*/

const getInfo = async ( direccion ) => {
    try {
        const info = await lugar.getLugarLatLng(direccion);
        const tmp = await clima.getClima(info.lat, info.lng);
        return `La temperatura de ${info.direccion} es de ${tmp}°C`;
    } catch (error) {
        return `No se pudo determinar la temperatura en ${direccion}`   
    }
}

getInfo(argv.direccion)
    .then( console.log )
    .catch( console.log );