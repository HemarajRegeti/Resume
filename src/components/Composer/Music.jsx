import React, { useState, useRef } from 'react';
import './music.css'; 
import jsPDF from 'jspdf';

const Music = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState('Hemaraj Regti');
  const [jobTitle, setJobTitle] = useState('Pharma Producation Maneger');
  const [about, setAbout] = useState(
    'Pharma Producation Maneger enthusiastic about delivering a holistic, scalable approach to web development that not only meets industry best practices but also provides rich, engaging experiences for the end user. Expert strategist prepared for content interpretation, process integration, and software implementation that conforms to customer requirements and specifications. Contemporary artisan determined to decrease markup, incorporate consistent structure and produce elegant quality code for long-term product stability.'
  );
  const nameRef = useRef(null);
  const jobTitleRef = useRef(null);
  const aboutRef = useRef(null);

  const editResume = () => {
    setIsEditing(true);
  };

  const saveChanges = () => {
    setName(nameRef.current.value);
    setJobTitle(jobTitleRef.current.value);
    setAbout(aboutRef.current.value);
    setIsEditing(false);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(name, 15, 20);

    doc.setFontSize(16);
    doc.text(jobTitle, 15, 30);

    doc.setFontSize(12);
    doc.text(about, 15, 40);
    doc.save('resume.pdf');
  };

  return (
    <main role="main">
      <div className="page">
        <header>
          <h1>{name}</h1>
          <h2>{jobTitle}</h2>
          <p>{about}</p>
        </header>
        <section className="resume_content">
          <article>
            <h2>Professional Experience</h2>
        
            <section>
              <h3>Pharma Production</h3>
              <p>
                <strong>The MathWorks, Inc.</strong> <b>Natick, MA</b>
              </p>
              <ul>
                <li>  Pharma medical Reduced  development delays and increased code quality.</li>
                <li>Provided feedback on visual design mocks and usability wireframes.</li>

              </ul>
            </section>
          </article>
        </section>

        {isEditing && (
          <div className="edit-overlay">
            <h2>Edit Resume</h2>
            <label>
              Name:
              <input type="text" defaultValue={name} ref={nameRef} />
            </label>
            <label>
              Job Title:
              <input type="text" defaultValue={jobTitle} ref={jobTitleRef} />
            </label>
            <label>
              About:
              <textarea defaultValue={about} ref={aboutRef} />
            </label>
            <button onClick={saveChanges}>Save Changes</button>
          </div>
        )}
        <section className="resume_skills">
          <aside>
            <h2>Skills</h2>
            <ul>
              <li>QC Incharge</li>
              <li>Production Head</li>
              <li>Qc Head</li>
              <li>Assistent Manegar</li>
            </ul>

            <h2>Production</h2>
            <ul>
              <li>Adobe Creative Suite</li>
              <li>Visual Studio Code</li>
              <li>GitHub</li>
              <li>npm</li>
            </ul>
          </aside>
        </section>
        <footer>
          <div id="hcard-Jared-Pearce" className="vcard">
            <h3>Contact Jared A. Pearce</h3>
            <p className="adr"><strong>Address:</strong> <a href="https://maps.google.com/maps?q=Cary,%20NC" title="View on Google Maps" rel="me"><span className="locality">Cary, NC</span></a></p>
            <p className="tel"><strong><span className="type">Home</span>:</strong> <a href="tel:+19192341272" rel="me">919-234-1272</a></p>
            <p className="email"><strong>Email:</strong> <a href="mailto:jared.a.pearce@gmail.com" title="Email Jared Pearce" rel="me">jared.a.pearce@gmail.com</a></p>
          </div>
        </footer>
        {!isEditing && (
          <div className="edit-download-buttons">
            <button onClick={editResume}>Edit</button>
            <button onClick={downloadPDF}>Download PDF</button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Music;
