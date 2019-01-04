import React, { Component } from "react";
import { ListView, Text, View } from "react-native";
import { connect } from "react-redux";
import { employeesFetchAction } from "../actions";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetchAction();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //nextProps the next Props the comp will be rendered with
    //this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.employees);
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(
  mapStateToProps,
  { employeesFetchAction }
)(EmployeeList);
