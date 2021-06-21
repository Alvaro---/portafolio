import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

const Services = () => {
    const lang = useContext(LangContext)
    return (
        <Container className="aboutDescription">
            <h2>
                <FormattedMessage id="servicesTitle" defaultMessage="Servicios" />
            </h2>
            <p>
                <FormattedMessage id="servicesParagraph" defaultMessage="Servicios" />
            </p>

        </Container>
    )
}

export default Services
