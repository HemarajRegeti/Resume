import React, { useState, useEffect } from 'react';
import './Chitti.css';

const Chitti = () => {
  const [editMode, setEditMode] = useState(false);

  const shrinkMonths = (className) => {
    const datesElement = document.querySelector(className);
    if (datesElement) {
      const dates = datesElement.querySelectorAll('.date');
      dates.forEach(date => {
        const words = date.textContent.split(' ');
        words[0] = words[0].substr(0, 3);
        if (words.length > 3) {
          words[3] = words[3].substr(0, 3);
        }
        date.textContent = words.join(' ');
      });
    }
  };


  const handleEditClick = () => {
    setEditMode(!editMode);

  };

  useEffect(() => {
    shrinkMonths('.CTS');
    shrinkMonths('.GTA');
    shrinkMonths('.si');
    shrinkMonths('.online');
    shrinkMonths('.GCC');
    shrinkMonths('.DTC');
    shrinkMonths('.CSI');
    shrinkMonths('.math');
    shrinkMonths('.alby');
    shrinkMonths('.zuma');
  }, []);

  return (
    <div className="resume">
      <a href="http://www.DavidJosephCarter.com/DavidCarterResume.pdf" id="pdfLink">
        Download the .pdf here!
      </a>
      <div className="content">
        <header>
          <h1>David Joseph Carter</h1>
          <hr />
          <ul className="myInfo">
            <li>1750 N Range Rd Apt D103, Bloomington, IN 47408</li>
            <li>dajocarter@gmail.com</li>
            <li>(661) 802-1272</li>
          </ul>
        </header>
        <main>
          <section className="skills">
            <h2>Computer Skills</h2>
            <ul>
              <li>Languages: LaTeX, HTML, CSS, Sass, JavaScript, jQuery</li>
              <li>
                Profiles:
                <a href="https://github.com/PollyNomial">GitHub</a>,
                <a href="https://www.codepen.io/polly_nomial">Code Pen</a>,
                <a href="https://www.codeschool.com/users/soadmaniak13">Code School</a>
              </li>
            </ul>
          </section>

          <section className="projects">
            <h2>Projects</h2>
            <ul>
              <li>
                <a href="http://DavidJosephCarter.com">DavidJosephCarter.com</a> - What you're looking at right now! Features CSS3, HTML5, cross-browser compatibility, and mobile responsiveness.
              </li>
              <li>
                <a href="http://DavidJosephCarter.com/RandomColorGenerator/rcg.html">Random Color Generator</a> - Assigns a random color to the background of the page and supplies the visitor with the RGB value of that color. Features CSS3, JavaScript, and a sprinkle of jQuery.
              </li>
              <li>
                <a href="http://DavidJosephCarter.com/Calculators/calc.html">Calculator Page</a> - An assortment of calculators for commonly performed tasks in classes I tutor. Features HTML5, CSS3, and JavaScript, and jQuery.
              </li>
              <li>
                <a href="http://DavidJosephCarter.com/DynamicQuiz/quiz.html">Dynamic Quiz</a> - An easy quiz to showcase my proficiency in JavaScript and jQuery.
              </li>
            </ul>
          </section>

          <section className="edu">
            <h2>Education</h2>
            <div className="NIU">
              <ul>
                <li>Northern Illinois University </li>
                <li>Master of Science in Mathematics</li>
                <li className="date">2013</li>
                <li>GPA : 3.52</li>
              </ul>
            </div>
            <div className="CSUN">
              <ul>
                <li>California State University Northridge</li>
                <li>Bachelor of Arts in Mathematics</li>
                <li className="date">2011</li>
                <li>GPA : 3.38</li>
              </ul>
            </div>
          </section>

          <section className="work">
            <h2>Work Experience</h2>

            <div className="CTS">
              <ul>
                <li className="date">September 2013 - Present</li>
                <li className="bold">Private Tutor</li>
                <li className="italic">Campus Tutoring Service</li>
                <li>Bloomington, IN</li>
              </ul>

              <ul>
                <li>
                  Conducted hour-long private tutoring sessions for Indiana University students enrolled in Finite Mathematics, Brief Survey of Calculus, Pre-Calculus, and Calculus I.
                </li>
                <li>
                  Tutored 171 students for 400 hours over one semester with a rebooking rate of over 40%. Of those students who rebooked, over 60% rebooked more than once.
                </li>
              </ul>
            </div>

            <div className="GTA">
              <ul>
                <li className="date">January 2012 - May 2013</li>
                <li className="bold">Graduate Teaching Assistant</li>
                <li className="italic">NIU Mathematics Department</li>
                <li>DeKalb, IL</li>
              </ul>

              <ul>
                <li>
                  Led weekly recitations for Finite Mathematics, Core Competency in Mathematics, and College Algebra composed of 20 students each.
                </li>
                <li>
                  Held two-hour mass test review sessions of up to 50 students where I openly answered any problems.
                </li>
                <li>
                  One of four GTAs to operate the Calculus Tutoring Center which focused on walk-in tutoring for any Business Calculus, Calculus I, and Calculus II student.
                </li>
              </ul>
            </div>



          </section>

          <section className="awards">
            <h2>Distinctions</h2>
            <ul>
              <li>Graduate Teaching Certificate, </li>
              <li className="date">Spring 2013</li>
              <li className="italic">Northern Illinois University</li>
            </ul>

            <ul>
              <li>
                Preparing Undergraduates through Mentoring towards Ph.D's (PUMP) participant,
              </li>
              <li className="date">Summer 2011</li>
              <li className="italic">CSU Northridge</li>
            </ul>

            <ul>
              <li> Aerospace Walk of Honor Scholarship,</li>
              <li className="date">Spring 2009</li>
              <li className="italic">Antelope Valley College</li>
            </ul>
          </section>
        </main>
      </div>
      <button onClick={handleEditClick}>{editMode ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default Chitti;
