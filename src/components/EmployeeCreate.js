import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdateAction, employeeCreateAction } from "../actions";
import EmployeeForm from "./EmployeeForm";
import { Card, CardSection, Button } from "./common";

class EmployeeCreate extends Component {
  buttonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreateAction({ name, phone, shift: shift || "Monday" });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.buttonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.EmployeeFormReducer;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdateAction, employeeCreateAction }
)(EmployeeCreate);
