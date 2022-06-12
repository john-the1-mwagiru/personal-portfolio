import { useState } from "react"
import Validation from "./Validation";
import emailjs from '@emailjs/browser';

import { useRef } from "react";

const Contacts = () => {
  const[firstname,setFirstName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const [errors,setErrors]=useState({})
  
  
    
  const form = useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
     
    
   
    

    emailjs.sendForm('service_qqgyrnp', 'template_oecsaxs', form.current, 'zBfaw944GFXVPzDZ6')
      .then((result) => {
          
        console.log(result.text); 
      }, (error) => {
          console.log(error.text);
      });
      setErrors(Validation(firstname,email,message));
      if(firstname&&message&&(/\S+@\S+\.\S+/.test(email))){
        alert("Message Sent")
      }
     setFirstName("");
     setEmail("");
     setMessage("");
  }
    
  return (
  
    <div className="contact">
      <div>
      <p className='p-1'>Get In Touch</p>

      </div>
      <div className='inputs'>
      <form  className="my-form"  ref={form} onSubmit={handleSubmit}> 
        <div><input type="text" name="firstname" placeholder='name'value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
        {errors.firstname&&<p className="errors"><strong>{errors.firstname}</strong></p>}
        </div>
        <div>
        <input type="email" name="email" placeholder='abc123@gmail.com'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        {errors.email&&<p className="errors"><strong>{errors.email}</strong></p>}
        </div>
        <div>
        <textarea type="text" name="message" placeholder='Type Something'value={message} onChange={(e)=>setMessage(e.target.value)}/>
        {errors.message&&<p className="errors"><strong>{errors.message}</strong></p>}
        </div>
        <div>
        <input type="submit" value="Send Message"  className='submit' />
        </div>
        
        </form>
         <div className="socials">
         <h6>FIND  ME ON SOCIAL MEDIA</h6>
           <a  className="git-link" href="https://github.com/john-the1-mwagiru" target="_blank" rel="noreferrer noopener">
           <img className="github-icon" src='./assets/github.jpeg' alt="github-icon" width="45px"/>
           </a>
           <a href="https://twitter.com/ngangamwagiru" target="_blank" rel="noreferrer noopener">
           <img className="twitter-icon" src='./assets/twitter.jpeg' alt="twitter-icon" width="45px"/>
           </a>
           <a href="https://www.instagram.com/j.mwagiru/?hl=en" target="_blank" rel="noreferrer noopener">
           <img className="instagram-icon" src='./assets/instagram.jpeg' alt="instagram-icon" width="45px"/>
           </a>
         </div>
         <h6>Copyright © 2022 Mwagiru</h6>
     </div> 
    </div>
  
  )
}

export default Contacts