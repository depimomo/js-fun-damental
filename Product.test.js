import categoryType from './CategoryType';
import Product from './Product';

describe('Product', () => {
  describe('#price', () => {
    it('should return price', () => {
      const product = new Product(1000);
      const expectedPrice = 1000;

      const actualPrice = product.price;

      expect(actualPrice).toEqual(expectedPrice);
    });
  });

  describe('#name', () => {
    it('should return name', () => {
      const product = new Product(1000, 'bando');
      const expectedName = 'bando';

      const actualName = product.name;

      expect(actualName).toEqual(expectedName);
    });
  });

  describe('#description', () => {
    it('should return description', () => {
      const product = new Product(1000, 'bando', 'Lorem ipsum');
      const expectedDesc = 'Lorem ipsum';

      const actualDesc = product.desc;

      expect(actualDesc).toEqual(expectedDesc);
    });
  });

  describe('#category', () => {
    it('should return category', () => {
      const product = new Product(1000, 'bando', 'Lorem ipsum', categoryType.BOOK);
      const expectedCategory = categoryType.BOOK;

      const actualCategory = product.category;

      expect(actualCategory).toEqual(expectedCategory);
    });
  });
});
