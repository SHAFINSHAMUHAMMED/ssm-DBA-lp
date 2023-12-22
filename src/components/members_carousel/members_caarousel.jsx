import React, { useRef } from "react";
import "./members_carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";

import member from "../../assets/member.webp";
function members_caarousel() {
  const carouselRef = useRef(null);
  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  // Function to move to the previous slide
  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      centerMode: false,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      centerMode: false,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      centerMode: true
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      centerMode: true
    },
  };
  const membersData = [
    {
      id: 1,
      name: 'Name1',
      designation: 'Designation1',
      image: member
    },
    {
      id: 2,
      name: 'Name2',
      designation: 'Designation2',
      image: member
    },
    {
        id: 3,
        name: 'Name3',
        designation: 'Designation3',
        image: member
      },{
        id: 4,
        name: 'Name4',
        designation: 'Designation4',
        image: member
      },
  ];
  return (
    <>
    <div className="members-main">
      <div className="members-card">
        <h2 className="main-head-h2">Our Industry Veteran Faculty Members</h2>
      </div>
      <div className="members-carousel">
        <button onClick={goToPrev} className="member-prev-button">
        <svg
        className=""
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 59 59"
            fill="none"
          >                                                 
            <circle
              cx="29.5"
              cy="29.5"
              r="29.5"
              transform="matrix(-1 0 0 1 59 0)"
              fill="white"
            />
            <path
              d="M36.8085 42.7682L23.4428 29.4025L36.8085 16.0368C36.8795 15.9658 36.9416 15.8893 36.9948 15.8087C37.1186 15.6212 37.1944 15.4114 37.2222 15.1965C37.2303 15.1342 37.2344 15.0714 37.2344 15.0087C37.2344 14.6811 37.1244 14.3535 36.9043 14.0861C36.8744 14.0498 36.8425 14.0145 36.8085 13.9805C36.7819 13.9539 36.7545 13.9286 36.7264 13.9044C36.1552 13.414 35.2935 13.4394 34.7523 13.9805L20.3586 28.3742C20.0858 28.647 19.9327 29.0169 19.9327 29.4025C19.9327 29.7881 20.0858 30.1578 20.3586 30.4306L34.7523 44.8243C34.8232 44.8953 34.8997 44.9575 34.9804 45.0106C35.5447 45.3832 36.3117 45.3212 36.8085 44.8243C36.8795 44.7533 36.9416 44.6768 36.9948 44.5963C37.3675 44.0318 37.3054 43.2648 36.8085 42.7682Z"
              fill="#259D4A"
            />
          </svg>
        </button>
        <Carousel
          responsive={responsive}
          centerMode={true}
          ref={carouselRef}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Adjust this for delay between scrolls
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out" // Smooth transition for 300ms
          transitionDuration={300} // Transition duration of 300ms
          customLeftArrow={<></>}
          customRightArrow={<></>}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          useCSS={true}
        >
         {membersData.map(member => (
        <div key={member.id} className="carousel-item">
          <img className="carousel-img" src={member.image} alt={member.name} />
          <div className="carousel-caption">
            <h4>{member.name}</h4>
            <p>{member.designation}</p>
          </div>
        </div>
      ))}
        </Carousel>
        <button onClick={goToNext} className="member-next-button">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 59 59"
            fill="none"
          >
            <circle cx="29.5" cy="29.5" r="29.5" fill="white" />
            <path
              d="M23.5549 41.1888L35.3294 29.4143L23.5549 17.6397C23.4923 17.5772 23.4376 17.5098 23.3907 17.4388C23.2817 17.2737 23.2149 17.0888 23.1904 16.8995C23.1832 16.8446 23.1797 16.7893 23.1797 16.734C23.1797 16.4454 23.2766 16.1568 23.4704 15.9213C23.4968 15.8893 23.5249 15.8582 23.5549 15.8283C23.5783 15.8048 23.6024 15.7825 23.6272 15.7612C24.1304 15.3292 24.8895 15.3515 25.3663 15.8283L38.0464 28.5085C38.2867 28.7488 38.4217 29.0746 38.4217 29.4143C38.4217 29.754 38.2867 30.0797 38.0464 30.32L25.3663 43.0002C25.3038 43.0627 25.2364 43.1175 25.1654 43.1643C24.6682 43.4925 23.9926 43.4379 23.5549 43.0002C23.4923 42.9377 23.4376 42.8702 23.3907 42.7993C23.0625 42.302 23.1172 41.6264 23.5549 41.1888Z"
              fill="#259D4A"
            />
          </svg>
        </button>
      </div>
     
    </div>
    <div className="members-button">
    <ButtonDark duration={2500} containerStyle={{ justifyContent: "center" }} />
        <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
    
    </>
  );
}

export default members_caarousel;
