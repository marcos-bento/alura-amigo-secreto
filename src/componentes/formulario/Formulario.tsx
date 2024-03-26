import React, { useRef, useState } from "react";
import formularioStyle from "./Formulario.module.css";
import { useAdicionarParticipante } from "../../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro";

const Formulario = () => {
    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    
    const adicionarNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionarNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className={formularioStyle.container}>
                <input 
                    className={formularioStyle.container__input} 
                    value={nome} 
                    onChange={evento => setNome(evento.target.value)} 
                    type="text" 
                    placeholder="Insira os nomes dos participantes"
                    ref={inputRef} />
                <button className={formularioStyle.container__botao} disabled={!nome}>Adicionar</button>
                {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
            </div>
        </form>
    )
};

export default Formulario;