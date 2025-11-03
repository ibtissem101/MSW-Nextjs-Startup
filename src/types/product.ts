/**
 * Product Types & Interfaces
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category?: string;
  stock?: number;
  imageUrl?: string;
}

export interface CreateProductDto {
  name: string;
  price: number;
  description: string;
  category?: string;
  stock?: number;
}
