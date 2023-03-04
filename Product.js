export default class Product {
  #price;

  #name;

  #desc;

  constructor(price, name, desc) {
    this.#price = price;
    this.#name = name;
    this.#desc = desc;
  }

  get price() {
    return this.#price;
  }

  get name() {
    return this.#name;
  }
  
  get desc() {
    return this.#desc;
  }
}
