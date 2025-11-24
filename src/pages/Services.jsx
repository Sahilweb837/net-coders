import React from 'react'
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import imager from "../assets/Images/heroimg.jpg";
import brand from "../assets/Images/branding.png";
import Graphics from "../assets/Images/graphics.png";
import ui from "../assets/Images/ui.png";
import img1 from "../assets/Images/one.png";
import img2 from "../assets/Images/flow-chart.png";
import img3 from "../assets/Images/collapse-diagonal-line.png";
import img4 from "../assets/Images/swap-3-line.png";
import arrowright from "../assets/Images/arrow-right.png";

function Services() {
   Aos.init();
  return (
    <div className="container">

      {/* Hero Section */}
      <div className="flex flex-col items-center gap-5 mt-5 uppercase text-center py-7.5" data-aos="fade-up" data-aos-delay="150">
        <span className="highlight-badge">Services</span>
        <h1 className="text-5xl font-bold">BUILD SMARTER</h1>
        <p className="w-10/12 text-dark-gray">
          Whether you're a startup, a small business, or a brand ready to scale - We design and build digital solutions
          that help you connect, grow, and lead in your space. With every project, our goal is to bring clarity,
          efficiency, and long-term functionality to your digital presence.
        </p>
      </div>

      {/* Hero Image */}
      <div className="h-87.5 my-12.5 rounded-4xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${imager})`}} data-aos="zoom-in"></div>

      {/* Creative Design Solutions */}
      <div className="flex flex-col items-center gap-5 py-5 text-center">
        <span className="highlight-badge">What We Offers</span>
        <h2 className="text-4xl font-bold">Creative design solutions</h2>
        <p className="w-11/12 text-dark-gray">
          Our Creative Design Solutions encompass branding, UI/UX, and graphic design, ensuring a cohesive visual identity
          across all platforms. We craft engaging and intuitive designs that not only captivate users but also drive conversions.
        </p>
      </div>

      {/* Services Block 1 */}
      <div className="w-11/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col text-left py-0 px-15 flex-1 min-w-75">
            <div className="bg-white px-7.5 py-5 rounded-3xl">
              <div className="flex items-start gap-2.5">
                <img src={brand} alt="brand" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>Branding</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Brand Strategy And Positioning</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Logo And Visual Identity Creation</li>
            </div>

            <div className="mt-5">
              <div className="flex items-start gap-2.5 ml-5">
                <img src={Graphics} alt="Graphics" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>Graphic Design</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Marketing Collateral (Brochures, Flyers)</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Social Media & Advertising Graphics</li>
            </div>

            <div className="mt-5">
              <div className="flex items-start gap-2.5 ml-5">
                <img src={ui} alt="ui" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>UX/UI Design</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">User Research</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Wireframing & Prototyping</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Usability Testing</li>
            </div>
          </div>

          <div className="flex-1 min-w-75">
            <img src={imager} alt="course" className="w-full max-w-87.5 h-87.5 rounded-3.75xl block mx-auto my-17.5 object-cover" />
          </div>
        </div>
      </div>

      {/* Web Development Solutions */}
      <div className="flex flex-col items-center gap-5 py-5 text-center">
        <span className="highlight-badge">What We Offers</span>
        <h2 className="text-4xl font-bold">Web development solutions</h2>
        <p className="w-11/12 text-dark-gray">
          We build modern and scalable websites with a focus on functionality, performance, and seamless user experience.
          From landing pages to full-stack systems, we create digital products that solve real problems.
        </p>
      </div>

      {/* Services Block 2 */}
      <div className="w-11/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col text-left py-0 px-15 flex-1 min-w-75">
            <div className="bg-white px-7.5 py-5 rounded-3xl">
              <div className="flex items-start gap-2.5">
                <img src={brand} alt="brand" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>Branding</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Brand Strategy And Positioning</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Logo And Visual Identity Creation</li>
            </div>

            <div className="mt-5">
              <div className="flex items-start gap-2.5 ml-5">
                <img src={Graphics} alt="Graphics" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>Graphic Design</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Marketing Collateral (Brochures, Flyers)</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Social Media & Advertising Graphics</li>
            </div>

            <div className="mt-5">
              <div className="flex items-start gap-2.5 ml-5">
                <img src={ui} alt="ui" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>UX/UI Design</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">User Research</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Wireframing & Prototyping</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Usability Testing</li>
            </div>
          </div>

          <div className="flex-1 min-w-75">
            <img src={imager} alt="course" className="w-full max-w-87.5 h-87.5 rounded-3.75xl block mx-auto my-17.5 object-cover" />
          </div>
        </div>
      </div>

      {/* Creative Design Repeated */}
      <div className="flex flex-col items-center gap-5 py-5 text-center">
        <span className="highlight-badge">What We Offers</span>
        <h2 className="text-4xl font-bold">Creative design solutions</h2>
        <p className="w-11/12 text-dark-gray">
          Our Creative Design Solutions encompass branding, UI/UX, and graphic design, ensuring consistency and clarity
          across digital platforms.
        </p>
      </div>

      {/* Services Block 3 */}
      <div className="w-11/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="flex flex-col text-left py-0 px-15 flex-1 min-w-75">
            <div className="bg-white px-7.5 py-5 rounded-3xl">
              <div className="flex items-start gap-2.5">
                <img src={brand} alt="brand" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>Branding</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Brand Strategy And Positioning</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Logo And Visual Identity Creation</li>
            </div>

            <div className="mt-5">
              <div className="flex items-start gap-2.5 ml-5">
                <img src={Graphics} alt="Graphics" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>Graphic Design</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Marketing Collateral (Brochures, Flyers)</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Social Media & Advertising Graphics</li>
            </div>

            <div className="mt-5">
              <div className="flex items-start gap-2.5 ml-5">
                <img src={ui} alt="ui" className="w-8 h-8 ml-2.5" />
                <h3 className='text-xl font-semibold'>UX/UI Design</h3>
              </div>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">User Research</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Wireframing & Prototyping</li>
              <li className="ml-12.5 text-base py-2.5 text-dark-gray">Usability Testing</li>
            </div>
          </div>

          <div className="flex-1 min-w-75">
            <img src={imager} alt="course" className="w-full max-w-87.5 h-87.5 rounded-3.75xl block mx-auto my-17.5 object-cover" />
          </div>
        </div>
      </div>

      {/* Identity Section */}
      <div className="flex flex-col items-center gap-5 py-5 text-center mt-10" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
        <span className="highlight-badge">Let's Build Together</span>
        <h2 className="text-4xl font-bold">let's build your digital identity together</h2>
        <p className="w-11/12 text-dark-gray">Every business is unique, and its digital presence should be too. By blending innovation with strategy, We create customized solutions that connect you with your audience and drive meaningful results. Let's partner to turn your ideas into impactful digital experiences.</p>
        <Link to='/'><button className='black-bg-button'>Start Your Project</button></Link>
      </div>

      {/* Portfolio Component */}
      <div className="bg-white rounded-5xl py-7.5 px-20 mt-20" data-aos="fade-up">
        <div className="flex flex-col items-center gap-5 py-5 text-center">
          <span className="highlight-badge">Case Studies</span>
          <h2 className="text-4xl font-bold">Concepts brought to life</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6.25 justify-center my-10">
          <div className="w-full py-57.5 px-10 bg-no-repeat bg-center bg-cover text-white rounded-3xl flex flex-col justify-start" style={{backgroundImage: `url(${imager})`}} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
            <h3 className="text-2xl mb-2">Mudroots Pottery Studio</h3>
            <p className="text-sm leading-relaxed">
              We designed a responsive minimal website and branding kit for a
              pottery studio.
            </p>
            <div className="mt-5 flex justify-between items-center">
              <Link to='/Blogs'><button className="bg-transparent text-white font-bold text-sm px-0 py-4.5">View Full Case Study</button></Link>
              <Link to='/Blogs'><img src={arrowright} alt="arrow" className="w-4.5 h-4.5" /></Link>
            </div>
          </div>

          <div className="w-full py-57.5 px-10 bg-no-repeat bg-center bg-cover text-white rounded-3xl flex flex-col justify-start" style={{backgroundImage: `url(${imager})`}} data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="200">
            <h3 className="text-2xl mb-2">Mudroots Pottery Studio</h3>
            <p className="text-sm leading-relaxed">
              We designed a responsive minimal website and branding kit for a
              pottery studio.
            </p>
            <div className="mt-5 flex justify-between items-center">
              <Link to='/Blogs'><button className="bg-transparent text-white font-bold text-sm px-0 py-4.5">View Full Case Study</button></Link>
              <Link to='/Blogs'><img src={arrowright} alt="arrow" className="w-4.5 h-4.5" /></Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link to="/"><button className="black-bg-button">View Our Portfolio</button></Link>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="mt-10" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="100">
        <div className="flex flex-col items-center gap-5 py-5 text-center">
          <span className="highlight-badge">Why Netcoder</span>
          <h2 className="text-4xl font-bold">What Make us the right tech partner for you?</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-7.5 w-200 mx-auto mt-7.5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <img src={img1} alt="Design" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Design-Driven Thinking</h5>
            <p className="text-sm leading-relaxed">Every project begins with a strong design foundation that ensures clarity, usability, and visual impact</p>
          </div>

          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <img src={img2} alt="solution" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Custom Solutions, No Templates</h5>
            <p className="text-sm leading-relaxed">Our focus is always on creating thoughtful, tailored solutions that reflects who you are and where you're headed</p>
          </div>

          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src={img3} alt="workflow" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Collaborative Workflow</h5>
            <p className="text-sm leading-relaxed">We believe best work comes from open communication and continuous client involvement</p>
          </div>
          <div className="flex flex-col justify-around items-center text-center py-5 px-5 rounded-5xl min-h-45" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <img src={img4} alt="Integrated services" className="w-10 h-10 object-contain" />
            <h5 className="text-xl my-2.5">Integrated Services Offering</h5>
            <p className="text-sm leading-relaxed">From design to deployment, We bring all your digital needs under one roof</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Services
