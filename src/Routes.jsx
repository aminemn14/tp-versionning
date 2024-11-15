// Routes.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PhotoDetails from "./pages/PhotoDetails";
import Photos from "./pages/Photos";
import Album from "./pages/Album";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/album/:id/photos" element={<Photos />} />
      <Route path="/album/:id/photos/:id" element={<PhotoDetails />} />
      <Route path="/album" element={<Album />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;
