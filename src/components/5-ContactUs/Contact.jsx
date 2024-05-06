import React from 'react'
import '/Protofolio/public/style.css'
import './Contact.css'
import Lottie from 'lottie-react'
import email  from  '/Protofolio/public/animations/Animation - 1714775807539.json'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        contact me
      </h1>
      <p className='sub-title'>Contact me for more information and get notified when i publish something new.</p>
      <div className='contactSection flex'>
        <div className="left flex">
            <div className='flex'>
              <label htmlFor="email">Email address:</label>
              <input type="email" name='email' id='email' placeholder='Email Address'/>
            </div>
            <div className='flex'>
              <label htmlFor="message">Enter your message:</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
            </div>
            <button className='send'>submit</button>
        </div>
        <div className="right">
          <Lottie className='animation' style={{height: 355}} animationData={email}></Lottie>
        </div>
      </div>
    </div>
  )
}

export default Contact