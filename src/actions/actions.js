export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const removeFeature = item => {
   return {type: REMOVE_ITEM, payload: item};
  };

  const buyItem = item => {
    return {type: BUY_ITEM, payload: item};
  };