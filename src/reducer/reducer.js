// const cart = {
//   totalPrice: 300,
//   totalAmount: 2,
//   cartItems: [
//     {
//       title: "Mens Casual Premium Slim Fit T-Shirts ",
//       price: "300",
//       amount: 1,
//       id: 1,
//       image: IMG,
//     },
//   ],
// };
export default function reducer(state, action) {
  switch (action.type) {
    case "CLEARCART":
      return { ...state, cartItems: [] };
    case "REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (items) => action.payload !== items.id
        ),
      };
    case "ADD":
      const data = {
        title: action.payload.title,
        price: action.payload.price,
        amount: 1,
        id: action.payload.id,
        image: action.payload.image,
      }
      return {
        ...state,
        cartItems: state.cartItems.reduce((accum, item) => {
          if (accum.lenght === 0) {
            accum.push(data);
          }
          else if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount + 1 };
          } else {
            accum.push(data);
          }

          return accum;
        }, []),
      };
    default:
      return state;
  }
}

// state.cartItems.push({
//   title: action.payload.title,
//   price: action.payload.price,
//   amount: 1,
//   id: action.payload.id,
//   image: action.payload.image,
// });
