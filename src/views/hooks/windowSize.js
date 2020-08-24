import { useLayoutEffect, useState } from 'react'
import debounce from 'lodash.debounce'

/* Hook que nos permite obtener la altura y el ancho del viewport, y se actualiza
   automáticamente con cada evento resize, recibe un parámetro para el debounce
   y así no ejecutar tantos updates */
const useWindowSize = (debounceTime = 200) => {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight])
    const dispatchResizeEvent = () => {
      window.dispatchEvent(new Event('resize'))
    }

    window.addEventListener('resize', debounce(updateSize, debounceTime))

    /* Desde móvil cuando se pasa a landscape a veces no se lanza el evento
       'resize', mediante el evento 'orientationchange' podemos lanzar
       manualmente el evento */
    window.addEventListener('orientationchange', dispatchResizeEvent, false)

    // Ejecutarlo al inicio al menos una vez para tener la altura y el ancho
    updateSize()
    return () => {
      // Al destruir borramos los listeners
      window.removeEventListener('resize', updateSize)
      window.removeEventListener('orientationchange', dispatchResizeEvent)
    }
  }, [])
  return size
}

export default useWindowSize
