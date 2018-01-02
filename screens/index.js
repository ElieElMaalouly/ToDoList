// @flow

import { Navigation } from "react-native-navigation";

import LoginScreen from "./login";
import HomeScreen from "./home";
import AddTaskScreen from "./addtask";

export function registerScreens() {
  Navigation.registerComponent("todolist.loginscreen", () => LoginScreen);
  Navigation.registerComponent("todolist.homescreen", () => HomeScreen);
  Navigation.registerComponent("todolist.addtaskscreen", () => AddTaskScreen);
}
