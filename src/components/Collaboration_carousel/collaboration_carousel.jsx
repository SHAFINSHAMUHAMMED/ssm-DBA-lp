import React from 'react'
import './collaboration.css'
import Marquee from "react-fast-marquee";

import iao1 from "../../assets/svg/Accredit-iao-1-icon.svg";
import iao from "../../assets/svg/Accredit-iao-icon.svg";
import eduqua from "../../assets/svg/Accredit-eduqua-icon.svg";
import usrLazio from "../../assets/svg/Accredit-usr-lazio-icon.svg";
import businet from "../../assets/svg/Accredit-businet-icon.svg";
import chea from "../../assets/svg/Accredit-chea-icon.svg";
import xila from "../../assets/svg/Accredit-xila-icon.svg";
import indian from "../../assets/svg/Accredit-indian-icon.svg";
import un from "../../assets/svg/Accredit-un-icon.svg"
import iacbe from "../../assets/svg/Accredit-iacbe-icon.svg"

function collaboration_carousel() {
  return (
    <div class="accredit-main">
        <h2 class=" main-head-h2 accredit-h1 text-center">
        Academic <span className='text-[#259D4A]'> Collaborations </span>
        </h2>
        <div className=" acredits-marquee-1">
          <Marquee speed={200} pauseOnClick="true">
            <div class="accredit-cards">
              <div class="accredit-card">
                <img src={iao1} alt="" />
              </div>
              <div class="accredit-card">
                <img src={iao} alt="" />
              </div>
              <div class="accredit-card">
                <img src={eduqua} alt="" />
              </div>
              <div class="accredit-card">
                <img src={usrLazio} alt="" />
              </div>
              <div class="accredit-card">
                <img src={businet} alt="" />
              </div>

              <div class="accredit-card">
                <img src={chea} alt="" />
              </div>
              <div class="accredit-card">
                <img src={iacbe} alt="" />
              </div>
              <div class="accredit-card">
                <img src={xila} alt="" />
              </div>
              <div class="accredit-card">
                <img src={indian} alt="" />
              </div>
            </div>
          </Marquee>
        </div>

        {/* //only for mobile screens */}
        <div className=" acredits-marquee-2  pb-5 pt-5">
          <Marquee pauseOnClick="true">
            <div class="accredit-cards">
              <div class="accredit-card">
                <img className="accredit-card-img" src={iao1} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={iao} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={eduqua} alt="" />
              </div>
              {/* <div class="accredit-card">
                <img className="accredit-card-img" src={usrLazio} alt="" />
              </div> */}
              <div class="accredit-card">
                <img className="accredit-card-img" src={indian} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={businet} alt="" />
              </div>
            </div>
          </Marquee>
          <Marquee direction="right" pauseOnClick="true">
            <div class="accredit-cards">
              <div class="accredit-card">
                <img className="accredit-card-img" src={usrLazio} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={chea} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={xila} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={iacbe} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={un} alt="" />
              </div>
              {/* <div class="accredit-card">
                <img className="accredit-card-img" src={indian} alt="" />
              </div> */}
            </div>
          </Marquee>
        </div>
      </div>
  )
}

export default collaboration_carousel
