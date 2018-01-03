import React from "react";
import {
  NativeModules,
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
  static navigatorButtons = {
    rightButtons: [
      {
        title: "Add",
        id: "btnAdd"
      },
      {
        title: "Volume",
        id: "btnVolume"
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      todoTasks: [],
      isLoading: false
    };
    this.ref = firebase.firestore().collection("todoTasks");
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(querySnapshot => {
      const todos = [];
      querySnapshot.forEach(doc => {
        todos.push({
          taskName: doc.data().taskName
        });
      });
      this.setState({ todoTasks: todos, isLoading: false });
    });
  }

  onNavigatorEvent(event) {
    if (event.type == "NavBarButtonPress") {
      if (event.id == "btnAdd") {
        this.props.navigator.push({
          screen: "todolist.addtaskscreen",
          title: "Add Task"
        });
      } else if (event.id == "btnVolume") {
        var AlertModule = NativeModules.AlertModule;
        AlertModule.get().then(volume =>
          alert("Volume: " + volume + ". From native code!")
        );
      }
    }
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
      >
        <FlatList
          data={this.state.todoTasks}
          renderItem={({ item, index }) => {
            return (
              <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
                {item.taskName}
              </Text>
            );
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
