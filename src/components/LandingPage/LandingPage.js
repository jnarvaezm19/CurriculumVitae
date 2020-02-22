import React from 'react'
import  './LandingPage.css'

const LandingPage = () => {

    return(
        <div className="open">
            <div className="layer"></div>
            <div className="layer"></div>
            <section id="scBanner">
                <div className="bannerText">
                    <h2>Jonathan C. Narvaez M.</h2>
                    <h3>Curriculum vitae</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an 
                        unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. 
                        It has survived not only five centuries, 
                        but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release 
                        of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <img 
                    className="bulb"
                    src="https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_960_720.png" 
                />
            </section>
        </div>
    )
}
export default LandingPage