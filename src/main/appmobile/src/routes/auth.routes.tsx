import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Welcome } from "@screens/Welcome";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";

type AuthRoutes = {
    Welcome:undefined;
    Login: undefined;
    Register: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />

      <Screen name="Login" component={Login} />

      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
