import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

import style from './Rodape.module.css'
import { useSorteador } from "../../state/hook/useSorteador";

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()
    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (<footer className={style.rodape_configuracoes}>
        <button className={style.botao} disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>)
}

export default Rodape