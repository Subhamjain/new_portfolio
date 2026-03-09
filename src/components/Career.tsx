import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Reckonsys Tech Labs Pvt Ltd</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Developed scalable SaaS applications using React.js, and
              TypeScript. Integrated backend services and REST APIs. Built
              responsive UI systems and collaborated on product wireframes and
              design workflows using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Reckonsys Tech Labs Pvt Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led development teams, optimized frontend performance, automated
              document workflows reducing paperwork, and developed a 3D robot
              simulator using React and Babylon.js for visualizing robot
              movements and collision detection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
