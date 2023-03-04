export default class Product {
  #price;

  #name;

  #desc;

  #category;

  constructor(price, name, desc, category) {
    this.#price = price;
    this.#name = name;
    this.#desc = desc;
    this.#category = category;
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

  get category() {
    return this.#category;
  }
}
