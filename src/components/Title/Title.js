import React,{useState,useRef, useEffect} from 'react'
import TitleStyle from './Title.module.css'
import SplitText from '../SplitText/SplitText';
import Sphere from './Sphere';
import './fed.css'
import PersonalInfoStarred from '../PersonalInfo/PersonalInfoStarred';

let scrollStyle = {
}

const Title = () => {
    const section = useRef()
    const [scrollY, setScrollY] = useState(window.scrollY)
    
    const handleScroll = () => {
        setScrollY(window.scrollY)
        scrollStyle = {
            clipPath : `circle(${scrollY}px at center)`
        }
        
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollY])
    
    return(
        <div className={TitleStyle.Title}>
            <div className={TitleStyle.rotate}>
                <Sphere/>
                <Sphere/>
                <Sphere/>
                <Sphere/>
            </div>
            <SplitText/>
            <section
                className={TitleStyle.section}
                ref={section}
                style={scrollStyle}
            >
                <h3>
                    <div className={TitleStyle.center}>
                        <ul>
                            <li>F</li>
                            <li>R</li>
                            <li>O</li>
                            <li>N</li>
                            <li>T</li>
                            <li>E</li>
                            <li>N</li>
                            <li>D</li>
                            <li className={TitleStyle.space}></li>
                            <li>D</li>
                            <li>E</li>
                            <li>V</li>
                            <li>E</li>
                            <li>L</li>
                            <li>O</li>
                            <li>P</li>
                            <li>E</li>
                            <li>R</li>
                        </ul>
                    </div>
                </h3>
            </section>
            <div className={TitleStyle.containerJc}>
                <PersonalInfoStarred/>
            </div>
        </div>
    )
}
export default Title