import React from "react";

const trainers = [
  {
    name: "Rahul Deshmukh",
    role: "Head Strength Coach",
    experience: "12+ Years Experience",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
  },
  {
    name: "Sneha Patil",
    role: "Certified Fitness Trainer",
    experience: "8+ Years Experience",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883"
  },
  {
    name: "Arjun Mehta",
    role: "Cardio & HIIT Specialist",
    experience: "10+ Years Experience",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
  }
];

const Trainers = () => {
  return (
    <section id="trainers">
      <h2>Meet Our Expert Trainers</h2>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div
              className="trainer-img"
              style={{ backgroundImage: `url(${trainer.img})` }}
            ></div>

            <div className="trainer-content">
              <h3>{trainer.name}</h3>
              <p className="trainer-role">{trainer.role}</p>
              <p className="trainer-exp">{trainer.experience}</p>
              <button className="trainer-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;