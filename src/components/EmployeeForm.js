import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdateAction } from "../actions";
import { CardSection, Input } from "./common";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => {
              this.props.employeeUpdateAction({ prop: "name", value });
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Name"
            placeholder="555-555-55"
            value={this.props.phone}
            onChangeText={value => {
              this.props.employeeUpdateAction({ prop: "phone", value });
            }}
          />
        </CardSection>

        <CardSection style={{ flexDirection: "row" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{
              flex: 1,
              marginStart: 50
            }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdateAction({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingTop: 12,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.EmployeeFormReducer;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdateAction }
)(EmployeeForm);
