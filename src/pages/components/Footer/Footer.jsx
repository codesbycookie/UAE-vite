import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin ,FaEnvelope,FaPhone  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { content } from '../../../utils/Content.jsx';

export default function Footer() {

  const {social_media} = content;

  return (
    <div className='footer d-flex flex-column flex-lg-row ps-3 p-lg-0 justify-content-around gap-5 py-5'>


      <div className="explore">
        <h6>Explore</h6>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/our-programs'>Our Programs</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </div>

      <div className="support">
        <h6>Privacy and Terms</h6>
        <div>
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>

        </div>
      </div>

      <div className="follow_us">
        <h6>Follow Us</h6>
        <a href={social_media.facebook} className='ms-0'><p><FaFacebook/><span className='ms-2'>Facebook </span></p>
        </a>
        <a href={social_media.instagram} className='ms-0'><p><FaInstagram/><span className='ms-2'>Instagram</span> </p>
        </a>
        
        <a href={social_media.linkedin} className='ms-0'> <p><FaLinkedin/><span className='ms-2'>LinkedIn </span></p>
        </a>
      </div>

      <div className="contact_us">
        <h6>Contact Us</h6>
        <p className='d-flex gap-2'><strong><FaEnvelope /> </strong><a href={`mailto:${social_media.email}`} className="m-0">{social_media.email}</a></p>
        <p className='d-flex gap-2'><strong><FaPhone /></strong><a href={`tel:${social_media.phone_number}`} className="m-0">{social_media.phone_number}</a></p>
      </div>

    </div>
  )
}
    