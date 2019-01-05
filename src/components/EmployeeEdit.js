import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Card, CardSection, Button } from "./common";
import { employeeUpdateAction, employeeSaveAction } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  componentWillMount = () => {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdateAction({ prop, value });
    });
  };

  buttonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSaveAction({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
     });
  };

  render() {
    console.log(this.props);
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.buttonPress}>Save Changes</Button>
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
  { employeeUpdateAction, employeeSaveAction }
)(EmployeeEdit);
