export default class Product {
  #price;
  #name;

  constructor(price, name) {
    this.#price = price;
    this.#name = name;

  }

  get price() {
    return this.#price;
  }

  get name(){
    return this.#name;
  }
}
