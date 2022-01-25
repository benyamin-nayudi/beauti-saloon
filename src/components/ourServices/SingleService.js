import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  console.log(service);
  return (
    <>
      <div className="services-section">
        <div className="single-service">
          <div className="single-service-desc">
            <h2>{service.title}</h2>
            <p>{service.body}</p>
          </div>
          <div className="single-hour-price">
            <span>{service.time}</span>
            <span>{service.price}</span>
          </div>
          <Link
            to="/book"
            className="single-service-btn"
            onClick={() => console.log(service._id)}
            state={service}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleService;
