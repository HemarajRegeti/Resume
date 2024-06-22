import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Headrap.css';

function HeadRep() {
  const [editable, setEditable] = useState(false);
  const cvRef = useRef(null);

  const toggleEditMode = () => {
    setEditable(!editable);
  };

  const handleDownload = () => {
    html2canvas(cvRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('cv.pdf');
    });
  };

  return (
    <div className="container cv pad-t-40 no-pad-lr" ref={cvRef}>

      <div className="col-md-4 matchHeight no-pad-lr gray">
        <div className="col-md-12 avatar">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        </div>
        <div className="col-md-12 bio pad-b-20">
          <div className="center">
            <h1 className="name">KA PUAL</h1>
            <hr />
            <h2>It Maneger</h2>
          </div>
          <div className="about m-t-50">
            <h3>About</h3>
            <div className="pad-l-30">
              {editable ? (
                <textarea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus augue at eleifend. Aenean volutpat purus nibh, quis ultricies tellus gravida vel. Donec dictum, massa ut accumsan feugiat, ex leo vestibulum odio, vitae accumsan metus ipsum quis mauris." />
              ) : (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis dapibus augue at eleifend.
                  Aenean volutpat purus nibh, quis ultricies tellus gravida vel. Donec dictum, massa ut accumsan
                  feugiat, ex leo vestibulum odio, vitae accumsan metus ipsum quis mauris.
                </p>
              )}
            </div>
          </div>
          <div className="contact m-t-30">
            <h3>Contact</h3>
            <div className="pad-l-30">
              <p>
                <span className="glyphicon glyphicon-earphone circle" aria-hidden="true"></span> (555) 123-4567
              </p>

              <p className="m-t-20">
                <span className="glyphicon glyphicon-map-marker circle" aria-hidden="true"></span> 1234 Example
                Dr.
                <br />
                <span className="m-l-50">My City, ST 12345</span>
              </p>

              <p className="m-t-20">
                <span className="glyphicon glyphicon-envelope circle" aria-hidden="true"></span>{' '}
                email@example.com
              </p>

              <p className="m-t-20">
                <span className="glyphicon glyphicon-link circle" aria-hidden="true"></span> www.example.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 matchHeight no-pad-r">
        <div className="col-md-12 m-t-20">
          <div className="experience">
            <p>
              <span className="glyphicon glyphicon-briefcase"></span>
              <span className="h3"> EXPERIENCE</span>
            </p>
            <hr />
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Company 1</b>
                  <br />
                  <i>Feb 2013 - Jun 2014</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Job Title Here</p>
                {editable ? (
                  <textarea
                    defaultValue="Fusce efficitur pharetra lorem nec convallis. Aenean hendrerit semper metus. Cras pharetra rhoncus mauris non malesuada."
                  />
                ) : (
                  <p>
                    Fusce efficitur pharetra lorem nec convallis. Aenean hendrerit semper metus. Cras pharetra rhoncus
                    mauris non malesuada.
                  </p>
                )}
              </div>
            </div>
            
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Company 2</b>
                  <br />
                  <i>Jun 2014 - Mar 2015</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Job Title Here</p>
                {editable ? (
                  <textarea
                    defaultValue="Aenean at accumsan leo. Aliquam aliquet odio elit, et blandit est dictum in. Aenean sagittis ultricies interdum. Phasellus in varius dolor. Proin luctus velit ac nisl ullamcorper interdum. Vivamus ut odio sed augue eleifend bibendum."
                  />
                ) : (
                  <p>
                    Aenean at accumsan leo. Aliquam aliquet odio elit, et blandit est dictum in. Aenean sagittis
                    ultricies interdum. Phasellus in varius dolor. Proin luctus velit ac nisl ullamcorper interdum.
                    Vivamus ut odio sed augue eleifend bibendum.
                  </p>
                )}
              </div>
            </div>
            
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Company 3</b>
                  <br />
                  <i>Mar 2015 - Present</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Job Title Here</p>
                {editable ? (
                  <textarea
                    defaultValue="Pellentesque ultrices ullamcorper odio, scelerisque sodales massa congue in. Morbi facilisis purus sit amet ipsum rutrum aliquam. Etiam vel posuere purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                ) : (
                  <p>
                    Pellentesque ultrices ullamcorper odio, scelerisque sodales massa congue in. Morbi facilisis purus sit
                    amet ipsum rutrum aliquam. Etiam vel posuere purus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-12">
          <div className="education">
            <p>
              <span className="glyphicon glyphicon-education"></span>
              <span className="h3"> EDUCATION</span>
            </p>
            <hr />
            
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Diploma</b>
                  <br />
                  <i>2009 - 2013</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Example High School</p>
                {editable ? (
                  <textarea
                    defaultValue="Fusce efficitur pharetra lorem nec convallis. Aenean hendrerit semper metus. Cras pharetra rhoncus mauris non malesuada."
                  />
                ) : (
                  <p>
                    Fusce efficitur pharetra lorem nec convallis. Aenean hendrerit semper metus. Cras pharetra rhoncus
                    mauris non malesuada.
                  </p>
                )}
              </div>
            </div>
        
            <div className="row m-b-10">
              <div className="col-md-4">
                <p className="date">
                  <b>Associates Degree</b>
                  <br />
                  <i>2013 - 2015</i>
                </p>
              </div>
              <div className="col-md-7 col-md-offset-1">
                <p className="title">Example College</p>
                {editable ? (
                  <textarea
                    defaultValue="Aenean at accumsan leo. Aliquam aliquet odio elit, et blandit est dictum in. Aenean sagittis ultricies interdum. Phasellus in varius dolor."
                  />
                ) : (
                  <p>
                    Aenean at accumsan leo. Aliquam aliquet odio elit, et blandit est dictum in. Aenean sagittis
                    ultricies interdum. Phasellus in varius dolor.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      
        <div className="col-md-12 m-b-50">
          <div className="work-skills">
            <p>
              <span className="glyphicon glyphicon-cog"></span>
              <span className="h3"> WORK SKILLS</span>
            </p>
            <hr />
            
            <div className="row">
              <div className="col-md-6">
                <div className="skills">
                  <dt>Michine oprater</dt>
                  <dd style={{ width: '90%' }}></dd>
                  
                  <dt>QC checker</dt>
                  <dd style={{ width: '85%' }}></dd>
                  
                  <dt>Qc incharge</dt>
                  <dd style={{ width: '80%' }}></dd>
                </div>
              </div>
        
              <div className="col-md-6">
                <div className="skills">
                  <dt>Poduction Associates</dt>
                  <dd style={{ width: '70%' }}></dd>
                  
                  <dt>Production feeder</dt>
                  <dd style={{ width: '75%' }}></dd>
                  
                  <dt>Product Enquary</dt>
                  <dd style={{ width: '85%' }}></dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="center pad-t-20">
        {editable ? (
          <button className="btn btn-primary m-r-10" onClick={toggleEditMode}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary m-r-10" onClick={toggleEditMode}>
            Edit
          </button>
        )}
        <button className="btn btn-primary" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default HeadRep;
