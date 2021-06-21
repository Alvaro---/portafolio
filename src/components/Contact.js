import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

const Contact = () => {
    const lang = useContext(LangContext)
    return (
        <Container className="aboutDescription">
            <h2><FormattedMessage id="contantTitle" defaultMessage="Home" /></h2>
            <div className="about">
                <FormattedMessage id="contactText" defaultMessage="Home" />
            </div>
        </Container>
    )
}

export default Contact
