export const Reducers = (state = [], action) => {
  switch (action.type) {
    case "add_customer":
      // console.log(state);
      console.log("ADD");
      return [...state, action.payload];
    case "remove_customer":
      console.log(action.payload);
      console.log("remeove");
      return state.filter((todo) => todo.id !== action.payload.id);
    case "empty_customer":
      console.log("empty");
      return [];
    default:
      return state;
  }
};
