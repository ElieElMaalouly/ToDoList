import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "todolist.loginscreen",
    title: "Login"
  },
  animationType: "none"
});
