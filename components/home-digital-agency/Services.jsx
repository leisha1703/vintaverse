// import React from 'react';
// import data from '@/data/services';
// import BouncingLine from '@/components/BouncingLine'; // adjust path if needed

// function Services() {
//   return (
//     <section className="services-wire section-padding">
//       <div className="container">
//         <div className="sec-head mb-80">
//           <div className="row">
//             <div className="col-lg-4">
//               <h6 className="title-bord mb-30">Our Services</h6>
//             </div>
//             <div className="col-lg-8">
//               <div className="text">
//                 <h4>
//                   From the inception of a project to its completion, we employ a
//                   comprehensive and holistic approach that ensures all aspects
//                   and stages are thoughtfully and thoroughly addressed.
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className=" container-fluid rest">
//         <h2 className="fw-600 fz-70 text-u d-rotate wow" >
//               <span className="rotate-text width-86">
//                 Our <span className="fw-200">Process</span>
//               </span>
//             </h2>
//         {data.map((item, i) => (
//           <div key={i} className="service-item">
            
//             <BouncingLine />
// {/* style={{ display: 'flex', alignItems: 'center' }} */}
//             <div className="content-row" >
//               {/* Need to make it flex */}
//               {/* Title in place of icon */}
//               <div className="title" >
//   <h6
//     dangerouslySetInnerHTML={{ __html: item.title }}
//     style={{ margin: 0 }}
//   ></h6>
// </div>
// {/* style={{ marginLeft: '20px' }} */}

//               {/* Description as is */}
//               <div className="text-content" >
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Services;


import React from 'react';
import data from '@/data/services';
import BouncingLine from '@/components/BouncingLine'; // adjust path if needed

function Services() {
  return (
    <section className="services-wire section-padding">
      <div className="container">
        <div className="sec-head mb-5">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-bord mb-3">Our Services</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4>
                  From the inception of a project to its completion, we employ a
                  comprehensive and holistic approach that ensures all aspects
                  and stages are thoughtfully and thoroughly addressed.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid rest">
        <h2 className="fw-600 fz-70 text-u d-rotate wow">
          <span className="rotate-text width-86">
            Our <span className="fw-200">Process</span>
          </span>
        </h2>
        {data.map((item, i) => (
          <div key={i} className="service-item mb-4">
            <BouncingLine />

            <div className="content-row d-flex flex-column flex-md-row align-items-start">
              <div className="title flex-shrink-0">
                <h6
                  className="mb-0"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h6>
              </div>

              <div className="text-content ms-md-3 mt-3 mt-md-0">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
