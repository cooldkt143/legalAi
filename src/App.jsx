import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OfficerLogin from "./pages/officerLogin";
import OfficerHome from "./pages/OfficerHome";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root / Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Officer's Page */}
        <Route path="/officerLogin" element={<OfficerLogin />} />
        <Route path="/officerHome" element={<OfficerHome />} />

        {/* Citizen's Page */}

        {/* Catch-all for invalid URLs (optional) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
