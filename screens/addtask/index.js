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

export default class AddTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedTask: ""
    };
    this.ref = firebase.firestore().collection("todoTasks");
  }

  onSave = () => {
    if (this.state.typedTask.trim() === "") {
      alert("All fields are required!");
      return;
    }

    this.ref
      .add({
        taskName: this.state.typedTask
      })
      .then(data => {
        console.log(`Added data: ${data}`);
        this.setState({
          typedTask: ""
        });

        this.props.navigator.pop({
          animated: true,
          animationType: "fade"
        });
      })
      .catch(error => {
        console.log(`Error adding data: ${error}`);
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: Platform.OS === "ios" ? 30 : 0
        }}
      >
        <TextInput
          style={{
            height: 40,
            width: 200,
            margin: 10,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
            color: "black"
          }}
          keyboardType="default"
          placeholder="Task"
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({ typedTask: text });
          }}
        />
        <TouchableHighlight onPress={this.onSave}>
          <View
            style={{
              padding: 10,
              borderRadius: 4,
              margin: 10,
              backgroundColor: "blue"
            }}
          >
            <Text style={{ fontSize: 17, color: "white" }}>Save</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
