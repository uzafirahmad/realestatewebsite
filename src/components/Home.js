import React from 'react'
import './Home.css'
import background from '../assets/background.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import waves from '../assets/waves.svg';
import { AiFillHome } from 'react-icons/ai';

const Home = () => {
    return (
        <div>
            <div id="navbar">
                <AiFillHome id="home_icon" />
                <span className='navbar_spans'>Contact</span>
                <span className='navbar_spans'>Browse</span>
                <span className='navbar_spans'>Home</span>
                <span className='navbar_spans'>Sell</span>
            </div>
            <div id="background_container">
                <img id="background_image" src={background} />
            </div>
            <div id="lower_body">
                <div id="lower_body_center">
                    <div id="lower_body_text_cards">
                        <div className='lower_body_card_containers'>
                            <div className='card_title'>Balcony</div>
                            <div className='card_text'>Experience the allure of picturesque balcony views that transform houses into homes. Find your perfect view with us today.</div>
                            <button className='card_button'>View</button>
                        </div>
                        <div className='lower_body_card_containers'>
                            <div className='card_title'>Pool</div>
                            <div className='card_text'>Dive into luxury living with our stunning swimming pools. Relax, refresh, and unwind in style at our exquisite properties.</div>
                            <button className='card_button'>View</button>
                        </div>
                        <div className='lower_body_card_containers'>
                            <div className='card_title'>Gym</div>
                            <div className='card_text'>Elevate your lifestyle with our state-of-the-art indoor gyms. Achieve your fitness goals while enjoying the convenience of home. Your wellness journey starts here.</div>
                            <button className='card_button'>View</button>
                        </div>
                        <div className='lower_body_card_containers'>
                            <div className='card_title'>Interior</div>
                            <div className='card_text'>Discover homes adorned with outclass interiors, where every room is a masterpiece of design, elegance, and comfort. Luxury living awaits.</div>
                            <button className='card_button'>View</button>
                        </div>
                    </div>
                    <div id="lower_body_image_cards">

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic1} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic2} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic3} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic4} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic5} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic6} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic7} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>

                        <div className='image_container'>
                            <div className='image_content'>
                                <img className='images' src={pic8} alt='Image 1' />
                                <div className='browse_text'>Browse</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img id="waves" draggable="false" src={waves} />
            </div>
        </div>
    )
}

export default Home
