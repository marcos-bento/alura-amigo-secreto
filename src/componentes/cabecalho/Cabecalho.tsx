import React from "react";
import style from "./Cabecalho.module.css"

const Cabecalho = () =>{
    return(
        <div className={style.container}>
            <div className={style.container__logo} role="img" aria-label='Logo do Sorteador'></div>
            <img className={style.container__participante} src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </div>
    )
}

export default Cabecalho;