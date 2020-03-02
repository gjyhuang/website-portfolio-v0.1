import React from 'react';
import Layout from '../components/Layout';
import resumePdf from '../assets/pdf/Grace_Huang_Resume.pdf'

const Resume = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header className="resume">
        <div className="inner">
          <div className="pdf-link">
            <a href={resumePdf}>Download a copy <span className="icon fa-download"></span></a>
          </div>
          <h2>Grace Huang</h2>
          <p className="resume-links">
            New York, NY
            <br />
            grace.jy.huang@gmail.com
            <br />
            <a href="linkedin.com/in/gracejh">linkedin.com/in/gracejh</a>
            <br />
            <a href="github.com/gjyhuang">github.com/gjyhuang</a>
          </p>
          <div className="elevate"><hr /></div>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner resume">
          <div className="resume-wrap">
          <h2 id="education">Education</h2>
          <p>
            <strong>
              Immersive Software Engineering Program, Web Development Fellowship
            </strong>
            <br />
            <em>Fullstack Academy of Code, New York, NY, USA</em>
            <br />
            2019
          </p>
          <p>
            <strong>
              Bachelors of Science in Journalism and Political Science, Minor in
              Psychology, Cum Laude
            </strong>
            <br />
            <em>Northwestern University, Evanston, IL, USA</em>
            <br />
            2008 - 2012
          </p>
          <div className="divider" />

          <h2 id="projects">Projects</h2>
          <p>
            <strong>All The Stocks</strong>
            <br />
            <em>Web Application | 2020</em>
            <br />
            <a href="http://allthestocks.herokuapp.com/">
              http://allthestocks.herokuapp.com/
            </a>
            <br />
            <a href="https://github.com/gjyhuang/stock-portfolio">
              http://github.com/gjyhuang/stock-portfolio
            </a>
            <ul>
              <li>A stock simulator app where users can look up and buy shares
            while viewing their portfolio&#39;s value in real time.</li>
              <li>Built as a solo project with Node, Postgres, React, Redux, and SCSS.</li>
            </ul>
          </p>
          <p>
            <strong>AccountaBuddy</strong>
            <br />
            <em>Mobile Application | 2019</em>
            <br />
            <a href="https://github.com/Dr-DJ1909/Accountabuddy">
              http://github.com/Dr-DJ1909/Accountabuddy
            </a>
            <ul>
              <li>A productivity app where a cute virtual pet does tasks
            alongside the user, and depending on the user’s success rate,
            thrives or dies.</li>
              <li>Built the front end with React Native and Styled Components;
            implemented the Redux store and real-time chat using Firebase.</li>
            </ul>
          </p>
          <p>
            <strong>The Armory</strong>
            <br />
            <em>Web Application | 2019</em>
            <br />
            <a href="http://the-armory.herokuapp.com/">
              http://the-armory.herokuapp.com/
            </a>
            <br />
            <a href="https://github.com/Staten-APIsland/GraceShopper">
              http://github.com/gjyhuang/stock-portfolio
            </a>
            <br />
            <ul>
              <li>An e-commerce app developed with Node, React, Redux, Express.js,
            Sequelize, and Postgres.</li>
              <li>Managed the team’s workflow while handling guest data persistence
            and creating the design schemas and CSS.</li>
            </ul>
          </p>
          <div className="divider" />

          <h2 id="experience">Experience</h2>
          <p>
            <strong>Software Engineer</strong>
            <div className="wrap">
              <div>Freelance</div>
              <div><em>February 2019 - present</em></div>
            </div>
            <ul>
              <li>Created a content feed with infinite scroll for SubWiFi, a mobile PWA content sharing platform.</li>
              <li>Built the frontend via React, and a Jest/Enzyme test suite to match.</li>
            </ul>
          </p>
          <p>
            <strong>Graphic Designer, Artist</strong>
            <div className="wrap">
              <div>Freelance</div>
              <div><em>August 2016 - present</em></div>
            </div>
            <ul>
              <li>Managed published magazine projects involving teams of 20+ artists
            while coordinating product layout and design.</li>
              <li>Translated passages from books, magazines, and audio CDs for
            clients, sometimes typesetting as necessary.</li>
            </ul>
          </p>
          <p>
            <strong>News Producer</strong>
            <div className="wrap">
              <div>Fuji TV - New York, USA</div>
              <div><em>October 2018 - July 2019</em></div>
            </div>
            <ul>
              <li>Collaborated on broadcast stories while traveling with a team of
            multilingual speakers, using multiple languages daily to convey
            information accurately in a fast-paced newsroom.</li>
              <li>Covered the United Nations beat, recording footage, writing and
            reporting on briefings, and fostering a network of sources there.</li>
            </ul>
          </p>
          <p>
            <strong>Assistant Language Teacher</strong>
            <div className="wrap">
              <div>Owani ES &amp; JHS - Aomori, Japan</div>
              <div><em>August 2012 - August 2017</em></div>
            </div>
            <ul>
              <li>Team-taught ESL classes to 1,000+ students ages 7 to 15 while
            serving in a mentor and counselor role, and coached them for
            proficiency tests and contests in a Japanese setting.</li>
              <li>In charge of tasks such as event photography, video/photo/audio
            editing, and IT/network troubleshooting.</li>
              <li>Gave presentations and demonstration lessons while interpreting at
            conferences of 100+ attendees.</li>
            </ul>
          </p>
          <div className="divider" />

          <h2 id="technical-skills">Technical Skills</h2>
          <p>
            <strong>Proficient:</strong> JavaScript, React, Redux, Express,
            Sequelize, Git, HTML, CSS, SCSS, Node.js, React Native, REST APIs,
            PostgreSQL, TDD, Jest, Enzyme
            <br />
            <strong>Knowledgeable:</strong> Heroku, SQL, Firebase, Jasmine,
            Mocha, Chai, Agile
            <br />
            <strong>Some expertise:</strong> Python
          </p>
          <div className="divider" />

          <h2 id="languages">Languages</h2>
          <p>
            English: <em>native</em>
            <br />
            Shanghainese: <em>native</em>
            <br />
            Mandarin: <em>conversational</em>
            <br />
            Japanese: <em>fluent - JLPT N1, Kanji Kentei pre-2</em>
          </p>
          <div className="divider" />

          <h2 id="software">Software</h2>
          <p>
            Photoshop
            <br />
            InDesign
            <br />
            Clip Studio Paint
            <br />
            Audacity
            <br />
            MS Excel, MS Word
          </p>
        </div>

        </div>
      </div>
    </section>
  </Layout>
);

export default Resume;
