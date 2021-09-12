import { User } from "src/generated/graphql";

export interface SignUpInput {
  firstname?: string;
  lastname?: string;
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

export interface Category extends BaseModel {
  name: string;
  description: string;
  mediaUrl: string[];
  products?: Product[];
}
export interface Token {
  user?: User;
  acessToken: string;
  refreshToken: string;
}
