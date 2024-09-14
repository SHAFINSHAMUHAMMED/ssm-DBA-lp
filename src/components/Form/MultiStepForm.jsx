import React, { useState,useEffect } from "react";
import './form.css'
import Claim_description from "../Description/claim_description";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
// import { FaPhone } from 'react-icons/fa';
import Lottie from "lottie-react";
import { ClipLoader } from 'react-spinners';
import arrow from "../../assets/arrow.json"
import MultiStepProgressBar from "../Progress_bar/MultiStepProgressBar";
import { parsePhoneNumberFromString } from "libphonenumber-js";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAnimation, setShowAnimation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    // specialization: "",
    jobRole: "",
    // location: "",
    email: "",
    whatsapp: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const validateWhatsAppNumber = (phone) => {
    const phoneNumber = parsePhoneNumberFromString(phone, "AE"); // Assume AE (UAE) is default
    if (!phoneNumber || !phoneNumber.isValid()) {
      return "Invalid WhatsApp number";
    }
    return "";
  };
  

  const validateCurrentStep = () => {
    let errors = {};
    let isValid = true;

    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) {
          errors.name = "Name is required";
          isValid = false;
        }
        break;
      // case 2:
      //   if (!formData.specialization.trim()) {
      //     errors.specialization = "Specialization is required";
      //     isValid = false;
      //   }
      //   break;
      case 2:
        if (!formData.jobRole.trim()) {
          errors.jobRole = "Job role is required";
          isValid = false;
        }
        break;
      // case 4:
      //   if (!formData.location.trim()) {
      //     errors.location = "Location is required";
      //     isValid = false;
      //   }
      //   break;
      case 3:
        if (!formData.email.trim()) {
          errors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Email address is invalid";
          isValid = false;
        }
        break;
        case 4:
    const phoneError = validateWhatsAppNumber(formData.whatsapp);
          if (phoneError) {
            errors.whatsapp = phoneError;
            isValid = false;
          }
    break;
      default:
        break;
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setShowAnimation(currentStep + 1 < 4);
        // console.log(currentStep);
      } else {
        setShowAnimation(false);
        handleSubmit();
      }
    }
  };
  // const specializationOptions = [
  //   "DBA in General",
  //   "DBA in Finance",
  //   "DBA in Global Management & Leadership",
  //   "DBA in Health Safety & Environment ",
  //   "DBA in Healthcare Management ",
  //   "DBA in Human Resources ",
  //   "DBA in Marketing ",
  //   "DBA in Supply Chain Management"
  // ];

  const handleSubmit = async () => {
    setIsLoading(true);

    const dataToSend = {
      ...formData,
      currentUrl: currentUrl
    };

    // Webhook URL
    const webhookUrl =
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTY5MDYzNzA0M2M1MjY0NTUzZDUxMzMi_pc";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Handle success
        console.log("Form data sent successfully");
        window.location.href = "https://offer.learnersuae.com/confirmation/";
      } else {
        console.error("Failed to send form data");
        // Handle error
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      // Handle network error
    }
  };

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className="form-error">{formErrors[fieldName]}</p>;
    }
    return null;
  };

  const renderForm = () => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        if (currentStep < 4) {
          nextStep();
        }else {
          handleSubmit()
        }
      }
    };
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="form-question">
              Let’s take your career higher. But first, what's your name?
            </h2>
            <p>This will only take 10 seconds (or less!)</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type Here..."
              onKeyUp={handleKeyPress}
            />
            {renderError("name")}
          </>
        );
//       case 2:
//         return (
//           <>
//             <h2>
//               Awesome, {formData.name}! Which specialization sparks your
//               interest?
//             </h2>
//             <p>We want to make sure your journey is tailored just for you.</p>
//             <div class="custom-select">
//   <select
//     name="specialization"
//     value={formData.specialization}
//     onChange={handleChange}
//   >
//     <option value="">Select Specialization</option>
//     {specializationOptions.map((option, index) => (
//       <option key={index} value={option}>
//         {option}
//       </option>
//     ))}
//   </select>
// </div>

//             {renderError("specialization")}
//           </>
//         );
      case 2:
        return (
          <>
            <h2>What's your current job role?</h2>
            <p>It's great to know where you're starting from!</p>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              placeholder="Type Here..."
              onKeyUp={handleKeyPress}
            />
            {renderError("jobRole")}
          </>
        );
      // case 4:
      //   return (
      //     <>
      //       <h2>
      //         We'd love to know your location. Where are you currently based?
      //       </h2>
      //       <input
      //         type="text"
      //         name="location"
      //         value={formData.location}
      //         onChange={handleChange}
      //         placeholder="Type Here..."
      //         onKeyUp={handleKeyPress}
      //       />
      //       {renderError("location")}
      //     </>
      //   );
      case 3:
        return (
          <>
            <h2>
              For seamless communication, may we have your preferred email,{" "}
              {formData.name}?
            </h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type Here..."
              onKeyUp={handleKeyPress}
            />
            {renderError("email")}
          </>
        );
        case 4:
        return (
          <>
            <h2>
            And Phone Number?
            </h2>
            <PhoneInput
      country={'ae'}
      excludeCountries={"in,pk"}
      value={formData.whatsapp}
      placeholder={"Type Here..."}
      onKeyDown={handleKeyPress}
      
      onChange={(phone) => setFormData({ ...formData, whatsapp: phone })}
    />
            {renderError("whatsapp")}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="icf-form-main" id="contactForm">
      {/* progress steps */}
      <MultiStepProgressBar currentStep={currentStep} />
       <form className="icf-form" onSubmit={(e) => e.preventDefault()}>
      {renderForm()}
      <div className="button-wrapper">
  <button type="button" onClick={nextStep} >
  {currentStep < 4 && "CONTINUE"}
  {currentStep === 4 && !isLoading && "Claim Your Free Consultation Now"}
    {currentStep < 4 && showAnimation && (
      <Lottie
        animationData={arrow}
        loop={true}
        className="icf-button-lottie"
      />
    )}
    {currentStep === 4 && isLoading && (
    <ClipLoader color={"#ffffff"} size={20} />
  )}
  </button>
</div>

    </form>
      <div className="form-svg-bg" >
        <svg
        className="icf-form-main-svg "
          xmlns="http://www.w3.org/2000/svg"
          width="156"
          height="75"
          viewBox="0 0 76 156"
          fill="none"
        >
          <path
            d="M39.2891 1L39.2891 128"
            stroke="#0B434B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.9297 110.985L39.2003 129.256L57.4709 110.985"
            stroke="#0B434B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="37.7907"
            cy="118.209"
            r="36.7907"
            transform="rotate(-90 37.7907 118.209)"
            stroke="#259D4A"
            stroke-width="2"
          />
        </svg>
      </div>
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
  );
};

export default MultiStepForm;
