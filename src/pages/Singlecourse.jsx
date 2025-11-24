import React from 'react'

function Singlecourse() {
  return (
    <div className="container">

      <div className="flex flex-col items-center gap-5 mt-5 uppercase text-center py-7.5">
        <h1 className="text-5xl font-bold">GRAPHIC DESIGN</h1>
        <p className="w-10/12 text-dark-gray">
          Foundation in graphic design entails learning the core principles and techniques essential for creating visually appealing and effective designs. This includes understanding concepts like typography, color theory, layout composition, and visual hierarchy, which serve as the building blocks for creating impactful graphic designs across various mediums.
        </p>
      </div>

      {/* Why Enroll */}
      <div className="flex bg-white rounded-5xl py-15 px-10 my-10 leading-7.5">
        <div className="flex-2/5 py-5 px-5">
          <span className="highlight-badge">Who Can Enroll</span>
          <h2 className="text-4xl font-bold py-5 w-7/20">who should join this course?</h2>
        </div>

        <div className="flex-3/5">
          <p className="text-dark-gray leading-relaxed mb-5">Whether you're a student from fields like BCA, BTech, or Polytechnic aiming to build creative expertise, a beginner eager to dive into the world of design, or a working professional looking to strengthen your visual communication skills—this course is designed for you. It also suits entrepreneurs, marketers, and freelancers who want to independently craft impactful brand visuals or those preparing a strong portfolio to pursue higher opportunities in the creative industry.</p>
          <button className='black-bg-button'>Enroll Now</button>
        </div>
      </div>

    </div>
  )
}

export default Singlecourse
