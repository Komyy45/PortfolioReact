import React from 'react'
import './Hero.css'
import '/Protofolio/public/style.css'
import Lottie from 'lottie-react'
import laptop from '/Protofolio/public/animations/Animation - 1714774716669.json'

const Hero = () => {
    return (
        <div className='hero flex'>
            <div className="left">
                <h1>Software designer, founder,<br/> and amateur astronaut.</h1>
                    <p> 
                        I'm Youssef, a Computer science student passionate about software development. As a  
                        .NET Full Stack Developer, I thrive on crafting innovative solutions and pushing
                         the boundaries of technology. Let's create something extraordinary together.
                    </p>
                <ul className="links flex">
                    <li className='link'><a className='icon-x' href=""></a></li>
                    <li className='link'><a className='icon-instagram' href=""></a></li>
                    <li className='link'><a className='icon-github' href=""></a></li>
                    <li className='link'><a className='icon-linkedin-square' href=""></a></li>
                </ul>
            </div>
            <div className="right">
                <Lottie className='animation' style={{height: 355}} animationData={laptop}></Lottie>
            </div>
        </div>
    )
}

export default Hero