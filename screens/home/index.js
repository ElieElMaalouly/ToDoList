import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableHighlight,
  TextInput,
  FlatList
} from "react-native";
import firebase from "react-native-firebase";

export default class HomeScreen extends React.Component {
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
