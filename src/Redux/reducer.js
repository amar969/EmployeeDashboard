import { TEMP } from "./action";

export const reducer = (store, action) => {
  switch (action.type) {
    case TEMP:
      return {
        ...store,
      };
    default:
      return store;
  }
};
