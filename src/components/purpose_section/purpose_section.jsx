import React from 'react'
import './purpose.css'
import Button from '../Buttons/buttonDark'
import Claim_description from "../Description/claim_description";

import user1 from '../../assets/user-img1.webp'
import quoat1 from '../../assets/svg/quoat-transp.svg'
import quoat2 from '../../assets/svg/quoat-color.svg'

function purpose_section() {
  return (
    <div className='purpose-main'>
        <h2 className='main-head-h2'>A <span className='text-[#259D4A]'> Purpose-Driven </span>Career is Worth Pursuing.</h2>
        <p className='main-p purpose-p'>Pursuing a DBA shows employers you’re a lifelong learner having a purpose to crack 7-8 figure burning business crises using your thesis; proving your expertise.</p>

        <div className='purpose-card'>
           <div className='purpose-text'>
            <h4>“You’re not putting an extra hour to study DBA. it’s something yoiu naturally involve with your career“</h4>
                <h5>-  Saya AK (DBA Operations )</h5>
           </div>
           <div className='user-img-main'>
            <img className='quote1' src={quoat1} alt="" />
           <img className='user-img' src={user1} alt="" />
           <img className='quote2' src={quoat2} alt="" />

           </div>
        </div>
        {/* 2 */}
        <div className='purpose-card2'>
           <div className='user-img-main-2'>
            <img className='quote1-2' src={quoat1} alt="" />
           <img className='user-img2' src={user1} alt="" />
           <img className='quote2-2' src={quoat2} alt="" />
           </div>
           <div className='purpose-text-2'>
            <h4>“I would love to say that it was a beautiful journey... “</h4>
                <h5>-  Laynas,(MBA Operations )</h5>
           </div>
        </div>
        {/* 3 */}
        <div className='purpose-card'>
           <div className='purpose-text'>
            <h4>“Its’s never too late if you are looking to  elevate
your career, expand your network and your industry reputation i urgue you to enroll at learners university “</h4>
                <h5>-  Wynona, (MBA Finance )</h5>
           </div>
           <div className='user-img-main'>
            <img className='quote1' src={quoat1} alt="" />
           <img className='user-img' src={user1} alt="" />
           <img className='quote2' src={quoat2} alt="" />

           </div>
        </div>
        {/* 4 */}
        <div className='purpose-card2'>
           <div className='user-img-main-2'>
            <img className='quote1-2' src={quoat1} alt="" />
           <img className='user-img2' src={user1} alt="" />
           <img className='quote2-2' src={quoat2} alt="" />
           </div>
           <div className='purpose-text-2'>
            <h4>“.....anytime i needed help. I’d easily call them adn they will support me or email me at the soonest. So thank you very much Learner’s university college! “</h4>
                <h5>-  Omatayo , (MBA Finance )</h5>
           </div>
        </div>
        <div className='purpose-bottom text-center'>
        <Button
        duration={2500}
        containerStyle={{ justifyContent: "center" }}
      />
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
      </div>
    </div>
  )
}

export default purpose_section
