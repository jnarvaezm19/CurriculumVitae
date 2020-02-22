import React from 'react'
import StyleSplitText from './SplitText.module.css'
import './SplitText.module.css'
const SplitText = () => {

    return(
        <div className={StyleSplitText.contenedor}>
            <h2 className={StyleSplitText.h2}>
                You're Watching My Cv
                <span>You're Watching My Cv</span>
                <span>You're Watching My Cv</span>
                <span>Scroll to start 😉</span>
            </h2>
        </div>
    )
}
export default SplitText