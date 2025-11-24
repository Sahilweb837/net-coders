import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
// Images
import Group44 from "../assets/Images/Group4.png";
import imager from "../assets/Images/heroimg.jpg";
import arrowright from "../assets/Images/arrow-right.png";

function Home() {
  useEffect(() => {
    Aos.init();
  }, [])
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const cleanupFns = [];

    dropdowns.forEach((dropdown) => {
      const icon = dropdown.querySelector(".icon");
      if (!icon) return;

      const handleClick = () => {
        dropdown.classList.toggle("open");
        icon.classList.toggle("fa-plus");
        icon.classList.toggle("fa-minus");
      };

      icon.addEventListener("click", handleClick);

      cleanupFns.push(() => icon.removeEventListener("click", handleClick));
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="container flex flex-col items-center gap-5 mt-5 uppercase text-center py-7.5">
        <span className="highlight-badge">Netcoder Technology</span>
        <h1 className="text-5xl font-bold">
          solution for brands <br /> Skills for the learners
        </h1>
        <p className="w-10/12 text-dark-gray">
          From digital branding and website design to student training, we help
          businesses grow online and train future IT professionals with
          real-world skills.
        </p>
      </div>

      {/* SOLUTIONS & LEARNING */}
      <div className="container flex justify-around flex-wrap gap-2.5 py-20">
        <div className="box-1 flex flex-col gap-4.5 bg-deep-black text-white w-full sm:w-96 rounded-xl py-10 px-5" data-aos="zoom-in-right">
          <h3 className="text-2xl font-bold">Solutions</h3>
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
          <Link to="/services"><button className="white-bg-button w-fit">Explore services</button></Link>
        </div>

        <div className="box-2 flex flex-col gap-4.5 bg-white text-deep-black w-full sm:w-96 rounded-2xl py-10 px-5" data-aos="zoom-in-left">
          <h3 className="text-2xl font-bold">Learning</h3>
          <p>
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
          </p>
          <Link to="/education"><button className="black-bg-button w-fit">View Training Programs</button></Link>
        </div>
      </div>

      {/* ABOUT / WHO WE ARE */}
      <div className="container flex flex-col items-center gap-5 py-5 text-center">
        <span className="highlight-badge">Who We Are</span>
        <h2 className="text-4xl font-bold">Innovating IT Solutions</h2>
        <p className="w-11/12 text-dark-gray text-center">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="container py-12.5" data-aos="fade-up">
        <img src={Group44} alt="Hero" className="w-full" />
      </div>

      {/* EDUCATION SECTION */}
      <div className="relative text-center py-2.5">
        <div className="relative inline-block">
          <h1 className="text-light-gray text-8xl font-bold tracking-wider py-5">EDUCATION</h1>
          <span className="highlight-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">What We Do</span>
        </div>

        <h2 className="text-3xl font-bold mt-5">Popular Courses We Offers</h2>

        <div className="courses-container flex flex-wrap container mt-10">
          <div className="courses flex flex-col text-left py-0 px-15">
            <div className="active-box bg-white px-7.5 py-5 rounded-3xl">
              <h3 className="text-xl font-semibold -ml-2.5">01. Graphic Designing</h3>
              <p className="text-dark-gray leading-relaxed">
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie , dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              </p>
            </div>

            <h3 className="text-lg ml-5 py-1.25">02. Web Development</h3>
            <h3 className="text-lg ml-5 py-1.25">03. Digital Marketing</h3>
            <h3 className="text-lg ml-5 py-1.25">04. Auto CAD</h3>
          </div>

          <div className="course-img flex-1 min-w-75">
            <img src={imager} alt="Course" className="w-full max-w-87.5 h-87.5 rounded-3.75xl block mx-auto my-17.5 object-cover" />
          </div>

          <div className="w-full text-center">
            <Link to="/services"><button className="black-bg-button">Explore All Services</button></Link>
          </div>
        </div>
      </div>

      {/* SOLUTIONS SECTION */}
      <div className="relative text-center py-2.5">
        <div className="relative inline-block">
          <h1 className="text-light-gray text-8xl font-bold tracking-wider py-5">SOLUTIONS</h1>
          <span className="highlight-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">What We Do</span>
        </div>

        <div className="container">
          <h2 className="text-3xl font-bold">Popular Services We Offers</h2>
        </div>

        <div className="courses-container flex flex-wrap container mt-10">
          <div className="courses flex flex-col text-left py-0 px-15">
            <div className="active-box bg-white px-7.5 py-5 rounded-3xl">
              <h3 className="text-xl font-semibold">01. Creative Design Solutions</h3>
              <p className="text-dark-gray">
                Forem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <h3 className="text-lg ml-5 py-1.25">02. Web Development Solutions</h3>
            <h3 className="text-lg ml-5 py-1.25">03. Digital Marketing</h3>
            <h3 className="text-lg ml-5 py-1.25">04. Digital Engagement Solutions</h3>
          </div>

          <div className="course-img flex-1 min-w-75">
            <img src={imager} alt="Service" className="w-full max-w-87.5 h-87.5 rounded-3.75xl block mx-auto my-17.5 object-cover" />
          </div>
        </div>

        <div className="w-full text-center">
          <Link to="/services"><button className="black-bg-button">Explore All Services</button></Link>
        </div>

        {/* PORTFOLIO */}
        <div className="container bg-white rounded-5xl py-7.5 px-20 mt-20" data-aos="fade-up">
          <div className="container flex flex-col items-center gap-5 py-5 text-center">
            <span className="highlight-badge">Portfolio</span>
            <h2 className="text-4xl font-bold">Ideas We Brought to Life</h2>
          </div>

          <div className="">
            <div className="ideas-card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto-fit gap-6.25 justify-center">
              <div className="idea-card w-full py-57.5 px-10 bg-no-repeat bg-center bg-cover text-white rounded-3xl flex flex-col justify-start" style={{backgroundImage: `url(${imager})`}} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
                <h3 className="text-2xl mb-2">Mudroots Pottery Studio</h3>
                <p className="text-sm leading-relaxed">
                  We designed a responsive, minimal website and complete branding kit for a Pottery Studio, focused on storytelling and user simplicity.
                </p>
                <div className="mt-5 flex justify-between items-center">
                  <Link to='/Blogs'><button className="bg-transparent text-white font-bold text-sm px-0 py-4.5">View Full Case Study</button></Link>
                  <Link to='/Blogs'><img src={arrowright} alt="arrow" className="w-4.5 h-4.5" /></Link>
                </div>
              </div>

              <div className="idea-card w-full py-57.5 px-10 bg-no-repeat bg-center bg-cover text-white rounded-3xl flex flex-col justify-start" style={{backgroundImage: `url(${imager})`}} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
                <h3 className="text-2xl mb-2">Mudroots Pottery Studio</h3>
                <p className="text-sm leading-relaxed">
                  We designed a responsive, minimal website and complete branding kit for a Pottery Studio, focused on storytelling and user simplicity.
                </p>
                <div className="mt-5 flex justify-between items-center">
                  <Link to='/Blogs'><button className="bg-transparent text-white font-bold text-sm px-0 py-4.5">View Full Case Study</button></Link>
                  <Link to='/Blogs'><img src={arrowright} alt="arrow" className="w-4.5 h-4.5" /></Link>
                </div>
              </div>
            </div>

            <Link to="/"><button className="black-bg-button mt-5">View Our Portfolio</button></Link>
          </div>
        </div>

        {/* BLOGS SECTION */}
        <section className="container py-15 px-7.5">
          <div className="container">
            <span className="highlight-badge">Blogs</span>
            <h2 className="text-4xl font-bold py-5">Stories That Fuel The Build</h2>
          </div>

          <div className="blogs-wrapper flex flex-wrap gap-5 justify-center py-12.5">
            <div className="blog-card w-full md:w-87.5 flex flex-col text-left" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
              <div className="blog-img w-full h-75 rounded-5xl overflow-hidden">
                <img src={imager} alt="blog-1" className="w-full h-full object-cover rounded-5xl" />
              </div>
              <h3 className="text-lg my-3.5 leading-relaxed">How can typography be used effectively in branding and social media graphics?</h3>
              <div className="flex justify-between items-center">
                <Link to='/Blogs'><button className="bg-transparent text-light-gray font-bold text-xs px-0 py-2.5">Read Full Blog</button></Link>
                <Link to='/Blogs'><i className="fa-solid fa-arrow-down fa-rotate-by text-light-gray" style={{ "--fa-rotate-angle": "240deg" }}></i></Link>
              </div>
            </div>

            <div className="blog-card w-full md:w-87.5 flex flex-col text-left" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150">
              <div className="blog-img w-full h-75 rounded-5xl overflow-hidden">
                <img src={imager} alt="blog-2" className="w-full h-full object-cover rounded-5xl" />
              </div>
              <h3 className="text-lg my-3.5 leading-relaxed">How can typography be used effectively in branding and social media graphics?</h3>
              <div className="flex justify-between items-center">
                <Link to='/Blogs'><button className="bg-transparent text-light-gray font-bold text-xs px-0 py-2.5">Read Full Blog</button></Link>
                <Link to='/Blogs'><i className="fa-solid fa-arrow-down fa-rotate-by text-light-gray" style={{ "--fa-rotate-angle": "240deg" }}></i></Link>
              </div>
            </div>

            <div className="blog-card w-full md:w-87.5 flex flex-col text-left" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
              <div className="blog-img w-full h-75 rounded-5xl overflow-hidden">
                <img src={imager} alt="blog-3" className="w-full h-full object-cover rounded-5xl" />
              </div>
              <h3 className="text-lg my-3.5 leading-relaxed">How can typography be used effectively in branding and social media graphics?</h3>
              <div className="flex justify-between items-center">
                <Link to='/Blogs'><button className="bg-transparent text-light-gray font-bold text-xs px-0 py-2.5">Read Full Blog</button></Link>
                <Link to='/Blogs'><i className="fa-solid fa-arrow-down fa-rotate-by text-light-gray" style={{ "--fa-rotate-angle": "240deg" }}></i></Link>
              </div>
            </div>
          </div>

          <Link to='/Blogs'><button className="black-bg-button mx-auto block mt-12.5">Read All Blogs</button></Link>
        </section>

        {/* FAQ WRAPPER */}
        <div className="faq-wrapper container">
          <div className="container flex flex-col items-center gap-5 py-5 text-center">
            <span className="highlight-badge">FAQs</span>
            <h2 className="text-4xl font-bold">What People usually ask</h2>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="container bg-deep-black text-white rounded-4xl flex flex-col gap-3 items-start justify-center py-20 px-20 mt-20" data-aos="fade-up" data-aos-duration="600">
          <span className="highlight-badge">Contact us</span>
          <h3 className="text-3.5xl font-light text-left w-2/5">
            Whether you're building a brand or building your skills, we're ready to help you move forward
          </h3>
          <Link to="/contact"><button className="black-bg-button mt-4">Contact us now</button></Link>
        </div>
      </div>
    </>
  );
}

export default Home;
