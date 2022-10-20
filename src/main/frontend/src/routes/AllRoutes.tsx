import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";

export const AllRoutes = () => {
  const authUser = true;

  const PrivateRoute = ({ children }: { children: any }) => {
    if (!authUser) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro-usuario" element={<RegisterPage />} />
        <Route
          path="/pagina-inicial"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
