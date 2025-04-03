import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin ,FaEnvelope,FaPhone  } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {

  const navigate = useNavigate();

  const handleNavLinkClick = (path, sectionId) => {
    navigate(`${path}?scrollTo=${sectionId}`);
  }



  return (
    <div className='Footer d-flex flex-column flex-lg-row ps-3 p-lg-0 justify-content-around gap-5 py-5'>
      {/* <div className="About_Us">
        <h6>About Us</h6>
        <a href='#our_process'>How it Works</a>
        <a href='#our_program'>Our Programs</a>
        <a href='#'>Education Partners</a>
      </div> */}

      <div className="Explore">
        <h6>Explore</h6>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/our-programs'>Our Programs</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </div>

      <div className="Support">
        <h6>Privacy and Terms</h6>
        <div>
            <a className="" href="#">Privacy Policy</a>
            <a href="#" className="">Terms & Conditions</a>
        </div>
      </div>

      <div className="Follow_Us">
        <h6>Follow Us</h6>
        <p><FaFacebook/><span className='ms-2'>Facebook </span></p>
        <p><FaInstagram/><span className='ms-2'>Instagram</span> </p>
        <p><FaLinkedin/><span className='ms-2'>LinkedIn </span></p>
      </div>

      <div className="Contact_Us">
        <h6>Contact Us</h6>
        <p className='d-flex gap-2'><strong><FaEnvelope /> </strong><a href="mailto:contact@iqbridge.com" className="m-0">contact@iqbridge.com</a></p>
        <p className='d-flex gap-2'><strong><FaPhone /></strong><a href="tel:+91-9990467544" className="m-0">+91-9990467544</a></p>
      </div>

      {/* <div className="Privacy_and_Policy">
        <h6>Privacy and Policy</h6>
        <p className='d-flex gap-2'><a href="" className="m-0">Terms and Conditions</a></p>
      </div> */}
    </div>
  )
}
    