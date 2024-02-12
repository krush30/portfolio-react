import React from 'react'
import { ANIME1, ANIME2, ANIME3, NET1, NET2, NET3, REST1, REST2, REST3 } from './img';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text_curl'>&#123;!&#125;</h1>
            <h1 className='text_about'>&lt; portfolio &gt;</h1>
            <p className='about_me_'>...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis ullamcorper arcu.</p>
            <div className='portfolio'>
                <div className='image-container'>
                    <img className='image' src={REST1} alt='rest1' />
                    <img className='image2' src={REST2} alt='rest1' />
                    <img className='image3' src={REST3} alt='rest1' /></div>

                <div className='img'>
                    <h2 className='img-data'>&#123;  Swiggy clone  &#125;</h2>
                    <p className='img-data2'> . . .ReactJS, Parcel, Redux, RestAPI</p>
                    <p className='img-data3'>//. . .Developed a web application using React, Parcel, Redux, and React
                        Router DOM, integrating Swiggy API for advanced DOM
                        manipulation. Employed React Tool Kit for efficient development,
                        showcasing skills in front-end technologies and API integration.</p>
                </div>
            </div>
            <div className='portfolio2'>
                <div className='image-container2'>
                    <img className='image' src={NET1} alt='rest1' />
                    <img className='image2' src={NET2} alt='rest1' />
                    <img className='image3' src={NET3} alt='rest1' /></div>

                <div className='img2'>
                    <h2 className='img-data1'>&#123;  NetflixGPT  &#125;</h2>
                    <p className='img-data2'> . . .React, Redux, RestAPI, HTML, CSS, Firebase, OpenAI</p>
                    <p className='img-data3'>//. . .Created a Netflix-inspired web app using React, Redux, and React
                        Router DOM. Integrated TMDB and OpenAI APIs to provide dynamic
                        movie descriptions and multi-language support. Leveraged React
                        Tool Kit for efficient development and seamless user navigation.
                        Demonstrated proficiency in front-end development and API
                        integration.
                    </p>
                </div>
            </div>
            <div className='portfolio2'>
                <div className='image-container2'>
                    <img className='image' src={ANIME1} alt='rest1' />
                    <img className='image2' src={ANIME2} alt='rest1' />
                    <img className='image3' src={ANIME3} alt='rest1' /></div>

                <div className='img2'>
                    <h2 className='img-data1'>&#123; Anime for Weebs  &#125;</h2>
                    <p className='img-data2'> . . .HTML, CSS, Vanilla Javascript</p>
                    <p className='img-data3'>//. . .Designed and implemented an anime booking website using HTML,
                        CSS, and JavaScript. Provided users with detailed information about
                        various anime shows, demonstrating proficiency in front-end
                        development and UI design.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;
