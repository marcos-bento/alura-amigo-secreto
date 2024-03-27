import Card from "../componentes/card/Card";
import Formulario from "../componentes/formulario/Formulario";
import ListaParticipantes from "../componentes/listaParticipantes/ListaParticipantes";
import Rodape from "../componentes/rodape/Rodape";

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <ListaParticipantes />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao