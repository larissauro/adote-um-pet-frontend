import {
    CabecalhoContainer,
    Logo
} from './Cabeçalho.style';

export default function Cabecalho() {
    return (
        <CabecalhoContainer>
            <Logo src="/imagens/logo.svg" alt="Adote um Pet" />
        </CabecalhoContainer>
    )
}