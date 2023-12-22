import React from 'react'
import './brochure.css'
import Popup from "../Popup_page/popup";
import { usePopup } from "../Hoocks/PopupContext";

import swisMba from "../../assets/swiss-mba.webp";
import swisMbaTab from "../../assets/swiss-mba-tab.webp";

function Brochure() {
  const { isPopupOpen, togglePopup } = usePopup();

  return (
    <div className="world-of-possibilities-brochure ">
        <div className="world-of-possibilities-brochure-left">
          <h2 className='main-head-h2'>
            Get Instant Access To &nbsp;
            <span className="wavy-underline-green">The</span><span className="wavy-underline-green"> SSM DBA </span><span className="wavy-underline-green">Brochure</span>
          </h2>
          <p className='main-p possibilities-p'>
            Get an inside look at our prestigious programs, faculty, and the
            unique benefits that set us apart in the business education
            landscape. Your first step toward a transformative DBA experience
            starts here.
          </p>
          <div className="flex gap-3 sm:gap-6 items-center brochure-dwnld ">
          <a 
          onClick={togglePopup}
          className="flex gap-3 sm:gap-6 items-center cursor-pointer">
            <h3 className="underline">Download Free Brochure Now</h3>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="30"
              viewBox="0 0 35 30"
              fill="none"
            >
              <path
                d="M16.0404 23.778C16.0882 23.8281 16.6674 24.3469 17.3778 24.3469C18.0882 24.3469 18.6113 23.8866 18.7224 23.7704L25.9089 16.7046C26.6238 16.0016 26.6238 14.8618 25.9096 14.1588C25.1947 13.4552 24.0348 13.4559 23.3205 14.1582L19.2087 18.2007V1.80026C19.2087 0.806468 18.3885 0 17.3778 0C16.3671 0 15.547 0.806468 15.547 1.80026V18.2L11.4364 14.1582C10.7215 13.4559 9.56228 13.4559 8.84673 14.1582C8.13182 14.8612 8.13182 16.001 8.84673 16.7046L16.0404 23.778Z"
                fill="#64FF94"
              />
              <path
                d="M34.747 19.8729V19.7256H34.7321C34.6534 19.0505 34.0773 18.5254 33.3708 18.5254C32.6643 18.5254 32.0882 19.0505 32.0101 19.7256H32.0017V19.8056C32.0004 19.8303 31.9939 19.8538 31.9939 19.8792C31.9939 19.9046 32.0004 19.9281 32.0017 19.9529V23.2708C32.0017 25.1035 30.9322 26.6516 29.6658 26.6516H5.08961C3.82318 26.6516 2.75308 25.1035 2.75308 23.2708V19.7256H2.73823C2.65945 19.0505 2.08339 18.5254 1.37687 18.5254C0.67036 18.5254 0.0949494 19.0505 0.0161609 19.7256H0.00776513V19.8024C0.00647352 19.8284 0 19.8532 0 19.8792C0 19.9053 0.00647352 19.93 0.00776513 19.9561V23.2708C0.00776513 26.6237 2.28811 29.3517 5.09026 29.3517H29.6664C32.4686 29.3517 34.7483 26.6237 34.7483 23.2708V19.8856C34.7483 19.8837 34.7489 19.8811 34.7489 19.8792C34.7489 19.8773 34.747 19.8748 34.747 19.8729Z"
                fill="#64FF94"
              />
            </svg>
            </a>
          </div>
        </div>
        <img className='swiss-img-1' src={swisMba} alt="" />
        <img className='swiss-img-2' src={swisMbaTab} alt="" />
      {isPopupOpen && <Popup closePopup={togglePopup} />}
      </div>
  )
}

export default Brochure
