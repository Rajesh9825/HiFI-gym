import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* LEFT SIDE - INFO */}
        <div className="contact-info">
          <h2>
            Ready To <span>Transform</span> Your Body?
          </h2>

          <p className="contact-subtext">
            Join Talwalkar’s HiFi Gym today and experience world-class training,
            expert coaches, and premium fitness infrastructure.
            Your transformation starts here.
          </p>

          <div className="contact-details">
            <div>
              <h4>📍 Location</h4>
              <p>Mahaveer corner, 1st floor, opp swami vivekanand garden.Behind shanti Nagar, Kondhwa Bk, Pune- 411048</p>
            </div>

            <div>
              <h4>📞 Call Us</h4>
              <p>+91 9881869881</p>
            </div>

            <div>
              <h4>✉ Email</h4>
              <p>info@talwalkarshifi.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form">
          <h3>Book Your Free Trial</h3>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Fitness Goal"></textarea>

            <button type="submit" className="contact-btn">
              Start My Transformation
            </button>
          </form>
        </div>

      </div>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5088782955436!2d73.87813697334937!3d18.460594971007218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf30453184b%3A0x2a08737d110768b3!2sTalwalkar&#39;s%20HiFi%20Gym!5e0!3m2!1sen!2sin!4v1771845519136!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Talwalkars Location"
        ></iframe>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919881869881"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </section>
  );
};

export default Contact;