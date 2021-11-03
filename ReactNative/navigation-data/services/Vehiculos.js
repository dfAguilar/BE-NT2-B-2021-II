import constants from "./constants";

const getVehiculo = (param)=> {
    return fetch(`${constants.BASE_URL}/read/${param}`)
}
const getVehiculos = (param)=> {
    return fetch(`${constants.BASE_URL}/read`)
}

export { getVehiculo }

export default getVehiculos
