import {
  BottomTabBarButtonProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { EventDetails } from "@screens/EventDetails";
import { Home } from "@screens/Home";

import { House, PlusCircle, UserCircle } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";
import { Edit } from "@screens/Edit/index";
import { CreateEvent } from "@screens/CreateEvent";

type AppRoutes = {
  Home: undefined;
  CreateEvent: undefined;
  Edit: undefined;
  EventDetails: undefined;
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
        name="CreateEvent"
        component={CreateEvent}
        options={{ tabBarIcon: ({ color }) => <PlusCircle color={color} /> }}
      />
      <Screen
        name="Edit"
        component={Edit}
        options={{ tabBarIcon: ({ color }) => <UserCircle color={color} /> }}
      />
      <Screen
        name="EventDetails"
        component={EventDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
