import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

const Projects = () => {
    const lang = useContext(LangContext)
    return (
        <Container className="aboutDescription">
            <h2><FormattedMessage id="aboutProyectos" defaultMessage="Home" /></h2>
            <div className="about">
                <FormattedMessage id="aboutText" defaultMessage="Home" />
            </div>
        </Container>
    )
}

export default Projects
