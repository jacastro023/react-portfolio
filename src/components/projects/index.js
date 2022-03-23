import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Carousel, Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import One from "../pictures/project/one.png"
import Two from "../pictures/project/two.png"
import Three from "../pictures/project/three.png"
import Four from "../pictures/project/four.png"
import Five from "../pictures/project/five.png"
import Home from "../pictures/project2/home.png"
import Search from "../pictures/project2/search.png"
import Hover from "../pictures/project2/hover.png"
import Garage from "../pictures/project2/garage.png"
import WBS1 from "../pictures/project3/WBS1.png"
import WBS2 from "../pictures/project3/WBS2.png"
import P4one from "../pictures/project4/p4one.png"
import P4two from "../pictures/project4/p4two.png"
import P4three from "../pictures/project4/p4three.png"
import P4four from "../pictures/project4/p4four.png"
import P5intro from "../pictures/project5/intro.png"
import P5one from "../pictures/project5/one.png"
import P5two from "../pictures/project5/two.png"
import P5three from "../pictures/project5/three.png"
import P5four from "../pictures/project5/four.png"
import P5five from "../pictures/project5/five.png"

function Footer() {
  return (
    <div>
      <div className="projectheading">
        <h1>
          Projects
        </h1>
      </div>
      <div className="project">
        <Container>
          <Row>
            <Col sm={8} className="projectdescription"><h1>KnightFall</h1><div>For this application we worked together as a group of five. The objective was to create a fun experience in the form of a Role Playing Game. Our game is called KnightFall. The user is brought into our medieval world with their choice of character and journeys through a story filled with battles. The group split into two teams, front-end and back-end. After planning the flow of the game together we started working separately. We eventually came together to connect everything and polish our final project. This was done in order to create a more real world experience. My main focus in this application was to work in the back-end of this application, I worked with creating the routes, databases, server files, and with the signup authentication and log in.</div>
              <br />
              <a href='https://github.com/Console-It-Project-3/console-it-project3' target="_blank" rel="noreferrer">
                <Button className="button1" variant="info">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  GitHub</Button>
              </a>
              <a href='https://thawing-cliffs-03966.herokuapp.com/' target="_blank" rel="noreferrer">
                <Button className="button2" variant="info">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  Website</Button>
              </a>
            </Col>
            <Col sm={4} className="projectcarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={One}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Two}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Three}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Four}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Five}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project2">
        <Container>
          <Row>
            <Col sm={8} className="projectdescription"><h1>Dream Garage</h1><div>This is a Full-Stack application. As a team we decided to create an app that would search for cars (make model and year) that were currently being sold based on the MarketCheck API. We worked as a group of three people and together we created something we could proudly present. We used a Node and Express server, a Sequelize database and jawsdb on heroku. We build this application with the use of Materialize css framework. We used Handlebars to dynamically create the website and set up all of the reusable code in a separate file. This helped create a situation in which we had to communicate with each other to finish the application.</div>
              <br />
              <a href='https://github.com/peterkrumb/My-Garage' target="_blank" rel="noreferrer">
                <Button className="button1" variant="info">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  GitHub</Button>
              </a>
              <a href='https://limitless-sands-05500.herokuapp.com/' target="_blank" rel="noreferrer">
                <Button className="button2" variant="info">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  Website</Button>
              </a>
            </Col>
            <Col sm={4} className="projectcarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Home}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Search}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Hover}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Garage}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project3">
        <Container>
          <Row>
            <Col sm={8} className="projectdescription"><h1>Danny Gamer's Website</h1><div>This project was made with the help of react and bootstrap. This Website is meant to show and store multiple different types of images separated by the choice of the client into different pages. The point is to display and store as to which items the owner already has.</div>
              <br />
              <a href='https://github.com/jacastro023/danny' target="_blank" rel="noreferrer">
                <Button className="button1" variant="info">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  GitHub</Button>
              </a>
              <a href='https://danny-gamer.herokuapp.com/' target="_blank" rel="noreferrer">
                <Button className="button2" variant="info">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  Website</Button>
              </a>
            </Col>
            <Col sm={4} className="projectcarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P4one}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P4two}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P4three}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P4four}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project4">
        <Container>
          <Row>
            <Col sm={8} className="projectdescription"><h1>WBA</h1><div>This project uses multiple API’s to create a website that provides the user with various suggestions depending on the input. The input can be a state or zip code. This project was made using pure Front-End skills. This was made in a group of two, using only HTML, CSS, Materialize, and Javascript.</div>
              <br />
              <a href='https://github.com/Aleshsparrow/Weather-based-suggestions' target="_blank" rel="noreferrer">
                <Button className="button1" variant="info">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  GitHub</Button>
              </a>
              <a href='https://aleshsparrow.github.io/Weather-based-suggestions/' target="_blank" rel="noreferrer">
                <Button className="button2" variant="info">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  Website</Button>
              </a>
            </Col>
            <Col sm={4} className="projectcarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={WBS1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={WBS2}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project5">
        <Container>
          <Row>
            <Col sm={8} className="projectdescription"><h1>Jose's Minesweeper</h1><div>This project was made to recreate the clasic minesweeper game. Only HTML, CSS and Javascript were used. Recursive functions were used through out the game to accomplish fiding the neighboring mines and opening up the squares when clicking a save one to show multiple safe squares.</div>
              <br />
              <a href='https://github.com/jacastro023/Project-1-Browser-based-Game' target="_blank" rel="noreferrer">
                <Button className="button1" variant="info">
                  <i className="fa fa-github" aria-hidden="true"></i>
                  GitHub</Button>
              </a>
              <a href='https://jacastro023.github.io/Project-1-Browser-based-Game/' target="_blank" rel="noreferrer">
                <Button className="button2" variant="info">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  Website</Button>
              </a>
            </Col>
            <Col sm={4} className="projectcarousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P5intro}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P5one}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P5two}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P5three}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P5four}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={P5five}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;