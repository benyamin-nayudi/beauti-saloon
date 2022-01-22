import { useState } from "react";
import { Link , useLocation, useNavigate } from "react-router-dom";
import Coupon from "../Coupon";
import "./InfoMobileAddInformation.css"

const InfoMobileAddInformation = () => {
    const info = useLocation()
    console.log(info.state)

    const navigate = useNavigate()

    
const [openCoupon , setOpenCoupon] = useState(false)
    const toggleCoupon =(e)=>{
        e.preventDefault();
        setOpenCoupon(!openCoupon)
    }

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')

    const [tel , setTel] = useState('')
    const [message , messageHandler] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return ( 
        <section className="info-mobile-add-information">
                <button onClick={ ()=> navigate(-1) } className="info-back-btn">  &lt; Back</button>
             <div className="add-info-wrapper">
                <form onSubmit={(e)=>handleSubmit(e)} className="info-mobile-form-inputs">

                    <input 
                        placeholder="Name *"
                        onChange={(e)=>setName(e.target.value)} 
                        value={name} 
                        name="fname" 
                        type="text" 
                        id="fname"
                        required 
                    />
                   <input 
                        placeholder="Email *"
                        onChange={(e)=>setEmail(e.target.value)} 
                        value={email} 
                        name="email" 
                        type="email" 
                        id="email" 
                        required 
                    />
                    <input 
                        placeholder="Phone Number"
                        name="tel" 
                        type="tel" 
                        id="phone" 
                        value={tel}
                        onChange={(e)=>setTel(e.target.value)}
                    />
                    <textarea  
                        placeholder="Add your Message"
                        name="message" 
                        id="message"
                        value={message}
                        onChange={(e)=>messageHandler(e.target.value)}
                        >
                    </textarea>
                    
                    <Coupon toggleCoupon={toggleCoupon} openCoupon={openCoupon}  />
                    
                    <button className="info-submit">
                        <Link to="/finish" state={info.state}>Book It</Link>
                    </button>


                   

                </form>
             </div>
        </section>
     );
}
 
export default InfoMobileAddInformation;