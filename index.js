import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "todolist.homescreen",
    title: "To-Do List"
  },
  animationType: "none"
});
