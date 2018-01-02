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

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      typedEmail: "",
      typedPassword: "",
      user: null,
      errorMessage: ""
    };
  }

  onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword
      )
      .then(loggedInUser => {
        this.setState({ errorMessage: "" });
        console.log(`Login user: ${JSON.stringify(loggedInUser.toJSON())}`);

        this.props.navigator.push({
          screen: "todolist.homescreen",
          title: "To-Do List"
        });
      })
      .catch(error => {
        this.setState({ errorMessage: "Login Failed" });
        console.log(`Login failed: ${error}`);
      });
  };

  onRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.typedEmail,
        this.state.typedPassword
      )
      .then(loggedInUser => {
        this.setState({
          user: loggedInUser,
          errorMessage: "Registration Successful"
        });
        console.log(
          `Registered user: ${JSON.stringify(loggedInUser.toJSON())}`
        );
      })
      .catch(error => {
        this.setState({ errorMessage: "Registration Failed" });
        console.log(`Registration failed: ${error}`);
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
          keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={text => {
            this.setState({ typedEmail: text });
          }}
        />
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
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({ typedPassword: text });
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight onPress={this.onLogin}>
            <View
              style={{
                padding: 10,
                borderRadius: 4,
                margin: 10,
                backgroundColor: "blue"
              }}
            >
              <Text style={{ fontSize: 17, color: "white" }}>Login</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onRegister}>
            <View
              style={{
                padding: 10,
                borderRadius: 4,
                margin: 10,
                backgroundColor: "green"
              }}
            >
              <Text style={{ fontSize: 17, color: "white" }}>Register</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={{ margin: 20, fontSize: 15, color: "red" }}>
          {this.state.errorMessage}
        </Text>
      </View>
    );
  }
}
