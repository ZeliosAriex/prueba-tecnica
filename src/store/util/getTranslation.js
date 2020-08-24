import i18n from 'i18next'

// Nos permite traducir textos dentro de los sagas
export const getT = (key, obj) => i18n.t(key, obj)
