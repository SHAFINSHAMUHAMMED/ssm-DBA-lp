import React from 'react'
import './from_writing.css'
import { Link, Element } from "react-scroll";

import arrow from '../../assets/svg/arrow-icon.svg'
import img1 from '../../assets/from-section-1.webp'
import img2 from '../../assets/from-section-2.webp'
import svgIcon from '../../assets/svg/from_writing_svg.svg'
function from_writing() {
  return (
    <div className="from-writing-main">
      <div className="from-writing-inner">
        <div className=" from-writing-inner-1">
            <div className='headding-section'>
            <h2 className='main-head-h2'>
          From <br /> Writing Publishing.
          </h2>
          <img className='arrow-icon' src={arrow} alt="" />
            </div>
         <div className='from-writing-img-main2'>
         <img
            className="from-writing-img-1"
            src={img2}
            alt=""
          />
         {/* <img className='from-writing-svg' src={svgIcon} alt="" /> */}
         </div>
          
          <p className="main-p from-writing-p">
          The responsibility is much higher. And uncertainty arises during your research, which’s why… 
          </p>
          <p className="main-p from-writing-p">
          We support every step of your thesis, with our VIVA-approved research tools & templates and 1:1 personal supervision. Which helps you publish across renowned business journals with ease.
          </p>
          <p className="main-p from-writing-p">
          At SSM, you’ll get in touch with our deemed faculty professors.
          </p>
          <p className="main-p from-writing-p">
          Where you’ll make lifelong friends sharing decades of experiences, helping your dissertation avoid failure.
          </p>
          {/* //this button only here others are components */}
          <div id="NewRootRoot" className="flex flex-row w-full darkButton2 from-writing-button">
            <Link
              to="contactForm"
              // spy={true}
              smooth={true}
              duration={2800}
              delay={200}
              className="light-effect-button button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer"
            >
              Claim Your Free Consultation Now
            </Link>
          </div>
          <p className="claim-description-2">
            Claim Your Free Consultation With Our Career Coach & Get
            Scholarships Of Upto 30% <br />
          </p>
        </div>
        <div className=' from-writing-img-main'>
        <img className='from-writing-svg' src={svgIcon} alt="" />
        <img className=" from-writing-img-2" src={img1} alt="" />
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default from_writing
