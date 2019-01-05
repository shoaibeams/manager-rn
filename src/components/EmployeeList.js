import React, { Component } from "react";
import { FlatList } from "react-native";
import _ from "lodash";
import { connect } from "react-redux";
import { employeesFetchAction } from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetchAction();
  }

  renderItem(employee) {
    return <ListItem employee={employee.item} />;
  }

  render() {
    const { employees } = this.props;

    return (
      <FlatList
        extraData={employees}
        data={employees}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }; //{shift: "Monday", name: "S", id: "124214"}
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetchAction }
)(EmployeeList);
