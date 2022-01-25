import { useRef } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Coupon from "../Coupon";
import FormInputs from "../FormInputs";
import "./Info.css";


const InfoDesktop = () => {

    const [openCoupon , setOpenCoupon] = useState(false)
    const toggleCoupon =(e)=>{
        e.preventDefault();
        setOpenCoupon(!openCoupon)
    }

    const navigate = useNavigate()
    const info = useLocation()

    const form = useRef()
    const formHandler =(e)=>{
        e.preventDefault()
        
        // return false
    }
    
  

    const {orderDay  , orderMonth, orderHour , orderYear , price , time , title} = info.state

    return ( 
        <section className="info-container">
            <div className="info-wrapper">
                <div className="info">
                    <button onClick={ () => navigate(-1)} className="info-back-btn"> &lt; Back </button>


                    <div className="info-content">
                        <h2 className="info-title">add your info</h2>
                        <p className="info-subtitle">Tell us a bit about yourself</p>

                        
                        <form onSubmit={(e) => formHandler(e)} ref={form} className="info-form">
                        <FormInputs />

                            {
                                info.state &&
                                
                                <div className="info-floating-box">
                                    <h3 className="floating-title">{title}</h3>
                                    <p className="info-price-hour">{time} | {price}</p>
                                    <hr />
                                    <p className="info-time">{orderMonth} {orderDay},{orderYear} {orderHour}</p>
                                    <hr />
                                    
                                    <Coupon toggleCoupon={toggleCoupon}  openCoupon={openCoupon}/>


                                    <button className="submit" >
                                        <Link to="/finish" onClick={() => console.log('form')} state={info.state}>book it </Link>
                                    </button>

                                    
                                </div>
                            }
                        </form>
                        
                    </div>


                </div>
               
            </div>
        </section>
     );
}
 
export default InfoDesktop;