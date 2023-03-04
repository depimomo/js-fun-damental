import Product from './Product';

describe('Product', () => {
  describe('#price', () => {
    it('should return price', () => {
      const product = new Product(1000);
      const expectedPrice = 1000;

      expect(product.price).toEqual(expectedPrice);
    });
  });

  describe('#name', () => {
    it('should return name', () => {
      const product = new Product(1000, 'bando');
      const expectedName = 'bando';

      expect(product.name).toEqual(expectedName);
    });
  });
  
  describe('#description', () => {
    it('should return description', () => {
      const product = new Product(1000, 'bando', 'Lorem ipsum');
      const expectedDesc = 'Lorem ipsum';

      expect(product.desc).toEqual(expectedDesc);
    });
  });
});
