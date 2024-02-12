import React, { useEffect, useState } from 'react';


const Body = () => {
    const texts = ["_Web designer", "_Reactjs Developer"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const changingText = document.getElementById("changingText");

        const changeText = () => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }

        changingText.addEventListener("animationiteration", changeText);


        return () => {
            changingText.removeEventListener("animationiteration", changeText);
        };

    }, [texts.length]);
    return (
        <div className='body'>
            <h3 className='nun'>// Hi, I am Krushna</h3>
            <div className='text_clipping'>
                <h1 className='curlybraces'>&#123;"</h1>
                <h1 className='textclip' id="changingText">  {texts[currentTextIndex]} </h1>
                <h1 className='curlybraces'>"&#125;</h1>
            </div>
            <div>
                <h1 className='arrow'>||</h1>
                <h1 className='arrowhead'>&#8964;</h1>
            </div>
            <img className='bg-img' src='https://wallpapercave.com/wp/wp1879942.png' />

        </div>
    )
}

export default Body;
