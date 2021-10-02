import React, { createContext, useState, useContext, useEffect } from 'react';
import {getIcons} from '../api'

export const StateContext = createContext();
export const StateSpeckContext = ({ children }) => {
    const [icons, setIcons] = useState([]);
    const [metadata, setMetadata] = useState([]);
    async function getSpeck() {
        const { url, options } = getIcons();
        const response = await fetch(url, options);
        const json = await response.json();
        setIcons(json.icons)
        setMetadata(json.preferences.fontPref.metadata)
        /* console.log(json.preferences.fontPref.metadata)
        console.log(json.icons) */
    }

    useEffect(() => {
        getSpeck() 
    }, [])

    return (
        <StateContext.Provider
            value={{ icons,metadata }}>
            {children}
        </StateContext.Provider>
    );
};

export const useSpeckContext = () => useContext(StateContext);
