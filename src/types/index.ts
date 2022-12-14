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