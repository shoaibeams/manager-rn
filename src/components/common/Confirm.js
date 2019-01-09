import React from "react";
import { Text, View, Modal } from "react-native";
import { CardSection } from "./CardSection"; //to avoid cyclical import
import { Button } from "./Button";

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, CardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={CardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  CardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: "rgba(0,0,0.75)", // 0.75 means pacity of three quaters
    position: "relative",
    justifyContent: "center",
    flex: 1
  }
};

export { Confirm };
