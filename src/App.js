// import logo from './logo.GIF';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Hi there 👋 <br/> My name is Mackenzie Clark.<br/><br/> 
      I aim to design for and build digital solutions
      through a lens of human-centered design.
      <br/>
      I am actively seeking a full-time position in user experience engineering.<br/><br/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div class="links">
        <button>
          <a href="https://github.com/mackenzieraeclark">GitHub</a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/mackenzieraeclark/">LinkedIn</a>
        </button>
        <button>
          <a href="https://mackenzieraeclark.github.io/Resume">Resume</a>
        </button>
      </div>
      </header>
    </div>
  );
}

export default App;
