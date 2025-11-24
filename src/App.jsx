import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Singlecourse from "./pages/Singlecourse";
// import Contactform from "./pages/Contactform";
function App() {
  return (
    <div className="">
      <Navbar />
      <main className="flex-1 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Singlecourse" element={<Singlecourse />} />

          {/* <Route path="/contactform" element={<Contactform />} />  */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
