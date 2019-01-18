/*
 * action types
 */
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

/*
 * action creators
 */

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
}