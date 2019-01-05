import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="root">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            titleStyle={{ textAlign: "center", flex: 1 }}
            initial
          />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />

          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
