import React, { useContext } from 'react'
import { Card, Container } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

import imageHtml from "../images/Services/htmlcss.png";
import imageJavaScript from "../images/Services/javascript.png";
import imageBootstrap from "../images/Services/bootstrap.png";
import imagePhp from "../images/Services/php.png";
import imageMongo from "../images/Services/mongodb.png";
import imageExpress from "../images/Services/express.png";
import imageReact from "../images/Services/react.png";
import imageNode from "../images/Services/node.png";
import imageJava from "../images/Services/java.jpg";
import imageMySql from "../images/Services/mysql.png";
import imageAndroid from "../images/Services/android.jpg";
import imageExpo from "../images/Services/expo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from '@fortawesome/free-brands-svg-icons'

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

            <div>
                <hr />
                <FormattedMessage id="Tools" defaultMessage="Tools" />
                <hr />
                <div className="tab">
                    <Card>
                        <Card.Header>
                            HTML - CSS
                        </Card.Header>
                        <Card.Body>
                            <img src={imageHtml} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            JavaScript
                        </Card.Header>
                        <Card.Body>
                            <img src={imageJavaScript} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Bootstrap
                        </Card.Header>
                        <Card.Body>
                            <img src={imageBootstrap} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            PHP
                        </Card.Header>
                        <Card.Body>
                            <img src={imagePhp} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            MongoDB
                        </Card.Header>
                        <Card.Body>
                            <img src={imageMongo} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Express JS
                        </Card.Header>
                        <Card.Body>
                            <img src={imageExpress} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            React
                        </Card.Header>
                        <Card.Body>
                            <img src={imageReact} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Node JS
                        </Card.Header>
                        <Card.Body>
                            <img src={imageNode} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Java
                        </Card.Header>
                        <Card.Body>
                            <img src={imageJava} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            MySQl
                        </Card.Header>
                        <Card.Body>
                            <img src={imageMySql} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            Android
                        </Card.Header>
                        <Card.Body>
                            <img src={imageAndroid} alt="html" />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            React Native - Expo
                        </Card.Header>
                        <Card.Body>
                            <img src={imageExpo} alt="html" />
                        </Card.Body>
                    </Card>


                </div>

            </div>

        </Container>
    )
}

export default Services


