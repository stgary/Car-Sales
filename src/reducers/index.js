import { ADD_ITEM } from "../actions";
import { REMOVE_ITEM } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1342, name: "V-6 engine", price: 1500 },
    { id: 2234, name: "Racing detail package", price: 1500 },
    { id: 3444, name: "Premium sound system", price: 500 },
    { id: 4112, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let updatedStore = state.store.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        additionalPrice: (state.additionalPrice += action.payload.price),
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        store: [...updatedStore]
      };
    case REMOVE_ITEM:
      let updatedFeatures = state.car.features.filter(
        item => item.id !== action.payload.id
      );
      return {
        ...state,
        additionalPrice: (state.additionalPrice -= action.payload.price),
        car: {
          ...state.car,
          features: [...updatedFeatures]
        },
        store: [...state.store, action.payload]
      };
    default:
      return state;
  }
};