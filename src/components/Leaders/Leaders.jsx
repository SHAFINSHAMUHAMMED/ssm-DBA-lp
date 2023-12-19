import React from "react";
import "./leaders.css";
import Marquee from "react-fast-marquee";


import Pattern from "../../assets/svg/leader_pattern.svg";
import iao1 from "../../assets/svg/Accredit-iao-1-icon.svg";
import iao from "../../assets/svg/Accredit-iao-icon.svg";
import eduqua from "../../assets/svg/Accredit-eduqua-icon.svg";
import usrLazio from "../../assets/svg/Accredit-usr-lazio-icon.svg";
import businet from "../../assets/svg/Accredit-businet-icon.svg";
import chea from "../../assets/svg/Accredit-chea-icon.svg";
import xila from "../../assets/svg/Accredit-xila-icon.svg";
import indian from "../../assets/svg/Accredit-indian-icon.svg";
import glob_connections from '../../assets/glob-connections.webp'

function Leaders() {
  return (
    <>
      <div className="leaders-top-main">
        <div className="leaders-top-icon m-auto"></div>
        <h2 className=" main-head-h2">
          SSM - Creating <span className="text-[#259D4A]">Leaders</span> in the
          Middle East.
        </h2>
        <p className="main-p">
          At Swiss School of Business Management our Doctorate in Business
          Administration helps busy directors, new managers and executives add
          professional recognition & multinational contacts earning them a
          fulfilled work-life.
        </p>
        <h6 className="text-center">
          SSM is IACBE-accredited by the international boards.
        </h6>

        <img className="pattern" src={Pattern} alt="" />
      </div>

      <div className="leaders-bottom-main">
        <div className="card-section-main">
          <div className="card-sections">
            <div className="card">
            <img  src={indian} alt="" />
            </div>
            <div className="card">
            <img src={eduqua} alt="" />
            </div>
            <div className="card">
            <img src={usrLazio} alt="" />
            </div>
            <div className="card">
            <img src={businet} alt="" />
            </div>
            <div className="card">
            <img src={chea} alt="" />
            </div>
          </div>
          <div className="card-sections">
          <div className="card">
            <img  src={chea} alt="" />
            </div>
            <div className="card">
            <img src={iao} alt="" />
            </div>
            <div className="card">
            <img src={indian} alt="" />
            </div>
            <div className="card">
            <img src={xila} alt="" />
            </div>
            <div className="card">
            <img src={usrLazio} alt="" />
            </div>
          </div>
          {/* only for tab and mobile */}

          <div className=" acredits-marquee-2 ">
          <Marquee>
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
              <div class="accredit-card">
                <img className="accredit-card-img" src={usrLazio} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={indian} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={businet} alt="" />
              </div>
            </div>
          </Marquee>
          <Marquee direction="right">
            <div class="accredit-cards">
              <div class="accredit-card">
                <img className="accredit-card-img" src={iao1} alt="" />
              </div>
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
                <img className="accredit-card-img" src={businet} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={indian} alt="" />
              </div>
            </div>
          </Marquee>
        </div>

        </div>
        <img className="glob" src={glob_connections} alt="" />
        <p className="main-p">Established in 1981 at St. Gallen, Switzerland. The institution is spread across UAE, Italy, Egypt, Malaysia, Vietnam & Barcelona -  helping students over 50+ countries showcase paramount professionalism & top-tier education.<br /><br />

Our DBA graduates aren’t only theoretically adept but also take action on live projects using applied research to lead businesses worldwide.

</p>
      </div>
    </>
  );
}

export default Leaders;
