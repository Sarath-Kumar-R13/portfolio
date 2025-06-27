import React from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact_section'>
      <h2 className='section_title' style={{marginTop:70}}>
        GET IN <span>TOUCH</span>
      </h2>

      <div className='contact_container container grid'>
        {/* Contact Info */}
        <div className='contact_data'>
          <h3 className='contact_title'>DON'T BE SHY !</h3>
          <p className='contact_description'>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className='contact_info'>
            <div className='info_item'>
              <FaEnvelopeOpen className='info_icon' />
              <div>
                <span className='info_title'>Email me</span><br />
                <h4 className='info_desc'>sarathkumarr154@gmail.com</h4>
              </div>
            </div>

            <div className='info_item'>
              <FaPhoneSquareAlt className='info_icon' />
              <div>
                <span className='info_title'>Call me</span><br />
                <h4 className='info_desc'>+91-8281822573, +91-8157952857</h4>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="contact_socials">
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="contact_social-link">
              <FaLinkedinIn />
            </a>

            {/* <a href="" className="contact_social-link">
              <FaGithub />
            </a> */}
          </div>
        </div>



        {/* Contact Form */}
        <form className='contact_form'>
          <div className='form_input-group'>
            <div className='form_input-div'>
              <input type='text' placeholder='Your Name' className='form_control' />
            </div>

            <div className='form_input-div'>
              <input type='email' placeholder='Your Email' className='form_control' />
            </div>

            <div className='form_input-div'>
              <input type='text' placeholder='Your Subject' className='form_control' />
            </div>

            <div className='form_input-div textarea_div'>
              <textarea placeholder='Your Message' className='form_control textarea'></textarea>
            </div>
          </div>

          <button className='button' >Send Message <span className='button_icon conatct_button-icon'> <FiSend /> </span></button>

        </form>
      </div>
    </section>
  );
};

export default Contact;