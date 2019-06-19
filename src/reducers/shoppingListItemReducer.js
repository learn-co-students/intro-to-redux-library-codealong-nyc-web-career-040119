//reducer is just producing a counter
//instead of having all functions encapsulated in closure within index.js, we've now separated out the reducer function, given it a relevant name, and let Redux library take care of createStore function
//these two pieces are both imported into src/index.js and used to create store
//store value then passed as prop to Provider

export default function shoppingListItemReducer(
  state = {
    items: []
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case 'INCREASE_COUNT':
      console.log('Current state.items length %s', state.items.length);
      console.log('Updating state.items length to %s', state.items.length + 1);
      return Object.assign({}, state, {
        items: state.items.concat(state.items.length + 1)
      });

    default:
      console.log('Initial state.items length: %s', state.items.length);
      return state;
  }
}
