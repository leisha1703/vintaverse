'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import VantaBackground from './VantaBackground';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );
    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* VantaBackground particles - behind the content */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,       // particles behind content
          pointerEvents: 'none', // so it doesn't block mouse interactions
        }}
      >
        <VantaBackground />
      </div>
      {/* Header content - above particles */}
      <div
        className="header main-header valign"
        style={{
          position: 'relative',
          zIndex: 10,
          background: 'transparent',
        }}
      >
        {/* Content bilkul jaisa hai, koi movement ya displacement nahi */}
        <div className="container ontop">
          {/* rest of your content unchanged */}
          <div className="row">
            <div className="col-lg-11">
              <div className="caption">
                <h1>Your creative partner in the</h1>
                <div className="d-flex align-items-end">
                  <div>
                    <h1 className="nowrap">
                      <span className="main-color">digital</span> world.
                    </h1>
                  </div>
                  <div>
                    <div className="text ml-30">
                      <p>
                        Vintaverse is a creative digital agency specializing in branding, UI/UX design,  mobile and web development.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     <div className="row mt-80">
  <div className="col-lg-6 order-md-2">
    <div
      className="icon-img bounce-arrow"
      style={{ cursor: 'pointer' }}
      onClick={() => {
        const nextSection = document.getElementById('mainHomeAboutUs');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <img src="/assets/imgs/icon-img/Union.png" alt="" />
    </div>
  </div>
  <div className="col-lg-6 d-flex justify-content-end order-md-1">
    <div className="info">
      <h2 className="mb-10">7k <span style={{color:'#fd5b38'}}>+</span></h2>
      <h6>
        Projects completed <br />
        <span className="main-color">successfully</span>
      </h6>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
export default Header;



// 'use client';
// import React, { useEffect, useLayoutEffect } from 'react';
// import { gsap } from 'gsap';
// import loadBackgroudImages from '@/common/loadBackgroudImages';

// function Header() {
//   useLayoutEffect(() => {
//     const tl = gsap.timeline();
//     tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
//     tl.fromTo(
//       '.header .container',
//       { opacity: 0, translateY: 40 },
//       { opacity: 1, translateY: 0 },
//       '-=0'
//     );

//     return () => tl.kill();
//   }, []);

//   useEffect(() => {
//     loadBackgroudImages();
//   }, []);

//   const scrollToIntro = () => {
//     const section = document.getElementById('mainHomeAboutUs');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div
//       className="header main-header bg-img valign"
//       data-background="/assets/imgs/background/bggg.png"
//       data-overlay-dark="7"
//     >
//       <div className="container ontop">
//         <div className="row">
//           <div className="col-lg-11">
//             <div className="caption">
//               <h1>Your creative partner in the</h1>
//               <div className="d-flex align-items-end">
//                 <div>
//                   <h1 className="nowrap">
//                     <span className="main-color">digital</span> world.
//                   </h1>
//                 </div>
//                 <div>
//                   <div className="text ml-30">
//                     <p>
//                       Vintaverse is a creative digital agency specializing in branding, UI/UX design, mobile and web development.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Arrow + Info Row */}
//         <div className="row mt-80">
//           <div className="col-lg-6 order-md-2">
//             <div className="icon-img" onClick={scrollToIntro}>
//               <img
//                 src="/assets/imgs/icon-img/arrow-down-big.png"
//                 alt="Scroll down"
//                 className="bounce-arrow"
//               />
//             </div>
//           </div>
//           <div className="col-lg-6 d-flex justify-content-end order-md-1">
//             <div className="info">
//               <h2 className="mb-10">7k +</h2>
//               <h6>
//                 Projects completed <br />
//                 <span className="main-color">successfully</span>
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


