import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="https://cdn-icons-png.flaticon.com/512/173/173222.png"
              alt="Ahmed Hamodi Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>Esperança</h2>
            <p>
              Ter esperança para objetivos na vida é primordial. Não desistir de
              tentar e sempre buscar o melhor de si mesmo, é primordial para
              alcançar o sucesso.
            </p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a
                    href="https://sefinan.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    SIMULE AQUI
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
