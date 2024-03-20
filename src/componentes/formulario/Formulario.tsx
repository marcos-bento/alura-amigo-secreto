import React from "react";
import formularioStyle from "./Formulario.module.css";

const Formulario = () => {
    return (
        <form>
            <div className={formularioStyle.container}>
                <input className={formularioStyle.container__input} type="text" placeholder="Insira os nomes dos participantes" />
                <button className={formularioStyle.container__botao} disabled={true}>Adicionar</button>
            </div>
        </form>
    )
};

export default Formulario;