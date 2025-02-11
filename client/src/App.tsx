import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuperButton from "./components/ui/button";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import LoginPage from "./pages/LoginPage"; // Create a login page
import CharacterList from "./pages/CharacterList"; // Page to show all characters
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Character List */}
        <Route path="/characters" element={<CharacterList />} />

        {/* Character Detail Page (Dynamic) */}
        <Route path="/character/:heroName" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
