import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'
import foto from '../cv/foto.PNG'

const About = () => {
    const lang = useContext(LangContext)
    return (
        <Container className="aboutDescription">
            <h2><FormattedMessage id="aboutTitle" defaultMessage="Home" /></h2>
            <div className="about">
                <img src={foto} alt="" />
                <FormattedMessage id="description" defaultMessage="Home" />
            </div>
            <div>
                <a href='./cv/cv.pdf' download className="btn-main-offer"><FormattedMessage id="cvDownload" defaultMessage="Download CV" /></a>
            </div>
        </Container>
    )
}

export default About
