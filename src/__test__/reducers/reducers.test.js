import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Retornar initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('Add to cart', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('Remove to cart', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
