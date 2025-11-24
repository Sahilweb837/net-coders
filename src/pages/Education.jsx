import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import imager from "../assets/Images/heroimg.jpg";
import img1 from "../assets/Images/one.png";
import img2 from "../assets/Images/flow-chart.png";
import img3 from "../assets/Images/collapse-diagonal-line.png";
import img4 from "../assets/Images/swap-3-line.png";

function Education() {
  Aos.init();
  useEffect(() => {
    const carousels = document.querySelectorAll(".courses");

    carousels.forEach((carousel) => {
      const cards = carousel.querySelector(".coursecards");
      const leftBtn = carousel.querySelector(".leftBtn");
      const rightBtn = carousel.querySelector(".rightBtn");

      if (leftBtn && cards) {
        leftBtn.onclick = function () {
          cards.scrollBy({
            left: -400,
            behavior: "smooth",
          });
        };
      }

      if (rightBtn && cards) {
        rightBtn.onclick = function () {
          cards.scrollBy({
            left: 400,
            behavior: "smooth",
          });
        };
      }
    });
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-5 mt-5 uppercase text-center py-7.5" data-aos="fade-up" data-aos-delay="150">
        <span className="highlight-badge">Education</span>
        <h1 className="text-5xl font-bold">START LEARNING</h1>
        <p className="w-10/12 text-dark-gray">
          Whether you're just beginning or looking to upgrade your skills, our
          courses are designed to help you grow confidently. With hands-on
          training, real-world projects, and a focus on industry-relevant tools,
          we ensure you not only learn but apply.
        </p>
      </div>

      <div className="h-87.5 my-12.5 rounded-4xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${imager})`}} data-aos="zoom-in"></div>

      <div className="bg-deep-black rounded-sm w-360 py-2 px-2 mx-auto">
        <Link to="/education"><button className="bg-deep-black text-white px-7.5 py-2 rounded-sm mx-2.5">Regular Courses</button></Link>
        <Link to="/"><button className="bg-white text-deep-black px-7.5 py-2 rounded-sm mx-2.5 hover:bg-deep-black hover:text-white transition-all duration-300">Industrial Training</button></Link>
      </div>

      {/* Carousel 1 */}
      <div className="courses flex items-start gap-10 my-17.5 w-11/12">
        <div className="course-info w-75 flex-shrink-0 pt-2.5">
          <span className="highlight-badge">Regular Courses</span>
          <h2 className="text-3xl text-deep-black leading-normal">Design & Multimedia Courses</h2>
        </div>

        <div className="coursecards flex gap-5 overflow-x-auto scroll-smooth w-200 pb-12.5 relative">
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Graphic Design</h4>
            <p className="text-dark-gray leading-relaxed">Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">UX/UI Design</h4>
            <p className="text-dark-gray leading-relaxed">UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Web Development</h4>
            <p className="text-dark-gray leading-relaxed">The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">WordPress</h4>
            <p className="text-dark-gray leading-relaxed">Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Digital Marketing</h4>
            <p className="text-dark-gray leading-relaxed">Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Social Media Marketing</h4>
            <p className="text-dark-gray leading-relaxed">With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects, sophisticated targeting methods, and influencer marketing tactics to thrive.</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/3 transform translate-x-1/4 flex gap-6.25">
          <button className="leftBtn w-2 py-7.5 rounded-sm bg-gray-300 text-deep-black cursor-pointer transition-all duration-300 hover:bg-gray-500"><i className="fa-solid fa-arrow-left text-sm"></i></button>
          <button className="rightBtn w-2 py-7.5 rounded-sm bg-gray-300 text-deep-black cursor-pointer transition-all duration-300 hover:bg-gray-500"><i className="fa-solid fa-arrow-right text-sm"></i></button>
        </div>
      </div>

      {/* Carousel 2 */}
      <div className="courses flex items-start gap-10 my-17.5 w-11/12">
        <div className="course-info w-75 flex-shrink-0 pt-2.5">
          <span className="highlight-badge">Regular Courses</span>
          <h2 className="text-3xl text-deep-black leading-normal">CMS & Web Technologies Courses</h2>
        </div>

        <div className="coursecards flex gap-5 overflow-x-auto scroll-smooth w-200 pb-12.5 relative">
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Graphic Design</h4>
            <p className="text-dark-gray leading-relaxed">Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">UX/UI Design</h4>
            <p className="text-dark-gray leading-relaxed">UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Web Development</h4>
            <p className="text-dark-gray leading-relaxed">The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">WordPress</h4>
            <p className="text-dark-gray leading-relaxed">Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Digital Marketing</h4>
            <p className="text-dark-gray leading-relaxed">Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Social Media Marketing</h4>
            <p className="text-dark-gray leading-relaxed">With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects, sophisticated targeting methods, and influencer marketing tactics to thrive.</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/3 transform translate-x-1/4 flex gap-6.25">
          <button className="leftBtn w-2 py-7.5 rounded-sm bg-gray-300 text-deep-black cursor-pointer transition-all duration-300 hover:bg-gray-500"><i className="fa-solid fa-arrow-left text-sm"></i></button>
          <button className="rightBtn w-2 py-7.5 rounded-sm bg-gray-300 text-deep-black cursor-pointer transition-all duration-300 hover:bg-gray-500"><i className="fa-solid fa-arrow-right text-sm"></i></button>
        </div>
      </div>

      {/* Carousel 3 */}
      <div className="courses flex items-start gap-10 my-17.5 w-11/12">
        <div className="course-info w-75 flex-shrink-0 pt-2.5">
          <span className="highlight-badge">Regular Courses</span>
          <h2 className="text-3xl text-deep-black leading-normal">Digital Marketing Courses</h2>
        </div>

        <div className="coursecards flex gap-5 overflow-x-auto scroll-smooth w-200 pb-12.5 relative">
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Graphic Design</h4>
            <p className="text-dark-gray leading-relaxed">Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">UX/UI Design</h4>
            <p className="text-dark-gray leading-relaxed">UI (User Interface) refers to the visual elements and layout of a digital product, focusing on how users interact with it. UX (User Experience) encompasses the overall feel of the product, including ease of use, accessibility, and satisfaction. In short, UI is about design, while UX is about the overall user journey and satisfaction.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Web Development</h4>
            <p className="text-dark-gray leading-relaxed">The foundations of web development, such as HTML, CSS, and JavaScript, as well as more complex subjects like front-end frameworks and back-end development, are covered in this syllabus. Through projects and portfolio creation, students receive practical experience that equips them for careers in web development.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">WordPress</h4>
            <p className="text-dark-gray leading-relaxed">Over 40% of all websites on the internet are powered by WordPress, a free and open-source content management system (CMS) that makes it simple for users to create and manage blogs and websites. Based on PHP and MySQL, WordPress provides a highly customizable platform with an extensive library of themes and plugins.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Digital Marketing</h4>
            <p className="text-dark-gray leading-relaxed">Join us to turn your passion for digital marketing into a successful career! Our 12-month Digital Marketing course covers key topics like SEO, social media marketing, content marketing, paid advertising, email marketing, and analytics. You'll gain practical experience and industry insights, learning to develop and optimize effective marketing strategies.</p>
          </div>
          <div className="course-box w-96 flex-shrink-0 rounded-3.75xl py-6 px-7.5 bg-white shadow-md">
            <h4 className="text-lg text-deep-black mb-2.5">Social Media Marketing</h4>
            <p className="text-dark-gray leading-relaxed">With this extensive course, you will learn the fundamentals of social media marketing. Discover how to build focused advertising campaigns, manage online communities on Facebook, Instagram, Twitter, and LinkedIn, and produce interesting content. Acquire practical experience in real-life projects, sophisticated targeting methods, and influencer marketing tactics to thrive.</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/3 transform translate-x-1/4 flex gap-6.25">
          <button className="leftBtn w-2 py-7.5 rounded-sm bg-gray-300 text-deep-black cursor-pointer transition-all duration-300 hover:bg-gray-500"><i className="fa-solid fa-arrow-left text-sm"></i></button>
          <button className="rightBtn w-2 py-7.5 rounded-sm bg-gray-300 text-deep-black cursor-pointer transition-all duration-300 hover:bg-gray-500"><i className="fa-solid fa-arrow-right text-sm"></i></button>
        </div>
      </div>

      {/* Free Demo Class */}
      <div className="bg-white rounded-5xl py-22.5 px-0 mt-10" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
        <div className="flex flex-col items-center gap-5 py-5 text-center">
          <span className="highlight-badge">Free Demo Class</span>
          <h2 className="text-4xl font-bold">Still Unsure? Try a free <br /> demo class</h2>
          <p className="w-11/12 text-dark-gray">
            Experience our teaching approach before making a commitment. Whether you're exploring a new skill or planning your career path, our demo class gives you a glimpse of how we teach, what you'll learn, and how we can help you grow. No pressure—just real learning, right from the start.
          </p>
          <Link to='/contact'><button className="black-bg-button">Book A Demo Class</button></Link>
        </div>
      </div>

      {/* Why Us */}
      <div className="mt-10" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="100">
        <div className="flex flex-col items-center gap-5 py-5 text-center">
          <span className="highlight-badge">Why Netcoder</span>
          <h2 className="text-4xl font-bold">Why Choose Netcoder for your learning journey?</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-7.5 w-200 mx-auto mt-7.5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <img src={img1} alt="Design" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Practical, hands-on learning</h5>
            <p className="text-sm leading-relaxed">We emphasise doing over memorising...</p>
          </div>
          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <img src={img2} alt="solution" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Industry-experienced mentors</h5>
            <p className="text-sm leading-relaxed">Learn directly from professionals...</p>
          </div>
          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src={img3} alt="workflow" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Real-world projects</h5>
            <p className="text-sm leading-relaxed">Build portfolio-worthy projects...</p>
          </div>
          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <img src={img4} alt="Integrated services" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Flexible duration and formats</h5>
            <p className="text-sm leading-relaxed">Pick a pace and style that suits you...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
