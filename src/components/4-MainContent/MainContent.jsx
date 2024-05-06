import React, { useState } from 'react'
import './MainContent.css'
import {motion , AnimatePresence} from 'framer-motion'
import myProjects from './projects'


const MainContent = () => {
    const [filter , setFilter] = useState("all");
    const HandleFiltering = (val) => {
        setFilter(val);
    }

    return (
        <div className='mainContent flex'>
            <div className="buttons flex">
                <button value={"all"} onClick={(e) => HandleFiltering(e.target.value)} className={`option ${ filter === "all" ? "active" : ""} `}>all projects</button>
                <button value={"HTML"} onClick={(e) => HandleFiltering(e.target.value)} className={`option ${ filter === "HTML" ? "active" : ""} `}>HTML & CSS</button>
                <button value={"JavaScript"} onClick={(e) => HandleFiltering(e.target.value)} className={`option ${ filter === "JavaScript" ? "active" : ""} `}>JavaScript</button>
                <button value={"React"} onClick={(e) => HandleFiltering(e.target.value)} className={`option ${ filter === "React" ? "active" : ""} `}>React & MUI</button>
                <button value={"C#"} onClick={(e) => HandleFiltering(e.target.value)} className={`option ${ filter === "C#" ? "active" : ""} `}>C# & .NET</button>
            </div>
            <div className="projects flex">
                <AnimatePresence>
                {
                    myProjects.map((e , i) => {
                        if(e.category === filter || filter == "all"){
                            return(
                                <motion.article 
                                layout 
                                initial={{transform : "scale(0)" }}
                                animate={{transform : "scale(1)"}}
                                transition={{duration : 0.5}}
                                
                                className="card" key={i} style={{animation: `animateCard 0.6s ${0.5 + (i * .1)}s forwards`}}>
                                <img src={e.image} alt="project-image"/>
                                <div className="body">
                                    <h3 className='name'>
                                        {e.title}
                                    </h3>
                                    <p className="description">
                                    { e.description }
                                    </p>
                                    <div className="ref flex">
                                        <div className="left flex">
                                            <a className='icon-link' href={e.hosting}></a>
                                            <a className='icon-github' href={e.github}></a>
                                        </div>
                                        <div className="right flex">
                                            more
                                            <a className='icon-arrow-right2' href={e.github}></a>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                            )
                        }
                        else return null;
                        
                    })
                }

                </AnimatePresence>
            </div>
        </div>
    )
}

export default MainContent