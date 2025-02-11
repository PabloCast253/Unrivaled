import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="loginHeader">UNRIVALED</h1>
      <body id="page-top">
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container px-4">
            <Link className="navbar-brand" to="/">Unrivaled</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" to="/login">Log-in/Sign-up</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/characters">Characters</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header Section */}
        <header className="bg-primary bg-gradient text-white">
          <div className="container px-4 text-center">
            <h1 className="fw-bolder">Welcome to Unrivaled! The unofficial page for tricks and tips to Marvel Rivals</h1>
            <p className="lead">A quick way to learn how to play your favorite heroes!</p>
            <Link className="btn btn-lg btn-light" to="/login">Login/Sign-up</Link>
          </div>
        </header>

        {/* About Section */}
        <section id="about">
          <div className="container px-4">
            <div className="row gx-4 justify-content-center">
              <div className="col-lg-8">
                <h2>About this page</h2>
                <p className="lead">This is a great place to learn and teach about your favorite heroes.</p>
                <ul>
                  <li>Learn lore about the Heroes you love to play every day</li>
                  <li>Watch the current Pros with easy videos to follow along</li>
                  <li>Read and leave comments by logging into our protected site</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5 bg-dark">
          <div className="container px-4">
            <p className="m-0 text-center text-white">Copyright &copy; Unrivaled</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default HomePage;
