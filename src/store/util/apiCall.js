// Función que encapsula a fetch para simplificar su uso dentro de los sagas
const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const apiCall = (method, endpoint, body) => {
  let options = {
    method,
  }

  if (body) {
    options = {
      ...options,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }
  return fetch(`${BASE_URL}${endpoint}`, options)
}
