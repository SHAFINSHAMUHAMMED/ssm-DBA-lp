import React, { useState, useEffect, Suspense } from 'react';
import { debounce } from 'lodash';
import { ClipLoader } from 'react-spinners';
import { PopupProvider, usePopup } from './components/Hoocks/PopupContext';
import './App.css';

// Lazy loading components
const Header = React.lazy(() => import('./components/Header/header'));
const Hero = React.lazy(() => import('./components/Hero/hero'));
const Carousel = React.lazy(() => import('./components/Carousel/ResponsiveCarousel'));
const Leaders = React.lazy(() => import('./components/Leaders/Leaders'));
// const Highlight = React.lazy(() => import('./components/Program_Highlights/program_Highlights'));
// const Powerskills = React.lazy(() => import('./components/Power_skills/power_skills'));
const Reason = React.lazy(() => import('./components/Reason_section/Reason_section'));
const PurposeSection = React.lazy(() => import('./components/purpose_section/purpose_section'));
const WorldOfPossibilities = React.lazy(() => import('./components/World_of_possibilities/world_of_possibilities'));
const CollaborationCarousel = React.lazy(() => import('./components/Collaboration_carousel/collaboration_carousel'));
const MembersCarousel = React.lazy(() => import('./components/members_carousel/members_caarousel'));
// const Brochure = React.lazy(() => import('./components/Brochure_section/Brochure'));
const FromWriting = React.lazy(() => import('./components/From_writing_section/from_writing'));
const AssetSection = React.lazy(() => import('./components/Asset_section/Asset_section'));
const WhyDba = React.lazy(() => import('./components/why_dba/why_dba'));
const ReviewSection = React.lazy(() => import('./components/Reviews/review_section'));
const SuccessfulGraduates = React.lazy(() => import('./components/Successful_graduates/successful_graduates'));
const StepsToUnlockCareer = React.lazy(() => import('./components/Steps_to_unlock_career/steps_to_unlock_career'));
const StudentSupport = React.lazy(() => import('./components/Student_support_guarantee/student_support'));
const IcfCertification = React.lazy(() => import('./components/Icf_certification/icf_certification'));
const Footer = React.lazy(() => import('./components/Footer/footer'));
const Popup = React.lazy(() => import('./components/Popup_page/popup'));
const WhatsappStickyLogo = React.lazy(() => import('./components/WhatsappStickyLogo/StickyWhatsAppButton'))


function App() {

  const { isPopupOpen, togglePopup } = usePopup();
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false);

  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      if (e.clientY <= 50 && !isPopupOpen && !exitIntentTriggered) {
        setExitIntentTriggered(true);
        togglePopup();
      }
    }, 100);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      handleMouseMove.cancel();
    };
  }, [togglePopup, isPopupOpen, exitIntentTriggered]);

  const handleClosePopup = () => {
    togglePopup();
    setExitIntentTriggered(false);
  };

  return (
    <PopupProvider>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ClipLoader color={"#123abc"} size={50} />
          </div>
        }
      >
    <div className="body">
    <Header/>
    <Hero/>
    <WhatsappStickyLogo/>
    <Carousel/>
    <Leaders/>
    {/* <Highlight/> */}
    {/* <Powerskills/> */}
    <Reason/>
    <PurposeSection/>
    <WorldOfPossibilities/>
    <CollaborationCarousel/>
    <MembersCarousel/>
    {/* <Brochure/> */}
    <FromWriting/>
    <AssetSection/>
    <WhyDba/>
    <ReviewSection/>
    <SuccessfulGraduates/>
    <StepsToUnlockCareer/>
    <StudentSupport/>
    <IcfCertification/>
    <Footer/>
    {isPopupOpen && <Popup closePopup={handleClosePopup} />}
        </div>
      </Suspense>
    </PopupProvider>
  )
}

export default App
