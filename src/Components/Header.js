import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <div className="row banner">
          <div className="banner-text">
            <div>
              <h1 className="responsive-headline">
                <span>
                  <span style={{ color: "#d3d3d3" }}>Um sonho</span>{" "}
                  <span style={{ color: "#11abb0" }}>alcançavel</span>
                </span>
              </h1>
              <h3>
                <span style={{ padding: 5 }}>
                  <span style={{ padding: 5 }}>
                    <em>
                      Se você tem um objetivo, lute para conquistar e não tenha
                      medo de falhar. Falhará de verdade se você não tentar.
                    </em>
                  </span>
                </span>
              </h3>
              <hr />
              <ul>
                <a
                  href="https://sefinan.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button btn project-btn"
                >
                  SIMULE AQUI
                </a>
              </ul>
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
