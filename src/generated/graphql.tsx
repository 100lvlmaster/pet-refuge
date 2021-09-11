import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  user: User;
};

/** Product category */
export enum Category {
  Accessories = 'ACCESSORIES',
  Food = 'FOOD',
  Toys = 'TOYS'
}

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type CreateOrderInput = {
  category: Scalars['String'];
  productId: Scalars['String'];
  quantity: Scalars['Int'];
  userId: Scalars['String'];
};

export type CreatePostInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreateProductInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  discount: Scalars['Float'];
  mediaUrl: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  storeId: Scalars['String'];
};

export type CreateStoreInput = {
  address: Scalars['String'];
  description: Scalars['String'];
  name: Scalars['String'];
};


export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createOrder: Order;
  createPost: Post;
  createProduct: Product;
  createStore: Store;
  login: Auth;
  refreshToken: Token;
  removeOrder: Order;
  removeProduct: Product;
  removeStore: Store;
  signup: Auth;
  updateOrder: Order;
  updateProduct: Product;
  updateStore: Store;
  updateUser: User;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateStoreArgs = {
  createStoreInput: CreateStoreInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['String'];
};


export type MutationRemoveStoreArgs = {
  id: Scalars['Int'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateStoreArgs = {
  updateStoreInput: UpdateStoreInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type Order = {
  __typename?: 'Order';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  productId: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
  userId: Scalars['String'];
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  content: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges?: Maybe<Array<PostEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String'];
  node: Post;
};

export type PostOrder = {
  direction: OrderDirection;
  field: PostOrderField;
};

/** Properties by which post connections can be ordered. */
export enum PostOrderField {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type Product = {
  __typename?: 'Product';
  category: Category;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  discount: Scalars['Int'];
  id: Scalars['ID'];
  mediaUrl: Array<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  store?: Maybe<Store>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  helloWorld: Scalars['String'];
  me: User;
  order: Order;
  orders: Array<Order>;
  post: Post;
  product: Product;
  products: Array<Product>;
  publishedPosts: PostConnection;
  store: Store;
  stores: Array<Store>;
  userPosts: Array<Post>;
};


export type QueryHelloArgs = {
  name: Scalars['String'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  postId: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryPublishedPostsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PostOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryStoreArgs = {
  id: Scalars['ID'];
};


export type QueryUserPostsArgs = {
  userId: Scalars['String'];
};

/** User role */
export enum Role {
  Customer = 'CUSTOMER',
  Merchant = 'MERCHANT'
}

export type SignupInput = {
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type Store = {
  __typename?: 'Store';
  address: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  product: Array<Product>;
  staff: Array<User>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
};

export type UpdateOrderInput = {
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
};

export type UpdateProductInput = {
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  mediaUrl?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
};

export type UpdateStoreInput = {
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  posts: Array<Post>;
  role: Role;
  store?: Maybe<Store>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['Date'];
};
