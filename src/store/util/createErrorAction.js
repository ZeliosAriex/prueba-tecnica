// Action creator genérico para el tratamiento de errores centralizado
export const createErrorAction = (type, message) => ({
  type,
  error: { message },
})
