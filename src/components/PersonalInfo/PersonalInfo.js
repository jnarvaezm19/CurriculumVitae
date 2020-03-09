import React, {useRef, useState, useEffect} from 'react'
import './PersonalInfo.css'

const PersonalInfo = () => {
    const [scrolldv, setScrolldv] = useState(window.scrollY)
    const scrollct = useRef()

    useEffect(() => {
        
        console.log(scrolldv)
        console.log(scrollct.current.offsetTop - scrollct.current.scrollTop)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    const handleScroll = () => {
        setScrolldv(window.scrollY)
    }
    return(
        <div className='principal'>
            <section>
                <div className='content'
                    
                >
                    <h2>Personal Info</h2>
                    <h3>Something Here</h3>
                    <p><b>Text 1:</b> Info 1</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
            <section>
                <div className='content'
                    
                >
                    <h2>Personal Info</h2>
                    <h3>Something Here</h3>
                    <p><b>Text 2:</b> Info 2</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
            <section>
                <div className='content'
                    ref={scrollct}
                >
                    <h2>Personal Info</h2>
                    <h3>Something Here</h3>
                    <p><b>Text 3:</b> Info 3</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
            <section>
                <div className='content'>
                    <h2>Personal Info</h2>
                    <h3>Something Here</h3>
                    <p><b>Text 4:</b> Info 4</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum.
                    </p>
                </div>
            </section>
        </div>
    )
}
export default PersonalInfo