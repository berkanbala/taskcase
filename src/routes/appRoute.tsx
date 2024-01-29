import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/home";
import AppLayout from "../layout/appLayout";
import Contact from "../pages/contact/contact";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
