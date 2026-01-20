import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-container">
        <h1>About Paradise Nursery</h1>
        <div className="about-content">
          <section>
            <h2>Our Story</h2>
            <p>
              Paradise Nursery was founded with a passion for bringing the beauty of nature 
              into your home. We specialize in providing high-quality houseplants that are 
              perfect for both beginners and experienced plant enthusiasts.
            </p>
          </section>
          
          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to make indoor gardening accessible and enjoyable for everyone. 
              We carefully select each plant to ensure it meets our high standards for quality 
              and health, providing you with plants that will thrive in your space.
            </p>
          </section>
          
          <section>
            <h2>What We Offer</h2>
            <ul>
              <li>Wide variety of indoor plants</li>
              <li>Expert care instructions for each plant</li>
              <li>Healthy, well-cared-for plants</li>
              <li>Competitive prices</li>
              <li>Excellent customer service</li>
            </ul>
          </section>
          
          <section>
            <h2>Contact Us</h2>
            <p>
              Have questions? We'd love to hear from you! Reach out to us through our 
              customer service team, and we'll be happy to help you find the perfect 
              plants for your home.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
