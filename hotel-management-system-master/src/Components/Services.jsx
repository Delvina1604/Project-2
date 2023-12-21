import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

const Services = () => {
    const service = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free CockTail",
          info: "It is very important for the customer to pay attention to the adipiscing process. It should be matched",
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info: "It is very important for the customer to pay attention to the adipiscing process. It should be matched",
        },
        {
          icon: <FaShuttleVan />,
          title: "Free Shuttle",
          info: "It is very important for the customer to pay attention to the adipiscing process. It should be matched",
        },
        {
          icon: <FaBeer />,
          title: "Unlimited Beer",
          info: "Enjoy the night with delight!!   Have a good time with us!! Happy Stay,enjoy the day!",
        },
      ],
    };
    return (
      <div className="container-fluid services">
        <Title title="Services" />
        <div className="row">
          {service.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Services
