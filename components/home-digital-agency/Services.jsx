import React from 'react';
import data from '@/data/services';
import BouncingLine from '@/components/BouncingLine'; // adjust path if needed

function Services() {
  return (
    <section className="services-wire section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-bord mb-30">Our Services</h6>
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

      {/* <div className="container-fluid rest">
        {data.map((item, i) => (
          <div key={i} className="service-item">
            <BouncingLine />

            <div className="content-row">
              <div className="icon">
                <img src={item.img} alt={`Icon ${item.title}`} />
              </div>
              <div className="text-content">
                <h6>{item.title}</h6>
              </div>
                <p>{item.desc}</p>
            </div>

           
          </div>
        ))}
      </div> */}


      <div className="container-fluid rest">
  {data.map((item, i) => (
    <div key={i} className="service-item">
      <BouncingLine />

      <div className="content-row">
        <div className="icon">
          <img src={item.img} alt={`Icon ${item.title}`} />
        </div>

<h6
  className="title"
  dangerouslySetInnerHTML={{ __html: item.title }}
></h6>

        <div className="text-content">
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
