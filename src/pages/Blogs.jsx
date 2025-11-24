import React from 'react'
import Blogimg from "../assets/Images/heroimg.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';

function Blogs() {
    Aos.init();
    return (
        <div className='container'>
            <div className="flex flex-col items-center gap-5 py-5 text-center" data-aos="fade-up" data-aos-delay="150">
                <span className="highlight-badge">Blogs</span>
                <h2 className="text-4xl font-bold">Thinks We Think, learn & share</h2>
                <p className="w-11/12 text-dark-gray">Whether you're looking to kickstart your learning journey or need tailored IT solutions for your business, We're just a message away. Reach out with your queries, ideas, or collaborating requests. We'll get back to you as soon as possible</p>
            </div>

            {/* Blog Container 1 */}
            <div className="grid grid-cols-blogcard gap-5 justify-center mx-auto mt-10">
                <div className="rounded-4xl overflow-hidden">
                    <img src={Blogimg} alt="Blog 1" className="w-full h-193 object-cover rounded-4xl" />
                    <div className="py-3 px-3.75">
                        <h4 className="font-light text-2xl">How can typography be used effectively in branding and social media graphics?</h4>
                        <button className="bg-transparent text-light-gray font-bold text-sm px-0 py-2 mt-2">Read Full Blog</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <div className="rounded-4xl overflow-hidden">
                        <img src={Blogimg} alt="Blog 2" className="w-full h-75 object-cover rounded-4xl" />
                        <div className="py-3 px-3.75">
                            <h4 className="font-light text-2xl">How can typography be used effectively in branding and social media graphics?</h4>
                            <button className="bg-transparent text-light-gray font-bold text-sm px-0 py-2 mt-2">Read Full Blog</button>
                        </div>
                    </div>

                    <div className="rounded-4xl overflow-hidden">
                        <img src={Blogimg} alt="Blog 3" className="w-full h-75 object-cover rounded-4xl" />
                        <div className="py-3 px-3.75">
                            <h4 className="font-light text-2xl">How can typography be used effectively in branding and social media graphics?</h4>
                            <button className="bg-transparent text-light-gray font-bold text-sm px-0 py-2 mt-2">Read Full Blog</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Container 2 */}
            <div className="grid grid-cols-blogcard-reverse gap-5 justify-center mx-auto mt-10">
                <div className="rounded-4xl overflow-hidden">
                    <img src={Blogimg} alt="Blog 1" className="w-full h-193 object-cover rounded-4xl" />
                    <div className="py-3 px-3.75">
                        <h4 className="font-light text-2xl">How can typography be used effectively in branding and social media graphics?</h4>
                        <button className="bg-transparent text-light-gray font-bold text-sm px-0 py-2 mt-2">Read Full Blog</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5">
                    <div className="rounded-4xl overflow-hidden">
                        <img src={Blogimg} alt="Blog 2" className="w-full h-75 object-cover rounded-4xl" />
                        <div className="py-3 px-3.75">
                            <h4 className="font-light text-2xl">How can typography be used effectively in branding and social media graphics?</h4>
                            <button className="bg-transparent text-light-gray font-bold text-sm px-0 py-2 mt-2">Read Full Blog</button>
                        </div>
                    </div>

                    <div className="rounded-4xl overflow-hidden">
                        <img src={Blogimg} alt="Blog 3" className="w-full h-75 object-cover rounded-4xl" />
                        <div className="py-3 px-3.75">
                            <h4 className="font-light text-2xl">How can typography be used effectively in branding and social media graphics?</h4>
                            <button className="bg-transparent text-light-gray font-bold text-sm px-0 py-2 mt-2">Read Full Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
