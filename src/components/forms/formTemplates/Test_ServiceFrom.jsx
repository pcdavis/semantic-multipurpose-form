import React, { Component } from "react";
import { connect } from "react-redux";
import {createNewGoal} from '../formsActions'
import { reduxForm, Field, FieldArray  } from "redux-form";
// import moment from 'moment';
import cuid from 'cuid';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import TextInput from "../../formComponents/TextInput";
import TextArea from "../../formComponents/TextArea";
import SelectInput from "../../formComponents/SelectInput";

//-------initialize with dummy data-----------------

const dummyData = {
  formType: "serviceForm",
  id: null,
  patientName: "Jack Sparrow",
  dob: "1999-6-17",
  dateOfWork: "2019-01-02",
  bcba: "Thea Davis",
  startTime: "13:00",
  endTime: "14:30",
  cptCode: "15997"
};


//----------redux state and actions---------------------
//formData is the variable (object) that stores all the saved data for each form that is created. The formData objects are stored in an array called formsArray in the redux store

const mapState = (state, ownProps) => {
  // const {id} = ownProps.match.params.id;
  
  console.log('ServiceForm-mapState-state: ', state)
  let formData = {};

  // if (id && state.myForms.length > 0) {
  //   formData = state.myForms.find(form => form.id === id);
  // }
  // return {
  //   initialValues: formData
  // };

  return {
    allForms: state.myForms
  };
};

const actions = {
  createNewGoal
};

//--------Form Selector Options----------------
const bcba = [
  { key: "davis_thea", text: "Thea Davis #1073430", value: "1073430" },
  { key: "booth_cathy", text: "Cathy Booth #1073292", value: "1073292" },
  { key: "wolf_samantha", text: "Samantha Wolf #11520613", value: "11520613" }
];

//-----------Validation Rules------------------------------
const validate = combineValidators({
  patientName: isRequired({ message: "The patient name is required" }),
  bcba: isRequired({ message: "Please choose a supervising BCBA" })
  // description: composeValidators(
  //   isRequired({ message: 'Please enter a description' }),
  //   hasLengthGreaterThan(4)({
  //     message: 'Description needs to be at least 5 characters'
  //   })
  // )(),
  // city: isRequired('city'),
  // venue: isRequired('venue'),
  // date: isRequired('date')
});


class Test_ServiceForm extends Component {

  

handleNewGoal = () => {
  const { formsArray } = this.props.allForms
    const myForm = formsArray[0]
    const formId = myForm.id
  
  let newGoalId = cuid();
  console.log(newGoalId)
  this.props.createNewGoal(formId, newGoalId);
}
  // handleNewGoal = () => {
  //   let newGoal = {
  //     <Grid key={tempCount} columns="equal">
  //                 <Grid.Column >
                    
  //                     <Field
  //                       name='tempNameGoal'
  //                       type="text"
  //                       component={TextArea}
  //                       rows={4}
  //                       placeholder={tempCount}
  //                     />
                   
  //                 </Grid.Column>
  //                 <Grid.Column >
                    
  //                     <Field
  //                       name="notes"
  //                       type="text"
  //                       component={TextArea}
  //                       rows={4}
  //                       placeholder="notes"
  //                     />
                    
  //                 </Grid.Column>
                  
  //               </Grid>
  //   }

  // }

  
  // goalSection = () => {
  //   return (
      
  //   )
  // }
  

  render() {

    console.log('%c Test_ServiceForm-render-this.props','color: green',this.props)
    const { invalid, submitting, pristine} = this.props;
    const { formsArray } = this.props.allForms
    const myForm = formsArray[0]
    const formId = myForm.id
    console.log('formsArray deconstructed from this.props.allForms', formsArray)

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="blue" content="Session Details" />
            <br />
            <Form>
              <Field
                name="patientName"
                type="text"
                component={TextInput}
                placeholder="Patient Name"
              />
              <Field
                name="bcba"
                type="text"
                component={SelectInput}
                options={bcba}
                placeholder="Supervising BCBA"
              />
              <Header sub color="blue" content="Treatment Goals" />
              <br />

              { myForm.goals.map ( goal => (
                
                <Grid key={goal.id} columns="equal">
                <Grid.Column key={`${goal.id} 1`} >
                  
                    <Field
                      key={`${goal.id} 2`}
                      name="treatmentGoal"
                      type="text"
                      component={TextArea}
                      rows={4}
                      placeholder={goal.goalText}
                    />
                 
                </Grid.Column>
                <Grid.Column key={`${goal.id} 3`} >
                  
                    <Field
                    key={`${goal.id} 4`}
                      name="notes"
                      type="text"
                      component={TextArea}
                      rows={4}
                      placeholder={goal.goalNotes}
                    />
                  
                </Grid.Column>
                
              </Grid>

              ))}

              

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={this.handleNewGoal}  type="button">New Goal</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: "Test_ServiceForm", enableReinitialize: true, validate })(
    Test_ServiceForm
  )
);
