import React, { useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const lang = useContext(LangContext)
    return (
        <Container className="aboutDescription">
            <h2><FormattedMessage id="contantTitle" defaultMessage="Home" /></h2>
            <div className="Contacto">
                <div>
                    <FontAwesomeIcon icon={faPhone} /> 74084619
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} /> alvaroawake@gmail.com - alvaro.mercado.valle@gmail.com
                </div>
            </div>
        </Container>
    )
}

export default Contact
