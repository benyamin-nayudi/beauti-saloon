import { useState } from "react";

const FormInputs = () => {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')

    const [tel , setTel] = useState('')
    const [message , messageHandler] = useState('')
    
    return ( 
        <>
            <div className="form-inputs">
                <label htmlFor="fname">Name *</label>
                <input 
                    onChange={(e)=>setName(e.target.value)} 
                    value={name} 
                    name="fname" 
                    type="text" 
                    id="fname"
                    required 
                />

                <label htmlFor="email">Email *</label>
                <input 
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email} 
                    name="email" 
                    type="email" 
                    id="email" 
                    required 
                />

                <label htmlFor="phone">Phone Number</label>
                <input 
                    name="tel" 
                    type="tel" 
                    id="phone" 
                    value={tel}
                    onChange={(e)=>setTel(e.target.value)}
                />

                <label htmlFor="message">Add your message</label>
                <textarea  
                name="message" 
                id="message"
                value={message}
                onChange={(e)=>messageHandler(e.target.value)}
                >

                </textarea>

                <p className="required">* required info</p>
            </div>
        </>
     );
}
 

export default FormInputs;