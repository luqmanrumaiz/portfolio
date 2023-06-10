import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Parallax from "parallax-js";


class App extends React.Component {

  calculateAge(dob) {
    return Math.floor(
      (new Date() - new Date(dob)) /
      (365.25 * 24 * 60 * 60 * 1000))
  };

  render() {
    return (
      <div className="App">
        <nav>
          <div className="logo">
            <h1 data-heading="L" id="name_title">
              uqman
            </h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="https://solo.to/luqmanrumaiz" target="_blank">
                  <img src="../images/solo.svg" alt="Github-Icon" />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#00f29c"
            version="1.1"
            className="svg"
            width="100"
            height="100"
          >
            <path d="M 50,10 90,90 10,90 z" />
          </svg>

          <div className="parallax">
            <div className="layer" id="layer1">
              <h1>
                Hey I am Luqman Rumaiz{" "}
                <span id="red">Welcome to My Portfolio</span>
              </h1>
            </div>

            <div className="layer" id="layer6">
              <img src="../images/triangle-mountain-bg.svg" />
              <div className="icon-scroll" />
            </div>
          </div>

          <div className="content">
            <div id="about">
              <div className="about-section">
                <div className="inner-container">
                  <h1>About Me</h1>
                  <p className="about-text">
                    Hi! I'm Luqman Rumaiz a {this.calculateAge("2003-10-22")} year old Computer Science
                    Undergraduate at the University of Westminster. I live in
                    Colombo and aspire to be a Full Stack. Oh and I know a bit
                    of Machine Learning :)
                    <br />
                    <div className="button">
                      <a
                        className="white"
                        href="../documents/CV.pdf"
                        target="_blank"
                      >
                        <p>
                          <span className="bg"></span>
                          <span className="base"></span>
                          <span className="text">Download CV</span>
                        </p>
                      </a>
                    </div>
                  </p>
                  <div className="skills">
                    <span>Full Stack Dev</span>
                    <span>Data Science Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper">
              <h1>Skills</h1>
              <div className="skills-container">
                <iframe
                  src="https://my.spline.design/librarydevicemodel-44951d33158b65702b731f73fa0c649b/"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>

            <section className="portfolio section" id="portfolio">
              <h1>Portfolio</h1>

              <div className="portfolio__container bd-grid">
                <div className="portfolio__img">
                  <img src="../images/work1.png" alt="" />
                  <div className="portfolio__link">
                    <a className="portfolio__link-name">
                      ONCO - an Open Source mobile platform that specializes in
                      the diagnosis and prognosis of Skin, Lung, and Breast
                      Cancer, utilizing deep convolutional neural networks for
                      diagnosis, and machine learning and risk models for
                      prognosis. The main aim is to bridge the gap between many
                      mediocre and unreliable diagnosis and prognosis
                      applications, while at the same time making it more
                      enhanced and effective
                      <br />
                      <br /> Flutter, Firebase, Flask, Azure, OpenCV, Heroku,
                      TensorFlow | Keras | Sci-kit Learn | NLTK, Python
                    </a>
                  </div>
                </div>
                <div className="portfolio__img">
                  <img src="../images/work2.png" alt="" />

                  <div className="portfolio__link">
                    <a href="#" className="portfolio__link-name">
                      Train Ticket Booking System – Complete Application for
                      Employees and Customers that with various features that
                      helps for a smooth running of a Train Station
                      <br />
                      <br />
                      Java, JavaFX, MongoDB
                    </a>
                  </div>
                </div>
                <div className="portfolio__img">
                  <img src="../images/work3.png" alt="" />

                  <div className="portfolio__link">
                    <a href="#" className="portfolio__link-name">
                      Premier League Manager - Web and GUI Application that
                      gives Managers the ability to manage their English
                      Football League.
                      <br />
                      <br />
                      Angular, Playframework, Java, JavaFX
                    </a>
                  </div>
                </div>
                <div className="portfolio__img">
                  <img src="../images/work4.png" alt="" />

                  <div className="portfolio__link">
                    <a href="#" className="portfolio__link-name">
                      Network Flow Application - GUI Applicaiton that calculates
                      and shows the User the optimal Paths taken to push Flow
                      from a Source to a Target along with other handy features
                      like Inserting, Editing & Deleting Edges and Visualizing
                      the Graph
                      <br />
                      <br />
                      Java, JavaFX
                    </a>
                  </div>
                </div>
                <div className="portfolio__img">
                  <img src="../images/work5.png" alt="" />

                  <div className="portfolio__link">
                    <a href="#" className="portfolio__link-name">
                      Car Quiz Game - Mobile Application that entertains the
                      User with 4 Different Quiz Modes along with the option for
                      a Timer in each
                      <br />
                      <br />
                      Android
                    </a>
                  </div>
                </div>
                <div className="portfolio__img">
                  <img src="../images/work6.png" alt="" />

                  <div className="portfolio__link">
                    <a href="#" className="portfolio__link-name">
                      Cinema Application – Mobile Application that allows Users
                      to Add, Edit, Delete, Favorite, Search Movies and View
                      Ratings for a Movie
                      <br />
                      <br />
                      Android SQLite
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <footer className="footer-distributed">
              <div className="footer-left">
                <h3>
                  Luqman<span>Rumaiz</span>
                </h3>

                <p className="footer-links">
                  <a href="#">Home</a>·<a href="#">About</a>·
                  <a href="#"> Skils</a>·<a href="#">Projects</a>
                </p>

                <p className="footer-company-name">Luqman &copy; {new Date().getFullYear()}</p>
              </div>

              <div className="footer-center">
                <div>
                  <p>
                    <span>Nugegoda</span> Colombo, Sri Lanka
                  </p>
                </div>

                <div>
                  <p>
                    <a href="mailto:luqman.rumaiz@gmail.com">
                      luqman.rumaiz@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="footer-right">
                <p className="footer-company-about">
                  <span>Contact Me</span>
                  Feel free to send me an Email or dm on Discord I will try my
                  best to respond.
                  <form action="/action_page.php">
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Hey Luqman.."
                    ></textarea>
                    <div className="button" id="send-email">
                      <a className="white" href="#">
                        <p>
                          <span className="bg"></span>
                          <span className="base"></span>
                          <span className="text">Send Message</span>
                        </p>
                      </a>
                    </div>
                  </form>
                </p>
              </div>
            </footer>
          </div>
        </div>

        <div className="side">
          <a href="#">
            About <i className="fa fa-address-card"></i>
          </a>
          <a href="#">
            Skills <i className="fa-solid fa-brain"></i>
          </a>
          <a href="#">
            Projects <i className="fa-solid fa-diagram-project"></i>
          </a>
          <a href="#">
            Contact <i className="fa fa-phone-square"></i>
          </a>
        </div>
      </div>
      );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
