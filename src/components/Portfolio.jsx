import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="py-10">
      <div className="grid grid-cols-auto-fit gap-6.25 justify-center">
        <div className="w-full py-57.5 px-10 bg-no-repeat bg-center bg-cover text-white rounded-3xl flex flex-col justify-start">
          <h3 className="text-2xl mb-2">Mudroots Pottery Studio</h3>
          <p className="text-sm leading-relaxed">
            We designed a responsive minimal website and branding kit for a
            pottery studio.
          </p>
        </div>

        <div className="w-full py-57.5 px-10 bg-no-repeat bg-center bg-cover text-white rounded-3xl flex flex-col justify-start">
          <h3 className="text-2xl mb-2">Mudroots Pottery Studio</h3>
          <p className="text-sm leading-relaxed">
            We designed a responsive minimal website and branding kit for a
            pottery studio.
          </p>
        </div>
      </div>

      <Link to="/">
        <button className="black-bg-button block mx-auto mt-5">
          View Our Portfolio
        </button>
      </Link>
    </div>
  );
}

export default Portfolio;
