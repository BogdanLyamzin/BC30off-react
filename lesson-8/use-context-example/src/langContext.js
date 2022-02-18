import { createContext, useState } from "react";

export const langContext = createContext("ua");

const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("ua");
    const toggleLang = () => {
        setLang(prevLang => {
            const newLang = lang === "ru" ? "ua" : "ru";
            return newLang
        })
    };

    const value = {
        lang,
        toggleLang
    };

    return (
        <langContext.Provider value={value}>
            {children}
        </langContext.Provider>
    )
}

export default LangProvider;
