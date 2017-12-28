// @flow

import { Navigation } from "react-native-navigation";

import LoginScreen from "./login";

export function registerScreens() {
  Navigation.registerComponent("ToDoList.LoginScreen", () => LoginScreen);
}
