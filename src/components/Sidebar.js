import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="sidebar p-8"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
        >
          <button className="close_button" onClick={onClose}>
            <span className="hidden">Close sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="logo_wrapper">
            <img
              className="logo"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="Your Company"
            />
          </div>
          <ul className="navigation">
            <li className="py-3 flex items-center active mb-2">
              <AiOutlineHome />
              <span className="ml-2">Home</span>
            </li>
            <li className="py-3 flex items-center mb-2">
              <BsInfoCircle />
              <span className="ml-2">About</span>
            </li>
            <li className="py-3 flex items-center mb-2">
              <BsBoxes />
              <span className="ml-2">Services</span>
            </li>
            <li className="py-3 flex items-center mb-2">
              <BiPhoneCall />
              <span className="ml-2">Contact</span>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
