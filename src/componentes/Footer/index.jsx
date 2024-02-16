import { styled } from "styled-components";

const FooterEstilizado = styled.footer`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 30px;
    justify-content: space-between;
    background-color: #04244F;
    margin-top: 76px;
    div {
        display: flex;
        align-items: center;
        h4 {
            margin: 0;
            padding: 0;
            color: white;
            font-size: 16px;
        }
    }
`

const SectionEstilizada = styled.section`
    display: flex;
    gap: 35px;
`

const Footer = () => {
    return(
        <FooterEstilizado>
            <SectionEstilizada>
                <img src="/icones/facebook.png" alt="" />
                <img src="/icones/instagram.png" alt="" />
                <img src="/icones/twitter.png" alt="" />
            </SectionEstilizada>
            <div>
                <h4>Desenvolvido por Alura</h4>
            </div>
        </FooterEstilizado>
    )
}

export default Footer