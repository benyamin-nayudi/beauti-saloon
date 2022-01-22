import "./InfoMobileReview.css";
import {Link,  useLocation, useNavigate } from 'react-router-dom'


const InfoMobileReview = () => {

    const navigate = useNavigate()

    // get the data from calendar component
    const info = useLocation()
    const {orderDay  , orderMonth, orderHour , orderYear , price , time , title} = info.state


    return ( 
        <section className="info-mobile-container">
            <div className="info-mobile-wrapper">
                <div className="info-mobile-content">
                    <button onClick={ ()=> navigate(-1) } className="info-back-btn">  &lt; Back</button>
                    <h1 className="info-mobile-title">Review Your Booking</h1>
                    <div className="indent">
                        <h2 className="info-mobile-service">{title}</h2>
                        <p className="info-mobile-price-hour">{time} | {price}</p>
                        <p className="info-mobile-time">{orderMonth} {orderDay}, {orderYear} {orderHour}</p>
                        <p className="time-desc">All times are displayed in GMT +02:00</p>
                        <Link to="/info" state={info.state} className="info-mobile-link">Next</Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

 
export default InfoMobileReview;