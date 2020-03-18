
export const ADD_ITEM = "ADD_ITEM";

export const addItem = feature => {
  return {
    type: ADD_ITEM,
    payload: feature
  };
};

export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = feature => {
  return {
    type: REMOVE_ITEM,
    payload: feature
  };
};