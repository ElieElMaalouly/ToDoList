import { Navigation } from "react-native-navigation";

import { registerScreens } from "./screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "ToDoList.LoginScreen",
    backButtonTitle: ""
  },
  animationType: "none"
});
