import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import Section from './Section';
import './ResuneRaj.css';

const ResumeRaj = () => {
  const [showContactInfo, setShowContactInfo] = useState(true);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  const handleDownload = () => {
    console.log("Download button clicked!");
    
  };

  return (
    <div className="resume">
      <div className="header">
        <h1>Siti Mutahqierin Binti Rosli</h1>
        <div className="contact-info">
          {showContactInfo && (
            <ContactInfo
              phone="+60132805916"
              email="resumecreative@yahoo.com"
              address="Lake View Apartment (BlockA 06-20), Jalan Austin Perdana 1, Taman Austin Perdana, 81100 Johor Bahru, Johor"
            />
          )}
        </div>
      </div>

      <Section
        title="Personal Statement"
        content={<p>I am a fast learner, self-motivated, and able to work independently with minimum supervision. Efficient in working under pressure with a systematic manner. Willing to learn and able to cooperate in teamwork.</p>}
      />

      <Section
        title="Contact"
        content={
          <div className="contact-info">
            {showContactInfo && (
              <ContactInfo
                phone="+60132805916"
                email="resumecreative@yahoo.com"
                address="Lake View Apartment (BlockA 06-20), Jalan Austin Perdana 1, Taman Austin Perdana, 81100 Johor Bahru, Johor"
              />
            )}
          </div>
        }
      />

      <Section
        title="Strengths"
        content={
          <ul>
            <li>Excellent written and verbal communication skills</li>
            <li>Strong problem-solving and analytical skills</li>
            <li>Ability to work independently in a fast-paced environment</li>
            <li>Strong interpersonal skills and positive work ethic</li>
            <li>Able to coordinate several tasks simultaneously</li>
          </ul>
        }
      />

      <Section
        title="Achievements"
        content={
          <ul>
            <li>Secretary of Sports Club</li>
            <li>Committee Member of Puteri Islam 2007</li>
            <li>Vice-Chairman of the Discipline Bureau</li>
            <li>Vice-Chairman of Pengakap Laut 2010 & 2011</li>
            <li>Khatam Quran Recitation 30 Juzuk</li>
            <li>The Best Arabic Language Student</li>
          </ul>
        }
      />

      <Section
        title="Education"
        content={
          <ul>
            <li>Sekolah Keb Agama Bandar Kota Tinggi</li>
            <li>Ujian Pencapaian Sekolah Rendah (UPSR)</li>
            <li>Penamatan Darjah Khas</li>
            <li>Sekolah Menengah Keb Laksamana Kota Tinggi</li>
            <li>Penilaian Menengah Rendah (PMR)</li>
          </ul>
        }
      />

      <Section
        title="Experience"
        content={
          <ul>
            <li>DS Mobile Communication (OPPO Signage) - Sales Executive</li>
            <li>Mayres Hotel Kota Tinggi - Receptionist</li>
            <li>Wink Saloon - Shampoo Girl</li>
            <li>MBO Cinemas Heritage Mall Kota Tinggi - Cashier</li>
          </ul>
        }
      />

      <Section
        title="Professional Skills"
        content={
          <ul>
            <li>Leadership</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Microsoft Excel</li>
            <li>Microsoft Word</li>
            <li>Microsoft PowerPoint</li>
          </ul>
        }
      />

      <Section
        title="Languages"
        content={
          <ul>
            <li>English</li>
            <li>Malay</li>
          </ul>
        }
      />

      <Section
        title="Interests and Hobbies"
        content={
          <ul>
            <li>Sports</li>
            <li>Travel</li>
            <li>Music</li>
            <li>Movies</li>
          </ul>
        }
      />

      <Section
        title="References"
        content={
          <div>
            <p>En Wandi, Manager</p>
            <p>Jalan Tun Habab Pekan Kota Tinggi, 81900 Kota Tinggi, Johor</p>
            <p>Phone: +6019-4760161</p>
          </div>
        }
      />

      <div className="footer">
        <button className="btn" onClick={toggleContactInfo}>
          Edit
        </button>
        <button className="btn-2" onClick={handleDownload}>
          Download
        </button>
      </div>
    </div>
  );
};

export default ResumeRaj;
