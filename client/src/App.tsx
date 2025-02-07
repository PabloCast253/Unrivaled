// import SuperButton from "./components/ui/button";
// import Footer from "./components/ui/footer";
// import SuperButton from "./components/ui/button";
// import Footer from "./components/ui/footer";
// import "./App.css";
// import { HELA } from "./data/heroes";






// import CharacterPage from "./pages/CharacterPage";


// import { Input } from "@/components/ui/input";

const App = () => {
  return (

    
    <><h1 className="loginHeader">UNRIVALED</h1><body id="page-top">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container px-4">
          <a className="navbar-brand" href="#page-top">Unrivaled</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">Log-in/Sign-up</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Characters</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">maps</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Header--> */}
      <header className="bg-primary bg-gradient text-white">
        <div className="container px-4 text-center">
          <h1 className="fw-bolder">Welcome to Unrivaled! The unoffical page for tricks and tips to Marvel Rivals</h1>
          <p className="lead">A quick way to learn how to play your favorite heroes!</p>
          <a className="btn btn-lg btn-light" href="#about">Login/Sign-up</a>
          {/* add button.tsx and refer login page as well,  */}
        </div>
      </header>
      {/* <!-- About section--> */}
      <section id="about">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>About this page</h2>
              <p className="lead">This is a great place to learn and teach about your favorite heroes. At Unrivaled we strive to have the latest know-hows to preform at the top ranks!:</p>
              <ul>
                <li>Learn lore about the Heroes you love to play everyday</li>
                <li>Watch the current Pros with easy videos to follow along to</li>
                <li>Read and leave comments by logging into our protected site</li>
                <li>Start a new day being better hero and teammate!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services section-->
    <section className="bg-light" id="services">
        <div className="container px-4">
            <div className="row gx-4 justify-content-center">
                <div className="col-lg-8">
                    <h2>Services we offer</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
                </div>
            </div>
        </div>
    </section> */}
      {/* <!-- Contact section--> */}
      <section id="contact">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Contact us</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Unrivaled</p></div>
      </footer>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>
    </body></>
    
  );
};


export default App;
