import React, { createContext, useState, useEffect } from 'react'
import Ingles from '../lang/en-US.json'
import Espanol from '../lang/es-BOL.json'
import { IntlProvider } from 'react-intl'

const LangContext = createContext()

const LangProvider = ({ children }) => {

    let localeDefault;
    let messageDefault;
    const lang = localStorage.getItem('lang');

    if (lang) {
        localeDefault = lang
        if (lang === 'es-MX') {
            messageDefault = Espanol;
        } else if (lang === 'en-US') {
            messageDefault = Ingles;
        } else {
            messageDefault = Ingles;
            localeDefault = 'en-US'
        }
    }


    const [locale, setLocale] = useState(localeDefault);
    const [messages, setMessages] = useState(messageDefault);

    const establecerLenguaje = (lenguaje) => {
        switch (lenguaje) {
            case 'en-US':
                setMessages(Ingles);
                setLocale("en-US");
                localStorage.setItem('lang', 'en-US')
                break;
            case 'es-MX':
                setMessages(Espanol);
                setLocale("es-MX");
                localStorage.setItem('lang', 'es-MX')
                break;
            default:
                setMessages(Ingles);
                setLocale("en-US");
                localStorage.setItem('lang', 'en-US')
                break;
        }
    }

    useEffect(() => {
        console.log(messages)
    })

    const state = {
        establecerLenguaje: establecerLenguaje
        //locale: [locale, setLocale],
        //message: [messages, setMessages]
    }


    return (
        <LangContext.Provider value={state}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LangContext.Provider>
    );
}
export { LangContext, LangProvider }