/* eslint-disable implicit-arrow-linebreak */

// Función que encapsula a fetch para simplificar su uso dentro de los sagas
const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const apiCall = (method, endpoint) =>
  fetch(`${BASE_URL}${endpoint}`, { method })
