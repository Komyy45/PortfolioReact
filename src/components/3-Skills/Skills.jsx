import React, { useEffect, useRef, useState } from 'react'
import './skills.css'
import '/Protofolio/public/style.css'
import { motion } from 'framer-motion';
import skills from './skills';

const  Skills = () => {
    const screenWidth = window.innerWidth;


    return (
    <div className='skills'>
        <div className='head flex'>
            <p className='sub-title'>What about</p>
            <h2 className='title'>My Skills</h2>
        </div>

        <div className="skillsSet flex" style={{height: skills.length * 525}}>
            <div className="bar">
                {
                    skills.map((skill , index) => {
                        return(
                            <div key={index}  >
                                <div className={`skill flex ${skill.icon}`}  style={{top : -225 + ((index + 1) * 500)}}>
                                </div>
                                <motion.div className="card"  viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                whileInView={{opacity: 1 , left: (index + 1) & 1 || screenWidth < 900 ? 50 : -395}} 
                                style={{left :(index + 1) & 1 || screenWidth < 900 ? 250 : -595 , top: -255 + ((index + 1)* 500) , opacity: 0}}
                                >
                                    <h4 className='name'>{skill.skillName}</h4>
                                    <ul className='description flex' style={{listStyle: "initial"}}>
                                        {skill.description.map((feature , num) => {
                                            return <li key={num} className='item'>{feature}</li>
                                        })}
                                    </ul>
                                </motion.div>
                            </div>
                        )
                    })
                }
                    
            </div>
        </div>
    </div>
    )
}
export default Skills;