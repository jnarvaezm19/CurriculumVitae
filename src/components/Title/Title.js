import React,{useState,useRef, useEffect} from 'react'
import TitleStyle from './Title.module.css'
import VideoBanner from '../Video/VideoBanner'

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
            <h2 className={TitleStyle.h2Title}>
                You're Already Watch My Cv
            </h2>
            <p className={TitleStyle.h2Title}>
                Scroll to start ;)
            </p>
            <section
                className={TitleStyle.section}
                ref={section}
                style={scrollStyle}
            >
            </section>
            <div className={TitleStyle.containerJc}>
                
            </div>
        </div>
    )
}
export default Title