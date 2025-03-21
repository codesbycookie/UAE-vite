import React, { useState } from "react";
import "./Contact.css";
import Input from "./components/Input/Input";
import Tab from "../AboutUs/components/Tab/Tab";
import Accordion from "./components/Accordion/Accordion";
import { toast } from "react-toastify";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    student_name: "",
    contact_number: "",
    email: "",
    child_grade: "",
    prefered_subjects: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const checkTheForm = (formData) => {
    let checked = true;
    let errors = {};

    for (let key in formData) {
      if (
        formData[key] === "" ||
        formData[key] === null ||
        formData[key] === false
      ) {
        errors[key] = `${capitalize(key)} is missing.`;
        checked = false;
      }
    }

    if (isNaN(parseInt(formData.contact_number))) {
      toast.error("Phone number must be a number.");
      checked = false;
    }

    if (formData.contact_number.length !== 10) {
      toast.error("Mobile Number should contain 10 numbers.");
      checked = false;
    }

    return { checked, errors };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { checked, errors } = checkTheForm(formData);
    console.log({ checked, errors });
    if (checked) {
      try {
        console.log(formData);
        const response = await axios.post(
          "https://iq-bridge-backend.onrender.com/register",
          formData
        );
        toast.success(response.data.message);
        setFormData({
          student_name: "",
          contact_number: "",
          email: "",
          child_grade: "",
          prefered_subjects: "",
        });
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      console.log(errors);
      Object.values(errors).forEach((err) => toast.error(capitalize(err)));
    }
  };

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1).split("_").join(" ");
  };

  const accordion_data = [
    {
      question: "What makes IQ Bridge different ?",
      answer:
        " Our institution’s elite foundation by IIT-IIM alumni, coupled with expert CBSE-certified tutors, ensures a premium learning experience. We emphasize independent thinking and bridging learning gaps, making education transformative.",
    },
    {
      question: "How are your classes conducted ?",
      answer:
        " Our online sessions use state-of-the-art technology to deliver interactive, live lessons that engage students and promote active learning.",
    },
    {
      question: "How can parents monitor progress ? ",
      answer:
        " We provide detailed progress reports, conduct regular assessments, and offer parent-teacher meetings to keep you informed about your child’s performance.",
    },
    {
      question: "What are the qualifications of your tutors ?",
      answer:
        " Our tutors are experienced educators with expertise in the CBSE curriculum and a passion for teaching.",
    },
    {
      question: "Is there flexibility in scheduling classes ?",
      answer:
         " Yes, we offer flexible class timings to accommodate the diverse schedules of families across the GCC region.",
    },
    {
      question: "Is there a trial class ?",
      answer:
        " Yes, we offer a free demo class to help you experience our teaching methods and see how we can make a difference in your child’s education.",
    },
  ];

  return (
    <div className="contact_container" id="contact_section">
      <h5 className="contact_title">
        <i>Contact Us</i>
      </h5>
      <div className="form_tab row g-0" style={{ minHeight: '700px', display: 'flex', flexWrap: 'wrap' }}>
        <div className="col-lg-5 d-none d-lg-block text-center">
          <img
            src="/imgs/form.png"
            style={{ maxWidth: "100%", height: "82.5%", objectFit: "contain", marginTop: "10px" }}
            alt="Contact Form"
          />
        </div>
        <div className="col-lg-7 col-md-12 col-12">
          <form onSubmit={handleSubmit}>
            <Input label="Your Name" id="student_name" handleInput={handleInputChange} value={formData.student_name} />
            <Input label="Contact Number" id="contact_number" handleInput={handleInputChange} value={formData.contact_number} />
            <Input label="Email" id="email" handleInput={handleInputChange} value={formData.email} />
            <Input label="Child Grade" id="child_grade" handleInput={handleInputChange} value={formData.child_grade} />
            <Input label="Prefered Subjects" id="prefered_subjects" handleInput={handleInputChange} value={formData.prefered_subjects} />
            <div className="d-flex justify-content-center align-items-center">
              <button type="submit" className="form_button fw-bolder">Book A Demo</button>
            </div>
          </form>
        </div>
      </div>
      <div className="faq_section mt-5">
        <Tab title="Frequently Asked Questions (FAQs)" is_title={true} />
        <div className="accordions_tab d-flex flex-wrap justify-content-center align-items-center">
          {accordion_data.map((acc, idx) => (
            <div className="col-md-6 col-12" key={idx}>
              <Accordion question={acc.question} answer={acc.answer} id={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
