import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperButton from "./components/ui/button";
import Footer from "./components/ui/footer";
import "./App.css";
import { HELA } from "./data/heroes";






import CharacterPage from "./pages/CharacterPage";



// import { Input } from "@/components/ui/input";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <h1 className="loginHeader">UNRIVALED</h1>

              {/* Navbar */}
              <nav className="nav">
                <div>
                  <input type="text" placeholder="Username" className="w-32" />
                  <input type="password" placeholder="Password" className="w-32" />
                </div>
              </nav>

              {/* Main Content */}
              <main>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <SuperButton heroName={HELA.name} />
                </div>
              
              </main>

              {/* Footer */}
              <footer>
                <Footer />
              </footer>
            </>
          }
        />

        {/* Character Detail Page */}
        <Route path="/character/:heroName" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
