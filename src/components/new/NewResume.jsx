import React, { useState } from 'react';
import './New.css';
import jsPDF from 'jspdf';

const NewResume = () => {
  const [editMode, setEditMode] = useState(false);

  const handleDownload = () => {
    const pdf = new jsPDF();
    const resumeContent = document.getElementById('resume-content').innerHTML;

    pdf.text('Resume', 15, 15);
    pdf.fromHTML(resumeContent, 15, 20);
    pdf.save('resume.pdf');
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="profile-text">
          <div className="img8x">
            <img src="1.jpg" alt="" />
          </div>
          {editMode ? (
            <div>
              <input type="text" defaultValue="HemarajRegeti" />
              <input type="text" defaultValue="NEWassignment" />
            </div>
          ) : (
            <div>
              <h2>
                HemarajRegeti<br />
                <span>NEWassignment</span>
              </h2>
            </div>
          )}
        </div>
        <div className="content-info-education">
          <h3 className="title">Contact info</h3>
          <ul>
            <li>
              <span className="icon"><i className="fa-solid fa-phone-volume"></i></span>
              <span className="text">+91 9398724598</span> 
            </li>
            <li>
              <span className="icon"><i className="fa-solid fa-envelope"></i></span>
              <span className="text">HemarajRegeti@gmail.com</span> 
            </li>
            <li>
              <span className="icon"><i className="fa-brands fa-whatsapp"></i></span>
              <span className="text">www.What'sApp</span> 
            </li>
            <li>
              <span className="icon"><i className="fa-brands fa-square-github"></i></span>
              <span className="text">Mt github site's</span> 
            </li>
            <li>
              <span className="icon"><i className="fa-solid fa-address-book"></i></span>
              <span className="text">My personal Space</span> 
            </li>
          </ul>
        </div>
        <div className="education-info">
          <h3 className="title">Education info</h3>
          <ul>
            <li>
              <h5>2010-2013</h5>
              <h4>Master degree in computer science</h4> 
              <h4>University Name</h4>
            </li>
            <li>
              <h5>2014-2018</h5>
              <h4>Bachelor degree in computer science</h4> 
              <h4>University Name</h4>
            </li>
            <li>
              <h5>2000-2010</h5>
              <h4>Matriculation</h4> 
              <h4>Sarvodhaya vidyanikethan</h4>
            </li>
          </ul>
        </div>
        <div className="contactinfo-Language">
          <h3 className="title">Language's</h3>
          <ul>
            <li>
              <span className="text">English</span>
              <span className="parent">
                <div style={{width:"90%"}}></div>
              </span>
            </li>
            <li>
              <span className="text">Hindhi</span>
              <span className="parent">
                <div style={{width:"80%"}}></div>
              </span>
            </li>
            <li>
              <span className="text">Telugu</span>
              <span className="parent">
                <div style={{width:"100%"}}></div>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div className="about">
          <h2 className="title2">Profile</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam vel fugit recusandae, id similique ad accusamus iure doloribus velit? Iste ratione similique eveniet et odio nobis, mollitia aperiam consequatur incidunt.</p>
        </div>
        <div className="about">
          <h2 className="title2">Experience</h2>
          <div className="box">
            <div className="year-company">
              <h5>2023 - present</h5>
              <h5>Company Name</h5>
            </div>
            <div className="text">
              <h4>Senior web developer</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto a accusantium aspernatur nostrum, excepturi commodi optio soluta quidem atque mollitia, laboriosam totam ipsam in incidunt placeat provident veniam autem perferendis.</p>
            </div>
          </div>
          <div className="box">
            <div className="year-company">
              <h5>2010 - prev</h5>
              <h5>Company Name</h5>
            </div>
            <div className="text">
              <h4>Senior web developer</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto a accusantium aspernatur nostrum, excepturi commodi optio soluta quidem atque mollitia, laboriosam totam ipsam in incidunt placeat provident veniam autem perferendis.</p>
            </div>
          </div>
          <div className="box">
            <div className="year-company">
              <h5>2024 - present</h5>
              <h5>Company Name</h5>
            </div>
            <div className="text">
              <h4>Senior web developer</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto a accusantium aspernatur nostrum, excepturi commodi optio soluta quidem atque mollitia, laboriosam totam ipsam in incidunt placeat provident veniam autem perferendis.</p>
            </div>
          </div>
        </div>
        <div className="about skills">
          <h2 className="title">Professional Skills</h2>
          <div className="box">
            <h4>Html</h4>
            <div className="parent">
              <span style={{width:'100%'}}></span>
            </div>
          </div>
          <div className="box">
            <h4>Css</h4>
            <div className="parent">
              <span style={{width:'100%'}}></span>
            </div>
          </div>
          <div className="box">
            <h4>Jquery</h4>
            <div className="parent">
              <span style={{width:'100%'}}></span>
            </div>
          </div>
          <div className="box">
            <h4>Javascript</h4>
            <div className="parent">
              <span style={{width:'100%'}}></span>
            </div>
          </div>
          <div className="box">
            <h4>Bootstrap</h4>
            <div className="parent">
              <span style={{width:'100%'}}></span>
            </div>
          </div>
          <div className="box">
            <h4>React JS</h4>
            <div className="parent">
              <span style={{width:'100%'}}></span>
            </div>
          </div>
        </div>
        <div className="about-interest">
          <h2 className="title2">Interests</h2>
          <ul>
            <li>Gaming</li>
            <li>Music</li>
            <li>Cricket</li>
            <li>Coding</li>
            <li>Studying</li>
          </ul>
        </div>
      </div>
      <div className="btn-container">
        {editMode ? (
          <button className="btn" onClick={() => setEditMode(false)}>
            SAVE
          </button>
        ) : (
          <button className="btn" onClick={() => setEditMode(true)}>
            EDIT
          </button>
        )}
        <button className="pdf" onClick={handleDownload}>
          Download
        </button>
      </div>
      {/* Hidden div for PDF content */}
      <div id="resume-content" style={{ display: 'none' }}>
        <div className="left-side">
          <div className="profile-text">
            <div className="img8x">
              <img src="1.jpg" alt="" />
            </div>
            <h2>
              HemarajRegeti<br />
              <span>NEWassignment</span>
            </h2>
          </div>
          <div className="content-info-education">
            <h3 className="title">Contact info</h3>
            <ul>
              <li>
                <span className="icon"><i className="fa-solid fa-phone-volume"></i></span>
                <span className="text">+91 9398724598</span> 
              </li>
              <li>
                <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                <span className="text">HemarajRegeti@gmail.com</span> 
              </li>
              <li>
                <span className="icon"><i className="fa-brands fa-whatsapp"></i></span>
                <span className="text">www.What'sApp</span> 
              </li>
              <li>
                <span className="icon"><i className="fa-brands fa-square-github"></i></span>
                <span className="text">My github site</span> 
              </li>
              <li>
                <span className="icon"><i className="fa-solid fa-address-book"></i></span>
                <span className="text">My personal page</span> 
              </li>
            </ul>
          </div>
          <div className="education-info">
            <h3 className="title">Education info</h3>
            <ul>
              <li>
                <h5>2010-2013</h5>
                <h4>Master degree in computer science</h4> 
                <h4>University Name</h4>
              </li>
              <li>
                <h5>2014-2018</h5>
                <h4>Bachelor degree in computer science</h4> 
                <h4>University Name</h4>
              </li>
              <li>
                <h5>2000-2010</h5>
                <h4>Matriculation</h4> 
                <h4>Sarvodhaya vidyanikethan</h4>
              </li>
            </ul>
          </div>
          <div className="contactinfo-Language">
            <h3 className="title">Language's</h3>
            <ul>
              <li>
                <span className="text">English</span>
                <span className="parent">
                  <div style={{width:"90%"}}></div>
                </span>
              </li>
              <li>
                <span className="text">Hindhi</span>
                <span className="parent">
                  <div style={{width:"80%"}}></div>
                </span>
              </li>
              <li>
                <span className="text">Telugu</span>
                <span className="parent">
                  <div style={{width:"100%"}}></div>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="about">
            <h2 className="title2">Profile</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam vel fugit recusandae, id similique ad accusamus iure doloribus velit? Iste ratione similique eveniet et odio nobis, mollitia aperiam consequatur incidunt.</p>
          </div>
          <div className="about">
            <h2 className="title2">Experience</h2>
            <div className="box">
              <div className="year-company">
                <h5>2023 - present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Senior web developer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto a accusantium aspernatur nostrum, excepturi commodi optio soluta quidem atque mollitia, laboriosam totam ipsam in incidunt placeat provident veniam autem perferendis.</p>
              </div>
            </div>
            <div className="box">
              <div className="year-company">
                <h5>2010 - prev</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Senior web developer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto a accusantium aspernatur nostrum, excepturi commodi optio soluta quidem atque mollitia, laboriosam totam ipsam in incidunt placeat provident veniam autem perferendis.</p>
              </div>
            </div>
            <div className="box">
              <div className="year-company">
                <h5>2024 - present</h5>
                <h5>Company Name</h5>
              </div>
              <div className="text">
                <h4>Senior web developer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto a accusantium aspernatur nostrum, excepturi commodi optio soluta quidem atque mollitia, laboriosam totam ipsam in incidunt placeat provident veniam autem perferendis.</p>
              </div>
            </div>
          </div>
          <div className="about skills">
            <h2 className="title">Professional Skills</h2>
            <div className="box">
              <h4>Html</h4>
              <div className="parent">
                <span style={{width:'100%'}}></span>
              </div>
            </div>
            <div className="box">
              <h4>Css</h4>
              <div className="parent">
                <span style={{width:'100%'}}></span>
              </div>
            </div>
            <div className="box">
              <h4>Jquery</h4>
              <div className="parent">
                <span style={{width:'100%'}}></span>
              </div>
            </div>
            <div className="box">
              <h4>Javascript</h4>
              <div className="parent">
                <span style={{width:'100%'}}></span>
              </div>
            </div>
            <div className="box">
              <h4>Bootstrap</h4>
              <div className="parent">
                <span style={{width:'100%'}}></span>
              </div>
            </div>
            <div className="box">
              <h4>React JS</h4>
              <div className="parent">
                <span style={{width:'100%'}}></span>
              </div>
            </div>
          </div>
          <div className="about-interest">
            <h2 className="title2">Interests</h2>
            <ul>
              <li>Gaming</li>
              <li>Music</li>
              <li>Cricket</li>
              <li>Coding</li>
              <li>Studying</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewResume;
