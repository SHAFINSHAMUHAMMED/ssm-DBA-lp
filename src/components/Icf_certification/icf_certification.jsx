import React from "react";
import "./icf.css";
import MultiStepForm from "../Form/MultiStepForm";

import target from "../../assets/red-target.webp";
import icf_banner from "../../assets/icf-certification-banner.webp";
import bottom_man from "../../assets/bottom-man.webp";
import bottom_manMob from "../../assets/bottom-man-mob.webp";

function icf_certification() {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  return (
    <div className="icf-certification-main">
      <div className="icf-certification-pattern-1"></div>
      <div className=" icf-certification-pattern-2"></div>

      <div className="icf-top-section">
        <div className="icf-top-content">
          <h3>Entry Requirements</h3>
          <div className="icf-top-points">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="40"
              viewBox="0 0 42 40"
              fill="none"
            >
              <path
                d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                fill="#259D4A"
              />
              <circle
                cx="19.6991"
                cy="19.6991"
                r="18.5104"
                stroke="#0C424A"
                stroke-width="2.37735"
              />
            </svg>
            <p>Hold a Master’s degree or equivalent Post Graduate Diploma</p>
          </div>
          <div className="icf-top-points">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="40"
              viewBox="0 0 42 40"
              fill="none"
            >
              <path
                d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                fill="#259D4A"
              />
              <circle
                cx="19.6991"
                cy="19.6991"
                r="18.5104"
                stroke="#0C424A"
                stroke-width="2.37735"
              />
            </svg>
            <p>
              Have a minimum of 10 years work experience, at least some of which
              should be at a senior level
            </p>
          </div>
          <div className="icf-top-points">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="40"
              viewBox="0 0 42 40"
              fill="none"
            >
              <path
                d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                fill="#259D4A"
              />
              <circle
                cx="19.6991"
                cy="19.6991"
                r="18.5104"
                stroke="#0C424A"
                stroke-width="2.37735"
              />
            </svg>
            <p>Been employed in a leadership/management role</p>
          </div>
        </div>
        <img src={target} alt="" />
      </div>

      <div className="icf-certification-sub">
        <h2>
          Exclusive {currentMonth} Offer{" "}
          <span className="text-[#EE624E]">For The First 30 Registrations</span>
        </h2>
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
        <h1>
          Claim Your <span className="text-[#259D4A]">Free Career</span>{" "}
          <span className="text-[#259D4A]"> Consultation</span> With Our ICF
          Certified Career Coach & Get{" "}
          <span className="wavy-underline-green">Scholarships</span>{" "}
          <span className="wavy-underline-green"> Of Upto 30%</span> <br />
        </h1>
        <img src={icf_banner} alt="" />

        <p className="main-p icf-sub-p">
          Looking to advance your career with coveted Doctorate of Business
          Administration but not sure where to start? Book a free career
          consultation with one of our ICF-certified career coach to help you
          design the career path of your dreams.
        </p>

        <div className="icf-sub-points">
          <h5>
            In your free consultation, we will cover the following topics:
          </h5>
          {/* 1 */}
          <div className="icf-sub-points-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
            >
              <circle cx="13.3429" cy="13.3429" r="13.3429" fill="#259D4A" />
              <path
                d="M13.3395 14.1439C13.0137 14.4691 12.4861 14.4689 12.1606 14.1434L8.17909 10.1619C7.85494 9.83774 7.32993 9.836 7.00365 10.158L6.43345 10.7207C6.1041 11.0457 6.10234 11.5767 6.42954 11.9039L12.1601 17.6345C12.4858 17.9602 13.0138 17.9602 13.3395 17.6345L26.9821 3.99189C27.3077 3.66622 27.3077 3.1382 26.9821 2.81253L26.4267 2.25713C26.1012 1.93166 25.5736 1.93143 25.2478 2.25661L13.3395 14.1439Z"
                fill="white"
              />
            </svg>
            <div>
              <h6>How to Dive Deeper into Advanced Specialization:</h6>
              <p>
                Ever wondered how some professionals become the go-to experts in
                their domain? We’ll unveil the steps to immerse yourself in your
                field, acquiring expertise that’s sought after.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="icf-sub-points-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
            >
              <circle cx="13.3429" cy="13.3429" r="13.3429" fill="#259D4A" />
              <path
                d="M13.3395 14.1439C13.0137 14.4691 12.4861 14.4689 12.1606 14.1434L8.17909 10.1619C7.85494 9.83774 7.32993 9.836 7.00365 10.158L6.43345 10.7207C6.1041 11.0457 6.10234 11.5767 6.42954 11.9039L12.1601 17.6345C12.4858 17.9602 13.0138 17.9602 13.3395 17.6345L26.9821 3.99189C27.3077 3.66622 27.3077 3.1382 26.9821 2.81253L26.4267 2.25713C26.1012 1.93166 25.5736 1.93143 25.2478 2.25661L13.3395 14.1439Z"
                fill="white"
              />
            </svg>
            <div>
              <h6>What Limitless Career Horizons Truly Look Like:</h6>
              <p>
                What if the usual career paths were just the beginning? Discover
                how a distinguished title can open doors to opportunities you
                never imagined, shattering traditional boundaries.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="icf-sub-points-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
            >
              <circle cx="13.3429" cy="13.3429" r="13.3429" fill="#259D4A" />
              <path
                d="M13.3395 14.1439C13.0137 14.4691 12.4861 14.4689 12.1606 14.1434L8.17909 10.1619C7.85494 9.83774 7.32993 9.836 7.00365 10.158L6.43345 10.7207C6.1041 11.0457 6.10234 11.5767 6.42954 11.9039L12.1601 17.6345C12.4858 17.9602 13.0138 17.9602 13.3395 17.6345L26.9821 3.99189C27.3077 3.66622 27.3077 3.1382 26.9821 2.81253L26.4267 2.25713C26.1012 1.93166 25.5736 1.93143 25.2478 2.25661L13.3395 14.1439Z"
                fill="white"
              />
            </svg>
            <div>
              <h6>Crafting Your Personal Brand - Why and How:</h6>
              <p>
                In a world where everyone is vying for attention, how do you
                ensure you’re the one they remember? Learn the art and science
                behind creating a personal brand that resonates and leaves a
                lasting impression in your industry.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="icf-sub-points-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
            >
              <circle cx="13.3429" cy="13.3429" r="13.3429" fill="#259D4A" />
              <path
                d="M13.3395 14.1439C13.0137 14.4691 12.4861 14.4689 12.1606 14.1434L8.17909 10.1619C7.85494 9.83774 7.32993 9.836 7.00365 10.158L6.43345 10.7207C6.1041 11.0457 6.10234 11.5767 6.42954 11.9039L12.1601 17.6345C12.4858 17.9602 13.0138 17.9602 13.3395 17.6345L26.9821 3.99189C27.3077 3.66622 27.3077 3.1382 26.9821 2.81253L26.4267 2.25713C26.1012 1.93166 25.5736 1.93143 25.2478 2.25661L13.3395 14.1439Z"
                fill="white"
              />
            </svg>
            <div>
              <h6>And many more…</h6>
            </div>
          </div>
        </div>
        <p className="main-p icf-sub-p">
          This offer is exclusively for individuals who are committed to
          advancing their careers and achieving their dreams through a DBA.
          Space is limited, so enter your details below to secure your free
          consultation now.
        </p>

        <MultiStepForm />
      </div>
      <div className="bottom-man-image-div">
        <img className="bottom-man-image-1 " src={bottom_man} alt="" />
        <img className="bottom-man-image-2" src={bottom_manMob} alt="" />
      </div>
    </div>
  );
}

export default icf_certification;
