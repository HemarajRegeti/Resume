import React from 'react';
import './Munni.css';

const Munni = () => {
    
    const handleEdit = () => {
        alert('Edit functionality will be implemented here.');
    
    };

    const handleSaveAndDownload = () => {
        alert('Save and Download functionality will be implemented here.');

    };

    return (
        <div className="container">
            <div className="header">
                <div className="left-header">
                    <h1>IAN HANSSON</h1>
                    <h2>Graphic Designer</h2>
                    <h3>UX/UI Engineer</h3>
                    <h3>Salesperson</h3>
                </div>
                <div className="right-header">
                    <div className="contact">
                        <h3>CONTACT</h3>
                        <p>555-555-0148</p>
                        <p>@ian_hansson</p>
                        <p>hansson@examples.com</p>
                        <p>www.example.com</p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="left-column">
                    <div className="section">
                        <h3>PROFILE</h3>
                        <p>Seasoned, innovative graphic designer with 5+ years of experience creating stunning visuals for print and digital media. Proficient in Adobe Creative Suite and skilled in layout design, typography, and color theory.</p>
                    </div>
                    <div className="section">
                        <h3>EXPERIENCE</h3>
                        <div className="experience">
                            <h4>Addatum Corporation</h4>
                            <p><em>Senior Designer | Jun 2016 – Present</em></p>
                            <p>Leading the creative team in producing high-quality design projects for top-tier clients, ensuring brand consistency and engaging visuals across all marketing materials.</p>
                        </div>
                        <div className="experience">
                            <h4>Piximedia, Inc.</h4>
                            <p><em>Graphic Designer | May 2014 – May 2016</em></p>
                            <p>Collaborated with the marketing team to create compelling graphics for print and web, including brochures, banners, and social media posts.</p>
                        </div>
                        <div className="experience">
                            <h4>Reticula</h4>
                            <p><em>Junior Designer | Jan 2012 – Apr 2014</em></p>
                            <p>Assisted senior designers in developing creative solutions for various clients, learning and applying new design techniques and software skills.</p>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="section">
                        <h3>SKILLS</h3>
                        <ul>
                            <li>Design software</li>
                            <li>Typography</li>
                            <li>Layout design</li>
                            <li>Print design</li>
                            <li>Project management</li>
                            <li>Creative problem solving</li>
                            <li>Attention to detail</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h3>EDUCATION</h3>
                        <div className="education">
                            <h4>Graphic Design Institute</h4>
                            <p><em>Diploma in Graphic Design | 2011</em></p>
                        </div>
                        <div className="education">
                            <h4>Junior University</h4>
                            <p><em>Bachelor of Arts in Fine Arts | 2007</em></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleSaveAndDownload}>Save and Download</button>
            </div>
        </div>
    );
};

export default Munni;
