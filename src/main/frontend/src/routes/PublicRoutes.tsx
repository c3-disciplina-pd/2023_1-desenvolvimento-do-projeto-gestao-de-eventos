import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
