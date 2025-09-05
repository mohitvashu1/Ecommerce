import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Brand Info */}
        <div>
          <img
            className="mb-5 w-32"
            src="https://i.ibb.co/spk2bZNf/Screenshot-2025-09-04-140749-removebg-preview.png"
            alt="logo"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Urban is a modern fashion brand built for everyday lifestyles.
            We design collections that combine comfort, quality, and timeless style.
            From best sellers to new arrivals, Urban continues to
            inspire confidence and individuality with fashion that truly fits today’s generation.
          </p>
        </div>

        {/* Company Navigation */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 748***56</li>
            <li>mohitchoubey03@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 © Mohit - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
