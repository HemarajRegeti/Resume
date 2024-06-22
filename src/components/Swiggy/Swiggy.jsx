import React from 'react';
import './Swiggy.css';

const Swiggy = () => {
    return (
        <div className="resume">
            <aside className="sidebar">
                <div className="photo"></div>
                <h1>Jhon Smith</h1>
                <h2>Art Director</h2>
                <section className="about">
                    <h3>About Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </section>
                <section className="contact">
                    <h3>Contact Me</h3>
                    <p>126, Street Mahon, New York City, USA</p>
                    <p>0123 4567 8910 1230</p>
                    <p>contact@email.com</p>
                    <p>www.ownsite.com</p>
                </section>
                <section className="references">
                    <h3>References</h3>
                    <div className="reference">
                        <p><strong>Jonathon Deo</strong> - Director</p>
                        <p>Phone: +555 123 5566</p>
                        <p>Email: jonathondeo@gmail.com</p>
                    </div>
                    <div className="reference">
                        <p><strong>Jabin Smith</strong> - Web Developer</p>
                        <p>Phone: +123 5556 4455</p>
                        <p>Email: jabinsmith@gmail.com</p>
                    </div>
                </section>
            </aside>
            <main className="content">
                <section className="experience">
                    <h3>Experience</h3>
                    <div className="job">
                        <h4>2015 - 2018</h4>
                        <p><strong>Senior Web Developer</strong> at Vison Multitune.net</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla. lorem lorem ipsum. ollutidn est dolor time. Done cporttitor dolor kiren.</p>
                    </div>
                    <div className="job">
                        <h4>2013 - 2015</h4>
                        <p><strong>Lead Web Developer</strong> at Soft Tech Lomited</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla. lorem lorem ipsum. ollutidn est dolor time. Done cporttitor dolor kiren.</p>
                    </div>
                    <div className="job">
                        <h4>2011 - 2013</h4>
                        <p><strong>Web & Graphic Designer</strong> at Creative Corporation</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla. lorem lorem ipsum. ollutidn est dolor time. Done cporttitor dolor kiren.</p>
                    </div>
                </section>
                <section className="education">
                    <h3>Education</h3>
                    <div className="school">
                        <h4>2010 - 2015</h4>
                        <p><strong>Bachelors of Arts</strong> at Asian University</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla.</p>
                    </div>
                    <div className="school">
                        <h4>2008 - 2010</h4>
                        <p><strong>Higher Secondary Examination</strong> at Creative School</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla.</p>
                    </div>
                    <div className="school">
                        <h4>2006 - 2008</h4>
                        <p><strong>Higher Secondary Examination</strong> at Creative School</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla.</p>
                    </div>
                    <div className="school">
                        <h4>2004 - 2006</h4>
                        <p><strong>Higher Secondary Examination</strong> at Creative School</p>
                        <p>Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor fringilla.</p>
                    </div>
                </section>
                <section className="skills">
                    <h3>Pro Skills</h3>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>AfterEffects</li>
                        <li>MS Excel</li>
                    </ul>
                </section>
                <div className="buttons">
                    <button onClick={() => alert('Download button clicked')}>Download</button>
                    <button onClick={() => alert('Edit button clicked')}>Edit</button>
                </div>
            </main>
        </div>
    );
}

export default  Swiggy;
