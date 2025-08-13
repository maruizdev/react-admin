
export interface PropiedadesType {
  icono?: string
  descripcion?: string
  orden: number
}

export type SubModuloType = {
  id: string
  label: string
  url: string
  nombre: string
  propiedades: PropiedadesType
  estado: string
}

export type ModuloType = {
  id: string
  label: string
  url: string
  nombre: string
  propiedades: PropiedadesType
  estado: string
  subModulo: SubModuloType[]
}
