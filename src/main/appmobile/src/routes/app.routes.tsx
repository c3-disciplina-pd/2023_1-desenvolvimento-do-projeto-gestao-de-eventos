import {
  BottomTabBarButtonProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { EventDetails } from "@screens/EventDetails";
import { Home } from "@screens/Home";

import { House, UserCircle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";
import { Edit } from "@screens/Edit";

type AppRoutes = {
  Home: undefined;
  Edit: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.RED_700,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 84 : 64,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: ({ color }) => <House color={color} /> }}
      />
      <Screen
        name="Edit"
        component={Edit}
        options={{ tabBarIcon: ({ color }) => <UserCircle color={color} /> }}
      />
    </Navigator>
  );
}
