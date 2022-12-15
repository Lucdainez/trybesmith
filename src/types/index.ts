export type NewProduct = {
  name: string,
  amount: string,
};

export type ReturnProduct = {
  id: number,
  name: string,
  amount: string,
};

export type AllProducts = {
  id: number,
  name: string,
  amount: string,
  orderId: number,
};

export type NewUser = {
  username: string,
  vocation: string,
  level: number,
  password: string, 
};

export type Orders = {
  id: number,
  userId: number,
  productsIds: number[],
};

export type Login = {
  username: string,
  password: string,
};