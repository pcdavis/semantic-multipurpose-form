import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from "./testActions";

const initialState = {
  data: 22
};

let newCounter;

export default function counter(state = initialState, action) {
  switch (action.type) {


    case INCREMENT_COUNTER:
      newCounter = state.data + 1;
      return {data: newCounter};

    case DECREMENT_COUNTER:
      newCounter = state.data - 1;
      return {data: newCounter};

      default:
      return state
  }
}
