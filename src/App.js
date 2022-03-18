import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Blake Georgii</h1>
        <nav className="row">
          <a href="#about-me" className="btn btn-nav col">About</a>
          <a href="#work" className="btn btn-nav col">Work</a>
          <a href="#contact-me" className="btn btn-nav col">Contact</a>
        </nav>
      </header>
      <main className="row">
        <div className="col-12 subtitle-div space-img">
          <h2 className="subtitle">Current Student</h2>
        </div>
        <article id="about-me" className="row col-12">
          <h2 className="col-2">About Me</h2>
          <p className="col-9 content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et
            dolore magna aliqua. Euismod elementum nisi quis eleifend quam adipiscing vitae. Nunc vel risus commodo
            viverra. Iaculis nunc sed augue lacus viverra vitae congue. Ac tincidunt vitae semper quis lectus nulla
            at volutpat diam. In nisl nisi scelerisque eu ultrices vitae. Molestie at elementum eu facilisis sed
            odio. Mauris pellentesque pulvinar pellentesque habitant.
            Risus nec feugiat in fermentum posuere urna nec. Urna nunc id cursus metus. Nulla facilisi morbi tempus
            iaculis urna id volutpat lacus laoreet. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Eget
            gravida cum sociis natoque penatibus et magnis dis parturient. Lacus viverra vitae congue eu consequat
            ac. Vestibulum sed arcu non odio euismod lacinia. </p>
        </article>
        <article id="work" className="row col-12">
          <h2 className="col-2">Work</h2>
          <div className="row col-9 content">
            <a id="recipe-warriors" href="https://github.com/fmatthew40/recipe-warriors" className="col-12 subtitle-div main project">
              <div className="subtitle">
                <h3>Recipe Warriors</h3>
                <h4>Full Stack Web Application</h4>
              </div>
            </a>
            <a id="run-buddy" href="https://github.com/blake-georgii/Run-Buddy/tree/main/assets/images" className="col-6 subtitle-div small project">
              <div className="subtitle">
                <h3>Run Buddy</h3>
                <h4>Front End Development</h4>
              </div>
            </a>
            <a id="jest-another-rpg" href="https://github.com/blake-georgii/jest-another-RPG" className="col-6 subtitle-div small project">
              <div className="subtitle">
                <h3>Jest Another Rpg</h3>
                <h4>Javascript/Test Driven Development</h4>
              </div>
            </a>
            {/* <a href="#" class="col-6 subtitle-div small project">
              <div class="subtitle">
                  <h3>Example Title</h3>
                  <h4>Example Subtitle</h4>
              </div>
          </a> */}
          </div>
        </article>
        <article id="contact-me" className="row col-12 contact">
          <h2 className="col-2">Contact Me</h2>
          <nav className="row col-9 content">
            <a href="tel:8057109132" className="col">805.710.9132</a>
            <a href="mailto:blakegeorgii@gmail.com" className="col">blakegeorgii@gmail.com</a>
            <a href="https://github.com/blake-georgii" className="col">GitHub</a>
            <a href="https://twitter.com/blake_georgii" className="col">Twitter</a>
            <a href="https://www.linkedin.com/in/blake-georgii-85b7b3223/" className="col">LinkedIn</a>
          </nav>
        </article>
      </main>
    </>

  );
}

export default App;
