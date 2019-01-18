import React, { Component } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";

import TextInput from "../../formComponents/TextInput";
import SelectInput from "../../formComponents/SelectInput";


//-----renderFields function creates the components that will be used as input fields
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

//----------redux state and actions---------------------
//formData is the variable (object) that stores all the saved data for each form that is created. The formData objects are stored in an array called formsArray in the redux store


//--------Form Selector Options----------------
const bcba = [
    { key: "davis_thea", text: "Thea Davis #1073430", value: "1073430" },
    { key: "booth_cathy", text: "Cathy Booth #1073292", value: "1073292" },
    { key: "wolf_samantha", text: "Samantha Wolf #11520613", value: "11520613" }
  ];

//-----------Validation Rules------------------------------


//-----------The FieldArray mapping function---------

const renderGoals = ({fields}) => {
  console.log('renderGoals fired. Here is the fields obj: ', fields)
  return (
    
    <ul>
      <li>
        <button onClick={() => fields.push({})} type="button">
          New Goal2
        </button>

      </li>
      
        {fields.map((goal, index) => (
            <li key={index}>
            <Grid  columns="equal">
              <Grid.Column>
                <Field
                  name={`${goal}.goalText`}
                  type="text"
                  component={renderField}
                  label="Goal Description"
                />
              </Grid.Column>
              <Grid.Column>
                <Field
                  name={`${goal}.noteText`}
                  type="text"
                  component={renderField}
                  label="Additional Notes"
                />
              </Grid.Column>
            </Grid>
            </li>
          )
        )}
     
    </ul>

  )
}

const ServiceForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
     
            <form>
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

              <FieldArray name="goalList" component={renderGoals} />

              <br />
              <br />
              <Button
                               positive
                type="submit"
              >
                Submit
              </Button>
            </form>

    );
  }


export default reduxForm({ form: "serviceForm" })( ServiceForm )
