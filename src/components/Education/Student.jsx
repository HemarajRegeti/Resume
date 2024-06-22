import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Student = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [resumeData, setResumeData] = useState({
        name: 'James Miller',
        address: '44 Shirley Ave, West Chicago, IL 60185',
        email: 'jmiller@gmail.com',
        phone: '563-458-6942',
        summary: 'A highly resourceful, flexible, innovative, and enthusiastic project manager. Possessing considerable experience of managing projects from beginning to end: defining the project plan, timeline, scope and executing the analysis before providing detailed recommendations. Having an impressive track record of delivering major operational improvement and of orchestrating people, schedules and resources for optimum productivity, efficiency and quality. Keen to find a challenging position within an ambitious company where I will be able to continue to increase my project management skills.',
        employment: [
            {
                period: 'May 2017 - Current',
                title: 'IT Project Manager at Telecommunicado Ltd, Birmingham',
                duties: [
                    'Lead a team of technical staff',
                    'Planning, procurement and execution of projects'
                ]
            },
            {
                period: 'October 2015 - April 2016',
                title: 'IT Technician at International Mobilites, Birmingham',
                duties: [
                    'Operate and maintain information systems',
                    'Facilitating system utilization'
                ]
            }
        ],
        education: [
            {
                period: 'September 2014 - May 2016',
                degree: 'BSc Computer Science (2:1), University of Birmingham'
            },
            {
                period: 'September 2011 - May 2014',
                degree: 'A-Levels: ICT (B), Maths (C), Biology (B), Washwood Heath Technology College'
            },
            {
                period: 'September 1999 - May 2011',
                degree: '10 GCSEs including Maths (A), Business Studies (B), ICT (C), Bournville School Secondary School'
            }
        ],
        honors: [
            {
                period: 'June 2015 - June 2017',
                title: 'Board Member Mensa, Birmingham'
            }
        ]
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setResumeData({ ...resumeData, [name]: value });
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const componentRef = useRef();

    function handleEmploymentChange(event, index, field) {
        const updatedEmployment = resumeData.employment.map((job, i) => (
            i === index ? { ...job, [field]: event.target.value } : job
        ));
        setResumeData({ ...resumeData, employment: updatedEmployment });
    }

    function handleEmploymentDutyChange(event, jobIndex, dutyIndex) {
        const updatedEmployment = resumeData.employment.map((job, i) => (
            i === jobIndex ? {
                ...job,
                duties: job.duties.map((duty, j) => (
                    j === dutyIndex ? event.target.value : duty
                ))
            } : job
        ));
        setResumeData({ ...resumeData, employment: updatedEmployment });
    }

    function handleEducationChange(event, index, field) {
        const updatedEducation = resumeData.education.map((edu, i) => (
            i === index ? { ...edu, [field]: event.target.value } : edu
        ));
        setResumeData({ ...resumeData, education: updatedEducation });
    }

    function handleHonorsChange(event, index, field) {
        const updatedHonors = resumeData.honors.map((honor, i) => (
            i === index ? { ...honor, [field]: event.target.value } : honor
        ));
        setResumeData({ ...resumeData, honors: updatedHonors });
    }

    return (
        <div>
            <header style={styles.header}>
                <div style={styles.container}>
                    <div style={styles.mainHeader}>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={resumeData.name}
                                onChange={handleInputChange}
                                style={styles.editInput}
                            />
                        ) : (
                            <h1 style={styles.headerTitle}>{resumeData.name}</h1>
                        )}
                    </div>
                    <div style={styles.contactInfo}>
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    name="address"
                                    value={resumeData.address}
                                    onChange={handleInputChange}
                                    style={styles.editInput}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    value={resumeData.email}
                                    onChange={handleInputChange}
                                    style={styles.editInput}
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={resumeData.phone}
                                    onChange={handleInputChange}
                                    style={styles.editInput}
                                />
                            </>
                        ) : (
                            <>
                                <p>{resumeData.address}</p>
                                <p>Email: {resumeData.email}</p>
                                <p>Phone: {resumeData.phone}</p>
                            </>
                        )}
                    </div>
                </div>
            </header>
            <div style={styles.container} ref={componentRef}>
                <Section title="Professional Summary">
                    {isEditing ? (
                        <textarea
                            name="summary"
                            value={resumeData.summary}
                            onChange={handleInputChange}
                            style={styles.editTextarea}
                        />
                    ) : (
                        <p>{resumeData.summary}</p>
                    )}
                </Section>
                <Section title="Employment History">
                    <ul>
                        {resumeData.employment.map((job, index) => (
                            <li key={index}>
                                {isEditing ? (
                                    <>
                                        <input
                                            type="text"
                                            name={`employment-${index}-period`}
                                            value={job.period}
                                            onChange={(event) => handleEmploymentChange(event, index, 'period')}
                                            style={styles.editInput}
                                        />
                                        <input
                                            type="text"
                                            name={`employment-${index}-title`}
                                            value={job.title}
                                            onChange={(event) => handleEmploymentChange(event, index, 'title')}
                                            style={styles.editInput}
                                        />
                                        <ul>
                                            {job.duties.map((duty, dutyIndex) => (
                                                <li key={dutyIndex}>
                                                    <input
                                                        type="text"
                                                        name={`employment-${index}-duty-${dutyIndex}`}
                                                        value={duty}
                                                        onChange={(event) => handleEmploymentDutyChange(event, index, dutyIndex)}
                                                        style={styles.editInput}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <>
                                        <strong>{job.period}</strong><br />
                                        <strong>{job.title}</strong><br />
                                        <ul>
                                            {job.duties.map((duty, dutyIndex) => (
                                                <li key={dutyIndex}>{duty}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </Section>
                <Section title="Education">
                    <ul>
                        {resumeData.education.map((edu, index) => (
                            <li key={index}>
                                {isEditing ? (
                                    <>
                                        <input
                                            type="text"
                                            name={`education-${index}-period`}
                                            value={edu.period}
                                            onChange={(event) => handleEducationChange(event, index, 'period')}
                                            style={styles.editInput}
                                        />
                                        <input
                                            type="text"
                                            name={`education-${index}-degree`}
                                            value={edu.degree}
                                            onChange={(event) => handleEducationChange(event, index, 'degree')}
                                            style={styles.editInput}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <strong>{edu.period}</strong><br />
                                        {edu.degree}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </Section>
                <Section title="Honors">
                    <ul>
                        {resumeData.honors.map((honor, index) => (
                            <li key={index}>
                                {isEditing ? (
                                    <>
                                        <input
                                            type="text"
                                            name={`honors-${index}-period`}
                                            value={honor.period}
                                            onChange={(event) => handleHonorsChange(event, index, 'period')}
                                            style={styles.editInput}
                                        />
                                        <input
                                            type="text"
                                            name={`honors-${index}-title`}
                                            value={honor.title}
                                            onChange={(event) => handleHonorsChange(event, index, 'title')}
                                            style={styles.editInput}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <strong>{honor.period}</strong><br />
                                        {honor.title}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
            <div style={styles.buttonContainer}>
                <button onClick={handleEditToggle} style={styles.button}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button onClick={handlePrint} style={styles.button}>Download PDF</button>
            </div>
        </div>
    );
};

const Section = ({ title, children }) => (
    <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <div style={styles.sectionContent}>
            {children}
        </div>
    </div>
);

const styles = {
    container: {
        width: '80%',
        margin: 'auto',
        overflow: 'hidden'
    },
    header: {
        background: '#0073b7',
        color: '#fff',
        paddingTop: '30px',
        minHeight: '70px',
        borderBottom: '#333 3px solid'
    },
    mainHeader: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    headerTitle: {
        margin: 0,
        fontSize: '24px',
        lineHeight: 1.5
    },
    contactInfo: {
        textAlign: 'center',
        margin: '20px 0'
    },
    section: {
        margin: '20px 0'
    },
    sectionTitle: {
        background: '#0073b7',
        color: '#fff',
        padding: '10px',
        margin: 0
    },
    sectionContent: {
        padding: '15px',
        background: '#fff'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
    },
    button: {
        background: '#0073b7',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        margin: '0 10px'
    },
    editInput: {
        width: '100%',
        padding: '10px',
        margin: '5px 0'
    },
    editTextarea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        margin: '5px 0'
    }
};

export default Student;
