import React from 'react'
import StyleVideoBanner from './VideoBanner.module.css'

const srcVideo = "https://res.cloudinary.com/dtfdylnjz/video/upload/v1582338283/Photos/videos/Plexus_-_27669_1_tuwsfd.mp4"
const VideoBanner = () => {
    
    return(
        <div className={StyleVideoBanner.banner}>
            <video
                className={StyleVideoBanner.video}
                loop
                autoPlay
                muted
            >
                <source src={srcVideo} type="video/mp4"/>
                Nombre compa
            </video>
            <h2
                className={StyleVideoBanner.h2Banner}
            >
                Jonathan C Narvaez M
            </h2>
        </div>
    )
}
export default VideoBanner