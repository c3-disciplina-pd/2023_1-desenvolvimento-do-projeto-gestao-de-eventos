import { BottomTabNavigationProp, createBottomTabNavigator, } from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { EventDetails } from "@screens/EventDetails";
import { CreateEvent } from "@screens/CreateEvent";
import { Edit } from "@screens/Edit/index";
import { Config } from "@screens/Sistem";
import { Perfil } from "@screens/Perfil";

import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";

type AppRoutes = {
  Home: undefined;
  CreateEvent: undefined;
  Edit: undefined;
  EventDetails: undefined;
  Config: undefined;
  Perfil: undefined;
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
        options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }}
      />
      <Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{ tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={24} color={color} /> }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} /> }}
      />
      <Screen
        name="Config"
        component={Config}
        options={{ tabBarIcon: ({ color }) => <AntDesign name="setting" size={24} color={color} /> }}
      />
      <Screen
        name="EventDetails"
        component={EventDetails}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="Edit"
        component={Edit}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}