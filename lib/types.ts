export interface SignUpInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}
export interface SignInInput {
  email?: string;
  password?: string;
}
export interface BaseModel {
  id: string;
  createdAt: string;
  updatedAt: string;
}
export interface Product extends BaseModel {
  name: string;
  description: string;
  price: number;
  discount: number;
  mediaUrl: string[];
  store?: Store;
  category: Category;
}
export interface Store extends BaseModel {
  name: string;
  description: string;
  address: string;
  staff: User[];
  product: Product[];
}
export interface User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  store?: Store;
}
export interface Category extends BaseModel {
  name: string;
  description: string;
  mediaUrl: string[];
  products?: Product[];
}
