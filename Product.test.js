describe("Product", () => {
  describe("#price", () => {
    it("should return price", () => {
        const product = new Product(1000);
        const expectedPrice = 1000;

        expect(product.price).toEqual(expectedPrice);
    });
  });
});
