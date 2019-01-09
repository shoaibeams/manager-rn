import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Communications from "react-native-communications";
import { Card, CardSection, Button, Confirm } from "./common";
import {
  employeeUpdateAction,
  employeeSaveAction,
  employeeDeleteAction
} from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount = () => {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdateAction({ prop, value });
    });
  };

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSaveAction({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}.`);
  };

  onAccept = () => {
    const { uid } = this.props.employee;

    this.props.employeeDeleteAction({ uid });
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => {
              this.setState({ showModal: !this.state.showModal });
            }}
          >
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete?
        </Confirm>
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
  { employeeUpdateAction, employeeSaveAction, employeeDeleteAction }
)(EmployeeEdit);
