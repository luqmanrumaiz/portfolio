import React, {useRef} from "react";
import ReactDOM from 'react-dom/client';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

function App() {

  const formRef = useRef(null)
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  const calculateAge = (dob) => {
    return Math.floor(
      (new Date() - new Date(dob)) /
      (365.25 * 24 * 60 * 60 * 1000)
      );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        toast.success('Your message was sucessfully sent to Luqman !', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(result.text);
        }, (error) => {
        toast.error(error.text, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleAnchorClick = (e) => {
    e.preventDefault();

    if (formRef.current) {
      formRef.current.submit();
    }
  };

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
                <img src={require('./images/solo.svg').default} alt="Github-Icon" />
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

        <div>
          <div className="layer" id="layer1">
            <h1>
              Hey I am Luqman Rumaiz{" "}
              <span id="red">Welcome to My Portfolio</span>
            </h1>
          </div>

          <div className="layer" id="layer6">
            <img src={require("./images/triangle-mountain-bg.svg").default}  alt="Mountain-Home-Page-Design"/>
            <div className="icon-scroll" />
          </div>
        </div>

        <div className="content">
          <div id="about-me">
            <div className="about-section">
              <div className="inner-container">
                <h1>About Me</h1>
                <div className="about-text">
                  Hello! My name is Luqman Rumaiz, a passionate {calculateAge("2003-10-22")}-year-old Computer Science undergraduate at the University of Westminster. I reside in Nugegoda in the capital of Sri Lanka, Colombo.
                  <br />

                  As an aspiring Full Stack developer and a devoted Data Science enthusiast, I am driven to explore the fascinating realms of technology and harness its potential to create meaningful solutions. I am eager to contribute my skills, knowledge, and enthusiasm to make a positive impact in the world of software development.
                  <br />
                  <div className="button">
                    <a
                      className="white"
                      href="https://drive.google.com/file/d/1Lz2ynbRQsm-tZHw9m6mFD1W6hIhHoyo_/view?usp=sharing"
                      target="_blank"
                    >
                      <p>
                        <span className="bg"></span>
                        <span className="base"></span>
                        <span className="text">Download CV</span>
                      </p>
                    </a>
                  </div>
                </div>
                <div className="skills">
                  <span>Full Stack Dev</span>
                  <span>Data Science Enthusiast</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper" id="skills">
            <h1>Skills</h1>
            <div className="skills-container">
              <iframe
                src="https://my.spline.design/librarydevicemodel-44951d33158b65702b731f73fa0c649b/"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>

          <section className="portfolio section" id="portfolio">
            <h1>Projects</h1>

            <div className="portfolio__container bd-grid">
              <div className="portfolio__img">
                <img src={require('./images/work1.png')} alt="Project-1-Thumbnail" />
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
                <img src={require('./images/work2.png')} alt="Project-2-Thumbnail" />
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
                <img src={require('./images/work3.png')} alt="Project-3-Thumbnail" />
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
                <img src={require('./images/work4.png')} alt="Project-4-Thumbnail" />
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
                <img src={require('./images/work5.png')} alt="Project-5-Thumbnail" />
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
                <img src={require('./images/work6.png')} alt="Project-6-Thumbnail" />
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
              <div className="footer-company-about" id="contact-me">
                <span>Contact Me</span>
                <form ref={formRef} id="contact-form">
                  <label htmlFor="user_name">Name</label>
                  <br/>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    ref={nameRef}
                    placeholder="Luqman Rumaiz"
                  />
                  <label htmlFor="user_email">Email</label>
                  <br/>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    ref={emailRef}
                    placeholder="luqman.rumaiz@gmail.com"
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    ref={messageRef}
                    placeholder="Hey Luqman 👋 ..."
                  />
                  <div className="button" id="send-email">
                    <a onClick={(e) => {sendEmail(e)}} className="white">
                      <p>
                        <span className="bg"></span>
                        <span className="base"></span>
                        <span className="text">Send Message</span>
                      </p>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <div className="side">
        <a href="#about-me">
          About <i className="fa fa-address-card"></i>
        </a>
        <a href="#skills">
          Skills <i className="fa-solid fa-brain"></i>
        </a>
        <a href="#portfolio">
          Projects <i className="fa-solid fa-diagram-project"></i>
        </a>
        <a href="#contact-me">
          Contact <i className="fa fa-phone-square"></i>
        </a>
      </div>
      <ToastContainer />
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  );