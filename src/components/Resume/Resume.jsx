import React, { useState } from 'react';
import './Resume.css';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const [editable, setEditable] = useState(true);
  const [resumeData, setResumeData] = useState({
    name: 'Hemaraj Regei',
    objective: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam. Cras finibus quam arcu, in posuere elit egestas vitae. Integer eget luctus lectus. Fusce pretium est in luctus sollicitudin. Nunc pretium, elit a tempor consectetur, ante velit luctus purus, eget ultricies dolor risus et lorem',
    phoneMobile: '(555)867-5309',
    phoneWork: '(555)867-5309',
    emailPersonal: 'Codeman@email.com',
    emailWork: 'Codeman@work.com',
    jobs: [
      { title: 'Job 1', employer: '@Employername', date: 'Jan 2015 - Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam.' },
      { title: 'Job 2', employer: '@Employername', date: 'Jan 2015 - Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam.' },
      { title: 'Job 3', employer: '@Employername', date: 'Jan 2015 - Present', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam.' },
    ],
    education: {
      degree: 'Degree',
      school: '@Schoolname',
      date: 'Graduation Year',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam.',
    },
    skills: [
      { title: 'Skill 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam.' },
      { title: 'Skill 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae laoreet diam.' },
    ],
  });

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSubmit = () => {
    console.log('Form submitted.');
    setEditable(false);
  };

  const handlePdf = () => {
    const element = document.getElementById('resume-content');
    html2pdf().from(element).save();
  };

  const handleChange = (section, key, value, index = null) => {
    if (index !== null) {
      setResumeData(prevState => ({
        ...prevState,
        [section]: prevState[section].map((item, idx) => idx === index ? { ...item, [key]: value } : item)
      }));
    } else {
      setResumeData(prevState => ({
        ...prevState,
        [section]: { ...prevState[section], [key]: value }
      }));
    }
  };

  return (
    <div id="resume-content" className="profile">
      <div className="left-box">
        <div className="top-left">
          {/* <img
            src="http://images2.fanpop.com/images/photos/4700000/Codeman-cody-lambert-4776780-500-375.jpg"
            alt="Cody Man"
          /> */}
          <div className="name">
            {editable ? (
              <input
                type="text"
                value={resumeData.name}
                onChange={(e) => handleChange('name', 'name', e.target.value)}
              />
            ) : (
              resumeData.name
            )}
          </div>
          <div className="objective">
            <img
              className="objective-img"
              src="https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-128.png"
              alt="User Icon"
            />
            <div className="objective-text">
              {editable ? (
                <textarea
                  value={resumeData.objective}
                  onChange={(e) => handleChange('objective', 'objective', e.target.value)}
                />
              ) : (
                resumeData.objective
              )}
            </div>
          </div>
          <div className="phone">
            <img
              className="objective-img"
              src="http://icons.iconarchive.com/icons/icons8/android/512/Mobile-Phone-2-icon.png"
              alt="Phone Icon"
            />
            <div className="phone-text">
              {editable ? (
                <>
                  <input
                    type="text"
                    value={resumeData.phoneMobile}
                    onChange={(e) => handleChange('phoneMobile', 'phoneMobile', e.target.value)}
                  />
                  <br />
                  mobile
                  <br />
                  <br />
                  <input
                    type="text"
                    value={resumeData.phoneWork}
                    onChange={(e) => handleChange('phoneWork', 'phoneWork', e.target.value)}
                  />
                  <br />
                  work
                </>
              ) : (
                <>
                  {resumeData.phoneMobile}
                  <br />
                  mobile
                  <br />
                  <br />
                  {resumeData.phoneWork}
                  <br />
                  work
                </>
              )}
            </div>
          </div>
          <div className="email">
            <img
              className="objective-img"
              src="http://static.wixstatic.com/media/d822a6_af29afe70e1a4e9891f94a627914b6ec.png"
              alt="Email Icon"
            />
            <div className="email-text">
              {editable ? (
                <>
                  <input
                    type="text"
                    value={resumeData.emailPersonal}
                    onChange={(e) => handleChange('emailPersonal', 'emailPersonal', e.target.value)}
                  />
                  <br />
                  personal
                  <br />
                  <br />
                  <input
                    type="text"
                    value={resumeData.emailWork}
                    onChange={(e) => handleChange('emailWork', 'emailWork', e.target.value)}
                  />
                  <br />
                  work
                </>
              ) : (
                <>
                  {resumeData.emailPersonal}
                  <br />
                  personal
                  <br />
                  <br />
                  {resumeData.emailWork}
                  <br />
                  work
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="work-experience">
        <div className="work-img">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6IyssJOctWLhN5NZcbES8sa_qjjFGd_LYJEmaTBr12PVJaYUpXA"
            alt="Work Icon"
          />
        </div>
        <h1 className="work-title">Work Experience</h1>
        {resumeData.jobs.map((job, index) => (
          <div className="job-box" key={index}>
            <div className="job-title">
              {editable ? (
                <input
                  type="text"
                  value={job.title}
                  onChange={(e) => handleChange('jobs', 'title', e.target.value, index)}
                />
              ) : (
                job.title
              )}
              {editable ? (
                <input
                  type="text"
                  value={job.employer}
                  onChange={(e) => handleChange('jobs', 'employer', e.target.value, index)}
                />
              ) : (
                job.employer
              )}
            </div>
            <div className="job-date">
              {editable ? (
                <input
                  type="text"
                  value={job.date}
                  onChange={(e) => handleChange('jobs', 'date', e.target.value, index)}
                />
              ) : (
                job.date
              )}
            </div>
            <div className="job-description">
              {editable ? (
                <textarea
                  value={job.description}
                  onChange={(e) => handleChange('jobs', 'description', e.target.value, index)}
                />
              ) : (
                job.description
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="education">
        <div className="work-img">
        </div>
        <h1>Education</h1>
        <div className="education-box">
          <div className="education-title">
            {editable ? (
              <input
                type="text"
                value={resumeData.education.degree}
                onChange={(e) => handleChange('education', 'degree', e.target.value)}
              />
            ) : (
              resumeData.education.degree
            )}
            {editable ? (
              <input
                type="text"
                value={resumeData.education.school}
                onChange={(e) => handleChange('education', 'school', e.target.value)}
              />
            ) : (
              resumeData.education.school
            )}
          </div>
          <div className="education-date">
            {editable ? (
              <input
                type="text"
                value={resumeData.education.date}
                onChange={(e) => handleChange('education', 'date', e.target.value)}
              />
            ) : (
              resumeData.education.date
            )}
          </div>
          <div className="education-description">
            {editable ? (
              <textarea
                value={resumeData.education.description}
                onChange={(e) => handleChange('education', 'description', e.target.value)}
              />
            ) : (
              resumeData.education.description
            )}
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="work-img">
          <img
            src="https://cdn0.iconfinder.com/data/icons/android-ii/512/settings-512.png"
            alt="Skills Icon"
          />
        </div>
        <h1>Skills</h1>
        {resumeData.skills.map((skill, index) => (
          <div className="skills-box" key={index}>
            <div className="skills-title">
              {editable ? (
                <input
                  type="text"
                  value={skill.title}
                  onChange={(e) => handleChange('skills', 'title', e.target.value, index)}
                />
              ) : (
                skill.title
              )}
            </div>
            <div className="skills-description">
              {editable ? (
                <textarea
                  value={skill.description}
                  onChange={(e) => handleChange('skills', 'description', e.target.value, index)}
                />
              ) : (
                skill.description
              )}
            </div>
          </div>
        ))}
        <div className="button-container">
          {editable ? (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={handlePdf}>Generate PDF</button>
            </>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
