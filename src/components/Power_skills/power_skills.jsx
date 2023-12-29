// import React from "react";
// import "./poweskil.css";
// import ButtonDark from "../Buttons/buttonDark";
// import Claim_description from "../Description/claim_description";

// import prof1 from "../../assets/prof1.webp";
// import prof2 from "../../assets/prof2.webp";
// import prof3 from "../../assets/prof3.webp";
// import prof4 from "../../assets/prof4.webp";
// import prof5 from "../../assets/prof5.webp";
// import prof6 from "../../assets/prof6.webp";
// import star_lg from '../../assets/svg/star-large-icon.svg'

// function power_skills() {
//   return (
//     <div className="power-skill-main">
//       <h2 className="main-head-h2">
//         Elevate Your Career: <span className="underline-blue">Six Game-Changing Reasons </span>to Invest in DBA
//       </h2>

//       <div className="power-skill-cards">
//         {/* 1 */}

//         <div className="power-skill-card">
//           <svg
//             className="power-skill-card-icon"
//             width="85"
//             height="85"
//             viewBox="0 0 85 85"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
//             <path
//               d="M42.3313 58.8516V32.1016C40.8114 33.1655 37.6197 33.9761 34.3266 34.0774V29.3151C38.9369 29.1631 41.5714 27.4913 42.5846 24.0968H48.4109V58.8516H42.3313Z"
//               fill="white"
//             />
//           </svg>

//           <img className="power-skill-card-img" src={prof1} alt="" />
//           <div className="power-skill-card-main">
//             <div className="flex items-center">
//               <h3>Super Specialization:</h3>
//             </div>
//             <p>
//             Gain in-depth industry expertise, establishing yourself as a leading specialist in your domain.

//             </p>
//           </div>
//         </div>
//         {/* 2 */}
//         <div className="power-skill-card">
//           <svg
//             className="power-skill-card-icon"
//             width="85"
//             height="86"
//             viewBox="0 0 85 86"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="42.212" cy="43.1007" r="42.212" fill="#259D4A" />
//             <path
//               d="M28.8656 58.8281V53.7112L45.6351 41.9574C47.7629 40.4882 49.1815 37.6004 49.1815 34.7633C49.1815 31.1662 46.3443 28.7344 42.038 28.7344C37.7316 28.7344 34.8945 31.9768 34.8945 36.8911H29.1696C29.1696 28.785 34.3372 23.3641 42.038 23.3641C49.9921 23.3641 55.261 27.9238 55.261 34.7633C55.261 39.3229 52.8292 43.9839 49.1815 46.4157L39.0489 53.4579H55.2103V58.8281H28.8656Z"
//               fill="white"
//             />
//           </svg>

//           <img className="power-skill-card-img" src={prof2} alt="" />
//           <div className="power-skill-card-main">
//             <div className="flex items-center">
//               <h3>Limitless Career Horizons:</h3>
//             </div>
//             <p>
//             Propel your career to top executive roles such as CEO, CFO, and Director with a DBA.

//             </p>
//           </div>
//         </div>
//         {/* 3 */}
//         <div className="power-skill-card">
//           <svg
//             className="power-skill-card-icon"
//             width="85"
//             height="85"
//             viewBox="0 0 85 85"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
//             <path
//               d="M41.6834 59.5608C33.6786 59.5608 28.359 55.1532 28.359 48.567H34.1852C34.1852 51.9614 37.1744 54.1906 41.6834 54.1906C46.547 54.1906 49.7894 52.0121 49.7894 48.7697C49.7894 45.5272 46.547 43.3487 41.6834 43.3487H38.4409V37.9785H41.6834C45.8884 37.9785 48.7255 36.1546 48.7255 33.4188C48.7255 30.6323 45.8884 28.7578 41.6834 28.7578C37.6303 28.7578 34.9452 31.3416 34.9452 35.2427H29.2203C29.2203 28.1499 34.1852 23.3876 41.6834 23.3876C49.5361 23.3876 54.7544 27.0859 54.7544 32.6589C54.7544 35.5466 52.6772 38.6877 49.5868 40.4609C53.2851 42.0315 55.717 45.6286 55.717 49.4283C55.717 55.5078 50.0934 59.5608 41.6834 59.5608Z"
//               fill="white"
//             />
//           </svg>

//           <img className="power-skill-card-img" src={prof3} alt="" />
//           <div className="power-skill-card-main">
//             <div className="flex items-center">
//               <h3>Craft Your Personal Brand:</h3>
//             </div>
//             <p>
//             Enhance your professional presence by adding a 'Dr' title, elevating your authority and reputation
//             </p>
//           </div>
//         </div>
//         {/* 4 */}
//         <div className="power-skill-card">
//           <svg
//             className="power-skill-card-icon"
//             width="85"
//             height="85"
//             viewBox="0 0 85 85"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
//             <path
//               d="M42.9028 58.8516V49.9856H26.5387V45.7805L41.5349 24.0968H48.9824V44.6153H53.8967V49.9856H48.9824V58.8516H42.9028ZM33.8848 44.6153H42.9028V30.683L33.8848 44.6153Z"
//               fill="white"
//             />
//           </svg>

//           <img className="power-skill-card-img" src={prof4} alt="" />
//           <div className="power-skill-card-main">
//             <div className="flex items-center">
//               <h3>Consult on a Global Scale:</h3>
//             </div>
//             <p>
//             Leverage your DBA to consult with top global companies, becoming an internationally recognized expert.

//             </p>
//           </div>
//         </div>
//         {/* 5 */}
//         <div className="power-skill-card">
//           <svg
//             className="power-skill-card-icon"
//             width="85"
//             height="85"
//             viewBox="0 0 85 85"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
//             <path
//               d="M42.9481 59.5608C34.7408 59.5608 29.2692 55.0012 29.2692 46.8951H34.8421C35.0447 51.2521 38.1858 54.1906 42.7962 54.1906C46.6972 54.1906 50.5982 51.7588 50.5982 46.7431C50.5982 42.1328 47.2038 39.093 42.0869 39.093C39.1991 39.093 36.514 40.6129 35.2981 42.9434L29.7758 42.2341L32.005 24.0968H54.7019V29.4671H36.9699L36.1087 36.2559C38.1352 34.736 41.1243 33.7228 43.5561 33.7228C51.4088 33.7228 56.6271 38.8904 56.6271 46.6925C56.6271 54.3932 51.1555 59.5608 42.9481 59.5608Z"
//               fill="white"
//             />
//           </svg>

//           <img className="power-skill-card-img" src={prof5} alt="" />
//           <div className="power-skill-card-main">
//             <div className="flex items-center">
//               <h3>Educate & Inspire:</h3>
//             </div>
//             <p>
//             Utilize your knowledge to educate, inspiring the next generation of business leaders and innovators.

//             </p>
//           </div>
//         </div>
//         {/* 6 */}
//         <div className="power-skill-card">
//           <svg
//             className="power-skill-card-icon"
//             width="85"
//             height="85"
//             viewBox="0 0 85 85"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="42.212" cy="42.212" r="42.212" fill="#259D4A" />
//             <path
//               d="M42.038 59.5608C33.8306 59.5608 28.359 52.3161 28.359 41.4742C28.359 30.6323 33.8306 23.3876 42.0887 23.3876C48.6242 23.3876 53.2345 26.782 54.8557 32.7602H49.0295C48.1175 30.1764 45.6351 28.7578 42.0887 28.7578C37.8836 28.7578 34.8945 32.4562 34.5906 38.0291C36.2624 35.2933 39.7075 33.4695 43.2539 33.4695C50.752 33.5201 55.717 38.7384 55.717 46.4898C55.717 54.3426 50.2454 59.5608 42.038 59.5608ZM42.3926 38.7891C38.137 38.7891 35.2998 41.8795 35.2998 46.5405C35.2998 51.1508 38.137 54.2412 42.342 54.2412C46.699 54.2412 49.6374 51.1508 49.6374 46.4898C49.6374 41.8795 46.7496 38.7891 42.3926 38.7891Z"
//               fill="white"
//             />
//           </svg>

//           <img className="power-skill-card-img" src={prof6} alt="" />
//           <div className="power-skill-card-main">
//             <div className="flex items-center">
//               <h3>Entrepreneurship :</h3>
//             </div>
//             <p>
//             Harness the advanced skills and insights from your DBA to launch and flourish in your own business venture.

//             </p>
//           </div>
//         </div>
//         <img
//           className="power-skill-star"
//           src={star_lg}
//           alt=""
//         />
//       </div>
//       <ButtonDark
//         duration={2500}
//         containerStyle={{ justifyContent: "center" }}
//       />
//       <Claim_description color="rgba(11, 67, 75, 0.79)" />
//     </div>
//   );
// }

// export default power_skills;
