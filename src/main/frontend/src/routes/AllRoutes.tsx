import Cookies from "js-cookie";
import { useCallback } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useGetUser, UserType } from "../configs";
import {
  CartPage,
  ConfigsPage,
  CreateEventPage,
  EventDetailsPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "../pages";

export const AllRoutes = () => {
  const authUser = Cookies.get("userCPF");
  const { data: user } = useGetUser({ cpf: authUser ?? "" });

  const PrivateRoute = useCallback(
    ({ children }: { children: any }) => {
      if (authUser === undefined || user?.type !== UserType.Admin) {
        return <Navigate to="/pagina-inicial" />;
      } else {
        return children;
      }
    },
    [user?.type]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro-usuario" element={<RegisterPage />} />
        <Route path="/pagina-inicial" element={<HomePage />} />
        <Route path="/detalhe-evento/:id" element={<EventDetailsPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route
          path="/criar-evento"
          element={
            <PrivateRoute>
              <CreateEventPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/editar-perfil"
          element={
            <PrivateRoute>
              <ConfigsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
