import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from "./types";

export const employeeUpdateAction = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreateAction = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export const employeesFetchAction = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};
