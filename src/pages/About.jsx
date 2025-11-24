import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import img1 from "../assets/Images/team1.png";
import img2 from "../assets/Images/team1.png";
import img3 from "../assets/Images/team1.png";
import img4 from "../assets/Images/team1.png";
import img5 from "../assets/Images/team1.png";
import img6 from "../assets/Images/team1.png";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  const members = [
    { img: img1, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img2, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img3, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img4, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img5, name: "Nitin Kapoor", role: "Managing Director" },
    { img: img6, name: "Nitin Kapoor", role: "Managing Director" },
  ];

  const [index, setIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showText, setShowText] = useState([false, false, false, false]);
  
  const timelineRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (members.length - 2));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + (members.length - 2)) % (members.length - 2));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      
      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        const visibleHeight = windowHeight - timelineTop;
        const totalVisible = Math.min(visibleHeight, timelineHeight);
        const progress = (totalVisible / timelineHeight) * 100;
        
        setProgressHeight(Math.min(100, Math.max(0, progress)));
        
        const items = timeline.querySelectorAll('.timeline-item');
        let activeIndex = 0;
        
        items.forEach((item, index) => {
          const itemRect = item.getBoundingClientRect();
          if (itemRect.top < windowHeight / 2) {
            activeIndex = index;
          }
        });
        
        setActiveItem(activeIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHowWeWorkScroll = () => {
      if (!howWeWorkRef.current) return;

      const section = howWeWorkRef.current;
      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let currentActiveStep = -1;

      stepRefs.forEach((ref, index) => {
        if (ref.current) {
          const stepRect = ref.current.getBoundingClientRect();
          const stepCenter = stepRect.top + stepRect.height / 2;
          
          if (stepCenter > windowHeight * 0.2 && stepCenter < windowHeight * 0.8) {
            currentActiveStep = index;
          }
        }
      });

      if (currentActiveStep !== -1 && currentActiveStep !== activeStep) {
        setActiveStep(currentActiveStep);
        
        setShowText([false, false, false, false]);
        
        const currentStep = currentActiveStep;
        setTimeout(() => {
          setShowText(prev => {
            const newState = [...prev];
            newState[currentStep] = true;
            return newState;
          });
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleHowWeWorkScroll);
    handleHowWeWorkScroll();
    
    return () => window.removeEventListener('scroll', handleHowWeWorkScroll);
  }, [activeStep]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setShowText(prev => {
        const newState = [...prev];
        if (activeStep < newState.length) {
          newState[activeStep] = true;
        }
        return newState;
      });
    }, 3000);

    return () => clearInterval(textInterval);
  }, [activeStep]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-5 py-20 text-center" data-aos="fade-up" data-aos-delay="150">
        <h1 className="text-5xl font-bold uppercase">About Us</h1>
        <p className="text-dark-gray text-center">
          <strong>Netcoder Technology</strong> is a digital solutions and
          learning hub based in Dharamshala, offering creative IT services like
          web design, development, and branding — along with hands-on training
          programs for students and professionals. We help businesses build
          smarter and individuals learn faster, all under one roof.
        </p>
      </div>

      {/* Journey Section */}
      <div className="flex flex-col items-center gap-5 py-5 text-center">
        <span className="highlight-badge">our journey</span>
        <h2 className="text-4xl font-bold">
          from classroom concepts to <br /> real-world results
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative my-10 py-20" ref={timelineRef}>
        <div className="absolute left-1/2 top-0 w-0.5 h-1/3 bg-light-gray -translate-x-1/2"></div>
        <div 
          className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-orange to-orange -translate-x-1/3 transition-all duration-300"
          style={{ height: `${progressHeight}%` }}
        ></div>

        <div className={`flex relative mb-12 ${activeItem === 0 ? 'opacity-100' : 'opacity-40'} transition-all duration-300`}>
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="w-3.5 h-3.5 bg-orange rounded-full absolute z-10 transition-all duration-300" 
              style={{
                width: activeItem === 0 ? '18px' : '14px',
                height: activeItem === 0 ? '18px' : '14px',
                boxShadow: activeItem === 0 ? '0 0 0 4px rgba(255, 85, 50, 0.2)' : 'none'
              }}>
            </div>
          </div>
          <div className="ml-auto mr-12 w-2/5 bg-white p-6 rounded-2xl box-shadow-sm" data-aos='fade-up'>
            <p className="text-dark-gray leading-relaxed">
              Founded by Nitin Kapoor in 2016, Netcoder Technology began as a
              skill-driven IT training institute based in the serene town of
              Dharamshala, Himachal Pradesh. With a strong emphasis on hands-on
              learning, we offered practical courses in Web Development, UI/UX
              Design, Full Stack Development, Graphic Design, Digital Marketing,
              and more.
            </p>
          </div>
        </div>

        <div className={`flex relative mb-12 ${activeItem === 1 ? 'opacity-100' : 'opacity-40'} transition-all duration-300`}>
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="w-3.5 h-3.5 bg-orange rounded-full absolute z-10 transition-all duration-300"
              style={{
                width: activeItem === 1 ? '18px' : '14px',
                height: activeItem === 1 ? '18px' : '14px',
                boxShadow: activeItem === 1 ? '0 0 0 4px rgba(255, 85, 50, 0.2)' : 'none'
              }}>
            </div>
          </div>
          <div className="mr-auto ml-12 w-2/5" data-aos='fade-up'>
            <p className="text-dark-gray leading-relaxed">
              Over time, our passion for design and development expanded beyond
              the classroom. As our in-house capabilities grew, so did our
              vision — transforming Netcoder into not just a place to learn, but
              a creative studio delivering real-world IT solutions.
            </p>
          </div>
        </div>

        <div className={`flex relative ${activeItem === 2 ? 'opacity-100' : 'opacity-40'} transition-all duration-300`}>
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="w-3.5 h-3.5 bg-orange rounded-full absolute z-10 transition-all duration-300"
              style={{
                width: activeItem === 2 ? '18px' : '14px',
                height: activeItem === 2 ? '18px' : '14px',
                boxShadow: activeItem === 2 ? '0 0 0 4px rgba(255, 85, 50, 0.2)' : 'none'
              }}>
            </div>
          </div>
          <div className="ml-auto mr-12 w-2/5" data-aos='fade-up'>
            <p className="text-dark-gray leading-relaxed">
              Today, we proudly stand as both an education provider and a
              digital service partner. From helping students launch tech careers
              to building brands and websites for clients, we bridge the gap
              between learning and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12.5 py-15 px-5" ref={howWeWorkRef}>
        <div className="flex flex-col gap-5">
          <span className="highlight-badge">How We Work</span>
          <h2 className="text-5xl font-bold mt-5">
            Collaboration<br />
            Creativity &nbsp; Clarity
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          <div 
            ref={stepRefs[0]}
            className={`flex gap-5 items-start`}
          >
            <h3 className="text-2xl font-medium w-15 mt-7.5">01</h3>
            <div className="bg-white rounded-5xl p-7.5 shadow-sm">
              <h4 className="text-2xl font-semibold mb-2">Understand The Need</h4>
              <p className={`text-dark-gray leading-relaxed transition-all duration-300 ${showText[0] ? 'block' : 'hidden'}`}>
                We begin by listening - whether it's a client's business goal or a
                student's learning objectives. This helps us design the right path
                forward.
              </p>
            </div>
          </div>

          <div 
            ref={stepRefs[1]}
            className={`flex gap-5 items-start`}
          >
            <h3 className="text-2xl font-medium w-15 mt-7.5">02</h3>
            <div className="bg-white rounded-5xl p-7.5 shadow-sm">
              <h4 className="text-2xl font-semibold mb-2">Plan With Purpose</h4>
              <p className={`text-dark-gray leading-relaxed transition-all duration-300 ${showText[1] ? 'block' : 'hidden'}`}>
                We align our strategy with the goals. For the clients, this means
                tailored digital solutions. For learners, it means practical,
                job-ready training plans.
              </p>
            </div>
          </div>

          <div 
            ref={stepRefs[2]}
            className={`flex gap-5 items-start`}
          >
            <h3 className="text-2xl font-medium w-15 mt-7.5">03</h3>
            <div className="bg-white rounded-5xl p-7.5 shadow-sm">
              <h4 className="text-2xl font-semibold mb-2">Execute With Clarity</h4>
              <p className={`text-dark-gray leading-relaxed transition-all duration-300 ${showText[2] ? 'block' : 'hidden'}`}>
                Design, code, teach – whatever we do, we do with detail, quality,
                and user-focused thinking. Every deliverable is built to perform.
              </p>
            </div>
          </div>

          <div 
            ref={stepRefs[3]}
            className={`flex gap-5 items-start`}
          >
            <h3 className="text-2xl font-medium w-15 mt-7.5">04</h3>
            <div className="bg-white rounded-5xl p-7.5 shadow-sm">
              <h4 className="text-2xl font-semibold mb-2">Learn & Improve</h4>
              <p className={`text-dark-gray leading-relaxed transition-all duration-300 ${showText[3] ? 'block' : 'hidden'}`}>
                We gather feedback, track results, and evolve continuously. The
                best outcomes come from listening, learning, and refining –
                together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container" data-aos="fade-left" data-aos-easing="ease-in" data-aos-delay="200">
        <div className="flex flex-col items-center gap-5 py-5 text-center">
          <span className="highlight-badge">our team</span>
          <h2 className="text-4xl font-bold">the professionals behind netcoder</h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-240 mx-auto overflow-hidden my-10">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 320}px)` }}
          >
            {members.map((member, i) => (
              <div key={i} className="w-80 flex-shrink-0 text-center">
                <div className="w-71 h-71 rounded-5xl overflow-hidden mx-auto">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2.5">
                  <h6 className="text-base font-semibold m-0">{member.name}</h6>
                  <p className="text-sm text-gray-400 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-9 h-9 bg-white text-deep-black rounded-full flex items-center justify-center cursor-pointer shadow-md z-10" onClick={prevSlide}>
            <i className="fa-solid fa-less-than text-sm text-orange"></i>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2.5 w-9 h-9 bg-white text-deep-black rounded-full flex items-center justify-center cursor-pointer shadow-md z-10" onClick={nextSlide}>
            <i className="fa-solid fa-greater-than text-sm text-orange"></i>
          </div>
        </div>
      </div>

      {/* Build Team Section */}
      <div className="bg-white rounded-5xl py-22.5 px-0 mt-10" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-out-cubic" data-aos-delay="150">
        <div className="flex flex-col items-center gap-5 py-5 text-center">
          <span className="highlight-badge">Connect</span>
          <h2 className="text-4xl font-bold">work with the team that teaches and builds</h2>
          <h3 className="text-base font-normal w-11/12">
            We empower individuals through education and businesses through
            technology. Choose your path or walk both with us.
          </h3>

          <div className="flex flex-wrap gap-2.5 mt-5">
            <Link to="/">
              <button className="black-bg-button">View Course</button>
            </Link>
            <Link to="/">
              <button className="bg-white text-deep-black border border-deep-black px-15 py-2.5 rounded-2xl cursor-pointer hover:bg-deep-black hover:text-white transition-all duration-300">Start a Project</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
