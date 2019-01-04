import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import AuthReducer from "../components/reducers/AuthReducer";
import { Input, Card, CardSection, Button, Spinner } from "./common";
import {
  emailChangedAction,
  passwordChangedAction,
  loginUserAction
} from "../actions";

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChangedAction(text);
  };

  onPasswordChange = text => {
    this.props.passwordChangedAction(text);
  };

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUserAction({ email, password });
  };

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.passowrd}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateToProps = ({ AuthReducer }) => {
  const { email, password, error, loading } = AuthReducer;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(
  mapStateToProps,
  { emailChangedAction, passwordChangedAction, loginUserAction }
)(LoginForm);
