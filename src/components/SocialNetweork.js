import React from 'react'

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const SocialNetweork = () => {
    return (
        <div className="aboutDescription">
            <h2>Social Media</h2>
            <div className="iconosSociales">
                <p>
                    <a href="https://www.facebook.com/alvaro.mercado.520/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    -
                    <a href="www.linkedin.com/in/alvaro-mercado-5a494193">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    -
                    <a href="https://wa.link/t5gyv7">
                        <FontAwesomeIcon icon={faWhatsapp} /> </a>
                </p>
            </div>
        </div>
    )
}

export default SocialNetweork
