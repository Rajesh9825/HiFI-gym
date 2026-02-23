import React from "react";

const services = [
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your body goals.",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
  },
  {
    title: "Strength & Conditioning",
    desc: "Build muscle and power with structured programs.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  },
  {
    title: "Cardio Training",
    desc: "Improve endurance and heart health with advanced cardio.",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
  },
  {
    title: "Weight Loss Program",
    desc: "Scientifically designed fat-loss transformation plans.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
  },
  {
    title: "Group Classes",
    desc: "High-energy Zumba, HIIT & functional training sessions.",
    img: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a"
  },
  {
    title: "Nutrition Planning",
    desc: "Customized diet plans for maximum performance.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
  }
];

const Services = () => {
  return (
    <section id="services">
      <h2>Our Premium Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div
              className="service-img"
              style={{ backgroundImage: `url(${service.img})` }}
            ></div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;