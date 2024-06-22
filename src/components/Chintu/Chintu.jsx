import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './chintu.css';

const Chintu= () => {
    const [isEditing, setIsEditing] = useState(false);

    
    const initialName = "NAME SURNAME";
    const initialJobTitle = "JOB TITLE";
    const initialContact = [
        { label: "Location", value: "NY, USA" },
        { label: "Email", value: "name.sm@email.com" },
        { label: "Phone", value: "+1 222 222 222" }
    ];
    const initialInterests = ["Hiking", "Yoga", "Reading", "Crafts"];
    const initialLanguages = ["Spanish", "English", "German"];
    const initialSkills = ["Excel", "PowerPoint", "Jira"];
    const initialProfileSummary = "Strategic and results-oriented executive with over 15 years of experience...";
    const initialWorkExperience = [
        {
            company: "XYZ Corporation",
            jobTitle: "Job Occupied",
            date: "Nov. 20XX – Jul. 20XX",
            description: "Led a cross-functional team to streamline supply chain processes..."
        },
        {
            company: "ABC International",
            jobTitle: "Job Occupied",
            date: "Nov. 20XX – Jul. 20XX",
            description: "Spearheaded market expansion initiatives, increasing the company’s global footprint..."
        },
        {
            company: "LMN Enterprises",
            jobTitle: "Job Occupied",
            date: "Nov. 20XX – Jul. 20XX",
            description: "Revolutionized the production process by introducing lean methodologies..."
        }
    ];
    const initialEducation = [
        { degree: "MBA Business Administration", date: "20XX - 20XX" },
        { degree: "BA Business Administration", date: "20XX - 20XX" }
    ];
    const [name, setName] = useState(initialName);
    const [jobTitle, setJobTitle] = useState(initialJobTitle);
    const [contact, setContact] = useState(initialContact);
    const [interests, setInterests] = useState(initialInterests);
    const [languages, setLanguages] = useState(initialLanguages);
    const [skills, setSkills] = useState(initialSkills);
    const [profileSummary, setProfileSummary] = useState(initialProfileSummary);
    const [workExperience, setWorkExperience] = useState(initialWorkExperience);
    const [education, setEducation] = useState(initialEducation);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        
        console.log({
            name,
            jobTitle,
            contact,
            interests,
            languages,
            skills,
            profileSummary,
            workExperience,
            education
        });
    };

    const handleDownload = () => {
        const opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        const htmlContent = `
            <div>
                <h1>${name}</h1>
                <h2>${jobTitle}</h2>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        ${contact.map((item, index) => `<li>${item.label}: ${item.value}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Interests</h3>
                    <ul>
                        ${interests.map((item, index) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Languages</h3>
                    <ul>
                        ${languages.map((item, index) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Skills</h3>
                    <ul>
                        ${skills.map((item, index) => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Profile Summary</h3>
                    <p>${profileSummary}</p>
                </div>
                <div>
                    <h3>Work Experience</h3>
                    <ul>
                        ${workExperience.map((exp, index) => `
                            <li>
                                <strong>${exp.company}</strong><br>
                                <em>${exp.jobTitle} | ${exp.date}</em>
                                <p>${exp.description}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        ${education.map((edu, index) => `
                            <li><strong>${edu.degree}</strong><br>${edu.date}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;

        html2pdf().set(opt).from(htmlContent).save();
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    
                    <ContentEditable
                        html={name}
                        onChange={(e) => setName(e.target.value)}
                    />
            
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>

                    <h1>{name}</h1>
                    <h2>{jobTitle}</h2>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            {contact.map((item, index) => (
                                <li key={index}>{item.label}: {item.value}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Interests</h3>
                        <ul>
                            {interests.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            {languages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        <ul>
                            {skills.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Profile Summary</h3>
                        <p>{profileSummary}</p>
                    </div>
                    <div>
                        <h3>Work Experience</h3>
                        <ul>
                            {workExperience.map((exp, index) => (
                                <li key={index}>
                                    <strong>{exp.company}</strong><br />
                                    <em>{exp.jobTitle} | {exp.date}</em>
                                    <p>{exp.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <ul>
                            {education.map((edu, index) => (
                                <li key={index}><strong>{edu.degree}</strong><br />{edu.date}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDownload}>Download</button>
                </div>
            )}
        </div>
    );
};

export default Chintu;
