import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1 className='text_curl'>&#123; @ &#125;</h1>
            <h1 className='text_about'>&lt; contact me &gt;</h1>
            <div class="container">
                <div class="row">

                    <div class="contact-right">
                        <form>
                            <input className='input' type="text" name="Name" placeholder="_name*" required />
                            <input
                                className='input'
                                type="email"
                                name="email"
                                placeholder="_email*"
                                required
                            />
                            <textarea
                                className='input'
                                name="Message"
                                rows="6"
                                placeholder="_message*"
                            ></textarea>
                            <div className='button-bap'><button type="submit" className='button'>&#123; Submit &#125;</button></div>

                        </form>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <p>Made with <i class="fa-solid fa-heart"></i> by Krushna</p>
            </div>
        </div>

    )
}

export default Contact;
