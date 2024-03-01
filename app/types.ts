export type Page<T> = {
  content: Array<T>,
  pageable: {
    pageNumber: number,
    pageSize: number,
    sort: {
      sorted: boolean,
      empty: boolean,
      unsorted: boolean
    },
    offset: number,
    paged: boolean,
    unpaged: false,
  },
  totalPages: number,
  totalElements: number,
  last: boolean,
  size: number,
  number: number,
  sort: {
    sorted: boolean,
    empty: boolean,
    unsorted: Boolean
  },
  numberOfElements: number,
  first: boolean,
  empty: boolean
}

export type Book = {
  id?: number,
  autor: string,
  titulo: string,
  exemplar?: number,
  "ano_publicacao": string
}

export type Reservation = {
  id?: number,
  usuario: string,
  "data_inicio": string,
  "data_fim": string,
  livro: Book
}
