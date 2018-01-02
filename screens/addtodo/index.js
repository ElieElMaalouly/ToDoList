import React from "react";
import {
  Text,
  View,
  Button,
  Platform,
  TouchableHighlight,
  TextInput
} from "react-native";
import firebase from "react-native-firebase";

export default class AddToDoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: Platform.OS === "ios" ? 30 : 0
        }}
      />
    );
  }
}
