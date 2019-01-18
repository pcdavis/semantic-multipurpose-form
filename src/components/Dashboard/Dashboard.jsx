import React, { Component, Fragment } from "react";
import { Grid, Segment, Button } from "semantic-ui-react";

const starterGoals = [
  { target: "Match colors", status: "Needs more work" },
  { target: "Pronouns", status: "Continue prompting for 'you' " },
  { target: "Numbers", status: "Working on generalizing" }
];
class Dashboard extends Component {
  state = {
    goals: starterGoals
  };
  handleNewGoal = ()=>{
    const newGoals = [...this.state.goals, {target: "New Goal", status: "Hello World"}]
    this.setState({
        goals: newGoals
    })
  }
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
        {this.state.goals.map( eachGoal => (
            <Fragment>
                <Segment>{eachGoal.target}</Segment>
                <Segment>{eachGoal.status}</Segment>
            </Fragment>
        ))}
          <Button onClick={this.handleNewGoal} color='green' content="Add Goal" />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard;
