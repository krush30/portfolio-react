import React, { useState } from 'react'

const Services = () => {
    const texts = "_web designer";
    const texts2 = "_reactjs developer";

    const [render, setRender] = useState(true);

    return (
        <div className='services'>
            <h1 className='text_curl'>&#123; # &#125;</h1>
            <h1 className='text_about'>&lt; services &gt;</h1>
            <h1 className='about_me_'>//. . .here are the services that I provide</h1>
            <div className=''>
                <div className='text-clip2'>
                    <h1 className='curlybraces'>&#123;"</h1>
                    {render && <h1 className='textclip1' id="changingText" onAnimationEnd={() => setRender(false)}>  {texts} </h1>}
                    <h1 className='curlybraces'>"&#125;</h1>
                </div>
                <div className='text-clip3'>
                    <h1 className='curlybraces'>&#123;"</h1>
                    <h1 className='textclip2' id="changingText">  {texts2} </h1>
                    <h1 className='curlybraces'>"&#125;</h1>
                </div>



            </div>
        </div>
    )
}

export default Services;
