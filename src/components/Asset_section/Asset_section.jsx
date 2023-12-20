import React from 'react'
import './asset_section.css'
import { Link, Element } from "react-scroll";

import img1 from '../../assets/asset_section-img.webp'
import img2 from '../../assets/asset_section-img-mob.webp'
import circle from '../../assets/svg/Circle.svg'
import quote from '../../assets/svg/quote-green.svg'
function Asset_section() {
  return (
    <div className="asset-main">
      <div className="asset-inner">
      <div className=' asset-img-main'>
        <img className=" asset-img-2" src={img1} alt="" />
        <div className='asset-img-quote'>
            <h4>Take Control of Your Future: Say goodbye to waiting for recognition</h4>
            <img src={quote} alt="" />
        </div>
        </div>
        <div className=" asset-inner-1">
            <div className='asset-headding-section'>
            <h2 className='main-head-h2'>
            <span className='text-[#259D4A]'> You’re the Greatest Asset </span> to Invest in,<br /><br /> Here’s Why;
          </h2>
          <img className='circle-icon' src={circle} alt="" />
            </div>
         <div className='asset-img-main2'>
         <img
            className="asset-img-1"
            src={img2}
            alt=""
          />
           <div className='asset-img-quote'>
            <h4>Take Control of Your Future: Say goodbye to waiting for recognition</h4>
            <img src={quote} alt="" />
        </div>
         </div>
          
          <p className="main-p asset-p">
          The decision to pursue a DBA isn’t just academics, but an investment in your identity & career.
          </p>
          <p className="main-p asset-p">
          Gone are the days waiting for your company to give you deserved recognition. Our leadership accelerator is a roadmap towards higher-level consulting & management roles in ANY industry without losing family time.
          </p>
          <p className="main-p asset-p">
          The benefits of the DBA leadership program are far beyond personal fulfilment. 
          </p>
          {/* //this button only here others are components */}
          <div id="NewRootRoot" className="flex flex-row w-full darkButton2 asset-button">
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
          <p className="claim-description-2 asset-description">
            Claim Your Free Consultation With Our Career Coach & Get
            Scholarships Of Upto 30% <br />
          </p>
        </div>
        
      </div>
      {/* </div> */}
    </div>
  )
}

export default Asset_section
