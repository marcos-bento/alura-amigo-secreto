import { useState } from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio";
import style from'./Sorteio.module.css';
import Card from "../componentes/card/Card";

const Sorteio = () =>{

    const participantes = useListaDeParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    const resultado = useResultadoDoSorteio()
    const sortear = (evento: React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault();
        if (resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    };

    return (<Card>
        <section className={style.sorteio}>
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required
                    name="participanteDavez"
                    id="participanteDavez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione seu nome</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button className={style.botao_sortear}>Sortear</button>
            </form>
            {amigoSecreto && <p className={style.resultado} role="alert">{amigoSecreto}</p>}
            <footer className={style.sorteio}>
                <img src="/imagens/aviao.png" className={style.aviao} alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}

export default Sorteio