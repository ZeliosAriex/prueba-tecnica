// Función que encapsula a fetch para simplificar su uso dentro de los sagas
export const apiCall = (method, url) => fetch(url, { method })
