import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = ({FiltrarPorNome}) => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto FiltrarPorNome={filter => FiltrarPorNome(filter)}/>
    </HeaderEstilizado>)
}

export default Cabecalho