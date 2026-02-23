import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1" 
            alt="Talwalkars Gym"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>About Talwalkar’s HiFi Gym</h2>

          <p className="about-highlight">
            Empowering India through strength, discipline, and performance.
          </p>

          <p>
            Talwalkar’s HiFi Gym is a premium fitness destination dedicated to
            transforming lives through structured training programs,
            world-class equipment, and certified fitness professionals.
            Our goal is to inspire a healthier and stronger India.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>5000+</h3>
              <p>Active Members</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Certified Trainers</p>
            </div>
          </div>

          <button className="btn-primary">Know More</button>
        </div>

      </div>
    </section>
  );
};

export default About;