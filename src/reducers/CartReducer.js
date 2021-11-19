import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  PLUS_MINUS_CART,
  REMOVE_ITEM,
} from '../utils/action';

export const initialState = {
  cart: [],
  total_amount: 0,
  total_price: 0,
  shipping_fee: 534,
};

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {id, mainColor, amount, products} = action.payload;
      const addedCartProducts = state.cart.find(
        (item) => item.id === id + mainColor
      );
      if (addedCartProducts) {
        const addedCart = state.cart.map((item) => {
          if (item.id === id + mainColor) {
            let newAmount = item.amount + amount;
            if (newAmount > item.stock) {
              newAmount = item.stock;
            }
            return {...item, amount: newAmount};
          } else {
            return item;
          }
        });
        return {...state, cart: addedCart};
      } else {
        const newAddedCart = {
          id: id + mainColor,
          name: products.name,
          stock: products.stock,
          images: products.images[0].url,
          price: products.price,
          mainColor,
          amount,
        };
        return {...state, cart: [...state.cart, newAddedCart]};
      }

    case CLEAR_CART:
      return {...state, cart: []};

    case REMOVE_ITEM:
      const removedItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {...state, cart: removedItem};

    case PLUS_MINUS_CART:
      const amountedItem = state.cart
        .map((item) => {
          if (item.id === action.payload.itemId) {
            if (action.payload.type === 'plus') {
              if (item.amount > item.stock) {
                item.amount = item.stock;
              }
            }
            return action.payload.type === 'plus'
              ? {...item, amount: item.amount + 1}
              : {...item, amount: item.amount - 1};
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {...state, cart: amountedItem};

    case COUNT_CART_TOTALS:
      const AllTotal = state.cart.reduce(
        (total, item) => {
          const {price, amount} = item;
          total.amount += amount;
          total.price += price * amount;
          return total;
        },
        {
          price: 0,
          amount: 0,
        }
      );

      return {
        ...state,
        total_amount: AllTotal.amount,
        total_price: AllTotal.price,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
