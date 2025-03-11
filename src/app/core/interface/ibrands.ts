
export interface Ibrands {
    _id: string
    name: string
    slug: string
    image: string
    createdAt: string
    updatedAt: string
  }
  

export interface Daum {
    results: number
    metadata: Metadata
    data: Daum[]
  }
  
  export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
    nextPage: number
  }
  
