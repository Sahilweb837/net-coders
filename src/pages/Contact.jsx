import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

function Contact() {

  Aos.init();
  const [open, setOpen] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    const allForms = document.querySelectorAll(".contact-wrapper");
    allForms.forEach((form) => {
      form.style.display = "none";
    });

    navigate("/contact");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send. Please try again.");
        }
      );
  };

  useEffect(() => {
    const regularBtn = document.getElementById("regularBtn");
    const regularForm = document.getElementById("regularForm");

    const industrialBtn = document.getElementById("industrialBtn");
    const industrialForm = document.getElementById("industrialForm");

    const servicesBtn = document.getElementById("servicesBtn");
    const servicesForm = document.getElementById("servicesform");

    const hideAllForms = () => {
      if (regularForm) regularForm.style.display = "none";
      if (industrialForm) industrialForm.style.display = "none";
      if (servicesForm) servicesForm.style.display = "none";
    };

    if (regularBtn && regularForm) {
      regularBtn.onclick = () => {
        hideAllForms();
        regularForm.style.display = "flex";
        window.scrollTo(0, regularForm.offsetTop);
      };
    }

    if (industrialBtn && industrialForm) {
      industrialBtn.onclick = () => {
        hideAllForms();
        industrialForm.style.display = "flex";
        window.scrollTo(0, industrialForm.offsetTop);
      };
    }

    if (servicesBtn && servicesForm) {
      servicesBtn.onclick = () => {
        hideAllForms();
        servicesForm.style.display = "flex";
        window.scrollTo(0, servicesForm.offsetTop);
      };
    }
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-5 mt-5 uppercase text-center py-7.5" data-aos="fade-up" data-aos-delay="150">
        <span className="highlight-badge">Contact</span>
        <h1 className="text-5xl font-bold">
          We'd Love To Hear
          <br /> From You
        </h1>
        <p className="w-10/12 text-dark-gray">
          Whether you're looking to kickstart your learning journey or need
          tailored IT solutions for your business, we're just a message away.
          Reach out with your queries, ideas, or collaboration requests. We'll
          get back to you as soon as possible.
        </p>
      </div>

      {/* Query Section */}
      <div className="bg-white rounded-5xl py-25 px-0 flex flex-col gap-10 items-center mt-12.5" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
        <h2 className="text-2xl font-bold">Tell Us What You're Looking For</h2>
        <h3 className="text-xl font-semibold">Choose Your Area of Interest</h3>
        <p className="w-11/12 text-center text-dark-gray">
          Select whether your inquiry is about our IT education programs or IT
          services. This helps us connect you with the right team quickly.
        </p>

        <div className="flex flex-wrap gap-2.5 items-center justify-center">
          <button onClick={handleClick} className="bg-white text-deep-black border border-deep-black px-15 py-2.5 rounded-2.5xl font-medium transition-all duration-300 hover:bg-deep-black hover:text-white">Education</button>

          <button id="servicesBtn" className="bg-white text-deep-black border border-deep-black px-15 py-2.5 rounded-2.5xl font-medium transition-all duration-300 hover:bg-deep-black hover:text-white">Services</button>

          <div className={`flex flex-col gap-2.5 ml-1.25 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ${open ? 'max-h-50 opacity-100' : ''}`}>
            <button id="regularBtn" className="bg-white text-deep-black border border-deep-black px-15 py-2.5 rounded-2.5xl font-medium transition-all duration-300 hover:bg-deep-black hover:text-white">Regular Courses</button>
            <button id='industrialBtn' className="bg-white text-deep-black border border-deep-black px-15 py-2.5 rounded-2.5xl font-medium transition-all duration-300 hover:bg-deep-black hover:text-white">Industrial Training</button>
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="flex flex-col items-center gap-5 py-5 text-center mt-10">
        <span className="highlight-badge">Get In Touch</span>
        <h1 className="text-4xl font-bold">
          Prefer to reach us <br />
          directly?
        </h1>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col mt-2.5 py-5 px-10 rounded-4xl gap-4.5 h-50 bg-white" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
          <div className="flex items-center gap-4.5">
            <i className="fa-solid fa-location-dot text-dark-gray text-xl"></i>
            <div>
              <h4 className="font-bold text-deep-black">Office</h4>
              <h5 className="font-semibold text-deep-black">Dharamshala, Himachal Pradesh</h5>
              <p className="text-dark-gray">
                Near Govt. ITI, above Gramin Bank Dari, Dharamshala (176057)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-2.5 py-5 px-10 rounded-4xl gap-4.5 h-50 bg-white" data-aos="fade-left" data-aos-duration="900" data-aos-delay="300">
          <div className="flex items-center gap-4.5">
            <i className="fa-solid fa-phone text-dark-gray text-xl"></i>
            <div>
              <h4 className="font-bold text-deep-black">Phone</h4>
              <h5 className="font-semibold text-deep-black">+91 9816732055, 7590832055</h5>
              <p className="text-dark-gray">Mon to Sat 10 am to 5 pm</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-2.5 py-5 px-10 rounded-4xl gap-4.5 h-50 bg-white" data-aos="fade-left" data-aos-duration="900" data-aos-delay="450">
          <div className="flex items-center gap-4.5">
            <i className="fa-solid fa-message text-dark-gray text-xl"></i>
            <div>
              <h4 className="font-bold text-deep-black">Chat to us</h4>
              <h5 className="font-semibold text-deep-black">info@netcoder.in</h5>
              <p className="text-dark-gray">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Contact Form */}
      <div className="hidden" id="regularForm">
        <div className="flex justify-center items-center py-15 px-5 bg-white relative">
          <div className="absolute top-5 left-6.25 cursor-pointer" onClick={handleClose}>
            <i className="fa-solid fa-arrow-left text-deep-black text-xl"></i>
          </div>

          <form ref={form} onSubmit={sendEmail} className="w-full max-w-150 flex flex-col gap-5">
            <label className="text-lg font-semibold">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Mobile Number</label>
            <input
              type="text"
              name="user_number"
              placeholder="Enter Your Mobile Number"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Select A Course</label>
            <select name="course" className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base text-light-gray">
              <option value="" disabled selected>Select a course</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="web-designing">Web Designing</option>
              <option value="animation">2D/3D Animation</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="web-dev">Web Development</option>
              <option value="wordpress">WordPress</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="mern">Mern Stack</option>
              <option value="autocad">Auto CAD</option>
            </select>

            <label className="text-lg font-semibold">Message</label>
            <textarea
              name="message"
              placeholder="Write Us A Message"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
            ></textarea>

            <button className="black-bg-button w-full text-base" type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Industrial Training Contact Form */}
      <div className="hidden" id="industrialForm">
        <div className="flex justify-center items-center py-15 px-5 bg-white relative">
          <div className="absolute top-5 left-6.25 cursor-pointer" onClick={handleClose}>
            <i className="fa-solid fa-arrow-left text-deep-black text-xl"></i>
          </div>

          <form ref={form} onSubmit={sendEmail} className="w-full max-w-150 flex flex-col gap-5">
            <label className="text-lg font-semibold">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Mobile Number</label>
            <input
              type="text"
              name="user_number"
              placeholder="Enter Your Mobile Number"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />
            <label className="text-lg font-semibold">Select A Course</label>
            <select name="course" className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base text-light-gray">
              <option value="" disabled selected>Select a course</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="web-dev">Web Development</option>
              <option value="wordpress">WordPress</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="social-media">Social Media Marketing</option>
            </select>

            <label className="text-lg font-semibold">Duration</label>
            <select name="Duration" className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base text-light-gray">
              <option value="" disabled selected>45 Days</option>
              <option value="6-months">6 Months</option>
              <option value="3-years">3 Years</option>
            </select>

            <button className="black-bg-button w-full text-base" type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Services Contact Form */}
      <div className="hidden" id="servicesform">
        <div className="flex justify-center items-center py-15 px-5 bg-white relative">
          <div className="absolute top-5 left-6.25 cursor-pointer" onClick={handleClose}>
            <i className="fa-solid fa-arrow-left text-deep-black text-xl"></i>
          </div>

          <form ref={form} onSubmit={sendEmail} className="w-full max-w-150 flex flex-col gap-5">
            <label className="text-lg font-semibold">Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Mobile Number</label>
            <input
              type="text"
              name="user_number"
              placeholder="Enter Your Mobile Number"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base placeholder-light-gray"
              required
            />

            <label className="text-lg font-semibold">What Brings You Here Today</label>
            <select name="course" className="w-full py-3.5 px-4 border border-light-gray rounded-sm text-base text-light-gray">
              <option value="" disabled selected>Needs A Social Manager</option>
            </select>

            <button className="black-bg-button w-full text-base" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
