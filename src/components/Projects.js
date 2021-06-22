import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

import { Card } from "react-bootstrap";

const Projects = () => {
    const lang = useContext(LangContext)
    return (
        <Container className="aboutDescription">
            <h2><FormattedMessage id="aboutProyectos" defaultMessage="Home" /></h2>
            <div>
                <Card>
                    <Card.Body>
                        Talent Cards
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                       Tienda en Linea
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Projects
