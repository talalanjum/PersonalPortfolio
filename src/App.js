import "./App.css";
import "./fonts/Minipax/fonts/ttf/Minipax-Bold.ttf";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const div = document.getElementById("second");
    div.style.display = "block";
  });

  return (
    <div className="App">
      <div className="first">
        <div className="text-wrapper">
          <p className="center-text">Long way to go.</p>
        </div>
        <div className="links">
          <a
            href="https://github.com/talalanjum"
            className="icon-button github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/muhammaad-talal"
            className="icon-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://instagram.com/talal_anjum"
            className="icon-button instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div id="second" className="second"></div>
    </div>
  );
}

export default App;
