import React from 'react';
import './Jade.css';

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>JOHN DOE</h1>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit</p>
            </header>
            <div className="container">
                <section className="about-me">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vestibulum fer mentum enim eu justo venenatis, quis tempus mauris sollicitudin. Sed sed augue nunc. Proin euismod pulvinar tellus in ullam corper.</p>
                    <h3>My Hobbies</h3>
                    <ul className="hobbies">
                        <li>Music</li>
                        <li>Sports</li>
                        <li>Travel</li>
                        <li>Movies</li>
                        <li>Series</li>
                        <li>Reading</li>
                    </ul>
                </section>
                <section className="contacts">
                    <h2>Contacts</h2>
                    <address>
                        12 Street Name, City<br />
                        State - Country Name<br />
                        00 111 123 456 789<br />
                        info@youremail.com<br />
                        www.yoursite.com
                    </address>
                </section>
                <section className="personal-skills">
                    <h2>Personal Skills</h2>
                    <ul>
                        <li>Praesent</li>
                        <li>Lorem ipsum</li>
                        <li>Quisque</li>
                        <li>Scelerisque</li>
                        <li>Ut id orci</li>
                        <li>Cras eleifend</li>
                    </ul>
                </section>
                <section className="work-experience">
                    <h2>Work Experience</h2>
                    <div className="job">
                        <h3>Company Name (2015 - 2017)</h3>
                        <p>Position - Proin euismod pulvinar tellus in ullam corper. Quisque lacinia turpis magna, in blandit arcu euismod id. Aliquam in est ut sem vestibulum rhoncus eu massa.</p>
                    </div>
                    <div className="job">
                        <h3>Company Name (2013 - 2015)</h3>
                        <p>Position - Proin euismod pulvinar tellus in ullam corper. Quisque lacinia turpis magna, in blandit arcu euismod id. Aliquam in est ut sem vestibulum rhoncus eu massa.</p>
                    </div>
                    <div className="job">
                        <h3>Company Name (2011 - 2013)</h3>
                        <p>Position - Proin euismod pulvinar tellus in ullam corper. Quisque lacinia turpis magna, in blandit arcu euismod id. Aliquam in est ut sem vestibulum rhoncus eu massa.</p>
                    </div>
                </section>
                <section className="education">
                    <h2>Education</h2>
                    <div className="school">
                        <h3>University Name</h3>
                        <p>Aliquam in est (2007 - 2010)</p>
                        <p>Proin euismod pulvinar tellus in ullam corper. Quisque lacinia turpis magna, in blandit arcu euismod id. Aliquam in est ut sem vestibulum rhoncus eu massa.</p>
                    </div>
                    <div className="school">
                        <h3>School Name</h3>
                        <p>Aliquam in est (2007 - 2010)</p>
                        <p>Proin euismod pulvinar tellus in ullam corper. Quisque lacinia turpis magna, in blandit arcu euismod id. Aliquam in est ut sem vestibulum rhoncus eu massa.</p>
                    </div>
                </section>
                <section className="professional-skills">
                    <h2>Professional Skills</h2>
                    <ul className="skills">
                        <li>Lorem Ipsum</li>
                        <li>Quisque</li>
                        <li>Scelerisque</li>
                        <li>Cras Eleifend</li>
                        <li>Ut id Orci</li>
                        <li>Praesent</li>
                    </ul>
                </section>
                <section className="achievements">
                    <h2>Achievements</h2>
                    <ul>
                        <li>1st Achievement - Proin euismod pulvinar tellus in ullam corper quisque.</li>
                        <li>2nd Achievement - Proin euismod pulvinar tellus in ullam corper quisque.</li>
                        <li>3rd Achievement - Proin euismod pulvinar tellus in ullam corper quisque.</li>
                    </ul>
                </section>
                <section className="reference">
                    <h2>Reference</h2>
                    <p>Company Name - Proin euismod pulvinar tellus in ullam corper quisque.</p>
                    <p>Phone: 00 11 234 567 890</p>
                    <p>Email: info@companyemail.com</p>
                </section>
                <div className="buttons">
                    <button onClick={() => alert('Download button clicked')}>Download</button>
                    <button onClick={() => alert('Edit button clicked')}>Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Resume;
