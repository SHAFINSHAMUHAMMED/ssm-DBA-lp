import React from 'react'
import './why_dba.css'

import key from '../../assets/svg/Dba-key-icon.svg'
function why_dba() {
  return (
    <div className='why-dba-main'>
      <h2 className='main-head-h2'> Why DBA Leadership Program Always <span className='wavy-underline-green'> <span className='text-[#259D4A]'> Worth </span> <span className='text-[#108FA1]'> 3x </span> </span> <span className='text-[#259D4A]'><span className='wavy-underline-green'>Higher</span> Than Most Phds</span>? </h2>
      <div className='why-dba-top-section'>
        <p>hances are, you're one of few senior professionals trying to break free from hustle culture and have a balanced work-life. <br /><br />
        And DBA could be your next career milestone helping you earn that C-suite role; CEO, CFO & CTO. <br /><br />
        The title 'Dr.' puts you ahead of 100 MBA grads applying in your field. <br /><br />
        But the same title can be earned via PhD…</p>
        <img src={key} alt="" />
      </div>
      <div className='why-dba-mid'>
        <h5>
        So here are <span className='h5Span text-[#9CFFBA]'>5 reasons</span> to keep in mind before choosing a DBA leadership program over PhD: 
        </h5>
      </div>
      <div className='why-arrow-main'>
        <svg
        className="why-arrow-svg "
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
    </div>
  )
}

export default why_dba
