import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  const payload = ProductMock;
  const expected = type => ({
    type,
    payload,
  });
  test('addToCart Action', () => {
    expect(actions.addToCart(payload)).toEqual(expected('ADD_TO_CART'));
  });

  test('removeToCart Action', () => {
    expect(actions.removeFromCart(payload)).toEqual(
      expected('REMOVE_FROM_CART'),
    );
  });

});
