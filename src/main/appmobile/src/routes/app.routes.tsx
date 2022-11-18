import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventDetails } from "@screens/EventDetails";
import { Home } from "@screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="EventDetails" component={EventDetails} />
    </Navigator>
  );
}