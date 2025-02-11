// import SuperButton from "./components/ui/button";
// import Footer from "./components/ui/footer";
// import SuperButton from "./components/ui/button";
// import Footer from "./components/ui/footer";
import "./App.css";
// import { HELA } from "./data/heroes";
import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';







// import CharacterPage from "./pages/CharacterPage";



// import { Input } from "@/components/ui/input";

const App = () => {
  const currentPage = useLocation().pathname;

  return (


    <><h1 className="loginHeader">UNRIVALED</h1>
      {/* <!-- Navigation--> */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container px-4">
          <a className="navbar-brand" href="#page-top">Unrivaled</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/Log-in">Log-in/Sign-up</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Characters">Characters</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/maps">maps</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Header--> */}
      <header className="bg-primary bg-gradient text-white">
        <div className="container px-4 text-center">
          <h1 className="fw-bolder">Welcome to Unrivaled! The unoffical page for tricks and tips to Marvel Rivals</h1>
          <p className="lead">A quick way to learn how to play your favorite heroes!</p>
          <Link className="btn btn-lg btn-light" to="/Log-in">Log-in/Sign-up</Link>
          {/* add button.tsx and refer login page as well,  */}
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Unrivaled</p></div>
      </footer>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      {/* <script src="js/scripts.js"></script> */}
    </>
  );
};


export default App;
