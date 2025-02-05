import SuperButton from "./components/ui/button";
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
          <SuperButton/><SuperButton/><SuperButton/>
          {}
        </div>
      </main>

      {/* Footer */}
      <footer className="">
        <p className="">All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
