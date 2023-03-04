export default class Product {
  #price;

  constructor(price) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }
}
