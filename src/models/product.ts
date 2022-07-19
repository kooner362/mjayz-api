export interface Cannabinoids {
  thc: number
  cbd: number
}

export interface Product {
  id: string
  name: string
  categoryId: string
  cannabisWeight: number
  retailPrice: number
  cost: number
  salePrice?: number
  description: string
  imageUrl?: string
  cannabinoids?: Cannabinoids
}

