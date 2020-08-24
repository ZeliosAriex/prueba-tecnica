// Función que encapsula a fetch para simplificar su uso dentro de los sagas
const BASE_URL = process.env.REACT_APP_API_BASE_URL
const API_DELAY = process.env.REACT_APP_API_DELAY || 0

export const apiCall = (method, endpoint, body) => {
  const url = new window.URL(`${BASE_URL}${endpoint}`)

  let options = {
    method,
  }

  /* Añadimos el delay en la llamada para simular que la API
  tarda en responder un poco más */
  url.searchParams.set('delay', API_DELAY)

  if (method.toLowerCase() !== 'get' && body) {
    options = {
      ...options,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }
  if (method.toLowerCase() === 'get' && body) {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const [queryKey, queryValue] of Object.entries(body)) {
      url.searchParams.set(queryKey, queryValue)
    }
  }

  return fetch(url, options)
}
