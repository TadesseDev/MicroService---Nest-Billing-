export class createOrderDTO {
  id: string;
  userId: string;
  price: number;
  constructor(id: string, userId: string, price: number) {
    this.id = id;
    this.userId = userId;
    this.price = price;
  }

  toString() {
    return JSON.stringify(this);
  }
}
