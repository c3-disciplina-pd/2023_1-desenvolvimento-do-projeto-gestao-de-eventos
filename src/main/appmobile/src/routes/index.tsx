import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useLogin } from '../hooks/useLogin';

export function Routes() {
  const [loggedIn, setLoggedIn] = useLogin();
  return (
    <NavigationContainer>
      {loggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}