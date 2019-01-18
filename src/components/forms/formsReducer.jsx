import { UPDATE_FORM, DELETE_FORM, CREATE_FORM, CREATE_GOAL,INCREMENT_GOAL_COUNTER } from "./formsActions";

// const initialState2 = {
//     myGoalCounter: 1,
//     formsArray: [
//         {
//           id: "1",
//           formType: "serviceForm",
//           patientName: "Jack Sparrow",
//           patientId: "x123",
//           dob: "1999-6-17",
//           dateOfWork: "2019-01-02",
//           bcba: "Thea Davis",
//           startTime: "13:00",
//           endTime: "14:30",
//           cptCode: "15997",
//           goals: [
//             {
//               goalId: 2123,
//               updateDate: "2019-01-02",
//               goalText:
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper",
//               goalNotes: "Sed eget ipsum vel arcu vehicula ullamcorper",
//               workType: "update program"
//             }
//           ]
//         }
//       ]
// } 


const initialState = {
    myGoalCounter: 1,
    formsArray: [
        {
          id: 1,
          formType: "serviceForm",
          patientName: "Jack Sparrow",
          bcba: "x123",
          goals: [
            {
              id: 2123,
              updateDate: "2019-01-02",
              goalText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper",
              goalNotes: "Sed eget ipsum vel arcu vehicula ullamcorper",
              workType: "update program"
            }
          ]
        }
      ]
} 


export default function formsReducer(state = initialState, action) {
  switch (action.type) {

    case CREATE_GOAL:
     let newCount = state.myGoalCounter +1;
     const selectedForm = state.formsArray.find( form => form.id === action.payload.formId)
     selectedForm.goals = [...selectedForm.goals, {id:`${action.payload.formId}-`}];
     let updatedArray = [selectedForm,...state.formsArray]
     return {
         myGoalCounter: newCount,
            formsArray: updatedArray
        };

    case UPDATE_FORM:
      const formObj = state.formsArray.find( form => form.id === action.payload.formId)
      console.log('formObj is ', formObj)
      console.log('payload is ', action.payload)
      let newGoals = [...formObj.goals,action.payload.newGoal]
      formObj.goals = newGoals;
      let newFormsArray = [formObj, ...state.formsArray]
      return {formsArray: newFormsArray}

    case CREATE_FORM:
      const newArray = [...state, action.payload];
      console.log('newArray is ', newArray)
      console.log('payload is ', action.payload)
      return newArray;

    case INCREMENT_GOAL_COUNTER:
     
     return { };

      default:
      return state
  }
}


