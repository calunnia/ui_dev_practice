import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <nav id="hambi" class="navbar navbar-dark ">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
      </nav>

      <div class="container">
          <div class="row row-cols-*">
          
              <div id="web" >
                    <h1 class="title">Find Your <br /> Dream Job <br/> with Us</h1>
                      <div class="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
                          corrupti nemo doloribus aperiam esse beatae dolor quisquam dolorum ullam
                          commodi minima saepe laborum voluptas, tempore, hic eos obcaecati, odit
                          possimus ullam
                          
                      </p>
                      </div>
                      <button className="btn btn-primary apply">APPLY</button>
              </div>
          
          
          </div>
      </div>
        
      </header>
    </div>
  );
}

export default App;
