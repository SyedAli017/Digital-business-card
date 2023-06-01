import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about">
        <h3 className="title">About</h3>
        <div className="description">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </div>
      </div>

      <div className="interest">
        <h3 className="title">Interests</h3>
        <div className="description">
          Music, Football, Travelling, Food expert.
        </div>
      </div>
    </div>
  );
};

export default About;
