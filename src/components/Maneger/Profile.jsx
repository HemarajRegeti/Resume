import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';

import './Profile.css';

const Profile = () => {
  const [editable, setEditable] = useState(false);

  const [resumeData, setResumeData] = useState({
    name: 'First Last Name',
    position: 'Position / Title',
    location: 'Location, State',
    email: 'email@example.com',
    phone: '(555) 555-5555',
    summary:
      'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit.',
    skills: [
      { name: 'UI/UX', level: '80%' },
      { name: 'Wordpress', level: '92%' },
      { name: 'HTML/CSS', level: '99%' },
      { name: 'Dev Ops', level: '60%' },
    ],
    specializations: [
      'Specialization 1', 'Specialization 2', 'Specialization 3',
      'Specialization 4', 'Specialization 5', 'Specialization 6',
      'Specialization 7', 'Specialization 8', 'Specialization 9',
      'Specialization 10',
    ],
    experiences: [
      {
        businessName: 'Business 1',
        startDate: 'Start Date',
        endDate: 'End Date',
        location: 'Location, State',
        title: 'Title / Position',
        description:
          'Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      },
      {
        businessName: 'Business 2',
        startDate: 'Start Date',
        endDate: 'End Date',
        location: 'Location, State',
        title: 'Title / Position',
        description:
          'Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      },
    ],
    educations: [
      {
        universityName: 'University 1',
        startDate: 'Start Date',
        endDate: 'End Date',
        location: 'Location, State',
        fieldOfStudy: 'Field of Study',
        description:
          'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      },
      {
        universityName: 'University 2',
        startDate: 'Start Date',
        endDate: 'End Date',
        location: 'Location, State',
        fieldOfStudy: 'Field of Study',
        description:
          'Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      },
    ],
    references: [
      { name: 'Jane Doe', role: 'Previous Employer and friend.', company: 'GM of Business', contact: '(555)-555-5555' },
      { name: 'John Doe', role: 'Previous Employer and friend.', company: 'GM of Business', contact: '(555)-555-5555' },
      { name: 'James Doe', role: 'Previous Employer and friend.', company: 'GM of Business', contact: '(555)-555-5555' },
    ],
  });

  const handleEdit = () => {
    setEditable(!editable);
    // Implement logic to toggle edit mode
  };

  const handleDownload = () => {
    const element = document.getElementById('resume-container');
    html2pdf(element);
  };

  const handleFieldChange = (e, section, index, field) => {
    const newValue = e.target.value;
    const updatedData = { ...resumeData };

    if (section === 'skills') {
      updatedData.skills[index][field] = newValue;
    } else if (section === 'specializations') {
      updatedData.specializations[index] = newValue;
    } else if (section === 'experiences') {
      updatedData.experiences[index][field] = newValue;
    } else if (section === 'educations') {
      updatedData.educations[index][field] = newValue;
    } else if (section === 'references') {
      updatedData.references[index][field] = newValue;
    }

    setResumeData(updatedData);
  };

  const EditableButton = () => (
    <Button variant="primary" className="mr-2" onClick={handleEdit}>
      {editable ? 'Save' : 'Edit'}
    </Button>
  );

  const DownloadButton = () => (
    <Button variant="success" onClick={handleDownload}>
      Download as PDF
    </Button>
  );

  const SkillsSection = () => (
    <div className="mb-4">
      <h2>Skills</h2>
      {resumeData.skills.map((skill, index) => (
        <div key={index} className="mb-3">
          {editable ? (
            <>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleFieldChange(e, 'skills', index, 'name')}
              />
              <input
                type="text"
                value={skill.level}
                onChange={(e) => handleFieldChange(e, 'skills', index, 'level')}
              />
            </>
          ) : (
            <>
              <p>{skill.name}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: skill.level }}
                  aria-valuenow={parseInt(skill.level)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.level}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const SpecializationsSection = () => (
    <div className="mb-4">
      <h2>Specializations</h2>
      <ul>
        {resumeData.specializations.map((spec, index) => (
          <li key={index}>
            {editable ? (
              <input
                type="text"
                value={spec}
                onChange={(e) => handleFieldChange(e, 'specializations', index, null)}
              />
            ) : (
              <>{spec}</>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  const ExperiencesSection = () => (
    <div className="mb-4">
      <h2>Work Experience</h2>
      {resumeData.experiences.map((exp, index) => (
        <div key={index} className="mb-3">
          {editable ? (
            <>
              <input
                type="text"
                value={exp.businessName}
                onChange={(e) => handleFieldChange(e, 'experiences', index, 'businessName')}
              />
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) => handleFieldChange(e, 'experiences', index, 'startDate')}
              />
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) => handleFieldChange(e, 'experiences', index, 'endDate')}
              />
              <input
                type="text"
                value={exp.location}
                onChange={(e) => handleFieldChange(e, 'experiences', index, 'location')}
              />
              <input
                type="text"
                value={exp.title}
                onChange={(e) => handleFieldChange(e, 'experiences', index, 'title')}
              />
              <input
                type="text"
                value={exp.description}
                onChange={(e) => handleFieldChange(e, 'experiences', index, 'description')}
              />
            </>
          ) : (
            <>
              <h3>{exp.businessName}</h3>
              <p className="font-italic">{`${exp.startDate} - ${exp.endDate}`}</p>
              <p>{exp.location}</p>
              <h4>{exp.title}</h4>
              <p>{exp.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const EducationsSection = () => (
    <div className="mb-4">
      <h2>Education</h2>
      {resumeData.educations.map((edu, index) => (
        <div key={index} className="mb-3">
          {editable ? (
            <>
              <input
                type="text"
                value={edu.universityName}
                onChange={(e) => handleFieldChange(e, 'educations', index, 'universityName')}
              />
              <input
                type="text"
                value={edu.startDate}
                onChange={(e) => handleFieldChange(e, 'educations', index, 'startDate')}
              />
              <input
                type="text"
                value={edu.endDate}
                onChange={(e) => handleFieldChange(e, 'educations', index, 'endDate')}
              />
              <input
                type="text"
                value={edu.location}
                onChange={(e) => handleFieldChange(e, 'educations', index, 'location')}
              />
              <input
                type="text"
                value={edu.fieldOfStudy}
                onChange={(e) => handleFieldChange(e, 'educations', index, 'fieldOfStudy')}
              />
              <input
                type="text"
                value={edu.description}
                onChange={(e) => handleFieldChange(e, 'educations', index, 'description')}
              />
            </>
          ) : (
            <>
              <h3>{edu.universityName}</h3>
              <p className="font-italic">{`${edu.startDate} - ${edu.endDate}`}</p>
              <p>{edu.location}</p>
              <h4>{edu.fieldOfStudy}</h4>
              <p>{edu.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const ReferencesSection = () => (
    <div className="mb-4">
      <h2>References</h2>
      {resumeData.references.map((ref, index) => (
        <div key={index} className="mb-3">
          {editable ? (
            <>
              <input
                type="text"
                value={ref.name}
                onChange={(e) => handleFieldChange(e, 'references', index, 'name')}
              />
              <input
                type="text"
                value={ref.role}
                onChange={(e) => handleFieldChange(e, 'references', index, 'role')}
              />
              <input
                type="text"
                value={ref.company}
                onChange={(e) => handleFieldChange(e, 'references', index, 'company')}
              />
              <input
                type="text"
                value={ref.contact}
                onChange={(e) => handleFieldChange(e, 'references', index, 'contact')}
              />
            </>
          ) : (
            <>
              <p>{`${ref.name} | ${ref.role}`}</p>
              <p>{`${ref.company}`}</p>
              <p>{`${ref.contact}`}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mt-4" id="resume-container">
      <div className="row mb-4">
        <div className="col-md-6">
          {editable ? (
            <>
              <input
                type="text"
                value={resumeData.name}
                onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
              />
              <input
                type="text"
                value={resumeData.position}
                onChange={(e) => setResumeData({ ...resumeData, position: e.target.value })}
              />
            </>
          ) : (
            <>
              <h1>{resumeData.name}</h1>
              <p>{resumeData.position}</p>
            </>
          )}
        </div>
        <div className="col-md-6 text-right">
          {editable ? <EditableButton /> : <DownloadButton />}
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h2>Summary</h2>
          {editable ? (
            <textarea
              value={resumeData.summary}
              onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
            />
          ) : (
            <p>{resumeData.summary}</p>
          )}
          <SkillsSection />
          <SpecializationsSection />
          <ExperiencesSection />
          <EducationsSection />
          <ReferencesSection />
        </div>
      </div>
    </div>
  );
};

export default Profile;
