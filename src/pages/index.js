import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-paint-brush"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="Photos taken during my time in Japan." />
          </a>
          <div className="content">
            <h2 className="major">Hi there!</h2>
            <p>
              I'm a writer, an artist, a designer, and a translator. I've spent
              years living in countries like Japan, China, and South Africa.
              I started out in journalism and teaching, but my time abroad showed
              me what sorts of innovations could better people's lives versus what
              was available to them. I really wanted to make a different kind of
              impact - while designing some pretty awesome things in the process -
              and thus made the switch to software development!
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">My tech stack</h2>
            <p>
              I graduated from Fullstack Academy via the Web Development Fellowship
              offered by NYC's Tech Talent Pipeline, where I gained proficiency in JavaScript,
              Node/Express, React, Redux, Postgres, and Sequelize. I have a strong knowledge
              of RESTful APIs and TDD, having built test suites using Jasmine, Mocha, Jest,
              and Enzyme. I also have a solid foundation in HTML, CSS, SCSS, and web design.
            </p>
            <a href="/#" className="special">
              See more on my resume
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">More about me!?</h2>
            <p>
              I'm fluent in Japanese and Shanghainese. I'm really interested in gamifying
              mundane or difficult tasks and building good habits. (Which is a work in progress
              for me, too.) You can find me trying to carve out time to work on my novels and
              illustrations, or dabbling in music and cardistry/sleight of hand, whenever I can.
              I also love to mentor and teach!
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>
          <p>
            I have built a number of apps during my time as a student and freelance developer,
            and also have a myriad of solo and team projects under my belt.
          </p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">SubWiFi</h3>
              <p>
              A mobile content-sharing network for NYC subway riders. Built the front end of a content feed
              with scroll-based loading with React, along with a Jest/Enzyme test suite to match.
              </p>
              <a href="/#" className="special">
                See code snippets
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">All The Stocks</h3>
              <p>
              A stock simulator app where users can look up and buy shares while viewing
              their portfolio's value in real time.
              Built as a solo project for the Tech Talent Pipeline with Node, Postgres, React, Redux, and SCSS.

              </p>
              <div className="link-bottom">
                <a href="http://allthestocks.herokuapp.com/" className="special">
                  Try it out
                </a>
              </div>
            </article>
            <article>
              <a href="/#" className="image">
                <div className="aspect-ratio">
                  <iframe height="auto" src="https://www.youtube.com/embed/LDwXgw-cBnQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </a>
              <h3 className="major">AccountaBuddy</h3>
              <p>
              A productivity app where a virtual pet does tasks alongside the user, and depending on the user’s success rate, thrives or dies.
              I built the front end with React Native, Redux, and Styled Components, and implemented real-time chat using Firebase.

              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
