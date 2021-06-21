import React, { useContext, useState, useEffect } from "react";
import Typed from "react-typed";
import { LangContext } from '../context/LangContext'
import { FormattedMessage, useIntl } from 'react-intl'

import Particles from "react-particles-js";

const Header = () => {
    const lang = useContext(LangContext)

    return (

        <div className="header-wrapper">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900

                            }
                        },
                        shape: {
                            type: "Square",
                        }
                    }
                }}
            />
            <div className="main-info">
                <h1><FormattedMessage id="title" defaultMessage="Home" /></h1>
                <Typed
                    className="typed-text"
                    strings={
                        ["Front-end Developer", "Back-end Developer", "Full Stack MERN"]
                    }
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
                <a href="#" className="btn-main-offer"><FormattedMessage id="contact" defaultMessage="contact" /></a>
            </div>
        </div>
    )
}

export default Header
