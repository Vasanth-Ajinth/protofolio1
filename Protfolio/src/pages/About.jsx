import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <p className="about-intro">
        👋 My name is <b>Vasanth G</b>.  
        I'm currently studying <b>Final Year BCA</b> at
        <b> Kongunadu Arts and Science College, Coimbatore, Tamil Nadu, India</b>.
      </p>

      {/* College Section */}
      <div className="about-box">
        <img src="/college.jpg" alt="college" />
        <div>
          <h2>College</h2>
          <p>
            Studying BCA at Kongunadu Arts and Science College, Coimbatore.
          </p>
        </div>
      </div>

      {/* 12th School */}
      <div className="about-box">
        <img src="/+2.jpg" alt="school" />
        <div>
          <h2>Higher Secondary School (+1 and+2)</h2>
          <p>
            Studied at St. Joseph's Higher Secondary School,
            Kootapuly, Tirunelveli District, Tamil Nadu, India.
          </p>
        </div>
      </div>

      {/* 10th School */}
      <div className="about-box">
        <img src="/10.jpg" alt="school" />
        <div>
          <h2>SSLC (1th to 10th)</h2>
          <p>
            Studied at Govt High School, Kanagappapuram,
            Kanniyakumari District, Tamil Nadu, India.
          </p>
        </div>
      </div>

      {/* Native Place */}
      <div className="about-box">
        <img src="/native.jpg" alt="native" />
        <div>
          <h2>Native Place</h2>
          <p>
            My native place is Kanagappapuram, Kanniyakumari District, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
