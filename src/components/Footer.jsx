"use client";
import React from "react";
import {AiFillInstagram,AiFillLinkedin,AiFillTwitterCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="h-40 bg-orange-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl pt-3">Welcome to work manager</h1>
          <p>
            Where the world manage their work
          </p>
        </div>
        <div className="text-center">
          <h2 className="color-gray-200 text-xl">Important Links</h2>
          <ul className="flex justify-around pt-4">
            <li>
              <a href="#!" className="text-xl">{<AiFillLinkedin />}</a>
            </li>
            <li>
              <a href="#!" className="text-xl">{<AiFillTwitterCircle />}</a>
            </li>
            <li>
              <a href="#!" className="text-xl">{<AiFillInstagram />}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
