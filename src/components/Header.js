import React, { useContext, useState, useEffect } from "react";
import Typed from "react-typed";
import { LangContext } from '../context/LangContext'
import { FormattedMessage, useIntl } from 'react-intl'

const Header = () => {
    const lang = useContext(LangContext)

    return (

        <div className="header-wrapper">
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
                <a href="#" className="btn-main-offer">Contacto</a>
            </div>
        </div>
    )
}

export default Header
