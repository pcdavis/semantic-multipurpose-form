// -----  action types
export const CREATE_FORM = "CREATE_FORM";
export const DELETE_FORM = "DELETE_FORM";
export const UPDATE_FORM = "UPDATE_FORM";
export const CREATE_GOAL = "CREATE_GOAL";
export const INCREMENT_GOAL_COUNTER = "INCREMENT_GOAL_COUNTER";

//---- action creators
export const createForm = (form) => {
  return {
    type: CREATE_FORM,
    payload: {
        form
      }
  }
}

export const deleteForm = (formId) => {
  return {
    type: DELETE_FORM,
    payload: {
        formId
      }
  }
}

export const updateForm = (form) => {
  return {
    type: UPDATE_FORM,
    payload: {
        form
      }
  }
}

export const createNewGoal = (formId, newGoalId) => {
  return {
    type: CREATE_GOAL,
    payload: {
        formId,
        newGoalId
      }
  }
}


export const incrementGoalCounter = () => {
    return {
      type: INCREMENT_GOAL_COUNTER
    }
  }



