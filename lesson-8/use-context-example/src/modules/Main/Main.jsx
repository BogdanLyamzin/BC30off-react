import { useContext } from "react";

import { langContext } from "../../langContext";

import local from "./locale.json";

const Main = ()=> {
    const {lang} = useContext(langContext)
    return (
        <div>
           {local.title[lang]}
        </div>
    )
}

export default Main;