import SuperButton from "./components/ui/button";
import Footer from "./components/ui/footer";
import "./App.css";
// import { Input } from "@/components/ui/input";

const App = () => {
  return (
    <>
    
    <h1 className="loginHeader">UNRIVALED</h1>
      {/* Navbar */}
      <nav className="nav">
        <div className="">
          <input type="text" placeholder="Username" className="w-32"></input>
          <input type="password" placeholder="Password" className="w-32" ></input>
        </div>
      </nav>

      {/* Main Content */}
      <main className="">
        <div className="">
          <SuperButton/>
          {}
        </div>
      </main>

      {/* Footer */}
      <footer className="">
        <Footer />
      </footer>
    </>
  );
};

export default App;
