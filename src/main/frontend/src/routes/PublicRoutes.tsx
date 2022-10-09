import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro-usuario" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
