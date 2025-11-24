import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-wrap justify-between items-start gap-7.5 px-25 py-10 text-center w-4/5 mx-auto capitalize">
      {/* Box 1: Quick links */}
      <div className="flex-1 min-w-50">
        <h6 className="text-lg font-bold mb-6.25 text-deep-black">Quick Links</h6>
        <div className="flex flex-col gap-4.5">
          <Link to="/" className="text-dark-gray no-underline text-base transition-all duration-300">Home</Link>
          <Link to="/about" className="text-dark-gray no-underline text-base transition-all duration-300">About us</Link>
          <Link to="/Blogs" className="text-dark-gray no-underline text-base transition-all duration-300">Blog</Link>
          <Link to="/contact" className="text-dark-gray no-underline text-base transition-all duration-300">Contact</Link>
        </div>
      </div>

      {/* Box 2: Features */}
      <div className="flex-1 min-w-50">
        <h6 className="text-lg font-bold mb-6.25 text-deep-black">Features</h6>
        <div className="flex flex-col gap-4.5">
          <Link to="/Singlecourse" className="text-dark-gray no-underline text-base transition-all duration-300">Courses</Link>
          <Link to="/" className="text-dark-gray no-underline text-base transition-all duration-300">Industrial Training</Link>
          <Link to="/" className="text-dark-gray no-underline text-base transition-all duration-300">Insights</Link>
          <Link to="/" className="text-dark-gray no-underline text-base transition-all duration-300">IT Solutions</Link>
        </div>
      </div>

      {/* Box 3: Legal Info */}
      <div className="flex-1 min-w-50">
        <h6 className="text-lg font-bold mb-6.25 text-deep-black">Legal Links</h6>
        <div className="flex flex-col gap-4.5">
          <Link to="/" className="text-dark-gray no-underline text-base transition-all duration-300">Term & Conditions</Link>
          <Link to="/" className="text-dark-gray no-underline text-base transition-all duration-300">Privacy Policy</Link>
        </div>
      </div>

      {/* Box 4: Stay connected */}
      <div className="flex-1 min-w-50">
        <h6 className="text-lg font-bold mb-6.25 text-deep-black">Stay Connect</h6>
        <div className="flex flex-col gap-4.5">
          <div className="social-media flex gap-5">
            <a href="https://www.facebook.com/netcodertechnology" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f text-dark-gray text-xl"></i>
            </a>
            <a href="https://www.instagram.com/netcodertechnology" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram text-dark-gray text-xl"></i>
            </a>
            <a href="https://www.youtube.com/@netcodertechnology" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube text-dark-gray text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/netcodertechnology" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in text-dark-gray text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full text-center pt-5 mt-20 text-base text-deep-black">
        <p>*All the rights are reserved by <strong>Netcoder Technology</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
